<template>
  <div class="container">
    <h2 class="w-fit mx-auto px-10 border-b border-slate-900">
      Onze diensten
    </h2>
    <div class="pt-8 grid gap-6 md:grid-cols-2 max-w-[900px] mx-auto">
      <div
        v-for="i in 6"
        :key="i"
        class="shadow border border-slate-900 rounded-lg p-6 space-y-2 relative bottom-0 hover:bottom-1 transition-all duration-300 ease-in-out"
        data-aos="fade-up"
        :data-aos-delay="i * 50"
      >
        <h3>
          Beton werken
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          malesuada, libero sed fermentum lacinia, nunc libero ultricies
          libero, nec dictum libero libero
        </p>
      </div>
    </div>
  </div>
</template>
