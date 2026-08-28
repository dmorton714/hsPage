<script setup>
import AnimatedTitle from './AnimatedTitle.vue'

const packages = [
  {
    name: 'Executive Studio',
    description: 'Up to 3 hours, lower-volume VIP/executive headshots, more individual attention',
    price: '$2,750',
  },
  {
    name: 'Conference Studio — Half Day',
    description: 'Up to 4 hours, QR signup, shoot, select, retouch, background, instant delivery',
    price: '$3,500',
  },
  {
    name: 'Conference Studio — Full Day',
    description: 'Up to 8 hours, same complete experience, roughly 150–200 participants',
    price: '$5,000',
  },
  {
    name: 'Sponsored Headshot Experience',
    description: 'Full day + sponsor booth branding, ad/signup pages, sponsored delivery experience, CTA and analytics',
    price: '$8,000',
  },
  {
    name: 'Large Conference / Multi-Station',
    description: '200+ expected headshots, multiple photographers/stations, major sponsor activations',
    price: 'Starting at $10,000',
  },
]
</script>

<template>
  <section id="pricing" class="page-section" aria-labelledby="pricing-title">
    <div class="section-inner">
      <AnimatedTitle
        id="pricing-title"
        label="Pricing"
        :lines="['Packages Built for', 'Any Size Event']"
      />
      <table class="price-table">
        <thead>
          <tr>
            <th scope="col">Package</th>
            <th scope="col">What it is</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pkg in packages" :key="pkg.name">
            <th scope="row">{{ pkg.name }}</th>
            <td>{{ pkg.description }}</td>
            <td>{{ pkg.price }}</td>
          </tr>
        </tbody>
      </table>
      <p class="a-la-carte">A la carte items — hair, makeup, etc. — available upon request.</p>
    </div>
  </section>
</template>

<style scoped>
.price-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 24px;
}

.price-table th,
.price-table td {
  padding: 14px 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  vertical-align: top;
}

.price-table thead th {
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-bottom: 1px solid #111;
}

.price-table tbody th {
  font-weight: 800;
  white-space: nowrap;
}

.price-table td:last-child,
.price-table th:last-child {
  white-space: nowrap;
}

.a-la-carte {
  margin-top: 16px;
  font-style: italic;
}
</style>
