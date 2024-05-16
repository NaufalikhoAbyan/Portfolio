<template>
  <div class="flex items-center h-[calc(100vh-128px)]">
    <div class="h-fit w-full flex justify-between items-center lg:gap-10 xl:gap-20">
      <img src="../assets/images/About_Image.jpeg" alt="About_Picture" class="bg-white rounded-xl w-[540px] aspect-square object-cover hidden lg:block"/>
      <div class="flex flex-col gap-8 w-fit">
        <div class="w-fit">
          <p class="font-bold text-5xl sm:text-7xl">ABOUT</p>
          <div class="w-full h-1 bg-accent"></div>
          <p class="font-bold text-5xl sm:text-7xl">ME</p>
        </div>
        <div class="text-secondary-text flex flex-col gap-4 text-2xl sm:text-4xl">
          <div class="font-bold">Hi, I'm Naufalikho Abyan</div>
          <div class="font-medium text-pretty text-xl">
            Specialized at making Full-Stack Website, have a high proficiency at using Javascript Frameworks, and intermediate knowledge in IoT and software programing
          </div>
        </div>
        <div class="rounded-xl w-fit p-4 bg-linkedin hover:scale-105 text-base lg:text-4xl">
          <a href="https://www.linkedin.com/in/naufalikho-abyan-4b4961309/" target="_blank">
            <div class="flex gap-2 font-bold items-center cursor-pointer">
              LinkedIn<LinkedinIcon class="text-white w-4 lg:w-9"/>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import LinkedinIcon from "@/components/icons/IconLinkedin.vue"
</script>