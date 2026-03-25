import { onBeforeUnmount, onMounted, ref } from 'vue';

export function useReveal() {
  const rootRef = ref<HTMLElement | null>(null);
  const isVisible = ref(false);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      isVisible.value = true;
      return;
    }

    if (!rootRef.value) {
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry?.isIntersecting) {
          isVisible.value = true;
          observer?.disconnect();
          observer = null;
        }
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    observer.observe(rootRef.value);
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
  });

  return {
    rootRef,
    isVisible,
  };
}
