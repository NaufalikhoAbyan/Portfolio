<template>
  <div class="h-screen flex items-center">
    <div class="flex w-full justify-between items-center">
      <!-- Home Text -->
      <div class="flex flex-col gap-8">
        <div class="w-fit">
          <p class="font-bold text-5xl sm:text-7xl">NAUFAL</p>
          <div class="w-full h-1 bg-accent"></div>
          <p class="font-bold text-5xl sm:text-7xl">IKHO</p>
        </div>
        <div class="text-secondary-text font-bold w-full lg:w-[60%] text-4xl sm:text-6xl">A Full-Stack Web Developer</div>
        <div class="rounded-xl w-fit p-4 bg-accent hover:scale-105 text-base lg:text-4xl">
          <a href="@/assets/Naufalikho%20Abyan%20-%20Curriculum%20Vitae.pdf" download="CV-Naufalikho_Abyan.pdf">
            <div class="flex gap-2 font-bold items-center cursor-pointer">
              Download CV<DownloadIcon class="text-white w-4 sm:w-9"/>
            </div>
          </a>
        </div>
      </div>
      <!-- Image -->
      <img src="../assets/images/Home_Image.jpg" alt="Profile_picture" class="bg-white rounded-xl w-[540px] aspect-square object-cover hidden lg:block"/>
    </div>
    <div class="absolute bottom-0 left-0 w-full flex flex-col justify-center items-center text-4xl font-bold cursor-pointer group z-0" @click="$emit('learnMore')">
      Learn More
      <ArrowDownIcon class="text-accent w-9 group-hover:w-12"/>
    </div>
  </div>
</template>
<script setup>
import DownloadIcon from '@/components/icons/IconDownload.vue'
import ArrowDownIcon from '@/components/icons/IconArrowDown.vue'
</script>