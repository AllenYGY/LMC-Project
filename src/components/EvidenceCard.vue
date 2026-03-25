<script setup lang="ts">
defineProps<{
  label?: string;
  source: string;
  date?: string;
  summary: string;
  url?: string;
}>();
</script>

<template>
  <article class="evidence-card">
    <p class="evidence-card__label">{{ label ?? 'Evidence' }}</p>
    <div v-if="source || date" class="evidence-card__meta">
      <span>{{ source }}</span>
      <span v-if="source && date" aria-hidden="true">/</span>
      <time v-if="date">{{ date }}</time>
    </div>
    <p class="evidence-card__summary">{{ summary }}</p>
    <a
      v-if="url"
      class="evidence-card__link"
      :href="url"
      target="_blank"
      rel="noreferrer"
    >
      Read source
    </a>
  </article>
</template>
