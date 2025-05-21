<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="stats">
      <div class="stat-card">
        <h3>Skills</h3>
        <p>{{ skillsCount }}</p>
      </div>
      <div class="stat-card">
        <h3>Projects</h3>
        <p>{{ projectsCount }}</p>
      </div>
      <div class="stat-card">
        <h3>Suggestions</h3>
        <p>{{ suggestionsCount }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const skillsCount = ref(0)
const projectsCount = ref(0)
const suggestionsCount = ref(0)

const fetchCounts = async () => {
  try {
    const [skills, projects, suggestions] = await Promise.all([
      axios.get('/api/skills'),
      axios.get('/api/projects'),
      axios.get('/api/suggestions')
    ])
    
    skillsCount.value = skills.data.length
    projectsCount.value = projects.data.length
    suggestionsCount.value = suggestions.data.length
  } catch (error) {
    console.error('Error fetching counts:', error)
  }
}

onMounted(fetchCounts)
</script>

<style scoped>
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.stat-card h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.2rem;
}

.stat-card p {
  margin: 0.5rem 0 0;
  font-size: 2rem;
  font-weight: bold;
  color: #3498db;
}
</style> 