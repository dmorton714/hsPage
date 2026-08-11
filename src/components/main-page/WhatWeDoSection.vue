<script setup>
import AnimatedTitle from './AnimatedTitle.vue'
</script>

<template>
  <section id="what-we-do" class="page-section" aria-labelledby="what-we-do-title">
    <div class="section-inner">
      <p class="section-label">What We Do</p>
      <AnimatedTitle
        id="what-we-do-title"
        :lines="['A Complete Headshot Experience', 'For Your Event']"
      />
      <p>
        We provide professional, on-site headshot photography designed specifically for conferences, conventions, trade
        shows, corporate meetings, and sponsored activations.
      </p>
      <h3>Attendees receive:</h3>
      <ul class="compact-list">
        <li>Professional studio-quality headshots</li>
        <li>Expert posing and direction</li>
        <li>Professionally retouched images</li>
        <li>The ability to select their preferred photo</li>
        <li>Fast digital delivery</li>
        <li>A simple, scheduled experience without waiting in long lines</li>
      </ul>
      <p>
        Your organization gets a turnkey headshot activation that adds real value to the attendee experience while
        creating a destination people actively want to visit.
      </p>
    </div>
  </section>
</template>
