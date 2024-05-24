<template>
  <div class="max-h-[400px] overflow-hidden relative">
    <NuxtImg
      src="/hero.webp"
      alt="Hero image"
      sizes="sm:100vw"
      class="w-full h-[400px] object-cover grayscale"
    />
    <div class="absolute inset-0 bg-black/20">
      <div class="container flex flex-col gap-6 h-full justify-center text-white">
        <h1
          class="max-w-[500px]"
          data-aos="fade-right"
        >
          Voor al uw klussen, groot en klein!
        </h1>
        <p
          class="max-w-[400px] text-pretty"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          Bij Memico staan wij klaar voor al uw klus- en renovatiewerken. Of het nu gaat om kleine reparaties of grote verbouwingen, wij leveren altijd kwaliteit en betrouwbaarheid. Uw tevredenheid is onze prioriteit!
        </p>
      </div>
    </div>
  </div>
</template>
