<template>
  <div class="max-w-7xl mx-auto px-grid-margin">
    <!-- Hero Section -->
    <section class="py-l flex flex-col gap-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-primary font-mono text-[12px] w-fit">
        <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        {{ $t('hero.deployment_ready') }}
      </div>
      <h1 class="font-display-lg text-display-lg text-on-background max-w-4xl">
        <span v-html="$t('hero.greeting', { name: '<span class=\'text-primary\'>Iosu Lazcano</span>' })"></span> <br/>
        {{ $t('hero.subtitle') }}
      </h1>
      <p class="font-body-base text-body-base text-zinc-400 max-w-2xl">
        {{ $t('hero.description') }}
      </p>
      <div class="flex flex-wrap gap-4 mt-4">
        <a href="#projects" class="bg-secondary-container text-on-secondary-container px-8 py-3 font-display-lg text-lg rounded-none font-bold active:scale-[0.98] transition-transform text-center">
          {{ $t('hero.view_projects') }}
        </a>
        <a href="#contact" class="bg-transparent border border-primary text-primary px-8 py-3 font-display-lg text-lg rounded-none font-medium hover:bg-primary/5 active:scale-[0.98] transition-all text-center">
          {{ $t('hero.get_in_touch') }}
        </a>
      </div>
    </section>

    <!-- Technical Metadata Grid (Bento) -->
    <section class="py-xl">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
        <!-- Code Snippet Card -->
        <div class="md:col-span-8 bg-zinc-950 border border-zinc-800 p-0 overflow-hidden">
          <div class="bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex justify-between items-center">
            <span class="font-mono text-[12px] text-zinc-400">// SeniorDeveloper.php</span>
            <div class="flex gap-1.5">
              <div class="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
            </div>
          </div>
          <div class="p-6 font-code-snippet text-code-snippet">
            <pre class="text-emerald-400/80"><code><span class="text-zinc-600">01</span>  <span class="text-purple-400">namespace</span> App\Profile;
<span class="text-zinc-600">02</span>  
<span class="text-zinc-600">03</span>  <span class="text-blue-400">final class</span> <span class="text-yellow-400">IosuLazcano</span> 
<span class="text-zinc-600">04</span>  {
<span class="text-zinc-600">05</span>      <span class="text-blue-400">public function</span> <span class="text-yellow-400">getStack</span>(): array 
<span class="text-zinc-600">06</span>      {
<span class="text-zinc-600">07</span>          <span class="text-blue-400">return</span> [
<span class="text-zinc-600">08</span>              <span class="text-blue-400">'backend'</span>  => [<span class="text-emerald-400">'PHP 8.3'</span>, <span class="text-emerald-400">'Symfony'</span>, <span class="text-emerald-400">'SQL'</span>],
<span class="text-zinc-600">09</span>              <span class="text-blue-400">'frontend'</span> => [<span class="text-emerald-400">'Vue 3'</span>, <span class="text-emerald-400">'Tailwind'</span>, <span class="text-emerald-400">'JS'</span>],
<span class="text-zinc-600">10</span>              <span class="text-blue-400">'devops'</span>   => [<span class="text-emerald-400">'Docker'</span>, <span class="text-emerald-400">'Git'</span>, <span class="text-emerald-400">'CI/CD'</span>]
<span class="text-zinc-600">11</span>          ];
<span class="text-zinc-600">12</span>      }
<span class="text-zinc-600">13</span>  }</code></pre>
          </div>
        </div>
        <!-- Stats Card -->
        <div class="md:col-span-4 bg-zinc-950 border border-zinc-800 p-8 flex flex-col justify-between">
          <div>
            <div class="font-mono text-primary text-[12px] mb-4 uppercase tracking-widest">{{ $t('hero.metrics_title') }}</div>
            <div class="space-y-6">
              <div>
                <div class="text-4xl font-display-lg">10+</div>
                <div class="font-mono text-[10px] text-zinc-500 uppercase">{{ $t('hero.years_exp') }}</div>
              </div>
              <div>
                <div class="text-4xl font-display-lg">100%</div>
                <div class="font-mono text-[10px] text-zinc-500 uppercase">{{ $t('hero.commitment') }}</div>
              </div>
              <div>
                <div class="text-4xl font-display-lg text-secondary">Remote</div>
                <div class="font-mono text-[10px] text-zinc-500 uppercase">{{ $t('hero.location_label') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
