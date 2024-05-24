<template>
  <footer class="flex flex-col pt-14 pb-5 border-t border-slate-900">
    <div class="container grid md:grid-cols-3 gap-8 flex-wrap pb-8">
      <NuxtImg
        src="/logo.webp"
        alt="MEMICO"
        sizes="200px"
        class="sm:w-[200px]"
        data-aos="fade-right"
      />
      <div
        id="contact"
        class="flex-1 flex flex-col min-w-[150px]"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <p class="font-bold mb-3">
          Contact
        </p>
        <div class="flex flex-col">
          <span>
            Motstraat 20,
          </span>
          <span>
            3500 Hasselt
          </span>
          <a
            href="tel:+0472112720"
            class="text-slate-900 hover:text-slate-800 transition-colors duration-300 ease-in-out underline"
          >
            0472112720
          </a>
          <a
            href="mailto:jeremy@mees.com"
            class="text-slate-900 hover:text-slate-800 transition-colors duration-300 ease-in-out underline"
          >
            jeremy@mees.com
          </a>
        </div>
      </div>
      <div
        class="flex-1 flex flex-col min-w-[150px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p class="font-bold mb-3">
          Volg ons op
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            href="/"
            target="_blank"
            class="text-4xl text-slate-900 hover:text-slate-800 transition-colors duration-300 ease-in-out"
          >
            <Icon name="ri:instagram-fill" />
          </a>
          <a
            href="/"
            target="_blank"
            class="text-4xl text-slate-900 hover:text-slate-800 transition-colors duration-300 ease-in-out"
          >
            <Icon name="ri:facebook-fill" />
          </a>
        </div>
      </div>
    </div>

    <div class="container flex justify-end text-slate-500 pt-5">
      ©{{ new Date().getFullYear() }} MEMICO
    </div>
  </footer>
</template>
