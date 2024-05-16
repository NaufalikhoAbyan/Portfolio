<template>
  <div class="flex flex-col justify-center items-center gap-10">
    <!-- Header -->
    <div class="w-fit">
      <p class="text-5xl sm:text-7xl font-bold px-1">SKILLS</p>
      <div class="h-1 w-full bg-accent"></div>
    </div>

    <!-- Cards -->
    <div class="grid 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-3 grid-cols-2 w-full gap-2">
      <!-- 1st row -->
      <Card>
        <template v-slot:icon><HtmlIcon/></template>
        <template v-slot:title>HTML</template>
        <template v-slot:description>Markup language for the web</template>
      </Card>
      <Card>
        <template v-slot:icon><IconCss/></template>
        <template v-slot:title>CSS</template>
        <template v-slot:description>Declarative Langue for styling web pages</template>
      </Card>
      <Card>
        <template v-slot:icon><IconJs/></template>
        <template v-slot:title>Javascript</template>
        <template v-slot:description>Powerful and versatile language for website and application</template>
      </Card>

      <!-- 2nd Row-->
      <Card>
        <template v-slot:icon><IconPhp/></template>
        <template v-slot:title>PHP</template>
        <template v-slot:description>General-purpose scripting language for web development</template>
      </Card>
      <Card>
        <template v-slot:icon><IconLaravel/></template>
        <template v-slot:title>Laravel</template>
        <template v-slot:description>PHP web framework with out of the book feature and rich ecosystem</template>
      </Card>
      <Card>
        <template v-slot:icon><IconVue/></template>
        <template v-slot:title>VueJS</template>
        <template v-slot:description>Performant and versatile Javascript framework for building reactive website</template>
      </Card>

      <!-- 3rd Row-->
      <Card>
        <template v-slot:icon><IconBootstrap/></template>
        <template v-slot:title>Bootstrap</template>
        <template v-slot:description>Component library for styling and customizing web pages</template>
      </Card>
      <Card>
        <template v-slot:icon><IconTailwind/></template>
        <template v-slot:title>Tailwind</template>
        <template v-slot:description>A utility-first CSS framework packed with prebuilt classes</template>
      </Card>
      <Card>
        <template v-slot:icon><IconDotnet/></template>
        <template v-slot:title>.NET <span class="hidden sm:inline">Framework</span></template>
        <template v-slot:description>Object-Oriented Framework for building desktop and web applications</template>
      </Card>
    </div>
  </div>
</template>
<script setup>
import HtmlIcon from "@/components/icons/IconHtml.vue";
import IconCss from "@/components/icons/IconCss.vue";
import IconJs from "@/components/icons/IconJs.vue";
import IconPhp from "@/components/icons/IconPhp.vue";
import IconLaravel from "@/components/icons/IconLaravel.vue";
import IconVue from "@/components/icons/IconVue.vue";
import IconBootstrap from "@/components/icons/IconBootstrap.vue";
import IconTailwind from "@/components/icons/IconTailwind.vue";
import IconDotnet from "@/components/icons/IconDotnet.vue";
import Card from "@/components/cards/SkillCard.vue";
</script>