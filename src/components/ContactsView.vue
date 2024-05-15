<template>
  <div class="flex flex-col justify-center items-center gap-10 pb-24">
    <!-- Header -->
    <div class="w-fit">
      <p class="text-5xl sm:text-7xl font-bold px-1">CONTACTS</p>
      <div class="h-1 w-full bg-accent"></div>
    </div>

    <div class="flex flex-col gap-5">
      <div class="bg-secondary rounded-xl items-center gap-2 lg:gap-10 p-8 flex-col flex lg:grid lg:grid-cols-10">
        <div class="h-16 md:h-32 lg:col-span-3">
          <WhatsappIcon/>
        </div>
        <div class="flex flex-col justify-around h-full lg:col-span-7">
          <p class="font-semibold text-4xl text-secondary-text hidden lg:block">
            Whatsapp
          </p>
          <p class="font-bold text-base md:text-xl lg:text-5xl">
            +62 817 7005 6760
          </p>
        </div>
      </div>

      <div class="bg-secondary rounded-xl items-center gap-2 lg:gap-10 p-8 flex-col flex lg:grid lg:grid-cols-10">
        <div class="h-16 md:h-32 lg:col-span-3">
          <EmailIcon/>
        </div>
        <div class="flex flex-col justify-around h-full lg:col-span-7">
          <p class="font-semibold text-4xl text-secondary-text hidden lg:block">
            Email
          </p>
          <p class="font-bold text-base md:text-xl lg:text-5xl">
            apradana448@gmail.com
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import WhatsappIcon from "@/components/icons/IconWhatsapp.vue";
import EmailIcon from "@/components/icons/IconEmail.vue";
</script>