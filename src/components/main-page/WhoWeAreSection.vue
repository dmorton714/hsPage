<script setup>
import AnimatedTitle from './AnimatedTitle.vue'
</script>

<template>
  <section id="who-we-are" class="page-section" aria-labelledby="who-we-are-title">
    <div class="section-inner">
      <p class="section-label">Who We Are</p>
      <AnimatedTitle
        id="who-we-are-title"
        :lines="['More Than 40 Years', 'Behind the Camera']"
      />
      <div class="stepped-copy">
        <p>
          Our team brings more than 40 years of professional photography experience, including more than 30 years
          specializing in conferences, corporate events, professional headshots, and event coverage.
        </p>
        <p>
          We understand that photographing hundreds of people at an event requires more than taking a great picture.
        </p>
        <p>
          It requires speed. Consistency. Professionalism. A smooth attendee experience. And a process that can work
          efficiently in the middle of a busy conference floor.
        </p>
        <p>We’ve built our headshot experience around exactly that.</p>
      </div>
      <figure class="media-placeholder" aria-label="Portfolio media placeholder"></figure>
    </div>
  </section>
</template>

<style scoped>
.stepped-copy {
  display: grid;
  gap: 14px;
  max-width: 860px;
}

.stepped-copy p {
  max-width: 720px;
  margin: 0;
}

.stepped-copy p:nth-child(4) {
  font-weight: 800;
}
</style>
