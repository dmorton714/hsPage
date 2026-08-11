<script setup>
import AnimatedTitle from './AnimatedTitle.vue'
</script>

<template>
  <section id="process" class="page-section" aria-labelledby="process-title">
    <div class="section-inner">
      <p class="section-label">How It Works</p>
      <AnimatedTitle
        id="process-title"
        :lines="['From Registration', 'To Retouched Headshot', 'In Minutes']"
      />
      <div class="process-steps">
        <article>
          <h3>Attendees Reserve Their Spot</h3>
          <p>
            Guests can sign up before the event through a custom registration page with your custom advertising and
            select an available time slot.
          </p>
        </article>
        <article>
          <h3>They Visit the Headshot Studio</h3>
          <p>
            At their scheduled time, attendees step into our professional on-site studio where our photographers guide
            them through a fast, comfortable session. You have the ability to brand or have staff to talk about products
            and interact with attendees.
          </p>
        </article>
        <article>
          <h3>They Choose Their Favorite</h3>
          <p>
            Instead of waiting days to see what they received, attendees can review their images and choose the headshot
            they want. This is done in real time with quick previews, building an unmatched and comfortable experience.
          </p>
        </article>
        <article>
          <h3>We Handle the Rest</h3>
          <p>
            Their selected image is automatically moved into our editing workflow, professionally retouched, processed,
            and prepared for delivery.
          </p>
        </article>
        <article>
          <h3>Their Headshot Arrives Within Minutes</h3>
          <p>
            In most cases, attendees receive their finished professional headshot within approximately five minutes of
            completing their session. Internet speeds dictate timing.
          </p>
        </article>
      </div>
      <ul class="compact-list">
        <li>No waiting several days</li>
        <li>No wondering which image the photographer chose</li>
        <li>No complicated delivery process</li>
        <li>Just a professional headshot ready to use</li>
        <li>No hidden fees</li>
      </ul>
    </div>
  </section>
</template>
