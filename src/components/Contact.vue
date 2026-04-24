<template>
  <div class="max-w-7xl mx-auto px-grid-margin pb-24">
    <section class="mb-xl">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
        <div class="md:col-span-8">
          <!-- Left Content: Availability & Intro -->
          <h1 class="font-display-lg text-display-lg text-on-background mb-md">
            <span v-html="$t('contact.headline', { architectural: '<span class=\'text-primary-container italic\'>' + $t('contact.architectural') + '</span>' })"></span>
          </h1>
          <p class="font-body-base text-on-surface-variant max-w-2xl leading-relaxed mb-6">
            {{ $t('contact.description') }}
          </p>
        </div>
        <!-- Technical Metadata Sidebar -->
        <div class="md:col-span-4 bg-surface-container-low border border-zinc-800 p-md space-y-md h-full">
          <div class="space-y-sm">
            <p class="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">// physical_location</p>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-emerald-500">location_on</span>
              <span class="font-mono text-sm">{{ $t('contact.location_label') }}</span>
            </div>
          </div>
          <div class="space-y-sm">
            <p class="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">// connect_nodes</p>
            <div class="flex flex-col gap-3">
              <a href="mailto:iosulazcano@gmail.com" class="flex items-center gap-3 text-zinc-300 hover:text-primary transition-colors">
                <span class="material-symbols-outlined text-emerald-500">mail</span>
                <span class="font-mono text-sm">iosulazcano@gmail.com</span>
              </a>
              <div class="flex items-center gap-3 text-zinc-300">
                <span class="material-symbols-outlined text-emerald-500">call</span>
                <span class="font-mono text-sm">695 700 466</span>
              </div>
            </div>
          </div>
          <div class="pt-base border-t border-zinc-800">
            <div class="rounded-lg overflow-hidden border border-zinc-800 h-40">
              <img alt="Location Map" class="w-full h-full object-cover opacity-50 grayscale" src="/san_sebastian.png"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hidden Contact Form (Commented out as per previous state) -->
    <!-- 
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-grid-gutter mt-24">
      <div class="lg:col-span-7">
        <div class="bg-surface-container-low border border-zinc-800 p-lg relative overflow-hidden">
          <div class="mb-lg">
            <h2 class="font-headline-md text-headline-md mb-xs">/{{ $t('contact.form_title') }}</h2>
            <div class="h-1 w-12 bg-primary"></div>
          </div>
          <form @submit.prevent class="space-y-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div class="space-y-xs">
                <label class="font-mono text-[12px] text-zinc-500 uppercase tracking-widest">{{ $t('contact.name_label') }}</label>
                <input class="w-full bg-transparent border-0 border-b border-zinc-800 focus:ring-0 focus:border-primary px-0 py-2 font-mono text-on-background placeholder:text-zinc-700 transition-all" :placeholder="$t('contact.name_label')" type="text"/>
              </div>
              <div class="space-y-xs">
                <label class="font-mono text-[12px] text-zinc-500 uppercase tracking-widest">{{ $t('contact.email_label') }}</label>
                <input class="w-full bg-transparent border-0 border-b border-zinc-800 focus:ring-0 focus:border-primary px-0 py-2 font-mono text-on-background placeholder:text-zinc-700 transition-all" placeholder="email@dominio.com" type="email"/>
              </div>
            </div>
            <div class="space-y-xs">
              <label class="font-mono text-[12px] text-zinc-500 uppercase tracking-widest">{{ $t('contact.message_label') }}</label>
              <textarea class="w-full bg-transparent border-0 border-b border-zinc-800 focus:ring-0 focus:border-primary px-0 py-2 font-mono text-on-background placeholder:text-zinc-700 transition-all resize-none" :placeholder="$t('contact.message_label')" rows="4"></textarea>
            </div>
            <div class="flex items-center justify-end pt-md">
              <button class="group flex items-center gap-3 bg-primary text-on-primary-fixed px-8 py-3 font-bold hover:bg-primary-container transition-all active:scale-[0.98]" type="submit">
                <span class="font-mono uppercase tracking-widest">{{ $t('contact.send_button') }}</span>
                <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    -->
  </div>
</template>
