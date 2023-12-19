<script setup>
import SiteButton from "@/@core/components/SiteButton.vue";
import SiteFeatureCard from "@/@core/components/SiteFeatureCard.vue";
import { brandFeaturesContent, buttonsLabel } from "@/@core/constants/home-view";
</script>

<template>
  <section id="features" class="relative pt-28">
    <div class="container">
      <div class="grid lg:grid-cols-3 gap-20 lg:gap-32">
        <div class="lg:col-span-1 flex items-center">
          <div>
            <h5 class="text-xl font-extrabold text-primary">
              {{ brandFeaturesContent.subHeading }}
            </h5>
            <h4 class="text-3xl xl:text-4xl 3xl:text-5xl font-bold pb-6 lg:pb-8 2xl:pb-12">
              {{ brandFeaturesContent.heading }}
            </h4>
            <SiteButton>
              {{ buttonsLabel.ctaBtn }}
            </SiteButton>
          </div>
        </div>
        <div class="lg:col-span-2">
          <div class="grid md:grid-cols-2 gap-7 3xl:gap-10">
            <div class="flex flex-col gap-7 3xl:gap-10">
              <SiteFeatureCard
                  :title="brandFeaturesContent.features[0].title"
                  :icon="brandFeaturesContent.features[0].icon"
                  :description="brandFeaturesContent.features[0].description"
              />
              <SiteFeatureCard
                  :title="brandFeaturesContent.features[2].title"
                  :icon="brandFeaturesContent.features[2].icon"
                  :description="brandFeaturesContent.features[2].description"
              />
            </div>

            <div class="flex flex-col gap-7 3xl:gap-10 transform -translate-y-7 mt-7 md:mt-0">
              <SiteFeatureCard
                  :title="brandFeaturesContent.features[1].title"
                  :icon="brandFeaturesContent.features[1].icon"
                  :description="brandFeaturesContent.features[1].description"
              />
              <SiteFeatureCard
                  :title="brandFeaturesContent.features[3].title"
                  :icon="brandFeaturesContent.features[3].icon"
                  :description="brandFeaturesContent.features[3].description"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
