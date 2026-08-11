<script setup>
import { onMounted } from 'vue'
import BookNowSection from './main-page/BookNowSection.vue'
import HeroSection from './main-page/HeroSection.vue'
import MainMenu from './main-page/MainMenu.vue'
import ProcessSection from './main-page/ProcessSection.vue'
import SponsorsSection from './main-page/SponsorsSection.vue'
import WhatWeDoSection from './main-page/WhatWeDoSection.vue'
import WhoWeAreSection from './main-page/WhoWeAreSection.vue'
import WhyUsSection from './main-page/WhyUsSection.vue'

onMounted(() => {
  document.title = 'Professional Headshot Activations'
})
</script>

<template>
  <main class="headshot-page">
    <MainMenu />
    <HeroSection />
    <WhoWeAreSection />
    <WhatWeDoSection />
    <ProcessSection />
    <SponsorsSection />
    <WhyUsSection />
    <BookNowSection />
  </main>
</template>

<style>
.headshot-page {
  min-height: 100vh;
  overflow-x: hidden;
  background: #fff;
  color: #111;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.5;
}

.headshot-page {
  scroll-behavior: smooth;
}

.main-menu {
  position: fixed;
  top: 18px;
  right: 18px;
  z-index: 20;
}

.menu-toggle {
  width: 46px;
  height: 46px;
  display: inline-grid;
  place-items: center;
  gap: 4px;
  padding: 11px;
  border: 1px solid #111;
  border-radius: 0;
  background: #fff;
  cursor: pointer;
}

.menu-toggle span {
  width: 100%;
  height: 2px;
  background: #111;
}

.menu-panel {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 190px;
  display: none;
  padding: 10px;
  border: 1px solid #111;
  background: #fff;
}

.menu-panel.open {
  display: grid;
}

.menu-panel a {
  padding: 9px 10px;
  color: #111;
  font-weight: 700;
  text-decoration: none;
}

.menu-panel a:hover {
  background: #f0f0f0;
}

.page-section {
  border-bottom: 1px solid #ddd;
  padding: 64px 20px;
}

.section-inner {
  width: min(1180px, 100%);
  margin: 0 auto;
}

.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.section-label {
  margin: 0 0 12px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1,
h2,
h3,
h4,
p,
figure {
  margin-top: 0;
}

.headshot-page h1,
.headshot-page h2,
.headshot-page h3,
.headshot-page h4 {
  color: #111;
}

h1 {
  max-width: 760px;
  font-size: clamp(2.4rem, 7vw, 5rem);
  line-height: 0.95;
}

h2 {
  max-width: 760px;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1;
}

h3 {
  margin-top: 32px;
}

.lede {
  max-width: 720px;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.35;
}

ul,
dl {
  margin-bottom: 24px;
}

dd + dt {
  margin-top: 10px;
}

.compact-list {
  display: grid;
  gap: 2px;
  max-width: 760px;
  margin: 12px 0 24px;
  padding: 0;
  list-style: none;
}

.compact-list li {
  position: relative;
  margin: 0;
  padding-left: 16px;
  line-height: 1.35;
}

.compact-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.62em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
}

.process-steps {
  display: grid;
  gap: 24px;
  margin-bottom: 24px;
}

.process-steps article {
  max-width: 820px;
}

.process-steps h3 {
  margin: 0 0 8px;
}

dt {
  font-weight: 800;
}

dd {
  margin-left: 0;
}

.media-placeholder {
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0 0;
  padding: 24px;
  border: 1px dashed #999;
  background: #f7f7f7;
}

.contact-form {
  display: grid;
  gap: 16px;
  max-width: 560px;
}

.contact-form label {
  display: grid;
  gap: 6px;
  font-weight: 700;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #aaa;
  font: inherit;
}

.contact-form button {
  width: fit-content;
  padding: 10px 18px;
  border: 1px solid #111;
  background: #111;
  color: #fff;
  font: inherit;
  cursor: pointer;
}
</style>
