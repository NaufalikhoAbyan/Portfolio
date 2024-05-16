<template>
  <div>
    <div class="bg-secondary h-full rounded-xl items-center gap-2 lg:gap-10 p-8 flex-col flex lg:grid lg:grid-cols-10">
      <div class="flex items-center justify-center aspect-square h-16 md:h-28 lg:col-span-3">
        <slot name="icon"/>
      </div>
      <div class="flex flex-col justify-around h-full lg:col-span-7">
        <p class="font-bold text-md md:text-2xl">
          <slot name="title"/>
        </p>
        <p class="text-lg hidden lg:block">
          <slot name="description"/>
        </p>
      </div>
    </div>
  </div>
</template>