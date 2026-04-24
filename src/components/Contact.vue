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
  </div>
</template>