<template>
  <div class="projects">
    <h1>Projects</h1>

    <div class="filters">
      <input
        v-model="query"
        type="text"
        placeholder="Search by title or description..."
        class="input"
      />
      <div v-if="allTech.length" class="tech-filter">
        <button
          v-for="tech in allTech"
          :key="tech"
          @click="toggleTech(tech)"
          :class="['tag', selectedTech.includes(tech) ? 'active' : '']"
        >
          {{ tech }}
        </button>
      </div>
    </div>

    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <h3>{{ project.title }}</h3>
        <p class="description">{{ project.description }}</p>
        <div class="tech-stack">
          <span v-for="tech in project.techStack" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>
        <a :href="project.githubUrl" target="_blank" class="github-link"> View on GitHub </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import axios from 'axios';

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  userId: string;
}

const projects = ref<Project[]>([]);
const query = ref('');
const selectedTech = ref<string[]>([]);

const allTech = computed(() => {
  const set = new Set<string>();
  projects.value.forEach((p) => p.techStack.forEach((t) => set.add(t)));
  return Array.from(set).sort();
});

const fetchProjects = async () => {
  try {
    const params = new URLSearchParams();
    if (query.value.trim()) params.set('q', query.value.trim());
    if (selectedTech.value.length > 0) params.set('tech', selectedTech.value.join(','));
    const url = `/api/projects${params.toString() ? `?${params.toString()}` : ''}`;
    const response = await axios.get(url);
    projects.value = response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
};

const toggleTech = (tech: string) => {
  selectedTech.value = selectedTech.value.includes(tech)
    ? selectedTech.value.filter((t) => t !== tech)
    : [...selectedTech.value, tech];
};

onMounted(fetchProjects);
watch([query, selectedTech], fetchProjects, { deep: true });
</script>

<style scoped>
.projects {
  max-width: 1200px;
  margin: 0 auto;
}

.filters {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.input {
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
}

.tech-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  border: 1px solid #93c5fd;
  color: #2563eb;
  background: white;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.9rem;
}

.tag.active {
  background: #2563eb;
  color: white;
  border-color: #2563eb;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.project-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.project-card h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.2rem;
}

.description {
  margin: 1rem 0;
  color: #34495e;
  line-height: 1.5;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.tech-tag {
  background: #e1f0fa;
  color: #3498db;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9rem;
}

.github-link {
  display: inline-block;
  margin-top: 1rem;
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
}

.github-link:hover {
  text-decoration: underline;
}
</style>
