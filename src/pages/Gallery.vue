<template>
  <div class="gallery">
    <!-- Page Header -->
    <header class="page-header">
      <div class="container">
        <h1>Galeri Foto</h1>
        <p>Koleksi momen indah dari Agrowisata Gunung Mas Bogor dan sekitarnya</p>
      </div>
    </header>

    <!-- Gallery Section -->
    <section class="gallery-section section">
      <div class="container">
        <div class="gallery-header section-header">
          <span class="section-label">Dokumentasi</span>
          <h2 class="section-title">Momen Keindahan Alam</h2>
          <p class="section-subtitle">
            Lihat koleksi foto terbaik dari berbagai sudut keindahan Agrowisata Gunung Mas Bogor
          </p>
        </div>

        <!-- Filter Buttons -->
        <div class="gallery-filters">
          <button
            v-for="filter in categories"
            :key="filter.value"
            class="filter-btn"
            :class="{ 'filter-active': activeCategory === filter.value }"
            @click="setCategory(filter.value)"
          >
            {{ filter.label }}
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="gallery-grid">
          <div
            v-for="(photo, index) in filteredPhotos"
            :key="index"
            class="gallery-item reveal"
            :class="[
              `gallery-item-${photo.size}`,
              `stagger-${(index % 6) + 1}`
            ]"
            @click="openLightbox(index)"
          >
            <div class="gallery-image-wrapper">
              <img
                :src="photo.src"
                :alt="photo.title"
                loading="lazy"
              >
              <div class="gallery-overlay">
                <div class="gallery-overlay-content">
                  <h4>{{ photo.title }}</h4>
                  <p>{{ photo.description }}</p>
                  <span class="gallery-view">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    Lihat Detail
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Photo Counter -->
        <div class="photo-counter">
          <p>Menampilkan <strong>{{ filteredPhotos.length }}</strong> dari <strong>{{ photos.length }}</strong> foto</p>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <transition name="fade">
      <div
        v-if="lightboxOpen"
        class="lightbox"
        @click.self="closeLightbox"
      >
        <button class="lightbox-close" @click="closeLightbox" aria-label="Tutup">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <button
          v-if="currentPhotoIndex > 0"
          class="lightbox-nav lightbox-prev"
          @click="prevPhoto"
          aria-label="Foto sebelumnya"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <button
          v-if="currentPhotoIndex < filteredPhotos.length - 1"
          class="lightbox-nav lightbox-next"
          @click="nextPhoto"
          aria-label="Foto selanjutnya"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

        <div class="lightbox-content">
          <img
            :src="currentPhoto.src"
            :alt="currentPhoto.title"
          >
          <div class="lightbox-caption">
            <h4>{{ currentPhoto.title }}</h4>
            <p>{{ currentPhoto.description }}</p>
            <span class="lightbox-counter">{{ currentPhotoIndex + 1 }} / {{ filteredPhotos.length }}</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      activeCategory: 'all',
      lightboxOpen: false,
      currentPhotoIndex: 0,
      categories: [
        { value: 'all', label: 'Semua' },
        { value: 'landscape', label: 'Pemandangan' },
        { value: 'activity', label: 'Aktivitas' },
        { value: 'spot', label: 'Spot Foto' }
      ],
      photos: [
        {
          src: '/images/hero-gunung-mas.jpg',
          title: 'Kebun Teh Gunung Mas',
          description: 'Pemandangan luas kebun teh yang hijau dan menyejukkan mata',
          category: 'landscape',
          size: 'large'
        },
        {
          src: '/images/tea-garden.jpg',
          title: 'Aktivitas Memetik Teh',
          description: 'Petani lokal sedang memetik daun teh di pagi hari',
          category: 'activity',
          size: 'normal'
        },
        {
          src: '/images/horse-riding.jpg',
          title: 'Berkuda di Padang Rumput',
          description: 'Pengalaman berkuda dengan latar belakang pegunungan',
          category: 'activity',
          size: 'normal'
        },
        {
          src: '/images/trekking.jpg',
          title: 'Jalur Trekking',
          description: 'Jalur kayu yang indah melewati hutan dan kebun teh',
          category: 'activity',
          size: 'normal'
        },
        {
          src: '/images/photo-spot.jpg',
          title: 'Spot Foto Instagramable',
          description: 'Spot foto populer dengan bingkai kayu dan pemandangan lembah',
          category: 'spot',
          size: 'large'
        },
        {
          src: '/images/gallery-1.jpg',
          title: 'Jalan Berliku Kebun Teh',
          description: 'Jalan berliku yang membelah kebun teh dari udara',
          category: 'landscape',
          size: 'normal'
        },
        {
          src: '/images/gallery-2.jpg',
          title: 'Taman Bunga',
          description: 'Taman bunga warna-warni yang indah di area wisata',
          category: 'landscape',
          size: 'normal'
        },
        {
          src: '/images/gallery-3.jpg',
          title: 'Kafe Gunung',
          description: 'Kafe kayu dengan pemandangan pegunungan yang menakjubkan',
          category: 'spot',
          size: 'normal'
        },
        {
          src: '/images/gallery-4.jpg',
          title: 'Air Terjun Tersembunyi',
          description: 'Air terjun alami di area hutan sekitar Gunung Mas',
          category: 'landscape',
          size: 'normal'
        },
        {
          src: '/images/gallery-5.jpg',
          title: 'Berkah Keluarga',
          description: 'Keluarga menikmati piknik di padang rumput hijau',
          category: 'activity',
          size: 'normal'
        },
        {
          src: '/images/gallery-6.jpg',
          title: 'Camping di Malam Hari',
          description: 'Berkemah dengan pemandangan matahari terbenam dan bintang',
          category: 'activity',
          size: 'normal'
        },
        {
          src: '/images/gallery-7.jpg',
          title: 'Gazebo Tradisional',
          description: 'Gazebo kayu tradisional untuk bersantai menikmati pemandangan',
          category: 'spot',
          size: 'normal'
        },
        {
          src: '/images/gallery-8.jpg',
          title: 'Sunrise di Kebun Teh',
          description: 'Momen golden hour saat matahari terbit di kebun teh',
          category: 'landscape',
          size: 'large'
        }
      ]
    }
  },
  computed: {
    filteredPhotos() {
      if (this.activeCategory === 'all') {
        return this.photos
      }
      return this.photos.filter(photo => photo.category === this.activeCategory)
    },
    currentPhoto() {
      return this.filteredPhotos[this.currentPhotoIndex] || this.photos[0]
    }
  },
  mounted() {
    this.initScrollReveal()
    document.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    setCategory(category) {
      this.activeCategory = category
    },
    openLightbox(index) {
      this.currentPhotoIndex = index
      this.lightboxOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.lightboxOpen = false
      document.body.style.overflow = ''
    },
    prevPhoto() {
      if (this.currentPhotoIndex > 0) {
        this.currentPhotoIndex--
      }
    },
    nextPhoto() {
      if (this.currentPhotoIndex < this.filteredPhotos.length - 1) {
        this.currentPhotoIndex++
      }
    },
    handleKeydown(e) {
      if (!this.lightboxOpen) return
      if (e.key === 'Escape') this.closeLightbox()
      if (e.key === 'ArrowLeft') this.prevPhoto()
      if (e.key === 'ArrowRight') this.nextPhoto()
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
/* ====== GALLERY SECTION ====== */
.gallery-section {
  background: var(--gray-100);
}

.gallery-filters {
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

/* ====== GALLERY GRID ====== */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 250px;
  gap: var(--space-md);
}

.gallery-item {
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
}

.gallery-item-large {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.gallery-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.gallery-item:hover .gallery-image-wrapper img {
  transform: scale(1.1);
}

/* Hover Overlay */
.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(27, 67, 50, 0.9) 0%,
    rgba(27, 67, 50, 0.4) 50%,
    transparent 100%
  );
  display: flex;
  align-items: flex-end;
  padding: var(--space-lg);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay-content {
  color: var(--white);
  transform: translateY(20px);
  transition: transform var(--transition-base);
}

.gallery-item:hover .gallery-overlay-content {
  transform: translateY(0);
}

.gallery-overlay-content h4 {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: var(--space-xs);
}

.gallery-overlay-content p {
  font-size: 0.8rem;
  opacity: 0.85;
  margin-bottom: var(--space-sm);
}

.gallery-view {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent-light);
}

/* ====== PHOTO COUNTER ====== */
.photo-counter {
  text-align: center;
  margin-top: var(--space-2xl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--gray-300);
}

.photo-counter p {
  color: var(--gray-600);
  font-size: 0.9rem;
}

.photo-counter strong {
  color: var(--primary);
}

/* ====== LIGHTBOX ====== */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
}

.lightbox-content {
  max-width: 90vw;
  max-height: 90vh;
  text-align: center;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border-radius: var(--radius-md);
}

.lightbox-caption {
  color: var(--white);
  margin-top: var(--space-lg);
}

.lightbox-caption h4 {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  margin-bottom: var(--space-xs);
}

.lightbox-caption p {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: var(--space-sm);
}

.lightbox-counter {
  font-size: 0.8rem;
  opacity: 0.6;
}

.lightbox-close {
  position: absolute;
  top: var(--space-xl);
  right: var(--space-xl);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-base);
  z-index: 10;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-base);
  z-index: 10;
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.25);
}

.lightbox-prev {
  left: var(--space-xl);
}

.lightbox-next {
  right: var(--space-xl);
}

/* ============================================
   RESPONSIVE - MEDIA QUERIES
   ============================================ */

@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 200px;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 180px;
  }

  .gallery-item-large {
    grid-column: span 2;
    grid-row: span 2;
  }

  .lightbox-nav {
    display: none;
  }

  .lightbox-close {
    top: var(--space-md);
    right: var(--space-md);
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 250px;
  }

  .gallery-item-large {
    grid-column: span 1;
    grid-row: span 1;
  }

  .gallery-filters {
    gap: var(--space-xs);
  }

  .filter-btn {
    padding: var(--space-xs) var(--space-sm);
    font-size: 0.8rem;
  }
}
</style>
