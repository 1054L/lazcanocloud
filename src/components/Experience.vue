<script setup>
const experiences = [
  {
    company: 'BESA — Bernardo Ecenarro SA',
    role: 'Senior Fullstack WebApp Developer',
    period: '2024 — Actualidad',
    description: 'Desarrollo de aplicación de gestión para talleres de carrocería en empresa líder de pintura industrial. Stack: Symfony, Vue 3, Docker.',
    tags: ['Symfony', 'Vue 3', 'Docker', 'REST API']
  },
  {
    company: 'Sabbatic',
    role: 'Fullstack Web Developer',
    period: '2019 — 2024',
    description: 'Digitalización de procesos internos. Migración de Drupal a arquitectura MVC moderna. Automatización de procesos administrativos.',
    tags: ['PHP', 'MVC', 'Drupal', 'Automation']
  },
  {
    company: 'Binovo',
    role: 'Web Applications Developer',
    period: '2018 — 2019',
    description: 'Desarrollo y mantenimiento de aplicaciones web a medida para diversos clientes utilizando Symfony.',
    tags: ['Symfony', 'Client Services']
  },
  {
    company: 'Electroprecio.com',
    role: 'Web Developer',
    period: '2014 — 2018',
    description: 'Personalización y mantenimiento del ecommerce líder en electrónica. Optimización de procesos de venta online.',
    tags: ['Ecommerce', 'JavaScript', 'SQL']
  }
]
</script>

<template>
  <div class="container">
    <h2 class="section-title">Trayectoria <span class="text-gradient">Profesional</span></h2>
    <div class="timeline">
      <div v-for="(exp, index) in experiences" :key="index" class="timeline-item glass-card">
        <div class="exp-header">
          <span class="period">{{ exp.period }}</span>
          <h3 class="role">{{ exp.role }}</h3>
          <h4 class="company">{{ exp.company }}</h4>
        </div>
        <p class="description">{{ exp.description }}</p>
        <div class="tags">
          <span v-for="tag in exp.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
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

.timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.timeline-item {
  position: relative;
}

.exp-header {
  margin-bottom: 1.5rem;
}

.period {
  display: block;
  font-size: 0.85rem;
  color: var(--accent-color);
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.role {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.company {
  font-size: 1.1rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.description {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tag {
  background: rgba(255, 255, 255, 0.03);
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  font-size: 0.75rem;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
}
</style>
