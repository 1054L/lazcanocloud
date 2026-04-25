<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

const activeSection = ref('home')
const isSidebarOpen = ref(false)
const isAvatarZoomed = ref(false)
const observer = ref(null)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const toggleZoom = () => {
  isAvatarZoomed.value = !isAvatarZoomed.value
}

onMounted(() => {
  const options = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  }

  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, options)

  const sections = ['home', 'stack', 'projects', 'contact']
  sections.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.value.observe(el)
  })
})

onUnmounted(() => {
  if (observer.value) observer.value.disconnect()
})
</script>

<template>
  <div class="dark">
    <!-- Mobile Toggle Button -->
    <button @click="toggleSidebar" class="fixed top-6 right-6 z-50 lg:hidden p-3 bg-zinc-900 border border-zinc-800 text-emerald-500 rounded-none hover:bg-zinc-800 transition-all">
      <span class="material-symbols-outlined">{{ isSidebarOpen ? 'close' : 'menu' }}</span>
    </button>

    <!-- SideNavBar -->
    <aside :class="{ 'translate-x-0': isSidebarOpen, '-translate-x-full': !isSidebarOpen }" class="fixed left-0 top-0 h-screen w-72 z-40 flex flex-col bg-zinc-950 border-r border-zinc-800 transition-transform duration-300 lg:translate-x-0">
      <div class="px-8 py-10">
        <div class="text-xl font-black text-emerald-500 font-mono tracking-tighter uppercase mb-10">
          // iosu_lazcano
        </div>
        
        <div class="flex items-center gap-3 mb-8">
          <div @click="toggleZoom" class="w-12 h-12 bg-surface-container-high rounded-none overflow-hidden border border-zinc-700 cursor-zoom-in hover:border-emerald-500 transition-colors">
            <img alt="Iosu Lazcano Profile" class="w-full h-full object-cover grayscale" src="/cara.jpg"/>
          </div>
          <div>
            <div class="font-mono text-[12px] leading-relaxed font-bold text-on-background">iosu.lazcano</div>
            <div class="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">v2.8.0-stable</div>
          </div>
        </div>

        <!-- Integrated Language Switcher -->
        <div class="flex items-center gap-2 font-mono text-[10px] bg-zinc-900/50 px-3 py-2 border border-zinc-800 rounded-none mb-10 w-fit">
          <span class="text-emerald-500 font-black">&lt;</span>
          <div class="flex items-center gap-2">
            <button @click="$i18n.locale = 'eu'" :class="{ 'text-emerald-400 font-bold': $i18n.locale === 'eu', 'text-zinc-600': $i18n.locale !== 'eu' }" class="hover:text-emerald-400 transition-all cursor-pointer">EU</button>
            <span class="text-zinc-800">/</span>
            <button @click="$i18n.locale = 'es'" :class="{ 'text-emerald-400 font-bold': $i18n.locale === 'es', 'text-zinc-600': $i18n.locale !== 'es' }" class="hover:text-emerald-400 transition-all cursor-pointer">ES</button>
            <span class="text-zinc-800">/</span>
            <button @click="$i18n.locale = 'en'" :class="{ 'text-emerald-400 font-bold': $i18n.locale === 'en', 'text-zinc-600': $i18n.locale !== 'en' }" class="hover:text-emerald-400 transition-all cursor-pointer">EN</button>
          </div>
          <span class="text-emerald-500 font-black">&gt;</span>
        </div>
      </div>

      <nav class="flex flex-col flex-grow px-2">
        <a @click="isSidebarOpen = false" :class="{ 'bg-emerald-500/5 text-emerald-400 border-r-2 border-emerald-500': activeSection === 'home', 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50': activeSection !== 'home' }" class="px-6 py-4 flex items-center gap-4 font-mono text-[13px] cursor-terminal transition-all" href="#home">
          <span class="material-symbols-outlined text-[20px]">folder</span>
          {{ $t('nav.root') }}
        </a>
        <a @click="isSidebarOpen = false" :class="{ 'bg-emerald-500/5 text-emerald-400 border-r-2 border-emerald-500': activeSection === 'projects', 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50': activeSection !== 'projects' }" class="px-6 py-4 flex items-center gap-4 font-mono text-[13px] cursor-terminal transition-all" href="#projects">
          <span class="material-symbols-outlined text-[20px]">source</span>
          {{ $t('nav.src') }}
        </a>
        <a @click="isSidebarOpen = false" :class="{ 'bg-emerald-500/5 text-emerald-400 border-r-2 border-emerald-500': activeSection === 'stack', 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50': activeSection !== 'stack' }" class="px-6 py-4 flex items-center gap-4 font-mono text-[13px] cursor-terminal transition-all" href="#stack">
          <span class="material-symbols-outlined text-[20px]">settings</span>
          {{ $t('nav.config') }}
        </a>
        <a @click="isSidebarOpen = false" :class="{ 'bg-emerald-500/5 text-emerald-400 border-r-2 border-emerald-500': activeSection === 'contact', 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50': activeSection !== 'contact' }" class="px-6 py-4 flex items-center gap-4 font-mono text-[13px] cursor-terminal transition-all" href="#contact">
          <span class="material-symbols-outlined text-[20px]">list</span>
          {{ $t('nav.logs') }}
        </a>
      </nav>
    </aside>

    <!-- Overlay for mobile -->
    <div v-if="isSidebarOpen" @click="toggleSidebar" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden transition-all"></div>

    <!-- Main Content -->
    <main class="lg:ml-72 pt-20 min-h-screen bg-dot-grid overflow-x-hidden transition-all duration-300">
      <div id="home">
        <Hero />
      </div>
      <div id="stack">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <!-- Footer -->
      <footer class="w-full py-12 bg-zinc-950 border-t border-zinc-900 bg-dot-grid">
        <div class="max-w-7xl mx-auto px-grid-margin">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-center">
            <div class="md:col-span-8 flex flex-col md:flex-row justify-between items-center gap-8">
              <div class="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                © 2026.{{ $t('footer.compiled_by') }}
              </div>
              <div class="flex gap-8">
                <a class="font-mono text-[10px] uppercase tracking-widest text-zinc-600 hover:text-emerald-400 transition-colors" href="#">{{ $t('footer.documentation') }}</a>
                <a class="font-mono text-[10px] uppercase tracking-widest text-zinc-600 hover:text-emerald-400 transition-colors" href="#">{{ $t('footer.api_v1') }}</a>
                <a class="font-mono text-[10px] uppercase tracking-widest text-zinc-600 hover:text-emerald-400 transition-colors" href="#">{{ $t('footer.status') }}</a>
              </div>
            </div>
            <div class="md:col-span-4 flex justify-end">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span class="font-mono text-[10px] text-zinc-600 uppercase">{{ $t('footer.system_operational') }}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
    <!-- Avatar Zoom Modal -->
    <div v-if="isAvatarZoomed" @click="toggleZoom" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-10 cursor-zoom-out">
      <div class="relative max-w-2xl w-full aspect-square border border-emerald-500/30">
        <img alt="Iosu Lazcano Zoomed" class="w-full h-full object-cover grayscale shadow-2xl shadow-emerald-500/10" src="/cara.jpg"/>
        <div class="absolute top-4 right-4 text-emerald-500">
          <span class="material-symbols-outlined">close</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Scoped styles if needed, but using Tailwind mostly */
</style>
