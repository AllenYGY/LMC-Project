<script setup lang="ts">
import EvidenceCard from './EvidenceCard.vue';
import { useReveal } from '../composables/useReveal';

defineProps<{
  kicker: string;
  deck: string;
  title: string;
  intro: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  imageGallery?: Array<{
    src: string;
    alt: string;
  }>;
  evidence: {
    source: string;
    date?: string;
    summary: string;
    url?: string;
    label?: string;
  };
  tone: 'positive' | 'negative';
  placeholder?: boolean;
  reverse?: boolean;
}>();

const { rootRef, isVisible } = useReveal();
</script>

<template>
  <section
    ref="rootRef"
    class="issue-section reveal-section"
    :class="[
      { 'is-visible': isVisible },
      { 'issue-section--reverse': reverse },
      `issue-section--${tone}`,
    ]"
  >
    <div class="issue-section__layout">
      <div class="issue-section__content">
        <p class="section-kicker" :class="`section-kicker--${tone}`">{{ kicker }}</p>
        <h2>{{ title }}</h2>
        <p class="issue-section__deck">{{ deck }}</p>
        <p class="issue-section__intro">{{ intro }}</p>

        <ul class="issue-section__list">
          <li v-for="bullet in bullets" :key="bullet">
            {{ bullet }}
          </li>
        </ul>

        <div v-if="placeholder" class="placeholder-card">
          <p class="placeholder-card__label">Placeholder</p>
          <p class="placeholder-card__body">
            This section is intentionally reserved for the final group draft. The topic and layout are fixed, but the detailed argument, evidence, and examples will be added later.
          </p>
        </div>

        <EvidenceCard v-else v-bind="evidence" />
      </div>

      <figure
        class="issue-section__visual image-panel"
        :class="{ 'issue-section__visual--gallery': imageGallery?.length }"
      >
        <template v-if="imageGallery?.length">
          <div
            v-for="image in imageGallery"
            :key="image.src"
            class="issue-section__visual-item"
          >
            <img :src="image.src" :alt="image.alt" />
          </div>
        </template>
        <img v-else :src="imageSrc" :alt="imageAlt" />
      </figure>
    </div>
  </section>
</template>
