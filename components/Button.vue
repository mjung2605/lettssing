<template>
  <!-- Nav Button -->
  <NuxtLink
    v-if="to"
    :to="to"
    custom
    v-slot="{ navigate, href, isActive }"
  >
    <!-- ??: nullish coalescent: kürzt fall ab - wenn a!=null, sonst b == a ?? b -->
    <v-btn
      v-bind="$attrs"
      :href="href"
      @click="navigate"
      :variant=" variant ?? (isActive ? 'text' : 'plain')"
      :color="isActive ? 'secondary' : color"
      class="pa-2 font-weight-bold"
      :style="[ isTonal ? 'font-size: regular' : 'font-size: large' ]"
    >
    <!-- bisschen scheiße aber wenn variant gesetzt ist ist es ein button bei z.B. article... deswegen schrift kleiner. todo: make good-->
      {{ text }}
    </v-btn>
  </NuxtLink>

  <!-- Button als externer Link -->
    <v-btn
        v-if="socialHref"
        :href="socialHref"
        target="_blank"
        variant="plain"
        :color="color"
        class="pa-2 font-weight-bold"
        style="font-size: large;"
        >
        <svg-icon
            v-if="prependIcon"
            :path="prependIcon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            
        />
        <span v-if="text" class="px-1">{{ text }}</span>        
    </v-btn>

  <!-- Regular Button -->
  <v-btn
    v-if="!to && !socialHref"
    v-bind="$attrs"
    :color="color"
    class="pa-2"
    @click="emit('click', $event)"
  >
    <svg-icon
      v-if="prependIcon"
      :path="prependIcon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    />
    <span v-if="text">{{ text }}</span>
    
  </v-btn>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  to: {
    type: [String, Object],
    default: null
  },
  text: {
    type: String,
    default: null
  },
  // momentan nur als prop für nav button
  //isBodyNav: {
    //type: Boolean,
    //default: false
  //},
  variant: {
    type: String, 
    default: null
  },
  prependIcon: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: 'primary'
  },
  socialHref: {
    type: String,
    default: null
  }
})

const isTonal = props.variant==="tonal"

const emit = defineEmits(['click'])

// is body nav, nochmal schön machen, doch in einzelne komponenten ausgliedern??? weil wtf
//const variant = isBodyNav ? "tonal" : "null"
//const fontSize = isBodyNav ? "regular" : "large"


if (!props.text && !props.prependIcon) {
  console.warn(
    '[Button] Mindestens "text" oder "prependIcon" muss gesetzt sein.'
  )
}
</script>
