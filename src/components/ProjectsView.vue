<template>
  <div class="flex flex-col justify-center items-center gap-10 py-48">
    <!-- Header -->
    <div class="w-fit">
      <p class="text-5xl sm:text-7xl font-bold px-1">PROJECTS</p>
      <div class="h-1 w-full bg-accent"></div>
    </div>

    <!-- Cards -->
    <div class="gap-10 w-full xl:w-4/5 flex lg:grid flex-col lg:grid-cols-3">
      <ProjectCard link="https://github.com/NaufalikhoAbyan/render-test">
        <template v-slot:image><img src="@/assets/images/Portfolio_Project.png" alt="Projects_Picture" class="aspect-square rounded-t-xl w-full sm:w-1/4 lg:w-full object-contain lg:object-cover hover:object-contain" ></template>
        <template v-slot:title>Portfolio Website</template>
        <template v-slot:description>A fully responsive personal landing page made with VueJs javascript framework. Made for share my works and showcase my skills when applying for jobs.</template>
      </ProjectCard>
      <ProjectCard link="https://github.com/NaufalikhoAbyan/LaravelLearning">
        <template v-slot:image><img src="@/assets/images/Larazillow_Project.png" alt="Projects_Picture" class="aspect-square rounded-t-xl w-full sm:w-1/4 lg:w-full object-contain lg:object-cover hover:object-contain" ></template>
        <template v-slot:title>Larazillow</template>
        <template v-slot:description>A VILT Stack (VueJs, Inertia, Laravel, Tailwind) demo app. Made for learning and experimenting with VueJs as the FrontEnd and Laravel as the BackEnd.</template>
      </ProjectCard>
      <ProjectCard link="https://github.com/NaufalikhoAbyan/SteadyProfile">
        <template v-slot:image><img src="@/assets/images/Steady_Project.png" alt="Projects_Picture" class="aspect-square rounded-t-xl w-full sm:w-1/4 lg:w-full object-contain lg:object-cover hover:object-contain" ></template>
        <template v-slot:title>Steady Profile Website</template>
        <template v-slot:description>A profile website commissioned by school for Steady, an extracullicular organization of SMK N 2 Depok Sleman.</template>
      </ProjectCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import ProjectCard from "@/components/cards/ProjectCard.vue";
</script>