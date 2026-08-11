<script setup>
import AnimatedTitle from './AnimatedTitle.vue'
</script>

<template>
  <section id="why-us" class="page-section" aria-labelledby="why-us-title">
    <div class="section-inner">
      <p class="section-label">Why Us</p>
      <AnimatedTitle
        id="why-us-title"
        :lines="['Experience Behind the Camera', 'Technology Behind the Experience']"
      />
      <p>
        We combine decades of professional event photography experience with a streamlined technology-driven workflow
        built specifically for high-volume conference environments.
      </p>
      <dl>
        <dt>40+ Years of Professional Photography Experience</dt>
        <dd>Decades of experience producing images for professionals, organizations, conferences, and events.</dd>
        <dt>30+ Years in the Conference and Event Space</dt>
        <dd>
          We understand event schedules, attendee flow, sponsor expectations, conference environments, and the
          importance of keeping everything moving.
        </dd>
        <dt>Professional Retouching</dt>
        <dd>Every delivered image receives professional finishing rather than simply being exported directly from the camera.</dd>
        <dt>Fast Turnaround</dt>
        <dd>
          Our workflow moves selected images directly from the photography station into editing and delivery, allowing
          finished headshots to be delivered within minutes.
        </dd>
        <dt>Scheduled Sessions</dt>
        <dd>
          Attendees can reserve their time in advance, helping eliminate long lines and creating a smoother experience
          for both guests and event organizers.
        </dd>
        <dt>Sponsor Customization</dt>
        <dd>
          From the physical booth to registration and image delivery pages, the experience can be customized around the
          sponsor.
        </dd>
        <dt>A Turnkey Experience</dt>
        <dd>
          We handle the photography, attendee flow, image selection, retouching, processing, and digital delivery so your
          team doesn’t have to.
        </dd>
      </dl>
      <p>Give your attendees something they’ll actually use.</p>
      <p>Give your sponsors something attendees will actually engage with.</p>
      <p>
        Bring a premium professional headshot experience to your next conference, convention, trade show, or corporate
        event.
      </p>
    </div>
  </section>
</template>
