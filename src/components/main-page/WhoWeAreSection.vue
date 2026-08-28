<script setup>
import AnimatedTitle from './AnimatedTitle.vue'
</script>

<template>
  <section id="who-we-are" class="page-section" aria-labelledby="who-we-are-title">
    <div class="section-inner">
      <AnimatedTitle
        id="who-we-are-title"
        label="Who We Are"
        :lines="['More Than 40 Years', 'Behind the Camera']"
      />
      <div class="who-we-are-panel">
        <div class="who-we-are-copy">
          <p class="lede">
            Our team brings more than 40 years of professional photography experience, including more than 30 years
            specializing in conferences, corporate events, professional headshots, and event coverage.
          </p>
          <p>
            We understand that photographing hundreds of people at an event requires more than taking a great picture.
            It requires a process that can work efficiently in the middle of a busy conference floor.
          </p>
        </div>

        <div class="who-we-are-stats" aria-label="Team experience">
          <article>
            <strong>40+</strong>
            <span>Years behind the camera</span>
          </article>
          <article>
            <strong>30+</strong>
            <span>Years in conferences and events</span>
          </article>
        </div>
      </div>

      <div class="experience-pillars">
        <article>
          <h3>Speed</h3>
          <p>Built for busy event floors where people need a smooth, efficient experience.</p>
        </article>
        <article>
          <h3>Consistency</h3>
          <p>Designed to produce polished, professional results across high-volume sessions.</p>
        </article>
        <article>
          <h3>Professionalism</h3>
          <p>A guided process that keeps attendees comfortable and organizers confident.</p>
        </article>
        <article>
          <h3>Flow</h3>
          <p>We’ve built our headshot experience around keeping everything moving.</p>
        </article>
      </div>
    </div>
  </section>
</template>
