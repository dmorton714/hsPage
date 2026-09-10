<script setup>
import AnimatedTitle from './AnimatedTitle.vue'

const publicAssetPath = (path) => `${import.meta.env.BASE_URL}${path}`

const cameraIcon = publicAssetPath('camera-outline.svg')
const schoolIcon = publicAssetPath('school-outline.svg')
const stopwatchIcon = publicAssetPath('stopwatch-outline.svg')
</script>

<template>
  <section id="why-us" class="page-section" aria-labelledby="why-us-title">
    <div class="section-inner">
      <AnimatedTitle
        id="why-us-title"
        label="Why Us"
        :lines="['Experience Behind the Camera', 'Technology Behind the Experience']"
      />
      <div class="why-us-dashboard">
        <p class="why-us-intro">
          We combine decades of professional event photography experience with a streamlined technology-driven workflow
          built specifically for high-volume conference environments.
        </p>

        <div class="proof-strip" aria-label="Experience proof points">
          <article>
            <div class="stat-value">
              <strong>40+</strong>
              <span
                class="stat-icon"
                :style="{ '--stat-icon-url': `url(${cameraIcon})` }"
                aria-hidden="true"
              ></span>
            </div>
            <span>Years of professional photography experience</span>
          </article>
          <article>
            <div class="stat-value">
              <strong>30+</strong>
              <span
                class="stat-icon"
                :style="{ '--stat-icon-url': `url(${schoolIcon})` }"
                aria-hidden="true"
              ></span>
            </div>
            <span>Years in conference and event spaces</span>
          </article>
          <article>
            <div class="stat-value">
              <strong>Minutes</strong>
              <span
                class="stat-icon"
                :style="{ '--stat-icon-url': `url(${stopwatchIcon})` }"
                aria-hidden="true"
              ></span>
            </div>
            <span>To finished headshot delivery in most cases</span>
          </article>
        </div>

        <div class="why-us-grid">
          <article>
            <h3>Professional Retouching</h3>
            <p>Every delivered image receives professional finishing rather than simply being exported from the camera.</p>
          </article>
          <article>
            <h3>Fast Turnaround</h3>
            <p>
              Selected images move directly from the photography station into editing and delivery, so attendees are not
              left waiting.
            </p>
          </article>
          <article>
            <h3>Scheduled Sessions</h3>
            <p>
              Attendees reserve their time in advance, helping eliminate long lines and keeping the experience smooth.
            </p>
          </article>
          <article>
            <h3>Sponsor Customization</h3>
            <p>
              From the physical booth to registration and delivery pages, the activation can be customized around the
              sponsor.
            </p>
          </article>
          <article>
            <h3>Turnkey Experience</h3>
            <p>
              We handle photography, attendee flow, image selection, retouching, processing, and digital delivery.
            </p>
          </article>
        </div>

        <div class="why-us-close">
          <p>Give your attendees something they’ll actually use.</p>
          <p>Give your sponsors something attendees will actually engage with.</p>
          <p>
            Bring a premium professional headshot experience to your next conference, convention, trade show, or
            corporate event.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
