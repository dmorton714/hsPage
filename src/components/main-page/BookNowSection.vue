<script setup>
import AnimatedTitle from './AnimatedTitle.vue'
</script>

<template>
  <section id="book-now" class="page-section" aria-labelledby="book-now-title">
    <div class="section-inner">
      <p class="section-label">Book Now</p>
      <AnimatedTitle
        id="book-now-title"
        :lines="['Book a Headshot Activation']"
      />
      <form class="contact-form">
        <label>
          Name
          <input type="text" name="name" autocomplete="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" autocomplete="email" />
        </label>
        <label>
          Organization
          <input type="text" name="organization" />
        </label>
        <label>
          Event Details
          <textarea name="event-details" rows="5"></textarea>
        </label>
        <button type="button">Submit</button>
      </form>
    </div>
  </section>
</template>
