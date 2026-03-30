<script setup lang="ts">
import EvidenceCard from './EvidenceCard.vue';
import { useReveal } from '../composables/useReveal';

defineProps<{
  kicker: string;
  deck: string;
  title: string;
  fullWidthHeader?: boolean;
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
  evidenceInContent?: boolean;
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
    <div v-if="fullWidthHeader" class="issue-section__header">
      <p class="section-kicker" :class="`section-kicker--${tone}`">{{ kicker }}</p>
      <h2>{{ title }}</h2>
      <p class="issue-section__deck">{{ deck }}</p>
    </div>

    <div class="issue-section__layout">
      <div class="issue-section__content">
        <template v-if="!fullWidthHeader">
          <p class="section-kicker" :class="`section-kicker--${tone}`">{{ kicker }}</p>
          <h2>{{ title }}</h2>
          <p class="issue-section__deck">{{ deck }}</p>
        </template>
        <p class="issue-section__intro">{{ intro }}</p>

        <ul class="issue-section__list">
          <li v-for="bullet in bullets" :key="bullet">
            {{ bullet }}
          </li>
        </ul>

        <div v-if="placeholder" class="placeholder-card">
          <p class="placeholder-card__label">Placeholder</p>
          <p class="placeholder-card__body">
            This section is intentionally reserved for the final group version. The topic and layout are fixed, but the detailed argument, evidence, and supporting material will be added later.
          </p>
        </div>

        <EvidenceCard
          v-else-if="tone !== 'positive' || evidenceInContent"
          v-bind="evidence"
        />
      </div>

      <div
        v-if="tone === 'positive' && !placeholder && !evidenceInContent"
        class="issue-section__media"
      >
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

        <EvidenceCard v-bind="evidence" />
      </div>

      <figure
        v-else
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
