<script setup>
import { heroSectionContent, buttonsLabel } from "@/@core/constants/home-view";
import SiteButton from "@/@core/components/SiteButton.vue";
</script>

<template>
  <section id="home" class="hero-section relative">
    <div class="container py-40 md:pt-60 xl:pt-72">
      <div class="grid lg:grid-cols-2 gap-10 2xl:gap-10">
        <div class="text-white">
          <h1 class="text-4.5xl lg:text-5xl 3xl:text-7xl font-bold">
            {{ heroSectionContent.heading }}
          </h1>
          <h3 class="text-xl lg:text-2xl 2xl:text-4.5xl py-4 lg:pt-3 lg:pb-8 font-bold">
            {{ heroSectionContent.subHeading }}
          </h3>
          <p class="text-base lg:text-xl 2xl:text-3xl">
            {{ heroSectionContent.text }}
          </p>

          <div class="flex gap-5 pt-12 lg:pt-20 xl:pt-24 3xl:pt-38">
            <SiteButton>
              {{ buttonsLabel.CTOBtn }}
            </SiteButton>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <img :src="heroSectionContent.image" :alt="heroSectionContent.alt">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: theme('colors.secondary');
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  z-index: -1;
}
@media (max-width: 768px) {
  .hero-section::before {
    clip-path:polygon(0 0, 100% 0, 100% 90%, 0 100%);
  }
}
</style>
