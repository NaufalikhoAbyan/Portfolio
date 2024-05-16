<template>
<div class="bg-primary text-white px-12 xl:px-48">
  <!-- Navbar Desktop -->
  <div class="bg-primary fixed left-0 right-0 z-50 justify-between items-center py-4 hidden md:flex px-12 xl:px-48">
    <!-- Link Items -->
    <div>
      <ul class="flex gap-16 font-bold text-xl">
        <li class="cursor-pointer opacity-50 hover:opacity-100"><a href="#home">Home</a></li>
        <li class="cursor-pointer opacity-50 hover:opacity-100"><a href="#about">About</a></li>
        <li class="cursor-pointer opacity-50 hover:opacity-100"><a href="#skills">Skills</a></li>
        <li class="cursor-pointer opacity-50 hover:opacity-100"><a href="#projects">Projects</a></li>
        <li class="cursor-pointer opacity-50 hover:opacity-100"><a href="#contacts">Contacts</a></li>
      </ul>
    </div>

    <!-- GitHub Button -->
    <a href="https://github.com/NaufalikhoAbyan" target="_blank">
      <div class="bg-white rounded-xl w-fit p-2 my-4 cursor-pointer hover:scale-105">
        <GithubIcon class="h-12 text-primary"/>
      </div>
    </a>
  </div>

  <!-- Navbar Mobile-->
  <div class="bg-primary fixed left-0 right-0 z-50 flex-col py-4 px-12 flex md:hidden">
    <div class="flex justify-between items-center w-full">
      <BarsIcon class="w-12 h-12" @click="isDroppedDown = !isDroppedDown"/>
      <a href="https://github.com/NaufalikhoAbyan" target="_blank">
        <div class="bg-white text-primary font-bold text-xl flex items-center gap-2 rounded-xl w-fit p-2 my-4 cursor-pointer hover:scale-105">
          GitHub <GithubIcon class="h-12 text-primary"/>
        </div>
      </a>
    </div>
    <div v-if="isDroppedDown">
      <ul class="flex flex-col gap-2 font-bold text-xl">
        <li class="cursor-pointer opacity-50 hover:opacity-100" @click="isDroppedDown = false"><a href="#home">Home</a></li>
        <li class="cursor-pointer opacity-50 hover:opacity-100" @click="isDroppedDown = false"><a href="#about">About</a></li>
        <li class="cursor-pointer opacity-50 hover:opacity-100" @click="isDroppedDown = false"><a href="#skills">Skills</a></li>
        <li class="cursor-pointer opacity-50 hover:opacity-100" @click="isDroppedDown = false"><a href="#projects">Projects</a></li>
        <li class="cursor-pointer opacity-50 hover:opacity-100" @click="isDroppedDown = false"><a href="#contacts">Contacts</a></li>
      </ul>
    </div>
  </div>

  <HomeView id="home" @learnMore="ScrollToAbout"/>

  <AboutView id="about"/>

  <div class="flex flex-col gap-24 pb-24">
    <SkillsView id="skills"/>

    <ProjectsView id="projects"/>

    <ContactsView id="contacts"/>
  </div>

</div>
<div class="bg-secondary text-white flex justify-between py-8 px-12 xl:px-48 flex-col md:flex-row gap-10 md:gap-0">
  <div>
    <div class="w-fit flex gap-2 flex-col">
      <p class="text-5xl font-bold">Portfolio</p>
      <div class="flex gap-2 font-bold items-center text-4xl text-secondary-text">
        Made With<HeartIcon class="text-accent w-9"/>
      </div>
      <p class="font-bold text-2xl text-secondary-text">@ Naufalikho Abyan, 2024</p>
    </div>
  </div>

  <div class="flex gap-10 items-center">
    <div class="flex flex-col gap-2">
      <p class="text-xl text-secondary-text">Socials</p>
      <div class="flex flex-col gap-1">
        <a href="https://github.com/NaufalikhoAbyan" target="_blank" class="text-2xl opacity-50 hover:opacity-100">Github</a>
        <a href="https://www.linkedin.com/in/naufalikho-abyan-4b4961309/" target="_blank" class="text-2xl opacity-50 hover:opacity-100">LinkedIn</a>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <p class="text-xl text-secondary-text">Contacts</p>
      <div class="flex flex-col gap-1">
        <a href="https://wa.me/+681770056760" target="_blank" class="text-2xl opacity-50 hover:opacity-100">Whatsapp</a>
        <a href="https://mail.google.com/mail/u/0/?fs=1&to=apradana448@gmail.com&tf=cm" target="_blank" class="text-2xl opacity-50 hover:opacity-100">Email</a>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import HomeView from '@/components/HomeView.vue'
import AboutView from "@/components/AboutView.vue"
import SkillsView from "@/components/SkillsView.vue"
import ProjectsView from "@/components/ProjectsView.vue"
import ContactsView from "@/components/ContactsView.vue"
import GithubIcon from '@/components/icons/IconGithub.vue'
import BarsIcon from '@/components/icons/IconBars.vue'
import { ref,onMounted } from "vue";
import HeartIcon from "@/components/icons/IconHeart.vue";

const isDroppedDown = ref(false);
let about = null
onMounted(() =>{
  about = document.getElementById("about")
})

function ScrollToAbout(){
  about.scrollIntoView()
}
</script>

<style>
html {
  scroll-behavior: smooth;
  scroll-padding-top: 128px;
}
</style>