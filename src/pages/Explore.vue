<template>
  <div class="explore">
    <!-- Page Header -->
    <header class="page-header">
      <div class="container">
        <h1>Jelajahi Agrowisata Gunung Mas</h1>
        <p>Temukan semua daya tarik dan aktivitas menarik di destinasi wisata alam premium Bogor</p>
      </div>
    </header>

    <!-- Overview Section -->
    <section class="overview section">
      <div class="container">
        <div class="overview-grid">
          <div class="overview-image reveal">
            <img src="/images/hero-gunung-mas.jpg" alt="Pemandangan Agrowisata Gunung Mas">
          </div>
          <div class="overview-content reveal stagger-1">
            <span class="section-label">Tentang Destinasi</span>
            <h2 class="section-title" style="text-align: left;">Agrowisata Gunung Mas Bogor</h2>
            <p class="overview-text">
              Agrowisata Gunung Mas adalah destinasi wisata alam terkemuka di kawasan Jabodetabek
              yang menawarkan pengalaman wisata edukatif dan rekreatif di tengah kebun teh seluas
              lebih dari 100 hektar. Terletak di kaki Gunung Pangrango, destinasi ini menyuguhkan
              udara segar, pemandangan hijau yang memukau, dan berbagai aktivitas menarik untuk
              segala usia.
            </p>
            <p class="overview-text">
              Dikenal sebagai salah satu kebun teh tertua dan terbesar di Jawa Barat, Gunung Mas
              telah berkembang menjadi agrowisata modern yang menggabungkan keindahan alam,
              edukasi pertanian, dan wisata petualangan dalam satu lokasi yang strategis.
            </p>
            <div class="overview-tags">
              <span v-for="(tag, index) in tags" :key="index" class="tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Info Cards -->
    <section class="info-section">
      <div class="container">
        <div class="info-cards-grid">
          <div
            v-for="(info, index) in infoCards"
            :key="index"
            class="info-card-item reveal"
            :class="`stagger-${index + 1}`"
          >
            <div class="info-card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="info.icon"></svg>
            </div>
            <h3>{{ info.title }}</h3>
            <p>{{ info.content }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Attractions -->
    <section class="attractions section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Daya Tarik Utama</span>
          <h2 class="section-title">Apa Saja yang Bisa Dinikmati?</h2>
          <p class="section-subtitle">
            Berbagai daya tarik menanti Anda di Agrowisata Gunung Mas Bogor
          </p>
        </div>

        <div class="attractions-grid">
          <div
            v-for="(attraction, index) in filteredAttractions"
            :key="index"
            class="attraction-card reveal"
            :class="`stagger-${(index % 4) + 1}`"
          >
            <div class="attraction-image">
              <img :src="attraction.image" :alt="attraction.title" loading="lazy">
              <div class="attraction-badge" v-if="attraction.popular">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                Populer
              </div>
            </div>
            <div class="attraction-body">
              <h3 class="attraction-title">{{ attraction.title }}</h3>
              <p class="attraction-desc">{{ attraction.description }}</p>
              <div class="attraction-meta">
                <span class="meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  {{ attraction.duration }}
                </span>
                <span class="meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                  {{ attraction.level }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Activities -->
    <section class="activities section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Aktivitas Wisata</span>
          <h2 class="section-title">Aktivitas Seru untuk Semua Usia</h2>
          <p class="section-subtitle">
            Pilih aktivitas favorit Anda dan ciptakan momen tak terlupakan
          </p>
        </div>

        <div class="activities-filter">
          <button
            v-for="filter in filters"
            :key="filter.value"
            class="filter-btn"
            :class="{ 'filter-active': activeFilter === filter.value }"
            @click="setFilter(filter.value)"
          >
            {{ filter.label }}
          </button>
        </div>

        <div class="activities-list">
          <div
            v-for="(activity, index) in filteredActivities"
            :key="index"
            class="activity-item reveal"
            :class="`stagger-${(index % 3) + 1}`"
          >
            <div class="activity-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="activity-content">
              <h4 class="activity-name">{{ activity.name }}</h4>
              <p class="activity-desc">{{ activity.description }}</p>
              <div class="activity-tags">
                <span v-for="(tag, i) in activity.tags" :key="i" class="activity-tag">
                  {{ tag }}
                </span>
              </div>
            </div>
            <div class="activity-price">{{ activity.price }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location & History -->
    <section class="location-history section">
      <div class="container">
        <div class="lh-grid">
          <div class="lh-card location-card reveal">
            <div class="lh-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3>Lokasi & Akses</h3>
            <p>
              Agrowisata Gunung Mas terletak di Jalan Raya Puncak, Kecamatan Cisarua,
              Kabupaten Bogor, Jawa Barat. Lokasinya strategis di kawasan Puncak Bogor,
              sekitar 80 km dari Jakarta dengan waktu tempuh kurang lebih 2-3 jam.
            </p>
            <ul class="lh-list">
              <li v-for="(route, index) in accessRoutes" :key="index">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {{ route }}
              </li>
            </ul>
          </div>

          <div class="lh-card history-card reveal stagger-1">
            <div class="lh-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3>Sejarah</h3>
            <p>
              Kebun teh Gunung Mas didirikan pada era kolonial Belanda pada awal abad ke-20.
              Setelah kemerdekaan Indonesia, area ini dikelola oleh perusahaan negara dan
              kemudian berkembang menjadi agrowisata modern yang menggabungkan
              pelestarian sejarah dengan fasilitas wisata kontemporer.
            </p>
            <p>
              Pada tahun 2000-an, pengelola mulai mengembangkan konsep agrowisata
              dengan menambahkan berbagai fasilitas dan aktivitas untuk menarik wisatawan,
              menjadikannya salah satu destinasi wisata alam paling populer di Jabodetabek.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Explore',
  data() {
    return {
      activeFilter: 'all',
      tags: ['Wisata Alam', 'Kebun Teh', 'Berkuda', 'Trekking', 'Edukatif', 'Keluarga'],
      infoCards: [
        {
          title: 'Ketinggian',
          content: '800-1.200 mdpl dengan suhu 18-24°C sepanjang tahun',
          icon: '<path d="M12 20v-6M6 20V10M18 20V4"/>'
        },
        {
          title: 'Luas Area',
          content: 'Lebih dari 100 hektar kebun teh dan area wisata',
          icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>'
        },
        {
          title: 'Jam Buka',
          content: 'Setiap hari pukul 08:00 - 17:00 WIB',
          icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'
        },
        {
          title: 'Tiket Masuk',
          content: 'Mulai dari Rp 25.000/orang (harga dapat berubah)',
          icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M12 8h.01M8 12h.01M16 12h.01M12 16h.01"/>'
        }
      ],
      attractions: [
        {
          title: 'Kebun Teh',
          description: 'Jelajahi hamparan kebun teh hijau yang terhampar luas di lereng pegunungan. Nikmati suasana tenang sambil belajar tentang proses pengolahan teh dari daun hingga siap minum.',
          image: '/images/tea-garden.jpg',
          duration: '1-2 jam',
          level: 'Mudah',
          popular: true
        },
        {
          title: 'Berkuda',
          description: 'Rasakan pengalaman berkuda mengelilingi area kebun teh dengan pemandangan alam yang indah. Tersedia kuda yang ramah untuk pemula dengan pemandu profesional.',
          image: '/images/horse-riding.jpg',
          duration: '30-60 menit',
          level: 'Mudah',
          popular: true
        },
        {
          title: 'Trekking',
          description: 'Lewati jalur trekking yang menantang melewati hutan pinus, kebun teh, dan spot panorama terbaik. Tersedia berbagai tingkat kesulitan dari pemula hingga advanced.',
          image: '/images/trekking.jpg',
          duration: '2-4 jam',
          level: 'Sedang',
          popular: false
        },
        {
          title: 'Spot Foto',
          description: 'Berkunjung ke berbagai spot foto Instagramable dengan latar belakang kebun teh, pegunungan, dan sunset yang memukau. Jangan lupa bawa kamera Anda!',
          image: '/images/photo-spot.jpg',
          duration: '1 jam',
          level: 'Mudah',
          popular: true
        }
      ],
      filters: [
        { value: 'all', label: 'Semua' },
        { value: 'adventure', label: 'Petualangan' },
        { value: 'family', label: 'Keluarga' },
        { value: 'educational', label: 'Edukatif' }
      ],
      activities: [
        {
          name: 'Tour Kebun Teh',
          description: 'Dipandu oleh pemandu, kelilingi kebun teh sambil belajar sejarah dan proses pengolahan teh. Termasuk sesi cupping tea.',
          price: 'Rp 50.000',
          category: 'educational',
          tags: ['Edukatif', 'Guided Tour']
        },
        {
          name: 'Berkuda Keliling Kebun',
          description: 'Pengalaman berkuda santai mengelilingi kebun teh dengan pemandu. Cocok untuk pemula dan anak-anak.',
          price: 'Rp 75.000',
          category: 'family',
          tags: ['Keluarga', 'Outdoor']
        },
        {
          name: 'Trekking Sunrise',
          description: 'Jalur trekking pagi hari untuk menyaksikan matahari terbit dari puncak bukit dengan pemandangan kebun teh.',
          price: 'Rp 100.000',
          category: 'adventure',
          tags: ['Petualangan', 'Sunrise']
        },
        {
          name: 'Camping Ground',
          description: 'Berkemah di area camping yang telah disediakan dengan fasilitas toilet dan area api unggun.',
          price: 'Rp 150.000',
          category: 'adventure',
          tags: ['Petualangan', 'Menginap']
        },
        {
          name: 'Fotografi Alam',
          description: 'Sesi fotografi di spot-spot terbaik dengan pemandangan kebun teh, pegunungan, dan matahari terbenam.',
          price: 'Rp 25.000',
          category: 'family',
          tags: ['Foto', 'Alam']
        },
        {
          name: 'Workshop Teh',
          description: 'Pelajari cara memilih, menyeduh, dan menikmati teh dengan cara yang benar dari ahli teh lokal.',
          price: 'Rp 85.000',
          category: 'educational',
          tags: ['Edukatif', 'Workshop']
        }
      ],
      accessRoutes: [
        'Jagorawi Toll Road keluar Ciawi',
 'Jalan Raya Puncak arah Cipanas',
        'Ikuti petunjuk arah ke Agrowisata Gunung Mas',
        'Tersedia area parkir luas'
      ]
    }
  },
  computed: {
    filteredAttractions() {
      return this.attractions
    },
    filteredActivities() {
      if (this.activeFilter === 'all') {
        return this.activities
      }
      return this.activities.filter(activity => activity.category === this.activeFilter)
    }
  },
  mounted() {
    this.initScrollReveal()
  },
  methods: {
    setFilter(filter) {
      this.activeFilter = filter
    },
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
/* ====== OVERVIEW ====== */
.overview {
  background: var(--white);
}

.overview-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  align-items: center;
}

.overview-image {
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.overview-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 400px;
}

.overview-content .section-title {
  margin-bottom: var(--space-lg);
}

.overview-text {
  color: var(--gray-600);
  line-height: 1.8;
  margin-bottom: var(--space-md);
}

.overview-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  margin-top: var(--space-lg);
}

.tag {
  padding: var(--space-xs) var(--space-md);
  background: var(--primary-lightest);
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: var(--radius-full);
}

/* ====== INFO CARDS ====== */
.info-section {
  background: var(--gray-100);
  padding: var(--space-3xl) 0;
}

.info-cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
}

.info-card-item {
  background: var(--white);
  padding: var(--space-xl);
  border-radius: var(--radius-lg);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.info-card-item:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.info-card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: var(--primary-lightest);
  color: var(--primary);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-md);
}

.info-card-item h3 {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: var(--space-xs);
}

.info-card-item p {
  font-size: 0.85rem;
  color: var(--gray-600);
  line-height: 1.5;
}

/* ====== ATTRACTIONS ====== */
.attractions {
  background: var(--white);
}

.attractions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.attraction-card {
  background: var(--white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.attraction-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

.attraction-image {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.attraction-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.attraction-card:hover .attraction-image img {
  transform: scale(1.08);
}

.attraction-badge {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xs) var(--space-sm);
  background: var(--accent);
  color: var(--white);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: var(--radius-full);
}

.attraction-body {
  padding: var(--space-xl);
}

.attraction-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--space-sm);
}

.attraction-desc {
  font-size: 0.9rem;
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: var(--space-md);
}

.attraction-meta {
  display: flex;
  gap: var(--space-lg);
  padding-top: var(--space-md);
  border-top: 1px solid var(--gray-200);
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: 0.8rem;
  color: var(--gray-500);
}

/* ====== ACTIVITIES ====== */
.activities {
  background: var(--cream);
}

.activities-filter {
  display: flex;
  justify-content: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-2xl);
  flex-wrap: wrap;
}

.filter-btn {
  padding: var(--space-sm) var(--space-lg);
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--gray-600);
  background: var(--white);
  border: 2px solid transparent;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-base);
}

.filter-btn:hover {
  border-color: var(--primary-light);
  color: var(--primary);
}

.filter-active {
  background: var(--primary) !important;
  color: var(--white) !important;
  border-color: var(--primary) !important;
}

.activities-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  max-width: 900px;
  margin: 0 auto;
}

.activity-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--space-lg);
  padding: var(--space-xl);
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.activity-item:hover {
  box-shadow: var(--shadow-md);
  transform: translateX(8px);
}

.activity-number {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-lighter);
  min-width: 40px;
}

.activity-name {
  font-family: var(--font-body);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: var(--space-xs);
  color: var(--gray-900);
}

.activity-desc {
  font-size: 0.85rem;
  color: var(--gray-600);
  line-height: 1.5;
  margin-bottom: var(--space-sm);
}

.activity-tags {
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
}

.activity-tag {
  padding: 2px 10px;
  background: var(--primary-lightest);
  color: var(--primary);
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: var(--radius-full);
}

.activity-price {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--primary);
  white-space: nowrap;
}

/* ====== LOCATION & HISTORY ====== */
.location-history {
  background: var(--white);
}

.lh-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
}

.lh-card {
  padding: var(--space-2xl);
  border-radius: var(--radius-xl);
}

.location-card {
  background: var(--primary-lightest);
}

.history-card {
  background: var(--cream);
}

.lh-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: var(--primary);
  color: var(--white);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-lg);
}

.lh-card h3 {
  font-size: 1.25rem;
  margin-bottom: var(--space-md);
  color: var(--gray-900);
}

.lh-card p {
  font-size: 0.9rem;
  color: var(--gray-600);
  line-height: 1.7;
  margin-bottom: var(--space-md);
}

.lh-list {
  list-style: none;
}

.lh-list li {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-xs) 0;
  font-size: 0.9rem;
  color: var(--gray-700);
}

.lh-list li svg {
  color: var(--primary);
  flex-shrink: 0;
}

/* ============================================
   RESPONSIVE - MEDIA QUERIES
   ============================================ */

@media (max-width: 1024px) {
  .overview-grid {
    gap: var(--space-2xl);
  }

  .info-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .attractions-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .overview-grid {
    grid-template-columns: 1fr;
  }

  .overview-image {
    order: 2;
  }

  .overview-content {
    order: 1;
  }

  .overview-image img {
    min-height: 250px;
  }

  .info-cards-grid {
    grid-template-columns: 1fr;
  }

  .activity-item {
    grid-template-columns: auto 1fr;
    gap: var(--space-md);
  }

  .activity-price {
    grid-column: 2;
    justify-self: start;
  }

  .lh-grid {
    grid-template-columns: 1fr;
  }

  .activities-filter {
    gap: var(--space-xs);
  }

  .filter-btn {
    padding: var(--space-xs) var(--space-md);
    font-size: 0.8rem;
  }
}
</style>
