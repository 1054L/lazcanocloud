<template>
  <div class="max-w-7xl mx-auto px-grid-margin py-lg">
    <!-- Header Section -->
    <div class="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h1 class="font-display-lg text-display-lg text-on-background mb-4">
          {{ $t('projects.title') }}
        </h1>
        <p class="font-body-base text-on-surface-variant max-w-2xl leading-relaxed mb-6">
          {{ $t('projects.description') }}
        </p>
      </div>
    </div>
    <!-- Portfolio Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-grid-gutter">
      <!-- Project 1: MusManager -->
      <a href="https://musmanager.com" target="_blank" class="lg:col-span-8 bg-zinc-900/50 border border-zinc-800 p-6 flex flex-col gap-6 hover:border-primary transition-colors group cursor-pointer block">
        <div class="flex items-center justify-between">
          <h2 class="font-code-snippet text-xl font-bold text-on-surface">
            // MusManager.com
          </h2>
          <span class="font-mono text-xs text-primary">{{ $t('projects.status_production') }}</span>
        </div>
        <div class="aspect-video overflow-hidden border border-zinc-800 bg-zinc-950 relative">
          <img alt="MusManager Interface" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="/img/musmanager-ss.png"/>
          <div class="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-zinc-400 font-mono text-xs uppercase tracking-widest mb-3">{{ $t('projects.challenge') }}</h3>
            <p class="font-body-base text-sm text-on-surface-variant leading-relaxed">
              Plataforma integral para la gestión de torneos de mus. Permite la creación de cuadros, seguimiento de resultados en tiempo real y administración de participantes.
            </p>
          </div>
          <div class="flex flex-col justify-between">
            <div>
              <h3 class="text-zinc-400 font-mono text-xs uppercase tracking-widest mb-3">{{ $t('projects.tech_stack') }}</h3>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-zinc-950 border border-zinc-800 text-primary font-label-tech text-[10px] uppercase">Symfony</span>
                <span class="px-2 py-1 bg-zinc-950 border border-zinc-800 text-primary font-label-tech text-[10px] uppercase">Vue 3</span>
                <span class="px-2 py-1 bg-zinc-950 border border-zinc-800 text-primary font-label-tech text-[10px] uppercase">Docker</span>
              </div>
            </div>
            <div class="mt-4 text-emerald-400 font-mono text-sm group-hover:translate-x-1 transition-transform flex items-center gap-2">
              {{ $t('projects.visit_site') }} <span class="material-symbols-outlined text-sm">open_in_new</span>
            </div>
          </div>
        </div>
      </a>

      <!-- Project 2: Bolatoki -->
      <a href="https://bolatoki.eus" target="_blank" class="lg:col-span-4 bg-zinc-900/50 border border-zinc-800 p-6 flex flex-col gap-4 hover:border-primary transition-colors group cursor-pointer block">
        <div class="flex items-center justify-between">
          <h2 class="font-code-snippet text-lg font-bold text-on-surface">
            // Bolatoki.eus
          </h2>
        </div>
        <div class="aspect-square overflow-hidden border border-zinc-800 bg-zinc-950 relative">
          <img alt="Bolatoki Interface" class="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity" src="/img/bolatoki-ss.jpeg"/>
          <div class="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
        </div>
        <div>
          <h3 class="text-zinc-400 font-mono text-xs uppercase tracking-widest mb-2">{{ $t('projects.challenge') }}</h3>
          <p class="font-body-base text-sm text-on-surface-variant leading-relaxed">
            Sistema de gestión para torneos de bolos tradicionales (bola jokoa). Desarrollado con una arquitectura moderna para la gestión deportiva local.
          </p>
        </div>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="px-2 py-1 bg-zinc-950 border border-zinc-800 text-primary font-label-tech text-[10px] uppercase">Symfony</span>
          <span class="px-2 py-1 bg-zinc-950 border border-zinc-800 text-primary font-label-tech text-[10px] uppercase">Vue 3</span>
          <span class="px-2 py-1 bg-zinc-950 border border-zinc-800 text-primary font-label-tech text-[10px] uppercase">WordPress</span>
        </div>
        <div class="text-emerald-400 font-mono text-sm mt-auto group-hover:translate-x-1 transition-transform flex items-center gap-2">
          {{ $t('projects.visit_site') }} <span class="material-symbols-outlined text-sm">open_in_new</span>
        </div>
      </a>
    </div>
  </div>
</template>
