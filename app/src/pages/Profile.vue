<template>
  <div class="profile">
    <!-- Page Header -->
    <header class="page-header">
      <div class="container">
        <h1>Profil Pembuat</h1>
        <p>Mengenal lebih dekat pembuat website Wisata Alam Jabodetabek</p>
      </div>
    </header>

    <!-- Profile Section -->
    <section class="profile-section section">
      <div class="container">
        <div class="profile-card reveal">
          <!-- Profile Header with Cover -->
          <div class="profile-cover">
            <div class="cover-gradient" :style="coverGradientStyle"></div>
          </div>

          <!-- Profile Photo -->
          <div class="profile-photo-wrapper">
            <div class="profile-photo">
              <!-- GANTI FOTO ANDA DI SINI -->
              <img
                :src="baseUrl + 'images/profile-placeholder.jpg'"
                alt="Foto Profil Mahasiswa"
              >
              <!-- GANTI FOTO ANDA DI SINI -->
            </div>
          </div>

          <!-- Profile Info -->
          <div class="profile-info">
            <!-- GANTI NAMA DI SINI -->
            <h2 class="profile-name">Valentino Marcel Tulus N.</h2>
            <!-- GANTI NAMA DI SINI -->

            <!-- GANTI NIM DI SINI -->
            <span class="profile-nim">NIM: 2507411047</span>
            <!-- GANTI NIM DI SINI -->

            <!-- GANTI BIO DI SINI -->
            <p class="profile-bio">
              Mahasiswa yang tertarik dengan pengembangan web dan teknologi informasi.
              Memiliki passion dalam desain UI/UX dan pengembangan aplikasi modern.
              Website ini dibuat sebagai bagian dari pembelajaran dan pengaplikasian
              teknologi web terkini.
            </p>
            <!-- GANTI BIO DI SINI -->

            <div class="profile-tags">
              <span class="profile-tag">Vue.js Developer</span>
              <span class="profile-tag">UI/UX Enthusiast</span>
              <span class="profile-tag">Web Designer</span>
            </div>
          </div>
        </div>

        <!-- About Website -->
        <div class="about-website reveal stagger-1">
          <div class="about-card">
            <div class="about-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
            </div>
            <h3 class="about-title">Tujuan Pembuatan Website</h3>
            <p class="about-text">
              Website "Wisata Alam Jabodetabek" ini dibuat sebagai proyek akademik untuk
              memenuhi tugas pemrograman web. Website ini bertujuan untuk mempromosikan
              dan memberikan informasi lengkap mengenai destinasi wisata alam di kawasan
              Jabodetabek, dengan fokus utama pada Agrowisata Gunung Mas Bogor.
            </p>
            <p class="about-text">
              Melalui website ini, pengunjung dapat mengeksplorasi berbagai daya tarik wisata,
              melihat galeri foto, serta mendapatkan informasi kontak yang diperlukan untuk
              merencanakan kunjungan. Website ini dibangun menggunakan teknologi Vue.js 3,
              Vue Router, dan Vite sebagai modern frontend development stack.
            </p>

            <div class="tech-stack">
              <h4>Teknologi yang Digunakan:</h4>
              <div class="tech-list">
                <span v-for="(tech, index) in technologies" :key="index" class="tech-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Features Implemented -->
        <div class="features-section reveal stagger-2">
          <div class="section-header">
            <span class="section-label">Implementasi</span>
            <h2 class="section-title">Fitur yang Diimplementasikan</h2>
            <p class="section-subtitle">
              Berikut adalah materi dan fitur yang diterapkan dalam pembuatan website ini
            </p>
          </div>

          <div class="features-grid">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="feature-card"
              :class="`reveal stagger-${(index % 6) + 1}`"
            >
              <div class="feature-number">{{ index + 1 }}</div>
              <div class="feature-content">
                <h4>{{ feature.name }}</h4>
                <p>{{ feature.description }}</p>
              </div>
              <div class="feature-check">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    const baseUrl = import.meta.env.BASE_URL
    return {
      baseUrl,
      // GANTI NAMA DI SINI - Data profil mahasiswa
      profile: {
        // GANTI NAMA DI SINI
        name: 'Valentino Marcel Tulus N.',
        // GANTI NIM DI SINI
        nim: '2507411047',
        // GANTI BIO DI SINI
        bio: 'Mahasiswa yang tertarik dengan pengembangan web dan teknologi informasi.'
      },
      technologies: [
        'Vue.js 3 Composition API',
        'Vue Router 4',
        'Vite Build Tool',
        'HTML5 Semantic Elements',
        'CSS3 Flexbox & Grid',
        'Responsive Design',
        'Media Queries',
        'CSS Transitions & Animations',
        'JavaScript Event Handling',
        'Vue Data Binding (v-model)',
        'Vue Conditional Rendering (v-if)',
        'Vue List Rendering (v-for)',
        'Vue Computed Properties',
        'Form Validation'
      ],
      features: [
        {
          name: 'HTML Semantic Elements',
          description: 'Penggunaan header, section, main, footer, nav untuk struktur yang bermakna'
        },
        {
          name: 'CSS Flexbox',
          description: 'Layout fleksibel untuk navbar, card, dan komponen lainnya'
        },
        {
          name: 'CSS Grid',
          description: 'Grid layout untuk gallery, cards, dan responsive grids'
        },
        {
          name: 'Responsive Design',
          description: 'Tampilan optimal di mobile, tablet, dan desktop'
        },
        {
          name: 'Media Query',
          description: 'Breakpoint 1024px, 768px, dan 480px untuk responsivitas'
        },
        {
          name: 'Hover Animation',
          description: 'Efek hover pada card, button, dan gallery items'
        },
        {
          name: 'Transition',
          description: 'Transisi halus pada semua elemen interaktif'
        },
        {
          name: 'Vue Router',
          description: 'Navigasi antar 5 halaman tanpa reload'
        },
        {
          name: 'Event Handling',
          description: 'Penanganan klik, submit, scroll, dan keyboard events'
        },
        {
          name: 'Data Binding',
          description: 'Two-way binding pada form contact dengan v-model'
        },
        {
          name: 'v-for',
          description: 'Rendering list untuk gallery, cards, dan navigasi'
        },
        {
          name: 'v-if',
          description: 'Conditional rendering untuk lightbox dan form states'
        },
        {
          name: 'Computed Property',
          description: 'Validasi form, filter gallery, dan dynamic data'
        },
        {
          name: 'Form Validation',
          description: 'Validasi real-time pada form kontak dengan error messages'
        }
      ]
    }
  },
  computed: {
    coverGradientStyle() {
      return {
        backgroundImage: `url(${this.baseUrl}images/hero-gunung-mas.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }
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
/* ====== PROFILE CARD ====== */
.profile-card {
  background: var(--white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  max-width: 600px;
  margin: 0 auto var(--space-2xl);
  border: 1px solid var(--gray-200);
}

.profile-cover {
  position: relative;
  height: 180px;
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 50%, var(--primary-medium) 100%);
}

.cover-gradient {
  position: absolute;
  inset: 0;
  opacity: 0.2;
}

/* Profile Photo */
.profile-photo-wrapper {
  display: flex;
  justify-content: center;
  margin-top: -75px;
  position: relative;
  z-index: 2;
}

.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid var(--white);
  box-shadow: var(--shadow-lg);
  background: var(--gray-100);
}

.profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Profile Info */
.profile-info {
  text-align: center;
  padding: var(--space-lg) var(--space-2xl) var(--space-2xl);
}

.profile-name {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: var(--space-xs);
}

.profile-nim {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary);
  background: var(--primary-lightest);
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-lg);
}

.profile-bio {
  font-size: 0.95rem;
  color: var(--gray-600);
  line-height: 1.7;
  max-width: 450px;
  margin: 0 auto var(--space-lg);
}

.profile-tags {
  display: flex;
  justify-content: center;
  gap: var(--space-sm);
  flex-wrap: wrap;
}

.profile-tag {
  padding: var(--space-xs) var(--space-md);
  background: var(--gray-100);
  color: var(--gray-700);
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: var(--radius-full);
}

/* ====== ABOUT WEBSITE ====== */
.about-website {
  max-width: 800px;
  margin: 0 auto var(--space-3xl);
}

.about-card {
  background: var(--cream);
  border-radius: var(--radius-xl);
  padding: var(--space-2xl);
  text-align: center;
}

.about-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: var(--primary);
  color: var(--white);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-lg);
}

.about-title {
  font-size: 1.5rem;
  margin-bottom: var(--space-md);
}

.about-text {
  color: var(--gray-600);
  line-height: 1.8;
  margin-bottom: var(--space-md);
  text-align: left;
}

/* Tech Stack */
.tech-stack {
  margin-top: var(--space-xl);
  text-align: left;
}

.tech-stack h4 {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: var(--space-md);
  text-align: center;
}

.tech-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-sm);
}

.tech-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: var(--white);
  border-radius: var(--radius-md);
  font-size: 0.85rem;
  color: var(--gray-700);
}

.tech-item svg {
  color: var(--primary);
  flex-shrink: 0;
}

/* ====== FEATURES SECTION ====== */
.features-section {
  max-width: 900px;
  margin: 0 auto;
}

.features-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.feature-card {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--space-lg);
  padding: var(--space-lg) var(--space-xl);
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border-left: 4px solid var(--primary);
  transition: all var(--transition-base);
}

.feature-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateX(8px);
}

.feature-number {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-lightest);
  color: var(--primary);
  font-family: var(--font-heading);
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: var(--radius-md);
}

.feature-content h4 {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 2px;
  color: var(--gray-900);
}

.feature-content p {
  font-size: 0.85rem;
  color: var(--gray-600);
}

.feature-check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--primary-lightest);
  color: var(--primary);
  border-radius: 50%;
}

/* ============================================
   RESPONSIVE - MEDIA QUERIES
   ============================================ */

@media (max-width: 768px) {
  .profile-info {
    padding: var(--space-lg) var(--space-lg) var(--space-xl);
  }

  .profile-name {
    font-size: 1.5rem;
  }

  .about-card {
    padding: var(--space-xl);
  }

  .tech-list {
    grid-template-columns: 1fr;
  }

  .feature-card {
    grid-template-columns: auto 1fr;
    gap: var(--space-md);
  }

  .feature-check {
    display: none;
  }
}

@media (max-width: 480px) {
  .profile-photo {
    width: 120px;
    height: 120px;
  }

  .profile-photo-wrapper {
    margin-top: -60px;
  }

  .profile-name {
    font-size: 1.35rem;
  }
}
</style>
