<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#who-we-are', label: 'Who We Are' },
  { href: '#what-we-do', label: 'What We Do' },
  { href: '#process', label: 'How It Works' },
  { href: '#sponsors', label: 'Sponsors' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#book-now', label: 'Book Now' },
]

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <nav class="main-menu" aria-label="Main page sections">
    <button
      class="menu-toggle"
      type="button"
      :aria-expanded="isOpen"
      aria-controls="main-menu-links"
      aria-label="Toggle section navigation"
      @click="isOpen = !isOpen"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div id="main-menu-links" class="menu-panel" :class="{ open: isOpen }">
      <a v-for="link in links" :key="link.href" :href="link.href" @click="closeMenu">
        {{ link.label }}
      </a>
    </div>
  </nav>
</template>

