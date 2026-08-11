<script setup>
import AnimatedTitle from './AnimatedTitle.vue'
</script>

<template>
  <section id="hero" class="page-section hero-section" aria-labelledby="hero-title">
    <div class="section-inner">
      <AnimatedTitle
        id="hero-title"
        :level="1"
        :lines="['Professional Headshots', 'Delivered in Minutes', 'Built for Events']"
      />
      <p class="lede">
        Give attendees a headshot they’ll actually use and give sponsors a branded experience they’ll remember.
      </p>
      <p>
        We bring a complete professional headshot studio directly to conferences, conventions, trade shows, and
        corporate events.
      </p>
      <ul class="compact-list" aria-label="Attendee headshot flow">
        <li>Attendees reserve a time</li>
        <li>Step in front of the camera</li>
        <li>Select their favorite image</li>
        <li>Receive a professionally retouched headshot within minutes</li>
      </ul>
      <p>
        But the experience doesn’t stop at the camera. Our headshot activations can be fully customized around your
        conference, organization, or sponsor, creating a premium attendee experience and a powerful branded touchpoint
        from registration through final image delivery.
      </p>
      <figure class="media-placeholder" aria-label="Booth and process media placeholder"></figure>
    </div>
  </section>
</template>
