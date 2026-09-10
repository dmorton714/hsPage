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
  overflow: hidden;
  border: 1px solid rgba(48, 82, 92, 0.16);
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 12px 32px rgba(48, 82, 92, 0.1);
  margin-top: 24px;
}

.price-table th,
.price-table td {
  padding: 18px;
  text-align: left;
  vertical-align: top;
}

.price-table thead th {
  background: var(--hs-dark-blue);
  color: var(--hs-paper);
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0;
  text-transform: uppercase;
}

.price-table thead th:nth-child(2) {
  background: var(--hs-dark-orange);
}

.price-table thead th:nth-child(3) {
  background: var(--hs-light-blue);
}

.price-table tbody th,
.price-table tbody td {
  border-bottom: 1px solid rgba(48, 82, 92, 0.12);
}

.price-table tbody tr:last-child th,
.price-table tbody tr:last-child td {
  border-bottom: 0;
}

.price-table tbody th {
  background: rgba(255, 255, 255, 0.72);
  color: var(--hs-dark-blue);
  font-size: 1.08rem;
  font-weight: 900;
  line-height: 1.15;
  white-space: nowrap;
}

.price-table tbody td {
  color: var(--hs-ink);
  line-height: 1.35;
}

.price-table tbody td:nth-child(2) {
  background: rgba(220, 170, 137, 0.16);
}

.price-table tbody td:nth-child(3) {
  background: rgba(76, 132, 141, 0.14);
  color: var(--hs-dark-blue);
  font-weight: 900;
  white-space: nowrap;
}

.a-la-carte {
  margin-top: 16px;
  font-style: italic;
}

@media (max-width: 720px) {
  .price-table,
  .price-table thead,
  .price-table tbody,
  .price-table tr,
  .price-table th,
  .price-table td {
    display: block;
  }

  .price-table {
    overflow: visible;
    border: 0;
    background: transparent;
    box-shadow: none;
  }

  .price-table thead {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  .price-table tbody {
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .price-table tbody tr {
    padding: 16px;
    border: 1px solid rgba(48, 82, 92, 0.16);
    border-radius: 8px;
    background: var(--hs-paper);
    box-shadow: 0 10px 26px rgba(48, 82, 92, 0.1);
  }

  .price-table tbody tr:nth-child(even) {
    background: var(--hs-paper);
  }

  .price-table tbody tr:nth-child(3n) {
    background: var(--hs-paper);
  }

  .price-table th,
  .price-table td {
    padding: 0;
    border-bottom: 0;
    background: transparent;
    white-space: normal;
  }

  .price-table tbody th {
    margin-bottom: 10px;
    font-size: 1.05rem;
    white-space: normal;
  }

  .price-table td {
    display: grid;
    gap: 4px;
  }

  .price-table td + td {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid rgba(48, 82, 92, 0.12);
  }

  .price-table td::before {
    color: var(--hs-dark-orange);
    font-size: 0.72rem;
    font-weight: 900;
    letter-spacing: 0;
    line-height: 1;
    text-transform: uppercase;
  }

  .price-table td:nth-child(2)::before {
    content: "What it is";
  }

  .price-table td:nth-child(3)::before {
    content: "Price";
  }

  .price-table tbody td:nth-child(3) {
    background: transparent;
    font-size: 1.05rem;
    white-space: normal;
  }

  .price-table tbody td:nth-child(2) {
    background: transparent;
  }
}
</style>
