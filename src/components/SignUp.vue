<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const signup = ref({
  name: '',
  email: '',
  company: '',
  time: '',
})

const timeSlots = [
  '9:00 AM - 9:15 AM',
  '9:15 AM - 9:30 AM',
  '9:30 AM - 9:45 AM',
  '9:45 AM - 10:00 AM',
  '10:00 AM - 10:15 AM',
  '10:15 AM - 10:30 AM',
  '10:30 AM - 10:45 AM',
  '10:45 AM - 11:00 AM',
]

const signupEmailHref = computed(() => {
  const subject = encodeURIComponent('Headshot time slot signup')
  const body = encodeURIComponent(
    [
      `Name: ${signup.value.name}`,
      `Email: ${signup.value.email}`,
      `Company / Team: ${signup.value.company}`,
      `Preferred time slot: ${signup.value.time}`,
    ].join('\n')
  )

  return `mailto:danny@staaty.com?subject=${subject}&body=${body}`
})

let observer

onMounted(() => {
  document.title = 'Headshot Sign Up'

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        if (entry.target.classList.contains('reveal')) {
          entry.target.classList.add('visible')
        } else {
          entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
        }
      })
    },
    { threshold: 0.16 }
  )

  document
    .querySelectorAll('.welcome-hero, .story-section, .stats-strip, .sports-section')
    .forEach((el) => observer.observe(el))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <main class="welcome-page">
    <section class="welcome-hero">
      <img class="hero-image" src="/bored.jpeg" alt="Fans distracted while a fight plays on TV" />
      <div class="hero-shade"></div>
      <div class="hero-noise"></div>

      <div class="hero-stack">
        <img
          class="conference-logo reveal reveal-up"
          src="/mit-sloan-sports-analytics-logo.svg"
          alt="MIT Sloan Sports Analytics Conference"
        />
        <div class="hero-content reveal reveal-up">
          <p class="sponsor-label">Head Shots sponsored by:</p>
          <img class="staaty-logo" src="/staaty_logo_full_blu.png" alt="STAATY" />
          <p class="eyebrow">Conference headshot booth</p>
          <h1>Reserve Your Headshot Slot</h1>
          <p class="hero-copy">
            Choose a time for your complimentary headshot session, courtesy of STAATY.
          </p>
          <div class="scroll-cue" aria-hidden="true">
            <span>Scroll</span>
            <span class="scroll-arrows">↓ ↓ ↓</span>
          </div>
        </div>
      </div>
    </section>

    <section id="download" class="story-section problem-section">
      <div class="story-copy reveal reveal-left">
        <p class="eyebrow">The problem</p>
        <h2>Find Your fans Scrolling Instead of Engaging?</h2>
        <p>
          The broadcast tells one story. Your group chat tells another. STAATY gives fans something better to do
          with that second screen.
        </p>
      </div>
      <div class="image-link-stack reveal reveal-right">
        <div class="story-card image-card wide-card">
          <img src="/bored.jpeg" alt="Fans looking at phones during a live fight" />
          <a class="image-tag" href="https://staaty.com" target="_blank" rel="noreferrer">Disconnected</a>
        </div>
        <a class="under-image-link" href="https://staaty.com" target="_blank" rel="noreferrer">Visit STAATY</a>
      </div>
    </section>

    <div class="section-scroll-cue" aria-hidden="true">
      <span>Scroll</span>
      <span>↓ ↓ ↓</span>
    </div>

    <section class="marquee-band" aria-label="STAATY experience">
      <div class="marquee-track">
        <span>Compare</span>
        <span>Explore</span>
        <span>Predict</span>
        <span>React</span>
        <span>Understand</span>
        <span>Compare</span>
        <span>Explore</span>
        <span>Predict</span>
        <span>React</span>
        <span>Understand</span>
      </div>
    </section>



    <section class="story-section payoff-section">
      <div class="story-copy reveal reveal-left">
        <p class="eyebrow pink">The Solution</p>
        <h2>Feel Like the Expert in the Room</h2>
        <h3>Sports Stats Shouldn’t Feel Like Homework</h3>
        <p>
          No buried spreadsheets. No stat overload. Just clean visuals, athlete pages, head-to-head tools, and
          team breakdowns built for the way fans actually watch. Follow the numbers behind the action before everyone else
          catches up.
        </p>
        <div class="feature-pills">
          <a href="https://www.staaty.com/sls/h2h-compare" target="_blank" rel="noreferrer">Head-to-head views</a>
          <a href="https://www.staaty.com/ufc/fighter/7826923b47f8d72a" target="_blank" rel="noreferrer">Athlete pages</a>
          <a href="https://www.staaty.com/psl-team/Los%20Santos" target="_blank" rel="noreferrer">Team breakdowns</a>
          <a href="https://www.staaty.com/ufc/events" target="_blank" rel="noreferrer">Matchup tools</a>
        </div>
      </div>
      <div class="story-card reveal reveal-right phone-card">
        <img src="/engaged.PNG" alt="Fans engaged with STAATY while watching a fight" />
        <a
          class="image-tag"
          href="https://www.staaty.com/ufc/compare?f1=f4c49976c75c5ab2&f2=032cc3922d871c7f"
          target="_blank"
          rel="noreferrer"
        >
          Locked In
        </a>
      </div>
    </section>

    <div class="section-scroll-cue" aria-hidden="true">
      <span>Scroll</span>
      <span>↓ ↓ ↓</span>
    </div>

    <section class="stats-strip">
      <div class="stat-pop reveal reveal-up" tabindex="0">
        <strong>8,800+</strong>
        <span>Events Logged</span>
        <p>Dozens of skateboard competitions and Power Slap events, plus thousands of fights.</p>
      </div>
      <div class="stat-pop reveal reveal-up" tabindex="0">
        <strong>4</strong>
        <span>sports to explore</span>
        <p>Including UFC, PSL, SLS, and Power Slap, with more coming soon.</p>
      </div>
      <div class="stat-pop reveal reveal-up" tabindex="0">
        <strong>1</strong>
        <span>smarter second screen</span>
        <p>STAATY becomes a data hub to follow along with your sport.</p>
      </div>
    </section>

    <div class="section-scroll-cue" aria-hidden="true">
      <span>Scroll</span>
      <span>↓ ↓ ↓</span>
    </div>

    <section class="story-section solution-section">
      <div class="story-card reveal reveal-left phone-card headshot-card">
          <img src="/headshot.jpg" alt="STAATY sports analytics on tablet and phone" />
          <!-- <span class="image-tag">Download Your Images</span> -->
      </div>
      <div class="story-copy reveal reveal-right">
        <img class="download-staaty-logo" src="/staaty_logo_full_blu.png" alt="STAATY" />
        <p class="eyebrow blue">Reserve Your Time</p>
        <h2>Sign Up for a Headshot Slot</h2>
        <p>
          Add your details and preferred time. We will confirm your spot for the STAATY headshot booth at the MIT
          Sloan Sports Analytics Conference.
        </p>
        <form class="signup-form">
          <label>
            Name
            <input v-model="signup.name" type="text" name="name" autocomplete="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input v-model="signup.email" type="email" name="email" autocomplete="email" placeholder="you@example.com" />
          </label>
          <label>
            Company / Team
            <input v-model="signup.company" type="text" name="company" placeholder="Organization" />
          </label>
          <label>
            Preferred Time
            <select v-model="signup.time" name="time">
              <option value="" disabled>Select a time slot</option>
              <option v-for="slot in timeSlots" :key="slot" :value="slot">{{ slot }}</option>
            </select>
          </label>
          <a class="image-link-button signup-submit" :href="signupEmailHref">Request Slot</a>
        </form>
      </div>
    </section>

    <section class="contact-strip">
      <a href="https://staaty.com" target="_blank" rel="noreferrer">Visit STAATY</a>
      <a href="mailto:danny@staaty.com">Contact Us To Learn More</a>
    </section>
  </main>
</template>

<style scoped>
.welcome-page {
  --staaty-blue: #22a7ff;
  --staaty-cyan: #5ee7ff;
  --staaty-red: #ff355e;
  --staaty-lime: #baff29;
  --staaty-yellow: #ffd23f;
  --ink: #05070c;
  --panel: rgba(8, 13, 24, 0.78);
  width: 100%;
  min-height: 100vh;
  margin: 0;
  overflow: hidden;
  background:
    radial-gradient(circle at 18% 14%, rgba(34, 167, 255, 0.24), transparent 28rem),
    radial-gradient(circle at 88% 34%, rgba(255, 53, 94, 0.18), transparent 24rem),
    linear-gradient(180deg, #020409, #07101c 36%, #04060b 100%);
  color: #fff;
  font-family: "Inter", "Segoe UI", system-ui, sans-serif;
}

.welcome-hero {
  position: relative;
  min-height: 100svh;
  display: grid;
  align-items: center;
  justify-items: center;
  overflow: hidden;
  padding: 24px;
  isolation: isolate;
}

.hero-image,
.hero-shade,
.hero-noise {
  position: absolute;
  inset: 0;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 46%;
  z-index: -3;
  transform: scale(1.08);
}

.hero-shade {
  z-index: -2;
  background:
    radial-gradient(circle at 50% 44%, rgba(34, 167, 255, 0.22), transparent 30rem),
    linear-gradient(90deg, rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.8)),
    linear-gradient(180deg, rgba(0, 0, 0, 0.38), rgba(0, 0, 0, 0.9));
}

.hero-noise {
  z-index: -1;
  opacity: 0.14;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: linear-gradient(180deg, #000, transparent 82%);
}

.hero-stack {
  width: min(980px, calc(100% - 72px));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.conference-logo {
  width: 100%;
  margin-bottom: 18px;
  filter: drop-shadow(0 18px 34px rgba(0, 0, 0, 0.58));
}

.hero-content {
  box-sizing: border-box;
  width: 100%;
  padding: clamp(24px, 4vw, 44px);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 30px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.03) 42%, rgba(0, 0, 0, 0.16)),
    rgba(2, 6, 12, 0.66);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 32px 90px rgba(0, 0, 0, 0.54);
  backdrop-filter: blur(18px) saturate(1.25);
}

.staaty-logo {
  width: min(150px, 36vw);
  margin-bottom: 8px;
  filter:
    drop-shadow(1px 0 0 #fff)
    drop-shadow(-1px 0 0 #fff)
    drop-shadow(0 1px 0 #fff)
    drop-shadow(0 -1px 0 #fff);
}

.sponsor-label {
  margin: 0 0 12px;
  color: rgba(255, 255, 255, 0.84);
  font-size: clamp(0.95rem, 2vw, 1.32rem);
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.eyebrow {
  margin: 0 0 10px;
  color: var(--staaty-yellow);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.eyebrow.blue {
  color: var(--staaty-cyan);
}

.eyebrow.pink {
  color: var(--staaty-red);
}

.eyebrow.green {
  color: var(--staaty-lime);
}

h1,
h2 {
  margin: 0;
  line-height: 0.96;
  letter-spacing: 0;
  text-transform: uppercase;
}

h1 {
  font-size: clamp(2.05rem, 4.8vw, 4.25rem);
  font-weight: 1000;
}

h2 {
  font-size: clamp(2rem, 5vw, 4.7rem);
  font-weight: 1000;
}

.hero-copy,
.story-copy p,
.sports-heading p {
  color: rgba(255, 255, 255, 0.82);
  font-size: clamp(1.05rem, 2.1vw, 1.32rem);
  line-height: 1.55;
}

.hero-copy {
  max-width: 720px;
  margin: 16px auto 0;
}

.hero-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.primary-action,
.ghost-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 999px;
  color: #fff;
  font-weight: 900;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.primary-action {
  background: linear-gradient(135deg, var(--staaty-blue), var(--staaty-red));
  box-shadow: 0 18px 36px rgba(34, 167, 255, 0.22);
}

.ghost-action {
  border: 1px solid rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.08);
}

.primary-action:hover,
.ghost-action:hover,
.league-card:hover {
  transform: translateY(-4px);
}

.scroll-cue {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  margin-top: 24px;
  padding: 8px 14px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.34);
  backdrop-filter: blur(12px);
  text-shadow: 0 2px 14px rgba(0, 0, 0, 0.8);
  animation: pulseCue 1.8s ease-in-out infinite;
}

.scroll-arrows {
  color: var(--staaty-cyan);
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  line-height: 1;
}

.section-scroll-cue {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  gap: 2px;
  margin: -20px auto 34px;
  padding: 9px 18px;
  border: 1px solid rgba(94, 231, 255, 0.22);
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.76);
  background: rgba(255, 255, 255, 0.06);
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  animation: pulseCue 1.8s ease-in-out infinite;
}

.section-scroll-cue span:last-child {
  color: var(--staaty-cyan);
  font-size: 0.88rem;
  line-height: 1;
}

.story-section {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
  gap: clamp(24px, 4vw, 54px);
  align-items: center;
  width: min(1180px, calc(100% - 40px));
  min-height: 76svh;
  margin: 0 auto;
  padding: 62px 0;
}

.solution-section {
  grid-template-columns: minmax(320px, 0.9fr) minmax(0, 1.1fr);
}

.story-section.solution-section {
  min-height: 64svh;
  padding-bottom: 36px;
}

.story-copy {
  position: relative;
}

.story-copy::before {
  content: "";
  position: absolute;
  width: 92px;
  height: 6px;
  top: -28px;
  left: 0;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--staaty-blue), var(--staaty-red), var(--staaty-lime));
}

.story-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.34);
}

.story-card::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.18), transparent 34%, rgba(34, 167, 255, 0.14));
}

.story-card img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.headshot-card {
  border-radius: 0;
}

.headshot-card img {
  border-radius: 0;
}

.image-link-stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
}

.image-link-stack .story-card {
  width: 100%;
}

.under-image-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  min-height: 50px;
  padding: 0 22px;
  border: 1px solid rgba(94, 231, 255, 0.34);
  border-radius: 999px;
  color: var(--staaty-cyan);
  background: rgba(34, 167, 255, 0.12);
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  font-weight: 900;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease, color 0.25s ease;
}

.under-image-link:hover {
  color: #fff;
  transform: translateY(-3px);
  border-color: rgba(94, 231, 255, 0.62);
  background: rgba(34, 167, 255, 0.2);
}

.wide-card {
  aspect-ratio: 16 / 10;
}

.phone-card {
  max-height: none;
}

.phone-card img {
  height: auto;
  object-fit: contain;
}

.solution-section .phone-card {
  width: fit-content;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  background: transparent;
  box-shadow: none;
}

.solution-section .phone-card::after {
  display: none;
}

.solution-section .phone-card img {
  width: auto;
  max-width: 100%;
  max-height: 560px;
}

.solution-section .phone-card .image-tag {
  left: 18px;
  bottom: 18px;
  translate: none;
}

.payoff-section .phone-card {
  width: fit-content;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  background: transparent;
  box-shadow: none;
}

.payoff-section .phone-card::after {
  display: none;
}

.payoff-section .phone-card img {
  width: auto;
  max-width: 100%;
  max-height: 560px;
}

.payoff-section .phone-card .image-tag {
  left: 18px;
  bottom: 18px;
  translate: none;
}

.image-tag {
  position: absolute;
  left: 18px;
  bottom: 18px;
  z-index: 1;
  padding: 8px 12px;
  border-radius: 999px;
  color: #06101c;
  background: var(--staaty-lime);
  font-size: 0.72rem;
  font-weight: 1000;
  letter-spacing: 0.12em;
  text-decoration: none;
  text-transform: uppercase;
}

.feature-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.feature-pills a,
.feature-pills span {
  padding: 9px 12px;
  border: 1px solid rgba(94, 231, 255, 0.28);
  border-radius: 999px;
  color: #dff9ff;
  background: rgba(34, 167, 255, 0.12);
  font-size: 0.86rem;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.feature-pills a:hover {
  transform: translateY(-3px);
  border-color: rgba(94, 231, 255, 0.5);
  background: rgba(34, 167, 255, 0.2);
}

.process-section {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 70px 0;
}

.process-heading {
  max-width: 860px;
  margin-bottom: 34px;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.process-card,
.sponsor-panel {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.24);
}

.process-card {
  padding: 24px;
}

.process-card strong {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  margin-bottom: 18px;
  border-radius: 50%;
  color: #06101c;
  background: var(--staaty-lime);
  font-size: 1.2rem;
  font-weight: 1000;
}

.process-card h3,
.sponsor-panel h3 {
  margin: 0 0 12px;
  color: #fff;
  font-size: clamp(1.1rem, 2vw, 1.45rem);
  line-height: 1.12;
  text-transform: uppercase;
}

.process-card p {
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.45;
}

.sponsor-panel {
  padding: 30px;
}

.sponsor-panel ul {
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.sponsor-panel li {
  color: rgba(255, 255, 255, 0.84);
  font-weight: 800;
  line-height: 1.35;
}

.sponsor-panel li::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 10px;
  border-radius: 50%;
  background: var(--staaty-cyan);
}

.image-link-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-height: 56px;
  margin: 2px 0 20px;
  padding: 0 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  color: #06101c;
  background: linear-gradient(135deg, var(--staaty-lime), var(--staaty-cyan));
  box-shadow: 0 18px 36px rgba(94, 231, 255, 0.18);
  font-size: clamp(1rem, 2vw, 1.18rem);
  font-weight: 1000;
  letter-spacing: 0.06em;
  text-decoration: none;
  text-transform: uppercase;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.image-link-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 46px rgba(94, 231, 255, 0.24);
}

.signup-form {
  display: grid;
  gap: 14px;
  width: min(520px, 100%);
  margin-top: 24px;
}

.signup-form label {
  display: grid;
  gap: 7px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.signup-form input,
.signup-form select {
  box-sizing: border-box;
  width: 100%;
  min-height: 48px;
  padding: 0 14px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
  font: 700 1rem/1.2 "Inter", "Segoe UI", system-ui, sans-serif;
  outline: none;
}

.signup-form input::placeholder {
  color: rgba(255, 255, 255, 0.42);
}

.signup-form input:focus,
.signup-form select:focus {
  border-color: rgba(94, 231, 255, 0.56);
  box-shadow: 0 0 0 3px rgba(94, 231, 255, 0.12);
}

.signup-form select option {
  color: #06101c;
}

.signup-submit {
  width: 100%;
  margin-top: 4px;
}

.download-staaty-logo {
  width: min(150px, 42vw);
  margin-bottom: 14px;
  filter:
    drop-shadow(1px 0 0 #fff)
    drop-shadow(-1px 0 0 #fff)
    drop-shadow(0 1px 0 #fff)
    drop-shadow(0 -1px 0 #fff);
}

.contact-strip {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  width: min(1180px, calc(100% - 40px));
  margin: 8px auto 48px;
}

.contact-strip a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 999px;
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
  font-size: 0.9rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.contact-strip a:hover {
  transform: translateY(-3px);
  border-color: rgba(94, 231, 255, 0.42);
  background: rgba(94, 231, 255, 0.12);
}

.marquee-band {
  overflow: hidden;
  border-block: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(90deg, var(--staaty-red), var(--staaty-blue), var(--staaty-lime));
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 18s linear infinite;
}

.marquee-track span {
  padding: 14px 28px;
  color: #020409;
  font-size: clamp(1.2rem, 3vw, 2.2rem);
  font-weight: 1000;
  text-transform: uppercase;
}

.stats-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: start;
  gap: 16px;
  width: min(980px, calc(100% - 40px));
  margin: 0 auto 62px;
}

.stat-pop {
  position: relative;
  align-self: start;
  overflow: hidden;
  padding: 28px 18px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.07);
  outline: none;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease,
    padding 0.25s ease;
}

.stat-pop:hover,
.stat-pop:focus-visible {
  transform: translateY(-4px);
  border-color: rgba(94, 231, 255, 0.42);
  background: rgba(255, 255, 255, 0.1);
  padding-bottom: 30px;
}

.stat-pop strong {
  display: block;
  color: var(--staaty-yellow);
  font-size: clamp(2.3rem, 6vw, 4.8rem);
  line-height: 1;
}

.stat-pop span {
  display: block;
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.86rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.stat-pop p {
  max-width: 24ch;
  max-height: 0;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.88rem;
  font-weight: 700;
  line-height: 1.35;
  opacity: 0;
  transform: translateY(10px);
  transition:
    max-height 0.3s ease,
    margin-top 0.25s ease,
    opacity 0.25s ease,
    transform 0.25s ease;
}

.stat-pop:hover p,
.stat-pop:focus-visible p {
  max-height: 120px;
  margin-top: 14px;
  opacity: 1;
  transform: translateY(0);
}

.sports-section {
  min-height: 100svh;
  padding: 78px 20px 96px;
  background:
    radial-gradient(circle at 82% 18%, rgba(186, 255, 41, 0.16), transparent 24rem),
    radial-gradient(circle at 12% 80%, rgba(255, 53, 94, 0.18), transparent 22rem),
    #020409;
}

.sports-heading {
  max-width: 820px;
  margin: 0 auto 38px;
  text-align: center;
}

.mini-logo {
  width: 128px;
  margin-bottom: 12px;
}

.league-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  width: min(1180px, 100%);
  margin: 0 auto;
}

.league-card {
  min-height: 250px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 26px;
  color: #fff;
  text-decoration: none;
  background:
    linear-gradient(160deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.03)),
    rgba(255, 255, 255, 0.06);
  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.28);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.league-card:hover {
  border-color: rgba(94, 231, 255, 0.46);
  box-shadow: 0 28px 70px rgba(34, 167, 255, 0.16);
}

.league-card img {
  width: 100%;
  max-height: 82px;
  flex: 1;
  object-fit: contain;
  object-position: center;
  filter: drop-shadow(0 10px 22px rgba(0, 0, 0, 0.42));
}

.league-card.sls img {
  width: 280px;
  max-height: 140px;
}

.league-card span {
  color: rgba(255, 255, 255, 0.78);
  font-weight: 800;
  line-height: 1.35;
  flex: 0 0 auto;
}

.reveal {
  opacity: 0;
  transform: translateY(34px) scale(0.98);
  filter: blur(8px);
  transition:
    opacity 0.78s ease,
    transform 0.86s cubic-bezier(0.16, 1, 0.3, 1),
    filter 0.78s ease;
  will-change: opacity, transform, filter;
}

.reveal-left {
  transform: translateX(-110vw) translateY(18px) scale(0.96);
}

.reveal-right {
  transform: translateX(110vw) translateY(18px) scale(0.96);
}

.reveal-up {
  transform: translateY(42px) scale(0.96);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

.story-card.visible {
  animation: cardFloatIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.story-card.visible img {
  animation: imageBreathe 7s ease-in-out 0.5s infinite alternate;
}

.story-card.visible .image-tag {
  animation: tagPop 0.52s cubic-bezier(0.16, 1, 0.3, 1) 0.28s both;
}

.stat-pop:nth-child(2),
.league-card:nth-child(2) {
  transition-delay: 0.08s;
}

.stat-pop:nth-child(3),
.league-card:nth-child(3) {
  transition-delay: 0.16s;
}

.league-card:nth-child(4) {
  transition-delay: 0.24s;
}

@keyframes pulseCue {
  0%, 100% {
    opacity: 0.5;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-8px);
  }
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes cardFloatIn {
  0% {
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.28);
  }
  100% {
    box-shadow: 0 32px 80px rgba(0, 0, 0, 0.34);
  }
}

@keyframes imageBreathe {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.035);
  }
}

@keyframes tagPop {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.82);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 940px) {
  .story-section,
  .solution-section {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 56px 0;
  }

  .solution-section .story-card {
    order: 2;
  }

  .league-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .process-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .welcome-hero {
    min-height: 100svh;
    padding: 22px 0 52px;
  }

  .hero-stack {
    width: min(calc(100% - 28px), 420px);
  }

  .conference-logo {
    margin-bottom: 12px;
  }

  .hero-content {
    width: 100%;
    padding: 20px 16px;
    border-radius: 20px;
  }

  .staaty-logo {
    width: min(104px, 34vw);
    margin-bottom: 6px;
  }

  .sponsor-label {
    margin-bottom: 8px;
    font-size: clamp(0.84rem, 4.2vw, 1rem);
  }

  .eyebrow {
    margin-bottom: 8px;
    font-size: 0.66rem;
  }

  h1 {
    font-size: clamp(1.78rem, 8.4vw, 2.65rem);
  }

  .hero-copy {
    margin-top: 12px;
    font-size: 0.98rem;
    line-height: 1.42;
  }

  .hero-actions {
    margin-top: 16px;
    flex-direction: row;
  }

  h2 {
    font-size: clamp(2rem, 11vw, 3.35rem);
  }

  .reveal-left,
  .reveal-right {
    transform: translateY(34px) scale(0.97);
  }

  .primary-action,
  .ghost-action {
    width: auto;
    min-height: 42px;
    padding: 0 18px;
    font-size: 0.82rem;
  }

  .story-section {
    width: min(100% - 28px, 1180px);
  }

  .image-link-stack {
    gap: 28px;
  }

  .image-link-stack .under-image-link {
    margin-top: 10px;
  }

  .payoff-section .phone-card {
    width: 100%;
  }

  .payoff-section .phone-card img {
    width: 100%;
  }

  .contact-strip {
    margin-top: 22px;
  }

  .stats-strip,
  .league-grid,
  .process-grid {
    grid-template-columns: 1fr;
  }

  .league-card {
    min-height: 190px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }

  .reveal {
    opacity: 1;
    transform: none;
    filter: none;
  }
}
</style>
