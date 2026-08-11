<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

defineProps({
  id: {
    type: String,
    default: undefined,
  },
  lines: {
    type: Array,
    required: true,
  },
  level: {
    type: Number,
    default: 2,
  },
})

const titleRef = ref(null)
const progress = ref(0)
let animationFrame

const updateProgress = () => {
  if (!titleRef.value) return

  const rect = titleRef.value.getBoundingClientRect()
  const viewportHeight = window.innerHeight || 1
  const start = viewportHeight * 1.25
  const end = viewportHeight * 0.45
  const nextProgress = (start - rect.top) / (start - end)

  progress.value = Math.min(1, Math.max(0, nextProgress))
}

const requestUpdate = () => {
  if (animationFrame) return

  animationFrame = window.requestAnimationFrame(() => {
    animationFrame = undefined
    updateProgress()
  })
}

onMounted(() => {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(updateProgress)
  })

  window.addEventListener('scroll', requestUpdate, { passive: true })
  window.addEventListener('resize', requestUpdate)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', requestUpdate)
  window.removeEventListener('resize', requestUpdate)

  if (animationFrame) {
    window.cancelAnimationFrame(animationFrame)
  }
})
</script>

<template>
  <div
    :id="id"
    ref="titleRef"
    class="animated-title"
    :style="{ '--title-progress': progress }"
    :aria-label="lines.join('. ')"
  >
    <component
      :is="`h${level}`"
      v-for="(line, index) in lines"
      :key="line"
      class="animated-title-line"
      :class="[
        `animated-title-line-${index + 1}`,
        index % 2 === 0 ? 'from-left' : 'from-right',
      ]"
    >
      {{ line }}
    </component>
  </div>
</template>

<style scoped>
.animated-title {
  display: grid;
  gap: 0.12em;
  width: min(1240px, 100%);
  margin-bottom: 24px;
  overflow: visible;
}

.animated-title-line {
  --line-delay: 0;
  --line-direction: -1;
  --line-progress: clamp(0, calc((var(--title-progress) - var(--line-delay)) / 0.52), 1);
  --line-ease: calc(1 - (1 - var(--line-progress)) * (1 - var(--line-progress)) * (1 - var(--line-progress)));
  margin: 0;
  max-width: none;
  opacity: var(--line-ease);
  filter: blur(calc((1 - var(--line-ease)) * 8px));
  transform: translateX(calc((1 - var(--line-ease)) * var(--line-direction) * 115vw));
  transition:
    opacity 0.9s ease,
    filter 1.1s ease,
    transform 1.2s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: opacity, transform, filter;
}

.animated-title-line-1 {
  --line-delay: 0;
  justify-self: start;
}

.animated-title-line-2 {
  --line-delay: 0.16;
  justify-self: center;
}

.animated-title-line-3 {
  --line-delay: 0.32;
  justify-self: end;
}

.animated-title-line-4 {
  --line-delay: 0.48;
  justify-self: center;
}

.from-left {
  --line-direction: -1;
}

.from-right {
  --line-direction: 1;
}

@media (max-width: 640px) {
  .animated-title {
    gap: 0.18em;
  }

  .animated-title-line-2,
  .animated-title-line-3,
  .animated-title-line-4 {
    justify-self: start;
  }

  .animated-title-line-2 {
    margin-left: 1.2rem;
  }

  .animated-title-line-3 {
    margin-left: 2.4rem;
  }

  .animated-title-line-4 {
    margin-left: 3.6rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .animated-title-line {
    opacity: 1;
    filter: none;
    transform: none;
  }
}
</style>
