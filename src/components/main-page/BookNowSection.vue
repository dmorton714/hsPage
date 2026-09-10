<script setup>
import { computed, ref } from 'vue'
import AnimatedTitle from './AnimatedTitle.vue'

const inquiry = ref({
  name: '',
  email: '',
  organization: '',
  eventDetails: '',
})

const inquiryEmailHref = computed(() => {
  const subject = encodeURIComponent('Headshot event booking inquiry')
  const body = encodeURIComponent(
    [
      `Name: ${inquiry.value.name}`,
      `Email: ${inquiry.value.email}`,
      `Organization: ${inquiry.value.organization}`,
      `Event Details: ${inquiry.value.eventDetails}`,
    ].join('\n')
  )

  return `mailto:danny.morton714@gmail.com?subject=${subject}&body=${body}`
})

const submitInquiry = () => {
  window.location.href = inquiryEmailHref.value
}
</script>

<template>
  <section id="book-now" class="page-section" aria-labelledby="book-now-title">
    <div class="section-inner">
      <AnimatedTitle
        id="book-now-title"
        label="Book Now"
        :lines="['Book us for your event']"
      />
      <div class="book-now-layout">
        <form class="contact-form" @submit.prevent="submitInquiry">
          <label>
            Name
            <input v-model="inquiry.name" type="text" name="name" autocomplete="name" />
          </label>
          <label>
            Email
            <input v-model="inquiry.email" type="email" name="email" autocomplete="email" />
          </label>
          <label>
            Organization
            <input v-model="inquiry.organization" type="text" name="organization" />
          </label>
          <label>
            Event Details
            <textarea v-model="inquiry.eventDetails" name="event-details" rows="5"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
        <img
          class="book-now-image"
          src="/headshot_crp.jpg"
          alt="Professional headshot sample"
          loading="lazy"
        >
      </div>
    </div>
  </section>
</template>
