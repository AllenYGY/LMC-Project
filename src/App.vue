<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import HeroSection from './components/HeroSection.vue';
import IssueSection from './components/IssueSection.vue';
import EvidenceCard from './components/EvidenceCard.vue';
import KeyMessageSection from './components/KeyMessageSection.vue';
import { useReveal } from './composables/useReveal';
import pageContent from './content/pageContent';

const navItems = [
  {
    key: 'overview',
    label: 'Overview',
    targetId: 'overview',
    watchIds: ['overview'],
  },
  {
    key: 'positive-1',
    label: 'Audience Data',
    targetId: 'big-data-operations',
    watchIds: ['big-data-operations'],
  },
  {
    key: 'positive-2',
    label: 'Digital Production',
    targetId: 'digital-production',
    watchIds: ['digital-production'],
  },
  {
    key: 'negative-1',
    label: 'AI Copyright',
    targetId: 'ai-copyright',
    watchIds: ['ai-copyright'],
  },
  {
    key: 'negative-2',
    label: 'Streaming Shift',
    targetId: 'streaming-disruption',
    watchIds: ['streaming-disruption'],
  },
  {
    key: 'conclusion',
    label: 'Conclusion',
    targetId: 'why-this-matters',
    watchIds: ['why-this-matters', 'key-message'],
  },
] as const;

type NavKey = (typeof navItems)[number]['key'];

const positiveImpacts = computed(() =>
  pageContent.issues.filter((issue) => issue.tone === 'positive'),
);
const negativeImpacts = computed(() =>
  pageContent.issues.filter((issue) => issue.tone === 'negative'),
);
const currentNavKey = ref<NavKey>('overview');

const watchTargets = navItems.flatMap((item) =>
  item.watchIds.map((id) => ({ id, key: item.key })),
);

const nextNavItem = computed(() => {
  const currentIndex = navItems.findIndex((item) => item.key === currentNavKey.value);

  if (currentIndex === -1 || currentIndex === navItems.length - 1) {
    return navItems[0];
  }

  return navItems[currentIndex + 1];
});

const nextButtonLabel = computed(() =>
  currentNavKey.value === navItems[navItems.length - 1].key
    ? 'Back to Overview'
    : `Next: ${nextNavItem.value.label}`,
);

const scrollToSection = (targetId: string) => {
  document.getElementById(targetId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const handleNextSection = () => {
  scrollToSection(nextNavItem.value.targetId);
};

let ticking = false;

const updateCurrentNav = () => {
  const threshold = window.innerHeight * 0.28;
  let activeKey: NavKey = navItems[0].key;

  for (const target of watchTargets) {
    const element = document.getElementById(target.id);

    if (!element) {
      continue;
    }

    if (element.getBoundingClientRect().top <= threshold) {
      activeKey = target.key;
    }
  }

  currentNavKey.value = activeKey;
};

const handleViewportChange = () => {
  if (ticking) {
    return;
  }

  ticking = true;

  window.requestAnimationFrame(() => {
    updateCurrentNav();
    ticking = false;
  });
};

onMounted(() => {
  updateCurrentNav();
  window.addEventListener('scroll', handleViewportChange, { passive: true });
  window.addEventListener('resize', handleViewportChange);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleViewportChange);
  window.removeEventListener('resize', handleViewportChange);
});

const { rootRef: policyRef, isVisible: policyVisible } = useReveal();
const { rootRef: footerRef, isVisible: footerVisible } = useReveal();
</script>

<template>
  <div class="page-shell">
    <header class="site-header">
      <a class="site-brand" href="#overview">
        <span class="site-brand__topic">Cinema and Digital Change</span>
      </a>

      <nav class="site-nav" aria-label="Section navigation">
        <a href="#overview">Overview</a>
        <a href="#positive-impacts">Positive</a>
        <a href="#negative-impacts">Negative</a>
        <a href="#why-this-matters">Summary</a>
      </nav>
    </header>

    <div class="page-layout">
      <main class="page-main">
        <HeroSection id="overview" v-bind="pageContent.hero" />

        <div class="content-stack">
          <section class="impact-overview reveal-section is-visible">
            <div class="impact-overview__hero">
              <div class="impact-overview__intro">
                <p class="section-kicker">Project Overview</p>
                <h2>{{ pageContent.overview.title }}</h2>
                <p class="impact-overview__body">{{ pageContent.overview.body }}</p>
              </div>

              <aside class="impact-overview__question">
                <p class="impact-overview__question-label">Guiding Question</p>
                <p class="impact-overview__question-text">
                  {{ pageContent.overview.guidingQuestion }}
                </p>
              </aside>
            </div>

            <div class="impact-overview__balances">
              <article
                v-for="card in pageContent.overview.balanceCards"
                :key="card.title"
                class="balance-card"
                :class="`balance-card--${card.tone}`"
              >
                <p class="balance-card__label">{{ card.label }}</p>
                <h3>{{ card.title }}</h3>
                <p>{{ card.body }}</p>
              </article>
            </div>

            <div class="impact-overview__grid">
              <a
                v-for="issue in pageContent.issues"
                :key="issue.id"
                class="overview-card"
                :class="`overview-card--${issue.tone}`"
                :href="`#${issue.id}`"
              >
                <span class="overview-card__tag">{{ issue.kicker }}</span>
                <h3>{{ issue.title }}</h3>
                <p>{{ issue.deck }}</p>
                <span v-if="issue.placeholder" class="overview-card__status">Placeholder</span>
              </a>
            </div>
          </section>

          <section id="positive-impacts" class="impact-group">
            <div class="impact-group__header">
              <p class="section-kicker section-kicker--positive">Positive Impacts</p>
              <h2>How digital tools strengthen cinema</h2>
              <p class="impact-group__body">
                These two sections show how digital technology improves cinema operations and reshapes film production through data analysis, flexible equipment, and digital creative workflows.
              </p>
            </div>

            <IssueSection
              v-for="issue in positiveImpacts"
              :id="issue.id"
              :key="issue.id"
              :kicker="issue.kicker"
              :deck="issue.deck"
              :title="issue.title"
              :intro="issue.intro"
              :bullets="issue.bullets"
              :image-src="issue.imageSrc"
              :image-alt="issue.imageAlt"
              :evidence="issue.evidence"
              :tone="issue.tone"
              :placeholder="issue.placeholder"
              :reverse="issue.reverse"
            />
          </section>

          <section id="negative-impacts" class="impact-group">
            <div class="impact-group__header">
              <p class="section-kicker section-kicker--negative">Negative Impacts</p>
              <h2>How digital change can weaken cinema</h2>
              <p class="impact-group__body">
                These two sections show how digital innovation can also threaten copyright protection, performer consent, and the long-term strength of theatrical attendance.
              </p>
            </div>

            <IssueSection
              v-for="issue in negativeImpacts"
              :id="issue.id"
              :key="issue.id"
              :kicker="issue.kicker"
              :deck="issue.deck"
              :title="issue.title"
              :intro="issue.intro"
              :bullets="issue.bullets"
              :image-src="issue.imageSrc"
              :image-alt="issue.imageAlt"
              :evidence="issue.evidence"
              :tone="issue.tone"
              :placeholder="issue.placeholder"
              :reverse="issue.reverse"
            />
          </section>

          <section
            id="why-this-matters"
            ref="policyRef"
            class="policy-section reveal-section"
            :class="{ 'is-visible': policyVisible }"
          >
            <div class="policy-section__grid">
              <div class="policy-section__content">
                <p class="section-kicker">Why This Matters</p>
                <h2>{{ pageContent.policyCallout.title }}</h2>
                <p class="policy-section__body">
                  {{ pageContent.policyCallout.body }}
                </p>

                <div class="policy-section__points">
                  <article
                    v-for="point in pageContent.policyCallout.points"
                    :key="point.title"
                    class="policy-point"
                  >
                    <h3>{{ point.title }}</h3>
                    <p>{{ point.body }}</p>
                  </article>
                </div>
              </div>

              <aside class="policy-section__aside">
                <EvidenceCard v-bind="pageContent.policyCallout.evidence" />
              </aside>
            </div>
          </section>

          <KeyMessageSection
            id="key-message"
            :title="pageContent.keyMessage.title"
            :body="pageContent.keyMessage.body"
            :icon-src="pageContent.keyMessage.iconSrc"
            :icon-alt="pageContent.keyMessage.iconAlt"
          />
        </div>
      </main>

      <aside class="side-directory" aria-label="Page directory">
        <button class="directory-next" type="button" @click="handleNextSection">
          {{ nextButtonLabel }}
        </button>

        <nav class="directory-nav" aria-label="Section index">
          <p class="directory-nav__label">Directory</p>
          <ul class="directory-list">
            <li v-for="(item, index) in navItems" :key="item.key">
              <button
                class="directory-item"
                :class="{ 'is-active': currentNavKey === item.key }"
                type="button"
                :aria-current="currentNavKey === item.key ? 'location' : undefined"
                @click="scrollToSection(item.targetId)"
              >
                <span class="directory-item__index">{{ index + 1 }}</span>
                <span class="directory-item__label">{{ item.label }}</span>
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </div>

    <footer
      ref="footerRef"
      class="site-footer reveal-section"
      :class="{ 'is-visible': footerVisible }"
    >
      <div class="site-footer__grid">
        <section>
          <p class="section-kicker">Sources</p>
          <h2>Image Credits</h2>
          <ul class="footer-list">
            <li v-for="image in pageContent.credits.images" :key="image.label">
              <span v-if="image.url.startsWith('local:')">
                {{ image.label }}
              </span>
              <a v-else :href="image.url" target="_blank" rel="noreferrer">
                {{ image.label }}
              </a>
            </li>
          </ul>
        </section>

        <section>
          <p class="section-kicker">References</p>
          <h2>Reports and News</h2>
          <ul class="footer-list">
            <li v-for="news in pageContent.credits.news" :key="news.label">
              <a :href="news.url" target="_blank" rel="noreferrer">
                {{ news.label }}
              </a>
            </li>
          </ul>
        </section>
      </div>

      <p class="site-footer__note">{{ pageContent.credits.note }}</p>
    </footer>
  </div>
</template>
