<script setup>
import AnimatedTitle from './AnimatedTitle.vue'
</script>

<template>
  <section id="sponsors" class="page-section" aria-labelledby="sponsors-title">
    <div class="section-inner">
      <AnimatedTitle
        id="sponsors-title"
        label="Built for Sponsors"
        :lines="['Turn a Headshot Booth', 'Into a Branded Experience']"
      />
      <div class="sponsor-section">
        <div class="sponsor-intro">
          <p class="lede">
            A headshot station attracts attendees who are actively investing in their professional identity.
          </p>
          <p>
            We give sponsors the opportunity to become part of that moment instead of competing for attention from the
            side of the room.
          </p>
        </div>

        <div class="sponsor-callout">
          <div>
            <h3>Your Brand. Your Landing Pages. Your Audience.</h3>
            <p>
              Every headshot activation can include custom branded web experiences for registration and image delivery.
              Instead of sending attendees to a generic scheduling or download page, sponsors can have their own
              dedicated landing experience surrounding the activation.
            </p>
          </div>
          <p class="sponsor-callout-stat">From booth visit to digital follow-up</p>
        </div>

        <div class="sponsor-surfaces" aria-label="Sponsor branding opportunities">
          <span>Booth signage</span>
          <span>Table coverings</span>
          <span>Printed materials</span>
          <span>Handouts</span>
          <span>Displays</span>
          <span>Registration pages</span>
          <span>Delivery pages</span>
        </div>

        <div class="sponsor-grid">
          <article>
            <h3>Use the Space To</h3>
            <ul>
              <li>Promote a product</li>
              <li>Introduce your company</li>
              <li>Highlight an upcoming initiative</li>
              <li>Drive visitors to a campaign</li>
              <li>Collect qualified interest</li>
              <li>Promote recruiting opportunities</li>
            </ul>
          </article>

          <article class="attention-moments">
            <h3>Two High-Intent Moments</h3>
            <ol>
              <li>When they sign up for their headshot</li>
              <li>When they return to download it</li>
            </ol>
            <p>That turns a five-minute headshot into a much larger brand experience.</p>
          </article>
        </div>

        <div class="sponsor-value">
          <div>
            <h3>Sponsorship People Actually Want</h3>
            <p>
              Most conference sponsorships compete for attention. A professional headshot is different because attendees
              immediately understand the value.
            </p>
          </div>
          <ul>
            <li>LinkedIn</li>
            <li>Company websites</li>
            <li>Speaker profiles</li>
            <li>Social media</li>
            <li>Press materials</li>
            <li>Resumes</li>
            <li>Professional directories</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
