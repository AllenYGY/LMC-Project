<script setup lang="ts">
import { useReveal } from '../composables/useReveal';

defineProps<{
  title: string;
  subtitle: string;
  thesis: string;
  imageSrc: string;
  imageAlt: string;
}>();

const { rootRef, isVisible } = useReveal();
</script>

<template>
  <section
    ref="rootRef"
    class="hero reveal-section"
    :class="{ 'is-visible': isVisible }"
  >
    <div class="hero__copy">
      <p class="section-kicker">{{ subtitle }}</p>
      <h1>{{ title }}</h1>
      <p class="hero__thesis">{{ thesis }}</p>
    </div>

    <figure class="hero__visual image-panel">
      <img :src="imageSrc" :alt="imageAlt" />
      <figcaption>
        Cinema remains commercially powerful because its stories, performers, and release channels are protected and recognisable.
      </figcaption>
    </figure>
  </section>
</template>
