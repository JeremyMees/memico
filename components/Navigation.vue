<script setup lang="ts">
const isLarge = useMediaQuery('(min-width: 768px)')

const mobileNavOpen = ref<boolean>(false)
const nav = ref<HTMLElement>()

whenever(isLarge, () => mobileNavOpen.value = false)

onClickOutside(nav, () => {
  if (mobileNavOpen.value) mobileNavOpen.value = false
})

if (import.meta.client) {
  window.onscroll = () => {
    if (mobileNavOpen.value || window.scrollY < 0) {
      mobileNavOpen.value = false
    }
  }
}
</script>

<template>
  <nav
    ref="nav"
    class="flex flex-col"
  >
    <div class="flex items-center justify-between gap-x-10 container py-5 border-b border-slate-900">
      <NuxtImg
        src="/logo.webp"
        alt="MEMICO"
        sizes="200px"
        class="sm:w-[200px]"
      />

      <div class="flex items-center justify-between gap-x-4 md:gap-x-8">
        <ul class="hidden md:flex justify-end gap-x-8 w-full">
          <li>
            <a
              href="#realisaties"
              class="nav-link"
            >
              Realisaties
            </a>
          </li>
          <li>
            <a
              href="#ervaringen"
              class="nav-link"
            >
              Ervaringen
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          class="btn w-full hidden sm:block"
          @click="mobileNavOpen = false"
        >
          Neem contact op
        </a>

        <button
          class="md:hidden icon-btn"
          @click="mobileNavOpen = !mobileNavOpen"
        >
          <Icon
            :name="mobileNavOpen ? 'radix-icons:cross-1' : 'radix-icons:hamburger-menu'"
            class="w-6 h-6"
          />
        </button>
      </div>
    </div>

    <AnimationReveal>
      <div
        v-if="mobileNavOpen"
        class="flex flex-col absolute left-0 right-0 z-10 bg-white border-b border-slate-900 shadow-md"
      >
        <div class="container flex flex-col gap-2 py-4">
          <a
            href="#realisaties"
            class="nav-link"
            @click="mobileNavOpen = false"
          >
            Realisaties
          </a>
          <a
            href="#ervaringen"
            class="nav-link"
            @click="mobileNavOpen = false"
          >
            Ervaringen
          </a>
          <a
            href="#contact"
            class="btn w-full text-center sm:hidden mt-4"
            @click="mobileNavOpen = false"
          >
            Neem contact op
          </a>
        </div>
      </div>
    </AnimationReveal>
  </nav>
</template>
