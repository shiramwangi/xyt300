<template>
  <div class="suggestions">
    <h1>Suggestions</h1>
    <div class="suggestions-list">
      <div v-for="suggestion in suggestions" :key="suggestion.id" class="suggestion-card">
        <div class="suggestion-header">
          <span class="type-tag" :class="suggestion.type">
            {{ suggestion.type }}
          </span>
          <span class="date">{{ formatDate(suggestion.createdAt) }}</span>
        </div>
        <p class="content">{{ suggestion.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Suggestion {
  id: string
  content: string
  type: string
  userId: string
  createdAt: string
}

const suggestions = ref<Suggestion[]>([])

const fetchSuggestions = async () => {
  try {
    const response = await axios.get('/api/suggestions')
    suggestions.value = response.data
  } catch (error) {
    console.error('Error fetching suggestions:', error)
  }
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

onMounted(fetchSuggestions)
</script>

<style scoped>
.suggestions {
  max-width: 1200px;
  margin: 0 auto;
}

.suggestions-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.suggestion-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.suggestion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.type-tag {
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
}

.type-tag.skill {
  background: #e1f0fa;
  color: #3498db;
}

.type-tag.project {
  background: #e8f5e9;
  color: #2ecc71;
}

.date {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.content {
  margin: 0;
  color: #2c3e50;
  line-height: 1.5;
}
</style> 