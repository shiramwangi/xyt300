<template>
  <div class="skills">
    <h1>Skills</h1>
    <div class="skills-grid">
      <div v-for="skill in skills" :key="skill.id" class="skill-card">
        <h3>{{ skill.name }}</h3>
        <div class="skill-details">
          <p class="level">Level: {{ skill.level }}/10</p>
          <p class="category">{{ skill.category }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Skill {
  id: string
  name: string
  level: number
  category: string
  userId: string
}

const skills = ref<Skill[]>([])

const fetchSkills = async () => {
  try {
    const response = await axios.get('/api/skills')
    skills.value = response.data
  } catch (error) {
    console.error('Error fetching skills:', error)
  }
}

onMounted(fetchSkills)
</script>

<style scoped>
.skills {
  max-width: 1200px;
  margin: 0 auto;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.skill-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.skill-card h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.2rem;
}

.skill-details {
  margin-top: 1rem;
}

.level {
  color: #3498db;
  font-weight: bold;
  margin: 0.5rem 0;
}

.category {
  color: #7f8c8d;
  margin: 0;
}
</style> 