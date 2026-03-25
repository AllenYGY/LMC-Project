<script setup lang="ts">
import { useReveal } from '../composables/useReveal';

defineProps<{
  title: string;
  body: string;
  iconSrc: string;
  iconAlt: string;
}>();

const { rootRef, isVisible } = useReveal();
</script>

<template>
  <section
    ref="rootRef"
    class="key-message reveal-section"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="key-message__card">
      <div class="key-message__icon">
        <img :src="iconSrc" :alt="iconAlt" />
      </div>

      <div class="key-message__copy">
        <p class="section-kicker">Conclusion</p>
        <h2>{{ title }}</h2>
        <p>{{ body }}</p>
      </div>
    </div>
  </section>
</template>
