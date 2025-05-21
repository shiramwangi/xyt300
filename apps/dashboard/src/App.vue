<template>
  <div class="app">
    <nav class="nav">
      <div class="nav-brand">Dashboard</div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/skills" class="nav-link">Skills</router-link>
        <router-link to="/projects" class="nav-link">Projects</router-link>
        <router-link to="/suggestions" class="nav-link">Suggestions</router-link>
      </div>
    </nav>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.nav {
  background-color: #2c3e50;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.nav-link:hover {
  background-color: #34495e;
}

.nav-link.router-link-active {
  background-color: #3498db;
}

.main {
  flex: 1;
  padding: 2rem;
  background-color: #f5f6fa;
}
</style> 