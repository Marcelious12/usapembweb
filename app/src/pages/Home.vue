<template>
  <div class="home">
    <!-- ====== HERO SECTION ====== -->
    <section class="hero">
      <div class="hero-image">
        <img :src="baseUrl + 'images/hero-gunung-mas.jpg'" alt="Pemandangan Agrowisata Gunung Mas Bogor" loading="eager">
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="container">
          <div class="hero-label animate-fade-in-up">
            <span class="label-dot"></span>
            Destinasi Unggulan Jabodetabek
          </div>
          <h1 class="hero-title animate-fade-in-up" style="animation-delay: 0.1s">
            Eksplorasi Wisata Alam<br>Jabodetabek
          </h1>
          <p class="hero-subtitle animate-fade-in-up" style="animation-delay: 0.2s">
            Temukan keindahan alam tersembunyi di kawasan Jabodetabek. Nikmati pengalaman
            tak terlupakan di <strong>Agrowisata Gunung Mas Bogor</strong> dengan kebun teh,
            trekking, berkuda, dan panorama spektakuler.
          </p>
          <div class="hero-actions animate-fade-in-up" style="animation-delay: 0.3s">
            <router-link to="/explore" class="btn btn-white">
              Jelajahi Sekarang
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </router-link>
            <router-link to="/gallery" class="btn btn-outline" style="color: white; border-color: rgba(255,255,255,0.4);">
              Lihat Galeri
            </router-link>
          </div>
          <div class="hero-stats animate-fade-in-up" style="animation-delay: 0.4s">
            <div v-for="(stat, index) in stats" :key="index" class="stat-item">
              <span class="stat-number">{{ stat.number }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-scroll">
        <div class="scroll-indicator">
          <span>Gulir ke bawah</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- ====== FEATURED DESTINATION ====== -->
    <section class="featured section">
      <div class="container">
        <div class="featured-header section-header">
          <span class="section-label">Destinasi Utama</span>
          <h2 class="section-title">Agrowisata Gunung Mas Bogor</h2>
          <p class="section-subtitle">
            Destinasi wisata alam premium yang menawarkan pengalaman seru dan edukatif
            di tengah keindahan alam Bogor yang memukau.
          </p>
        </div>

        <div class="featured-grid">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="featured-card reveal"
            :class="`stagger-${index + 1}`"
          >
            <div class="featured-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="feature.icon"></svg>
            </div>
            <h3 class="featured-title">{{ feature.title }}</h3>
            <p class="featured-text">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ====== EXPLORE CTA ====== -->
    <section class="explore-cta">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <h2 class="cta-title">Siap untuk Petualangan?</h2>
            <p class="cta-text">
              Jelajahi setiap sudut keindahan Agrowisata Gunung Mas Bogor.
              Dari kebun teh yang hijau hingga spot foto Instagramable.
            </p>
            <router-link to="/explore" class="btn btn-primary">
              Mulai Menjelajah
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </router-link>
          </div>
          <div class="cta-image">
            <img :src="baseUrl + 'images/photo-spot.jpg'" alt="Spot foto Gunung Mas Bogor">
          </div>
        </div>
      </div>
    </section>

    <!-- ====== QUICK INFO ====== -->
    <section class="quick-info section">
      <div class="container">
        <div class="info-grid">
          <div class="info-card reveal stagger-1">
            <div class="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div class="info-content">
              <h4>Jam Operasional</h4>
              <p>Setiap hari, 08:00 - 17:00 WIB</p>
            </div>
          </div>
          <div class="info-card reveal stagger-2">
            <div class="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div class="info-content">
              <h4>Lokasi</h4>
              <p>Kabupaten Bogor, Jawa Barat</p>
            </div>
          </div>
          <div class="info-card reveal stagger-3">
            <div class="info-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div class="info-content">
              <h4>Hari Terbaik</h4>
              <p>Senin - Jumat (lebih sepi)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      stats: [
        { number: '100+', label: 'Hektar Lahan' },
        { number: '50K+', label: 'Pengunjung/Tahun' },
        { number: '4.8', label: 'Rating Wisata' },
        { number: '15+', label: 'Aktivitas Seru' }
      ],
      features: [
        {
          title: 'Kebun Teh',
          description: 'Menjelajahi kebun teh seluas lebih dari 100 hektar dengan pemandangan hijau yang menenangkan dan udara segar pegunungan.',
          icon: '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>'
        },
        {
          title: 'Berkuda',
          description: 'Pengalaman berkuda yang menyenangkan dengan pemandangan alam sekitar. Cocok untuk pemula maupun yang berpengalaman.',
          icon: '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-4 6.5v2"/><path d="M10 16v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C3.63 2 3 3.8 3 5.5c0 3.11 2 5.66 4 6.5v2"/><path d="M14 16v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C8.63 2 8 3.8 8 5.5c0 3.11 2 5.66 4 6.5v2"/><path d="M18 16v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6-1.37 0-2 .8-2 2.5 0 3.11 2 5.66 4 6.5v2"/><line x1="6" y1="16" x2="18" y2="16"/><path d="M8 20l2.5-4h3L16 20"/>'
        },
        {
          title: 'Trekking',
          description: 'Jalur trekking dengan berbagai tingkat kesulitan yang melewati hutan, kebun teh, dan spot panorama terbaik Gunung Mas.',
          icon: '<path d="M13 4v2.5"/><path d="M16 20h4"/><path d="M19 20v-5.5"/><path d="M11.5 11.5L8 20l-3-1"/><path d="M11 10.5a2.5 2.5 0 0 0-2.5-2.5"/><path d="M13.5 13.5A2.5 2.5 0 0 0 11 11"/>'
        },
        {
          title: 'Spot Foto',
          description: 'Banyak spot foto Instagramable dengan latar belakang kebun teh, pegunungan, dan sunset yang memukau untuk kenangan terbaik.',
          icon: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>'
        }
      ]
    }
  },
  mounted() {
    this.initScrollReveal()
  },
  methods: {
    initScrollReveal() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      }, { threshold: 0.1 })

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    }
  }
}
</script>

<style scoped>
/* ====== HERO SECTION ====== */
.hero {
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(27, 67, 50, 0.85) 0%,
    rgba(45, 106, 79, 0.75) 50%,
    rgba(64, 145, 108, 0.6) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;
  color: var(--white);
  padding: 0 var(--space-md);
}

.hero-label {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--primary-lighter);
  margin-bottom: var(--space-lg);
}

.label-dot {
  width: 8px;
  height: 8px;
  background: var(--accent-light);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  color: var(--white);
  line-height: 1.1;
  margin-bottom: var(--space-lg);
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.9);
  max-width: 650px;
  margin: 0 auto var(--space-xl);
  line-height: 1.7;
}

.hero-subtitle strong {
  color: var(--accent-light);
}

.hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  margin-bottom: var(--space-3xl);
  flex-wrap: wrap;
}

/* Hero Stats */
.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3xl);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  color: var(--white);
}

.stat-label {
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Scroll Indicator */
.hero-scroll {
  position: absolute;
  bottom: var(--space-xl);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
  font-weight: 500;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

/* ====== FEATURED SECTION ====== */
.featured {
  background: var(--gray-100);
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
}

.featured-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: var(--space-2xl);
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.featured-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.featured-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: var(--primary-lightest);
  color: var(--primary);
  border-radius: var(--radius-xl);
  margin-bottom: var(--space-lg);
  transition: all var(--transition-base);
}

.featured-card:hover .featured-icon {
  background: var(--primary);
  color: var(--white);
}

.featured-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: var(--space-sm);
  color: var(--gray-900);
}

.featured-text {
  font-size: 0.9rem;
  color: var(--gray-600);
  line-height: 1.6;
}

/* ====== EXPLORE CTA ====== */
.explore-cta {
  padding: var(--space-4xl) 0;
  background: var(--cream);
}

.cta-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: var(--white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.cta-content {
  padding: var(--space-3xl);
}

.cta-title {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  margin-bottom: var(--space-md);
}

.cta-text {
  color: var(--gray-600);
  margin-bottom: var(--space-xl);
  line-height: 1.7;
}

.cta-image {
  height: 100%;
  min-height: 350px;
}

.cta-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ====== QUICK INFO ====== */
.quick-info {
  background: var(--white);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.info-card {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  padding: var(--space-xl);
  background: var(--gray-100);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.info-card:hover {
  background: var(--primary-lightest);
  transform: translateY(-4px);
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background: var(--primary);
  color: var(--white);
  border-radius: var(--radius-md);
  flex-shrink: 0;
}

.info-content h4 {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: var(--space-xs);
  color: var(--gray-900);
}

.info-content p {
  font-size: 0.875rem;
  color: var(--gray-600);
}

/* ============================================
   RESPONSIVE - MEDIA QUERIES
   ============================================ */

@media (max-width: 1024px) {
  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero-stats {
    gap: var(--space-2xl);
  }

  .stat-number {
    font-size: 1.75rem;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 600px;
    height: auto;
    padding: 8rem 0 4rem;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions .btn {
    width: 100%;
  }

  .hero-stats {
    gap: var(--space-lg);
    flex-wrap: wrap;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .featured-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }

  .cta-card {
    grid-template-columns: 1fr;
  }

  .cta-content {
    padding: var(--space-2xl);
    order: 2;
    text-align: center;
  }

  .cta-image {
    min-height: 250px;
    order: 1;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .hero-scroll {
    display: none;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .stat-item {
    min-width: 80px;
  }

  .featured-card {
    padding: var(--space-xl);
  }
}
</style>
