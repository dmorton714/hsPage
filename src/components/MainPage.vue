<script setup>
import { onMounted } from 'vue'
import BookNowSection from './main-page/BookNowSection.vue'
import HeroSection from './main-page/HeroSection.vue'
import MainMenu from './main-page/MainMenu.vue'
import PriceSection from './main-page/PriceSection.vue'
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
    <PriceSection />
    <BookNowSection />
  </main>
</template>

<style>
.headshot-page {
  min-height: 100vh;
  overflow-x: hidden;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.42), rgba(191, 185, 181, 0.48)),
    var(--hs-grey);
  color: var(--hs-ink);
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
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 999px;
  background: var(--hs-dark-blue);
  box-shadow: var(--hs-shadow);
  cursor: pointer;
}

.menu-toggle span {
  width: 100%;
  height: 2px;
  background: var(--hs-paper);
}

.menu-panel {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 190px;
  display: none;
  padding: 10px;
  border: 1px solid var(--hs-line);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: var(--hs-shadow);
  backdrop-filter: blur(14px);
}

.menu-panel.open {
  display: grid;
}

.menu-panel a {
  padding: 9px 10px;
  border-radius: 6px;
  color: var(--hs-dark-blue);
  font-weight: 700;
  text-decoration: none;
}

.menu-panel a:hover {
  background: rgba(220, 170, 137, 0.24);
  color: var(--hs-dark-orange);
}

.page-section {
  position: relative;
  border-bottom: 1px solid var(--hs-line);
  padding: 82px 20px;
}

.page-section:nth-of-type(even) {
  background: rgba(255, 255, 255, 0.36);
}

.page-section:nth-of-type(4n) {
  background: rgba(220, 170, 137, 0.18);
}

.section-inner {
  width: min(1440px, 100%);
  margin: 0 auto;
}

.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  padding-top: 0;
  background: linear-gradient(135deg, var(--hs-dark-blue), var(--hs-light-blue));
  color: var(--hs-paper);
}

.hero-section::after {
  content: "";
  position: absolute;
  inset: auto 0 0;
  height: 10px;
  background: linear-gradient(90deg, var(--hs-dark-orange), var(--hs-light-orange), var(--hs-light-blue));
}

.hero-section .section-inner {
  padding-block: 24px 52px;
}

.hero-copy {
  max-width: 920px;
  min-width: 0;
}

.hero-video {
  width: 100%;
  max-height: 520px;
  margin-top: 28px;
  aspect-ratio: 16 / 9;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(23, 35, 40, 0.36);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.24);
  object-fit: cover;
}

.company-name {
  margin: 0 0 18px;
  color: var(--hs-paper);
  font-size: clamp(2rem, 6vw, 5rem);
  font-weight: 900;
  letter-spacing: 0;
  line-height: 0.92;
}

.section-label {
  width: fit-content;
  margin: 0 0 16px;
  padding: 7px 12px;
  border-left: 4px solid var(--hs-dark-orange);
  background: rgba(255, 255, 255, 0.7);
  color: var(--hs-light-blue);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0;
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
  color: var(--hs-dark-blue);
}

h1 {
  max-width: 760px;
  font-size: clamp(2.4rem, 7vw, 5rem);
  line-height: 0.95;
  letter-spacing: 0;
}

h2 {
  max-width: 760px;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1;
  letter-spacing: 0;
}

h3 {
  margin-top: 32px;
  color: var(--hs-dark-orange);
}

.lede {
  max-width: 720px;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.35;
  color: var(--hs-dark-blue);
}

.hero-section .lede,
.hero-section p,
.hero-section li {
  color: var(--hs-paper);
}

.hero-section .lede {
  color: #fff;
}

.hero-section p {
  max-width: 820px;
}

.hero-section .compact-list {
  color: var(--hs-paper);
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
  gap: 8px;
  max-width: 760px;
  margin: 12px 0 24px;
  padding: 0;
  list-style: none;
}

.compact-list li {
  position: relative;
  margin: 0;
  padding: 10px 12px 10px 28px;
  border: 1px solid rgba(76, 132, 141, 0.16);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.58);
  line-height: 1.35;
}

.compact-list li::before {
  content: "";
  position: absolute;
  left: 12px;
  top: 0.62em;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--hs-orange);
}

.hero-section .compact-list li {
  border-color: rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
}

.who-we-are-content {
  width: 100%;
}

.who-we-are-panel {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.52fr);
  gap: 22px;
  align-items: stretch;
}

.who-we-are-copy,
.attendee-receives,
.what-we-do-intro {
  padding: 24px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.68);
  box-shadow: 0 12px 32px rgba(48, 82, 92, 0.1);
}

.who-we-are-copy {
  display: grid;
  gap: 16px;
  align-content: center;
}

.who-we-are-stats {
  display: grid;
  gap: 12px;
}

.who-we-are-stats article {
  display: grid;
  align-content: space-between;
  justify-items: center;
  min-height: 150px;
  padding: 20px;
  border-radius: 8px;
  background: var(--hs-dark-blue);
  color: var(--hs-paper);
  box-shadow: var(--hs-shadow);
  text-align: center;
}

.who-we-are-stats article:nth-child(2) {
  background: var(--hs-dark-orange);
}

.who-we-are-stats .stat-value {
  justify-content: center;
}

.stat-value {
  display: flex;
  gap: clamp(10px, 1.6vw, 18px);
  align-items: center;
  justify-content: flex-start;
}

.who-we-are-stats strong {
  color: var(--hs-light-orange);
  font-size: clamp(3rem, 8vw, 5.8rem);
  font-weight: 950;
  line-height: 0.85;
}

.stat-icon {
  width: clamp(56px, 7vw, 92px);
  aspect-ratio: 1;
  flex: 0 0 auto;
  background: rgba(255, 255, 255, 0.82);
  -webkit-mask: var(--stat-icon-url) center / contain no-repeat;
  mask: var(--stat-icon-url) center / contain no-repeat;
}

.who-we-are-stats article > span {
  max-width: 220px;
  font-weight: 900;
  line-height: 1.1;
}

.experience-pillars {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-top: 18px;
}

.experience-pillars article {
  min-height: 154px;
  padding: 18px;
  border-radius: 8px;
  background: rgba(220, 170, 137, 0.22);
  border: 1px solid rgba(48, 82, 92, 0.14);
}

.experience-pillars article:nth-child(even) {
  background: rgba(76, 132, 141, 0.16);
}

.experience-pillars h3,
.attendee-receives h3 {
  margin: 0 0 12px;
  color: var(--hs-dark-orange);
}

.experience-pillars p {
  margin: 0;
  line-height: 1.35;
}

.headshot-thumbnail-footer {
  position: relative;
  overflow: hidden;
  margin-top: 16px;
  padding-block: 10px;
  border-block: 1px solid rgba(48, 82, 92, 0.12);
  mask-image: linear-gradient(90deg, transparent, #000 9%, #000 91%, transparent);
}

.headshot-thumbnail-track {
  display: flex;
  width: max-content;
  gap: 10px;
  animation: thumbnail-scroll 34s linear infinite;
}

.headshot-thumbnail-track img {
  width: 58px;
  aspect-ratio: 1;
  flex: 0 0 auto;
  border: 2px solid rgba(255, 255, 255, 0.82);
  border-radius: 7px;
  object-fit: cover;
  box-shadow: 0 8px 18px rgba(48, 82, 92, 0.14);
}

@keyframes thumbnail-scroll {
  from {
    transform: translateX(calc(-50% - 5px));
  }

  to {
    transform: translateX(0);
  }
}

.what-we-do-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
  align-items: stretch;
}

.what-we-do-intro {
  display: grid;
  gap: 16px;
  align-content: start;
}

.what-we-do-feature {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(180px, 0.42fr);
  gap: 16px;
  align-items: stretch;
}

.what-we-do-feature p {
  align-self: center;
  margin: 0;
}

.what-we-do-headshot {
  width: 100%;
  min-height: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 12px 28px rgba(48, 82, 92, 0.16);
}

.attendee-receives {
  position: relative;
  overflow: hidden;
}

.attendee-receives::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 7px;
  background: linear-gradient(90deg, var(--hs-dark-orange), var(--hs-light-blue));
}

.attendee-receives ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.attendee-receives li {
  min-height: 72px;
  display: grid;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  background: rgba(48, 82, 92, 0.1);
  color: var(--hs-dark-blue);
  font-weight: 800;
  line-height: 1.2;
}

.attendee-receives li:nth-child(3n + 2) {
  background: rgba(220, 170, 137, 0.26);
}

.attendee-receives li:nth-child(3n) {
  background: rgba(195, 86, 39, 0.16);
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 22px;
  position: relative;
  margin: 34px 0 30px;
  counter-reset: process-step;
}

.process-steps::before {
  content: "";
  position: absolute;
  top: 28px;
  right: 7%;
  left: 7%;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--hs-dark-orange), var(--hs-light-orange), var(--hs-light-blue));
}

.process-steps article {
  counter-increment: process-step;
  position: relative;
  max-width: none;
  padding-top: 72px;
}

.process-steps article::before {
  content: counter(process-step);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border: 3px solid var(--hs-light-orange);
  border-radius: 50%;
  background: var(--hs-dark-orange);
  color: var(--hs-paper);
  font-size: 1.1rem;
  font-weight: 900;
  line-height: 1;
  box-shadow: 0 10px 24px rgba(48, 82, 92, 0.16);
}

.process-steps h3 {
  margin: 0 0 10px;
  color: var(--hs-dark-blue);
  font-size: 1.05rem;
  line-height: 1.12;
}

.process-steps p {
  color: var(--hs-ink);
  font-size: 0.96rem;
  line-height: 1.45;
}

.perks-heading {
  width: fit-content;
  margin: 8px 0 14px;
  padding-bottom: 6px;
  border-bottom: 3px solid var(--hs-dark-orange);
}

.process-perks-layout {
  display: grid;
  grid-template-columns: minmax(280px, 0.72fr) minmax(260px, 0.48fr);
  gap: 24px;
  align-items: stretch;
  margin-top: 8px;
}

.process-perks-layout .compact-list {
  margin-bottom: 0;
}

.process-booth-video {
  width: 100%;
  height: 100%;
  border: 1px solid rgba(48, 82, 92, 0.14);
  border-radius: 8px;
  background: var(--hs-dark-blue);
  box-shadow: var(--hs-shadow);
  object-fit: cover;
}

.sponsor-section {
  display: grid;
  gap: 28px;
}

.sponsor-intro {
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) minmax(280px, 1fr);
  gap: 24px;
  align-items: end;
}

.sponsor-intro p:last-child {
  max-width: 620px;
  font-size: 1.08rem;
}

.sponsor-callout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(210px, 0.34fr);
  gap: 24px;
  align-items: stretch;
  padding: clamp(22px, 4vw, 38px);
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(48, 82, 92, 0.92), rgba(76, 132, 141, 0.84)),
    var(--hs-dark-blue);
  color: var(--hs-paper);
  box-shadow: var(--hs-shadow);
}

.sponsor-callout h3 {
  margin: 0 0 12px;
  color: var(--hs-light-orange);
  font-size: clamp(1.55rem, 3vw, 2.45rem);
  line-height: 1;
}

.sponsor-callout p {
  max-width: 760px;
}

.sponsor-callout-stat {
  display: grid;
  place-items: center;
  min-height: 160px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(195, 86, 39, 0.42);
  color: var(--hs-paper);
  font-size: clamp(1.35rem, 2.8vw, 2.1rem);
  font-weight: 900;
  line-height: 1.05;
  text-align: center;
}

.sponsor-surfaces {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.sponsor-surfaces span {
  padding: 9px 12px;
  border: 1px solid rgba(48, 82, 92, 0.16);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.62);
  color: var(--hs-dark-blue);
  font-weight: 800;
  line-height: 1;
}

.sponsor-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.75fr);
  gap: 20px;
}

.sponsor-grid article,
.sponsor-value {
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.68);
  box-shadow: 0 12px 32px rgba(48, 82, 92, 0.1);
}

.sponsor-grid article {
  padding: 24px;
}

.sponsor-grid h3,
.sponsor-value h3 {
  margin: 0 0 14px;
}

.sponsor-grid ul,
.sponsor-value ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sponsor-grid li,
.sponsor-value li {
  padding: 10px 12px;
  border-left: 4px solid var(--hs-orange);
  background: rgba(220, 170, 137, 0.2);
  color: var(--hs-dark-blue);
  font-weight: 700;
  line-height: 1.25;
}

.attention-moments {
  position: relative;
  overflow: hidden;
}

.attention-moments::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 7px;
  background: linear-gradient(90deg, var(--hs-dark-orange), var(--hs-light-blue));
}

.attention-moments ol {
  display: grid;
  gap: 12px;
  margin: 0 0 18px;
  padding: 0;
  counter-reset: sponsor-moment;
  list-style: none;
}

.attention-moments ol li {
  counter-increment: sponsor-moment;
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 12px;
  align-items: center;
  border: 0;
  background: transparent;
  color: var(--hs-ink);
}

.attention-moments ol li::before {
  content: counter(sponsor-moment);
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--hs-dark-orange);
  color: var(--hs-paper);
  font-weight: 900;
}

.attention-moments p {
  color: var(--hs-dark-blue);
  font-weight: 900;
}

.sponsor-value {
  display: grid;
  grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1fr);
  gap: 20px;
  align-items: center;
  padding: 24px;
}

.why-us-dashboard {
  display: grid;
  gap: 24px;
}

.why-us-intro {
  max-width: 850px;
  color: var(--hs-dark-blue);
  font-size: clamp(1.15rem, 2vw, 1.45rem);
  font-weight: 850;
  line-height: 1.32;
}

.proof-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.proof-strip article {
  min-height: 132px;
  display: grid;
  align-content: space-between;
  justify-items: center;
  padding: 20px;
  border-radius: 8px;
  background: var(--hs-dark-blue);
  color: var(--hs-paper);
  box-shadow: var(--hs-shadow);
  text-align: center;
}

.proof-strip .stat-value {
  justify-content: center;
}

.proof-strip article:nth-child(2) {
  background: var(--hs-light-blue);
}

.proof-strip article:nth-child(3) {
  background: var(--hs-dark-orange);
}

.proof-strip strong {
  display: block;
  color: var(--hs-light-orange);
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  font-weight: 950;
  line-height: 0.9;
}

.proof-strip article:nth-child(3) strong {
  color: var(--hs-paper);
  font-size: clamp(1.9rem, 4.2vw, 3.4rem);
}

.proof-strip span {
  max-width: 260px;
  font-weight: 800;
  line-height: 1.15;
}

.why-us-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 16px;
}

.why-us-grid article {
  min-height: 180px;
  display: grid;
  align-content: space-between;
  grid-column: span 2;
  padding: 20px;
  border: 1px solid rgba(48, 82, 92, 0.14);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.68);
  box-shadow: 0 12px 32px rgba(48, 82, 92, 0.1);
}

.why-us-grid article:nth-child(4),
.why-us-grid article:nth-child(5) {
  grid-column: span 3;
}

.why-us-grid article:nth-child(even) {
  background: rgba(220, 170, 137, 0.22);
}

.why-us-grid h3 {
  margin: 0 0 14px;
  color: var(--hs-dark-orange);
}

.why-us-grid p {
  margin: 0;
  color: var(--hs-ink);
}

.why-us-close {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  overflow: hidden;
  border-radius: 8px;
  background: var(--hs-line);
  box-shadow: var(--hs-shadow);
}

.why-us-close p {
  min-height: 118px;
  display: grid;
  align-items: center;
  margin: 0;
  padding: 20px;
  background: var(--hs-paper);
  color: var(--hs-dark-blue);
  font-size: 1.08rem;
  font-weight: 900;
  line-height: 1.2;
}

.why-us-close p:nth-child(2) {
  background: var(--hs-light-orange);
}

.why-us-close p:nth-child(3) {
  background: var(--hs-dark-orange);
  color: var(--hs-paper);
}

dt {
  font-weight: 800;
  color: var(--hs-dark-blue);
}

dd {
  margin-left: 0;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(48, 82, 92, 0.14);
}

.media-placeholder {
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0 0;
  padding: 24px;
  border: 1px solid rgba(48, 82, 92, 0.16);
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(195, 86, 39, 0.2), rgba(76, 132, 141, 0.26));
  box-shadow: var(--hs-shadow);
}

.book-now-layout {
  display: grid;
  grid-template-columns: minmax(320px, 1fr) minmax(340px, 0.82fr);
  gap: 24px;
  align-items: stretch;
}

.book-now-image {
  width: 100%;
  height: 100%;
  min-height: 520px;
  border-radius: 8px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--hs-shadow);
}

.contact-form {
  display: grid;
  gap: 16px;
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
  border-radius: 8px;
  background: var(--hs-paper);
  box-shadow: var(--hs-shadow);
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
  padding: 12px;
  border: 1px solid rgba(48, 82, 92, 0.28);
  border-radius: 6px;
  background: var(--hs-soft);
  color: var(--hs-ink);
  font: inherit;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--hs-light-blue);
  outline: 3px solid rgba(76, 132, 141, 0.18);
}

.contact-form button {
  width: fit-content;
  padding: 12px 20px;
  border: 1px solid var(--hs-dark-orange);
  border-radius: 999px;
  background: var(--hs-dark-orange);
  color: var(--hs-paper);
  font: inherit;
  font-weight: 800;
  cursor: pointer;
}

@media (max-width: 720px) {
  .page-section {
    padding: 58px 18px;
  }

  .hero-section.page-section {
    padding-top: 20px;
  }

  .hero-section .section-inner {
    padding-block: 12px 42px;
  }

  .hero-video {
    max-height: none;
    margin-top: 22px;
  }

  .contact-form {
    padding: 18px;
  }

  .process-steps {
    grid-template-columns: 1fr;
    gap: 26px;
    margin-top: 28px;
    padding-left: 18px;
  }

  .process-steps::before {
    top: 0;
    bottom: 0;
    left: 46px;
    right: auto;
    width: 3px;
    height: auto;
    background: linear-gradient(180deg, var(--hs-dark-orange), var(--hs-light-orange), var(--hs-light-blue));
  }

  .process-steps article {
    padding-top: 0;
    padding-left: 72px;
  }

  .process-steps article::before {
    left: 0;
  }

  .who-we-are-panel,
  .process-perks-layout,
  .book-now-layout,
  .what-we-do-layout {
    grid-template-columns: 1fr;
  }

  .stat-value {
    justify-content: flex-start;
  }

  .experience-pillars,
  .what-we-do-feature,
  .attendee-receives ul {
    grid-template-columns: 1fr;
  }

  .experience-pillars article,
  .attendee-receives li {
    min-height: auto;
  }

  .headshot-thumbnail-footer {
    margin-top: 14px;
  }

  .headshot-thumbnail-track {
    gap: 8px;
    animation-duration: 26s;
  }

  .headshot-thumbnail-track img {
    width: 48px;
  }

  .what-we-do-headshot {
    max-height: 360px;
  }

  .process-booth-video {
    height: auto;
    aspect-ratio: 16 / 9;
  }

  .book-now-image {
    min-height: 320px;
    max-height: 460px;
  }

  .sponsor-intro,
  .sponsor-callout,
  .sponsor-grid,
  .sponsor-value {
    grid-template-columns: 1fr;
  }

  .sponsor-callout-stat {
    min-height: auto;
  }

  .sponsor-grid ul,
  .sponsor-value ul {
    grid-template-columns: 1fr;
  }

  .proof-strip,
  .why-us-close {
    grid-template-columns: 1fr;
  }

  .why-us-grid {
    grid-template-columns: 1fr;
  }

  .why-us-grid article,
  .why-us-grid article:nth-child(4),
  .why-us-grid article:nth-child(5) {
    grid-column: auto;
    min-height: auto;
  }
}
</style>
