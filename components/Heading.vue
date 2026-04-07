<template>
  <component :is="'h' + level" class="pt-8"> <!-- TODO noch richtig stylen -->
    <slot />
  </component>
</template>

<script setup>
    defineProps({
      level: { type: [1,2,3,4], default: 2 }
    })
</script>
