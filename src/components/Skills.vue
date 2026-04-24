<script setup>
const skillGroups = [
  {
    title: 'Backend',
    skills: ['PHP', 'Symfony', 'POO', 'MVC', 'API REST', 'SQL / DQL']
  },
  {
    title: 'Frontend',
    skills: ['Vue 3', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'jQuery', 'Dojo']
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'CI/CD', 'Jira', 'Electron']
  }
]
</script>

<template>
  <div class="container">
    <h2 class="section-title">Habilidades <span class="text-gradient">Técnicas</span></h2>
    <div class="skills-grid">
      <div v-for="group in skillGroups" :key="group.title" class="skill-group glass-card">
        <h3 class="group-title">{{ group.title }}</h3>
        <ul class="skill-list">
          <li v-for="skill in group.skills" :key="skill" class="skill-item">
            <svg class="check-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-title {
  font-size: 2.5rem;
  margin-bottom: 4rem;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.group-title {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--accent-color);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 1.1rem;
}

.check-icon {
  color: var(--accent-color);
}
</style>
