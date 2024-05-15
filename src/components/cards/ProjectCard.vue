<template>
  <div class="bg-secondary rounded-xl flex flex-col sm:flex-row lg:flex-col border">
    <slot name="image"/>
    <div class="p-4 flex flex-col justify-between flex-grow gap-10">
      <div class="flex flex-col gap-4">
        <h1 class="font-bold text-3xl">
          <slot name="title"/>
        </h1>
        <p class="text-secondary-text text-lg">
          <slot name="description"/>
        </p>
      </div>
      <a :href="props.link" target="_blank">
        <div class="p-2 rounded-xl bg-accent w-fit font-bold cursor-pointer hover:scale-105">
          <p>Github Repo</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  'link': {
    type: String,
    required: true
  }
})
</script>