<script setup>
import { ref } from 'vue'

const isZoomed = ref(false)
const toggleZoom = () => {
  isZoomed.value = !isZoomed.value
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-grid-margin pb-24">
    <section class="mb-xl">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-start">
        <div class="md:col-span-8">
          <p class="font-mono text-emerald-500 mb-4 text-sm font-medium tracking-widest uppercase">/ {{ $t('about.title') }}</p>
          <h1 class="font-display-lg text-display-lg text-on-background mb-8 max-w-3xl">
            <span v-html="$t('about.headline', { scalable: '<span class=\'text-emerald-500\'>' + $t('about.scalable') + '</span>' })"></span>
          </h1>
          <p class="font-body-base text-on-surface-variant max-w-2xl leading-relaxed mb-6">
            {{ $t('about.description') }}
          </p>
          <div class="flex gap-6 mt-10">
            <a href="/CV_iosuLazcano.pdf" download class="bg-primary text-on-primary font-bold px-8 py-3 rounded-none hover:opacity-90 transition-opacity flex items-center gap-2">
              {{ $t('about.download_cv') }} <span class="material-symbols-outlined text-sm">download</span>
            </a>
            <a href="#contact" class="border border-emerald-500 text-emerald-500 font-mono px-8 py-3 rounded-none hover:bg-emerald-500/5 transition-colors flex items-center justify-center">
              {{ $t('about.contact_me') }}
            </a>
          </div>
        </div>
        <div class="md:col-span-4 relative">
          <div @click="toggleZoom" class="aspect-square bg-zinc-900 border border-zinc-800 p-4 relative cursor-zoom-in group">
            <div class="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-emerald-500 z-10"></div>
            <div class="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-emerald-500 z-10"></div>
            <img alt="Location Map" class="w-full h-full object-cover grayscale brightness-75 contrast-125 group-hover:brightness-100 transition-all" src="/san_sebastian.png"/>
            <div class="absolute inset-0 bg-emerald-500/5 mix-blend-overlay"></div>
          </div>
          <div class="mt-6 flex flex-col gap-2 font-mono text-[12px] text-zinc-500 border-l border-zinc-800 pl-4">
            <div class="flex justify-between"><span>{{ $t('about.location') }}</span> <span class="text-on-background">Donostia, Gipuzkoa</span></div>
            <div class="flex justify-between"><span>{{ $t('about.languages') }}</span> <span class="text-emerald-500">EU, ES, EN (B2)</span></div>
            <div class="flex justify-between"><span>{{ $t('about.availability') }}</span> <span class="text-emerald-500">{{ $t('about.open_to_projects') }}</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Zoom Modal -->
    <div v-if="isZoomed" @click="toggleZoom" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-10 cursor-zoom-out">
      <div class="relative max-w-5xl w-full border border-emerald-500/30">
        <img alt="Location Map Full" class="w-full h-auto grayscale contrast-125" src="/san_sebastian.png"/>
        <div class="absolute top-4 right-4 text-emerald-500">
          <span class="material-symbols-outlined">close</span>
        </div>
      </div>
    </div>

    <!-- Tech Stack -->
    <section class="mb-xl">
      <p class="font-mono text-emerald-500 mb-8 text-sm font-medium tracking-widest uppercase">/ {{ $t('about.tech_stack') }}</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-surface-container-low border border-zinc-800 p-6 hover:border-emerald-500 transition-colors group">
          <div class="flex justify-between items-start mb-6">
            <span class="material-symbols-outlined text-emerald-500 text-3xl">php</span>
            <span class="font-mono text-[10px] text-zinc-600">01</span>
          </div>
          <h3 class="font-headline-md text-headline-md mb-2">// PHP / Symfony</h3>
          <p class="text-zinc-500 text-sm mb-6">Backend development with PHP 8+, Symfony, POO, MVC and REST APIs.</p>
          <div class="flex flex-wrap gap-2">
            <span class="bg-[#1A1A1A] px-3 py-1 text-[12px] font-label-tech text-zinc-300 flex items-center gap-2">SQL/DQL</span>
            <span class="bg-[#1A1A1A] px-3 py-1 text-[12px] font-label-tech text-zinc-300 flex items-center gap-2">API Platform</span>
          </div>
        </div>
        <div class="bg-surface-container-low border border-zinc-800 p-6 hover:border-emerald-500 transition-colors group">
          <div class="flex justify-between items-start mb-6">
            <span class="material-symbols-outlined text-emerald-500 text-3xl">terminal</span>
            <span class="font-mono text-[10px] text-zinc-600">02</span>
          </div>
          <h3 class="font-headline-md text-headline-md mb-2">// Vue.js</h3>
          <p class="text-zinc-500 text-sm mb-6">Modern frontend development with Vue 3, Pinia, and Vite.</p>
          <div class="flex flex-wrap gap-2">
            <span class="bg-[#1A1A1A] px-3 py-1 text-[12px] font-label-tech text-zinc-300 flex items-center gap-2">JavaScript ES6+</span>
            <span class="bg-[#1A1A1A] px-3 py-1 text-[12px] font-label-tech text-zinc-300 flex items-center gap-2">Tailwind</span>
          </div>
        </div>
        <div class="bg-surface-container-low border border-zinc-800 p-6 hover:border-emerald-500 transition-colors group">
          <div class="flex justify-between items-start mb-6">
            <span class="material-symbols-outlined text-emerald-500 text-3xl">desktop_windows</span>
            <span class="font-mono text-[10px] text-zinc-600">03</span>
          </div>
          <h3 class="font-headline-md text-headline-md mb-2">// Desktop</h3>
          <p class="text-zinc-500 text-sm mb-6">Cross-platform desktop applications development.</p>
          <div class="flex flex-wrap gap-2">
            <span class="bg-[#1A1A1A] px-3 py-1 text-[12px] font-label-tech text-zinc-300 flex items-center gap-2">Electron</span>
          </div>
        </div>
        <div class="bg-surface-container-low border border-zinc-800 p-6 hover:border-emerald-500 transition-colors group">
          <div class="flex justify-between items-start mb-6">
            <span class="material-symbols-outlined text-emerald-500 text-3xl">architecture</span>
            <span class="font-mono text-[10px] text-zinc-600">04</span>
          </div>
          <h3 class="font-headline-md text-headline-md mb-2">// DevOps</h3>
          <p class="text-zinc-500 text-sm mb-6">Deployment and automation pipelines.</p>
          <div class="flex flex-wrap gap-2">
            <span class="bg-[#1A1A1A] px-3 py-1 text-[12px] font-label-tech text-zinc-300 flex items-center gap-2">Docker</span>
            <span class="bg-[#1A1A1A] px-3 py-1 text-[12px] font-label-tech text-zinc-300 flex items-center gap-2">CI/CD</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="mb-xl">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <p class="font-mono text-emerald-500 mb-4 text-sm font-medium tracking-widest uppercase">/ {{ $t('about.journey_subtitle') }}</p>
          <h2 class="font-headline-md text-headline-md">{{ $t('about.journey') }}</h2>
        </div>
        <div class="font-mono text-zinc-500 text-[12px]">
          SELECT * FROM experience WHERE person = 'iosu_lazcano';
        </div>
      </div>
      <div class="relative border-l border-zinc-800 ml-4 pl-12 space-y-16">
        <div class="relative">
          <div class="absolute -left-[57px] top-0 w-4 h-4 bg-emerald-500 border-4 border-zinc-950"></div>
          <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h4 class="font-headline-md text-xl text-on-background">Senior Fullstack WebApp Developer @ BESA (Bernardo Ecenarro SA)</h4>
            <span class="font-mono text-emerald-500 text-sm">2024 — {{ $t('about.current') }}</span>
          </div>
          <p class="text-on-surface-variant leading-relaxed max-w-3xl">
            Desarrollo de aplicación de gestión para talleres de carrocería en empresa líder de pintura industrial. Liderando la implementación de nuevas funcionalidades con Symfony y Vue 3 bajo contenedores Docker.
          </p>
        </div>
        <div class="relative">
          <div class="absolute -left-[57px] top-0 w-4 h-4 bg-zinc-700 border-4 border-zinc-950"></div>
          <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h4 class="font-headline-md text-xl text-on-background">Fullstack Web Developer @ Sabbatic</h4>
            <span class="font-mono text-zinc-500 text-sm">2019 — 2024</span>
          </div>
          <p class="text-on-surface-variant leading-relaxed max-w-3xl">
            Digitalización de procesos internos. Migración de Drupal a arquitectura MVC moderna. Automatización de procesos administrativos y desarrollo de nuevos componentes front/back.
          </p>
        </div>
        <div class="relative">
          <div class="absolute -left-[57px] top-0 w-4 h-4 bg-zinc-700 border-4 border-zinc-950"></div>
          <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h4 class="font-headline-md text-xl text-on-background">Web Applications Developer @ Binovo</h4>
            <span class="font-mono text-zinc-500 text-sm">2018 — 2019</span>
          </div>
          <p class="text-on-surface-variant leading-relaxed max-w-3xl">
            Desarrollo y mantenimiento de aplicaciones web a medida para diversos clientes utilizando Symfony.
          </p>
        </div>
        <div class="relative">
          <div class="absolute -left-[57px] top-0 w-4 h-4 bg-zinc-700 border-4 border-zinc-950"></div>
          <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h4 class="font-headline-md text-xl text-on-background">Web Developer @ Electroprecio.com</h4>
            <span class="font-mono text-zinc-500 text-sm">2014 — 2018</span>
          </div>
          <p class="text-on-surface-variant leading-relaxed max-w-3xl">
            Personalización y mantenimiento del ecommerce líder en electrónica. Optimización de procesos de venta online y diseño de personalizaciones.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
