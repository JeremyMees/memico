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
            3583 Paal
          </span>
          <a
            href="tel:+0494473580"
            aria-label="Telefoonnummer"
            class="text-slate-900 hover:text-slate-800 transition-colors duration-300 ease-in-out underline"
          >
            Michael 0494473580
          </a>
          <a
            href="tel:+0456114736"
            aria-label="Telefoonnummer"
            class="text-slate-900 hover:text-slate-800 transition-colors duration-300 ease-in-out underline"
          >
            Cas 0456114736
          </a>
          <a
            href="mailto:info@memico.be"
            aria-label="Email"
            class="text-slate-900 hover:text-slate-800 transition-colors duration-300 ease-in-out underline"
          >
            info@memico.be
          </a>
        </div>
      </div>
      <div
        class="flex-1 flex flex-col min-w-[150px]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p class="font-bold mb-3">
          BTW nummer
        </p>
        <span>
          BE 1007.139.320
        </span>
      </div>
    </div>

    <div class="container flex justify-end text-slate-500 pt-5">
      ©{{ new Date().getFullYear() }} MEMICO
    </div>
  </footer>
</template>
