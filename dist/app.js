// ============ HOME PAGE ============
const Home = {
  template: `
    <div class="home">
      <section class="hero">
        <div class="hero-image">
          <img src="images/hero-gunung-mas.jpg" alt="Pemandangan Agrowisata Gunung Mas Bogor" loading="eager">
          <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
          <div class="container">
            <div class="hero-label animate-fade-in-up"><span class="label-dot"></span>Destinasi Unggulan Jabodetabek</div>
            <h1 class="hero-title animate-fade-in-up" style="animation-delay:0.1s">Eksplorasi Wisata Alam<br>Jabodetabek</h1>
            <p class="hero-subtitle animate-fade-in-up" style="animation-delay:0.2s">
              Temukan keindahan alam tersembunyi di kawasan Jabodetabek. Nikmati pengalaman
              tak terlupakan di <strong>Agrowisata Gunung Mas Bogor</strong> dengan kebun teh,
              trekking, berkuda, dan panorama spektakuler.
            </p>
            <div class="hero-actions animate-fade-in-up" style="animation-delay:0.3s">
              <router-link to="/explore" class="btn btn-white">Jelajahi Sekarang <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></router-link>
              <router-link to="/gallery" class="btn btn-outline" style="color:white;border-color:rgba(255,255,255,0.4)">Lihat Galeri</router-link>
            </div>
            <div class="hero-stats animate-fade-in-up" style="animation-delay:0.4s">
              <div v-for="(stat, i) in stats" :key="i" class="stat-item"><span class="stat-number">{{ stat.number }}</span><span class="stat-label">{{ stat.label }}</span></div>
            </div>
          </div>
        </div>
        <div class="hero-scroll"><div class="scroll-indicator"><span>Gulir ke bawah</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div></div>
      </section>

      <section class="featured section" style="background:var(--gray-100)">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Destinasi Utama</span>
            <h2 class="section-title">Agrowisata Gunung Mas Bogor</h2>
            <p class="section-subtitle">Destinasi wisata alam premium yang menawarkan pengalaman seru dan edukatif di tengah keindahan alam Bogor yang memukau.</p>
          </div>
          <div class="featured-grid">
            <div v-for="(f, i) in features" :key="i" class="featured-card reveal" :class="'stagger-'+(i+1)">
              <div class="featured-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="f.icon"></svg></div>
              <h3 class="featured-title">{{ f.title }}</h3>
              <p class="featured-text">{{ f.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="explore-cta" style="padding:6rem 0;background:var(--cream)">
        <div class="container">
          <div class="cta-card">
            <div class="cta-content">
              <h2 class="cta-title">Siap untuk Petualangan?</h2>
              <p class="cta-text">Jelajahi setiap sudut keindahan Agrowisata Gunung Mas Bogor. Dari kebun teh yang hijau hingga spot foto Instagramable.</p>
              <router-link to="/explore" class="btn btn-primary">Mulai Menjelajah <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></router-link>
            </div>
            <div class="cta-image"><img src="images/photo-spot.jpg" alt="Spot foto Gunung Mas Bogor"></div>
          </div>
        </div>
      </section>

      <section class="quick-info section">
        <div class="container">
          <div class="info-grid">
            <div v-for="(info, i) in quickInfo" :key="i" class="info-card reveal" :class="'stagger-'+(i+1)">
              <div class="info-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="info.icon"></svg></div>
              <div class="info-content"><h4>{{ info.title }}</h4><p>{{ info.desc }}</p></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  setup() {
    const stats = [
      { number: '100+', label: 'Hektar Lahan' },
      { number: '50K+', label: 'Pengunjung/Tahun' },
      { number: '4.8', label: 'Rating Wisata' },
      { number: '15+', label: 'Aktivitas Seru' }
    ];
    const features = [
      { title: 'Kebun Teh', description: 'Menjelajahi kebun teh seluas lebih dari 100 hektar dengan pemandangan hijau yang menenangkan dan udara segar pegunungan.', icon: '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>' },
      { title: 'Berkuda', description: 'Pengalaman berkuda yang menyenangkan dengan pemandangan alam sekitar. Cocok untuk pemula maupun yang berpengalaman.', icon: '<path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-4 6.5v2"/><path d="M10 16v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C3.63 2 3 3.8 3 5.5c0 3.11 2 5.66 4 6.5v2"/><path d="M14 16v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6-1.37 0-2 .8-2 2.5 0 3.11 2 5.66 4 6.5v2"/><path d="M18 16v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6-1.37 0-2 .8-2 2.5 0 3.11 2 5.66 4 6.5v2"/><line x1="6" y1="16" x2="18" y2="16"/><path d="M8 20l2.5-4h3L16 20"/>' },
      { title: 'Trekking', description: 'Jalur trekking dengan berbagai tingkat kesulitan yang melewati hutan, kebun teh, dan spot panorama terbaik Gunung Mas.', icon: '<path d="M13 4v2.5"/><path d="M16 20h4"/><path d="M19 20v-5.5"/><path d="M11.5 11.5L8 20l-3-1"/><path d="M11 10.5a2.5 2.5 0 0 0-2.5-2.5"/><path d="M13.5 13.5A2.5 2.5 0 0 0 11 11"/>' },
      { title: 'Spot Foto', description: 'Banyak spot foto Instagramable dengan latar belakang kebun teh, pegunungan, dan sunset yang memukau untuk kenangan terbaik.', icon: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>' }
    ];
    const quickInfo = [
      { title: 'Jam Operasional', desc: 'Setiap hari, 08:00 - 17:00 WIB', icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' },
      { title: 'Lokasi', desc: 'Kabupaten Bogor, Jawa Barat', icon: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>' },
      { title: 'Hari Terbaik', desc: 'Senin - Jumat (lebih sepi)', icon: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>' }
    ];
    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    });
    return { stats, features, quickInfo };
  }
};

// ============ EXPLORE PAGE ============
const Explore = {
  template: `
    <div class="explore">
      <header class="page-header">
        <div class="container"><h1>Jelajahi Agrowisata Gunung Mas</h1><p>Temukan semua daya tarik dan aktivitas menarik di destinasi wisata alam premium Bogor</p></div>
      </header>
      <section class="overview section">
        <div class="container">
          <div class="overview-grid">
            <div class="overview-image reveal"><img src="images/hero-gunung-mas.jpg" alt="Pemandangan Agrowisata Gunung Mas"></div>
            <div class="overview-content reveal stagger-1">
              <span class="section-label">Tentang Destinasi</span>
              <h2 class="section-title" style="text-align:left">Agrowisata Gunung Mas Bogor</h2>
              <p class="overview-text">Agrowisata Gunung Mas adalah destinasi wisata alam terkemuka di kawasan Jabodetabek yang menawarkan pengalaman wisata edukatif dan rekreatif di tengah kebun teh seluas lebih dari 100 hektar. Terletak di kaki Gunung Pangrango, destinasi ini menyuguhkan udara segar, pemandangan hijau yang memukau, dan berbagai aktivitas menarik untuk segala usia.</p>
              <p class="overview-text">Dikenal sebagai salah satu kebun teh tertua dan terbesar di Jawa Barat, Gunung Mas telah berkembang menjadi agrowisata modern yang menggabungkan keindahan alam, edukasi pertanian, dan wisata petualangan dalam satu lokasi yang strategis.</p>
              <div class="overview-tags">
                <span v-for="(tag, i) in tags" :key="i" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="info-section" style="background:var(--gray-100);padding:3rem 0">
        <div class="container">
          <div class="info-cards-grid">
            <div v-for="(info, i) in infoCards" :key="i" class="info-card-item reveal" :class="'stagger-'+(i+1)">
              <div class="info-card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="info.icon"></svg></div>
              <h3>{{ info.title }}</h3><p>{{ info.content }}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="attractions section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Daya Tarik Utama</span>
            <h2 class="section-title">Apa Saja yang Bisa Dinikmati?</h2>
            <p class="section-subtitle">Berbagai daya tarik menanti Anda di Agrowisata Gunung Mas Bogor</p>
          </div>
          <div class="attractions-grid">
            <div v-for="(a, i) in attractions" :key="i" class="attraction-card reveal" :class="'stagger-'+((i%4)+1)">
              <div class="attraction-image">
                <img :src="a.image" :alt="a.title" loading="lazy">
                <div class="attraction-badge" v-if="a.popular"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>Populer</div>
              </div>
              <div class="attraction-body">
                <h3 class="attraction-title">{{ a.title }}</h3>
                <p class="attraction-desc">{{ a.description }}</p>
                <div class="attraction-meta">
                  <span class="meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>{{ a.duration }}</span>
                  <span class="meta-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>{{ a.level }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="activities section" style="background:var(--cream)">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Aktivitas Wisata</span>
            <h2 class="section-title">Aktivitas Seru untuk Semua Usia</h2>
            <p class="section-subtitle">Pilih aktivitas favorit Anda dan ciptakan momen tak terlupakan</p>
          </div>
          <div class="activities-filter">
            <button v-for="f in filters" :key="f.value" class="filter-btn" :class="{'filter-active':activeFilter===f.value}" @click="activeFilter=f.value">{{ f.label }}</button>
          </div>
          <div class="activities-list">
            <div v-for="(act, i) in filteredActivities" :key="i" class="activity-item reveal" :class="'stagger-'+((i%3)+1)">
              <div class="activity-number">{{ String(i+1).padStart(2,'0') }}</div>
              <div class="activity-content">
                <h4 class="activity-name">{{ act.name }}</h4>
                <p class="activity-desc">{{ act.description }}</p>
                <div class="activity-tags"><span v-for="(t, j) in act.tags" :key="j" class="activity-tag">{{ t }}</span></div>
              </div>
              <div class="activity-price">{{ act.price }}</div>
            </div>
          </div>
        </div>
      </section>
      <section class="location-history section">
        <div class="container">
          <div class="lh-grid">
            <div class="lh-card location-card reveal" style="background:var(--primary-lightest)">
              <div class="lh-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
              <h3>Lokasi & Akses</h3>
              <p>Agrowisata Gunung Mas terletak di Jalan Raya Puncak, Kecamatan Cisarua, Kabupaten Bogor, Jawa Barat. Lokasinya strategis di kawasan Puncak Bogor, sekitar 80 km dari Jakarta.</p>
              <ul class="lh-list">
                <li v-for="(r, i) in accessRoutes" :key="i"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>{{ r }}</li>
              </ul>
            </div>
            <div class="lh-card history-card reveal stagger-1" style="background:var(--cream)">
              <div class="lh-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
              <h3>Sejarah</h3>
              <p>Kebun teh Gunung Mas didirikan pada era kolonial Belanda pada awal abad ke-20. Setelah kemerdekaan Indonesia, area ini dikelola oleh perusahaan negara dan berkembang menjadi agrowisata modern.</p>
              <p>Pada tahun 2000-an, pengelola mulai mengembangkan konsep agrowisata dengan menambahkan berbagai fasilitas dan aktivitas untuk menarik wisatawan, menjadikannya salah satu destinasi wisata alam paling populer di Jabodetabek.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  setup() {
    const activeFilter = ref('all');
    const tags = ['Wisata Alam', 'Kebun Teh', 'Berkuda', 'Trekking', 'Edukatif', 'Keluarga'];
    const infoCards = [
      { title: 'Ketinggian', content: '800-1.200 mdpl dengan suhu 18-24°C sepanjang tahun', icon: '<path d="M12 20v-6M6 20V10M18 20V4"/>' },
      { title: 'Luas Area', content: 'Lebih dari 100 hektar kebun teh dan area wisata', icon: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>' },
      { title: 'Jam Buka', content: 'Setiap hari pukul 08:00 - 17:00 WIB', icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' },
      { title: 'Tiket Masuk', content: 'Mulai dari Rp 25.000/orang (harga dapat berubah)', icon: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M12 8h.01M8 12h.01M16 12h.01M12 16h.01"/>' }
    ];
    const attractions = [
      { title: 'Kebun Teh', description: 'Jelajahi hamparan kebun teh hijau yang terhampar luas di lereng pegunungan. Nikmati suasana tenang sambil belajar tentang proses pengolahan teh dari daun hingga siap minum.', image: 'images/tea-garden.jpg', duration: '1-2 jam', level: 'Mudah', popular: true },
      { title: 'Berkuda', description: 'Rasakan pengalaman berkuda mengelilingi area kebun teh dengan pemandangan alam yang indah. Tersedia kuda yang ramah untuk pemula dengan pemandu profesional.', image: 'images/horse-riding.jpg', duration: '30-60 menit', level: 'Mudah', popular: true },
      { title: 'Trekking', description: 'Lewati jalur trekking yang menantang melewati hutan pinus, kebun teh, dan spot panorama terbaik. Tersedia berbagai tingkat kesulitan dari pemula hingga advanced.', image: 'images/trekking.jpg', duration: '2-4 jam', level: 'Sedang', popular: false },
      { title: 'Spot Foto', description: 'Berkunjung ke berbagai spot foto Instagramable dengan latar belakang kebun teh, pegunungan, dan sunset yang memukau. Jangan lupa bawa kamera Anda!', image: 'images/photo-spot.jpg', duration: '1 jam', level: 'Mudah', popular: true }
    ];
    const filters = [
      { value: 'all', label: 'Semua' },
      { value: 'adventure', label: 'Petualangan' },
      { value: 'family', label: 'Keluarga' },
      { value: 'educational', label: 'Edukatif' }
    ];
    const activities = [
      { name: 'Tour Kebun Teh', description: 'Dipandu oleh pemandu, kelilingi kebun teh sambil belajar sejarah dan proses pengolahan teh. Termasuk sesi cupping tea.', price: 'Rp 50.000', category: 'educational', tags: ['Edukatif', 'Guided Tour'] },
      { name: 'Berkuda Keliling Kebun', description: 'Pengalaman berkuda santai mengelilingi kebun teh dengan pemandu. Cocok untuk pemula dan anak-anak.', price: 'Rp 75.000', category: 'family', tags: ['Keluarga', 'Outdoor'] },
      { name: 'Trekking Sunrise', description: 'Jalur trekking pagi hari untuk menyaksikan matahari terbit dari puncak bukit dengan pemandangan kebun teh.', price: 'Rp 100.000', category: 'adventure', tags: ['Petualangan', 'Sunrise'] },
      { name: 'Camping Ground', description: 'Berkemah di area camping yang telah disediakan dengan fasilitas toilet dan area api unggun.', price: 'Rp 150.000', category: 'adventure', tags: ['Petualangan', 'Menginap'] },
      { name: 'Fotografi Alam', description: 'Sesi fotografi di spot-spot terbaik dengan pemandangan kebun teh, pegunungan, dan matahari terbenam.', price: 'Rp 25.000', category: 'family', tags: ['Foto', 'Alam'] },
      { name: 'Workshop Teh', description: 'Pelajari cara memilih, menyeduh, dan menikmati teh dengan cara yang benar dari ahli teh lokal.', price: 'Rp 85.000', category: 'educational', tags: ['Edukatif', 'Workshop'] }
    ];
    const accessRoutes = [
      'Jagorawi Toll Road keluar Ciawi',
      'Jalan Raya Puncak arah Cipanas',
      'Ikuti petunjuk arah ke Agrowisata Gunung Mas',
      'Tersedia area parkir luas'
    ];
    const filteredActivities = computed(() => {
      if (activeFilter.value === 'all') return activities;
      return activities.filter(a => a.category === activeFilter.value);
    });
    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    });
    return { activeFilter, tags, infoCards, attractions, filters, activities: filteredActivities, accessRoutes };
  }
};


// ============ GALLERY PAGE ============
const Gallery = {
  template: `
    <div class="gallery">
      <header class="page-header">
        <div class="container"><h1>Galeri Foto</h1><p>Koleksi momen indah dari Agrowisata Gunung Mas Bogor dan sekitarnya</p></div>
      </header>
      <section class="gallery-section section" style="background:var(--gray-100)">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Dokumentasi</span>
            <h2 class="section-title">Momen Keindahan Alam</h2>
            <p class="section-subtitle">Lihat koleksi foto terbaik dari berbagai sudut keindahan Agrowisata Gunung Mas Bogor</p>
          </div>
          <div class="gallery-filters">
            <button v-for="c in categories" :key="c.value" class="filter-btn" :class="{'filter-active':activeCategory===c.value}" @click="activeCategory=c.value">{{ c.label }}</button>
          </div>
          <div class="gallery-grid">
            <div v-for="(photo, i) in filteredPhotos" :key="i" class="gallery-item reveal" :class="['gallery-item-'+photo.size, 'stagger-'+((i%6)+1)]" @click="openLightbox(i)">
              <div class="gallery-image-wrapper">
                <img :src="photo.src" :alt="photo.title" loading="lazy">
                <div class="gallery-overlay">
                  <div class="gallery-overlay-content">
                    <h4>{{ photo.title }}</h4>
                    <p>{{ photo.description }}</p>
                    <span class="gallery-view"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>Lihat Detail</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="photo-counter"><p>Menampilkan <strong>{{ filteredPhotos.length }}</strong> dari <strong>{{ photos.length }}</strong> foto</p></div>
        </div>
      </section>
      <transition name="fade">
        <div v-if="lightboxOpen" class="lightbox" @click.self="closeLightbox">
          <button class="lightbox-close" @click="closeLightbox" aria-label="Tutup"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
          <button v-if="currentPhotoIndex > 0" class="lightbox-nav lightbox-prev" @click="prevPhoto" aria-label="Foto sebelumnya"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
          <button v-if="currentPhotoIndex < filteredPhotos.length-1" class="lightbox-nav lightbox-next" @click="nextPhoto" aria-label="Foto selanjutnya"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
          <div class="lightbox-content">
            <img :src="currentPhoto.src" :alt="currentPhoto.title">
            <div class="lightbox-caption"><h4>{{ currentPhoto.title }}</h4><p>{{ currentPhoto.description }}</p><span class="lightbox-counter">{{ currentPhotoIndex+1 }} / {{ filteredPhotos.length }}</span></div>
          </div>
        </div>
      </transition>
    </div>
  `,
  setup() {
    const activeCategory = ref('all');
    const lightboxOpen = ref(false);
    const currentPhotoIndex = ref(0);
    const categories = [
      { value: 'all', label: 'Semua' },
      { value: 'landscape', label: 'Pemandangan' },
      { value: 'activity', label: 'Aktivitas' },
      { value: 'spot', label: 'Spot Foto' }
    ];
    const photos = [
      { src: 'images/hero-gunung-mas.jpg', title: 'Kebun Teh Gunung Mas', description: 'Pemandangan luas kebun teh yang hijau dan menyejukkan mata', category: 'landscape', size: 'large' },
      { src: 'images/tea-garden.jpg', title: 'Aktivitas Memetik Teh', description: 'Petani lokal sedang memetik daun teh di pagi hari', category: 'activity', size: 'normal' },
      { src: 'images/horse-riding.jpg', title: 'Berkuda di Padang Rumput', description: 'Pengalaman berkuda dengan latar belakang pegunungan', category: 'activity', size: 'normal' },
      { src: 'images/trekking.jpg', title: 'Jalur Trekking', description: 'Jalur kayu yang indah melewati hutan dan kebun teh', category: 'activity', size: 'normal' },
      { src: 'images/photo-spot.jpg', title: 'Spot Foto Instagramable', description: 'Spot foto populer dengan bingkai kayu dan pemandangan lembah', category: 'spot', size: 'large' },
      { src: 'images/gallery-1.jpg', title: 'Jalan Berliku Kebun Teh', description: 'Jalan berliku yang membelah kebun teh dari udara', category: 'landscape', size: 'normal' },
      { src: 'images/gallery-2.jpg', title: 'Taman Bunga', description: 'Taman bunga warna-warni yang indah di area wisata', category: 'landscape', size: 'normal' },
      { src: 'images/gallery-3.jpg', title: 'Kafe Gunung', description: 'Kafe kayu dengan pemandangan pegunungan yang menakjubkan', category: 'spot', size: 'normal' },
      { src: 'images/gallery-4.jpg', title: 'Air Terjun Tersembunyi', description: 'Air terjun alami di area hutan sekitar Gunung Mas', category: 'landscape', size: 'normal' },
      { src: 'images/gallery-5.jpg', title: 'Berkah Keluarga', description: 'Keluarga menikmati piknik di padang rumput hijau', category: 'activity', size: 'normal' },
      { src: 'images/gallery-6.jpg', title: 'Camping di Malam Hari', description: 'Berkemah dengan pemandangan matahari terbenam dan bintang', category: 'activity', size: 'normal' },
      { src: 'images/gallery-7.jpg', title: 'Gazebo Tradisional', description: 'Gazebo kayu tradisional untuk bersantai menikmati pemandangan', category: 'spot', size: 'normal' },
      { src: 'images/gallery-8.jpg', title: 'Sunrise di Kebun Teh', description: 'Momen golden hour saat matahari terbit di kebun teh', category: 'landscape', size: 'large' }
    ];
    const filteredPhotos = computed(() => {
      if (activeCategory.value === 'all') return photos;
      return photos.filter(p => p.category === activeCategory.value);
    });
    const currentPhoto = computed(() => filteredPhotos.value[currentPhotoIndex.value] || photos[0]);
    const openLightbox = (i) => { currentPhotoIndex.value = i; lightboxOpen.value = true; document.body.style.overflow = 'hidden'; };
    const closeLightbox = () => { lightboxOpen.value = false; document.body.style.overflow = ''; };
    const prevPhoto = () => { if (currentPhotoIndex.value > 0) currentPhotoIndex.value--; };
    const nextPhoto = () => { if (currentPhotoIndex.value < filteredPhotos.value.length - 1) currentPhotoIndex.value++; };
    const handleKeydown = (e) => {
      if (!lightboxOpen.value) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };
    onMounted(() => {
      document.addEventListener('keydown', handleKeydown);
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    });
    onBeforeUnmount(() => document.removeEventListener('keydown', handleKeydown));
    return { activeCategory, categories, photos, filteredPhotos, lightboxOpen, currentPhotoIndex, currentPhoto, openLightbox, closeLightbox, prevPhoto, nextPhoto };
  }
};

// ============ CONTACT PAGE ============
const Contact = {
  template: `
    <div class="contact">
      <header class="page-header">
        <div class="container"><h1>Hubungi Kami</h1><p>Punya pertanyaan atau saran? Kirim pesan Anda melalui form di bawah ini</p></div>
      </header>
      <section class="contact-section section">
        <div class="container">
          <div class="contact-grid">
            <div class="contact-info reveal">
              <span class="section-label">Informasi Kontak</span>
              <h2 style="font-size:1.75rem;margin:0.5rem 0 1rem">Mari Terhubung</h2>
              <p style="color:var(--gray-600);line-height:1.7;margin-bottom:1.5rem">Kami siap membantu Anda dengan informasi seputar wisata alam Jabodetabek. Jangan ragu untuk menghubungi kami.</p>
              <div class="info-list">
                <div class="info-item" v-for="(info, i) in contactInfos" :key="i">
                  <div class="info-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="info.icon"></svg></div>
                  <div><h4>{{ info.title }}</h4><p>{{ info.content }}</p></div>
                </div>
              </div>
              <div class="social-section">
                <h4 style="font-size:0.95rem;font-weight:600;margin-bottom:1rem">Ikuti Kami</h4>
                <div class="social-links">
                  <a href="#" class="social-btn" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
                  <a href="#" class="social-btn" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                  <a href="#" class="social-btn" aria-label="Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
                </div>
              </div>
            </div>
            <div class="contact-form-wrapper reveal stagger-1">
              <div class="form-card">
                <h3 class="form-title">Kirim Pesan</h3>
                <p class="form-subtitle">Isi form berikut dan kami akan merespons secepatnya</p>
                <div v-if="formSubmitted" class="success-message">
                  <div class="success-icon"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
                  <h4 style="font-family:'Playfair Display';font-size:1.25rem;margin-bottom:0.5rem">Pesan Terkirim!</h4>
                  <p style="color:var(--gray-600);font-size:0.9rem;margin-bottom:1.5rem">Terima kasih telah menghubungi kami. Kami akan merespons pesan Anda secepatnya.</p>
                  <button class="btn btn-primary" @click="resetForm">Kirim Pesan Lain</button>
                </div>
                <form v-else @submit.prevent="submitForm" class="contact-form" novalidate>
                  <div class="form-group" :class="{'form-error':errors.name}">
                    <label for="name">Nama Lengkap <span style="color:#e74c3c">*</span></label>
                    <input id="name" v-model="form.name" type="text" placeholder="Masukkan nama lengkap Anda" :class="{'input-error':errors.name}" @blur="validateField('name')" @input="clearError('name')">
                    <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
                  </div>
                  <div class="form-group" :class="{'form-error':errors.email}">
                    <label for="email">Alamat Email <span style="color:#e74c3c">*</span></label>
                    <input id="email" v-model="form.email" type="email" placeholder="contoh@email.com" :class="{'input-error':errors.email}" @blur="validateField('email')" @input="clearError('email')">
                    <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                  </div>
                  <div class="form-group">
                    <label for="subject">Subjek</label>
                    <input id="subject" v-model="form.subject" type="text" placeholder="Subjek pesan (opsional)">
                  </div>
                  <div class="form-group" :class="{'form-error':errors.message}">
                    <label for="message">Pesan <span style="color:#e74c3c">*</span></label>
                    <textarea id="message" v-model="form.message" rows="5" placeholder="Tulis pesan Anda di sini..." :class="{'input-error':errors.message}" @blur="validateField('message')" @input="clearError('message')"></textarea>
                    <div style="display:flex;justify-content:space-between;align-items:center">
                      <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
                      <span v-else class="char-count" :class="{'char-warning':messageLength>400}" style="font-size:0.75rem;color:var(--gray-400);margin-left:auto">{{ messageLength }}/500</span>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary" style="width:100%;margin-top:0.5rem" :disabled="isSubmitting">
                    <span v-if="isSubmitting" class="spinner"></span>
                    <span v-else>Kirim Pesan <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="map-section" style="line-height:0">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.0!2d106.95!3d-6.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDInMDAuMCJTIDEwNsKwNTcnMDAuMCJF!5e0!3m2!1sid!2sid!4v1" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Peta Lokasi Agrowisata Gunung Mas Bogor"></iframe>
      </section>
    </div>
  `,
  setup() {
    const form = ref({ name: '', email: '', subject: '', message: '' });
    const errors = ref({ name: '', email: '', message: '' });
    const isSubmitting = ref(false);
    const formSubmitted = ref(false);
    const messageLength = computed(() => form.value.message.length);
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validateField = (field) => {
      errors.value[field] = '';
      if (field === 'name') {
        if (!form.value.name.trim()) errors.value.name = 'Nama lengkap wajib diisi';
        else if (form.value.name.trim().length < 3) errors.value.name = 'Nama minimal 3 karakter';
      }
      if (field === 'email') {
        if (!form.value.email.trim()) errors.value.email = 'Email wajib diisi';
        else if (!isValidEmail(form.value.email)) errors.value.email = 'Format email tidak valid';
      }
      if (field === 'message') {
        if (!form.value.message.trim()) errors.value.message = 'Pesan wajib diisi';
        else if (form.value.message.trim().length < 10) errors.value.message = 'Pesan minimal 10 karakter';
        else if (form.value.message.trim().length > 500) errors.value.message = 'Pesan maksimal 500 karakter';
      }
    };
    const clearError = (field) => { errors.value[field] = ''; };
    const validateForm = () => {
      validateField('name'); validateField('email'); validateField('message');
      return !errors.value.name && !errors.value.email && !errors.value.message;
    };
    const submitForm = () => {
      if (!validateForm()) return;
      isSubmitting.value = true;
      setTimeout(() => { isSubmitting.value = false; formSubmitted.value = true; }, 1500);
    };
    const resetForm = () => {
      form.value = { name: '', email: '', subject: '', message: '' };
      errors.value = { name: '', email: '', message: '' };
      formSubmitted.value = false;
    };
    const contactInfos = [
      { title: 'Alamat', content: 'Agrowisata Gunung Mas, Jl. Raya Puncak, Cisarua, Bogor, Jawa Barat 16750', icon: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>' },
      { title: 'Email', content: 'info@wisatajabodetabek.id', icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>' },
      { title: 'Telepon', content: '+62 812-3456-7890', icon: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>' },
      { title: 'Jam Operasional', content: 'Setiap hari: 08:00 - 17:00 WIB', icon: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' }
    ];
    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    });
    return { form, errors, isSubmitting, formSubmitted, messageLength, contactInfos, validateField, clearError, submitForm, resetForm };
  }
};

// ============ PROFILE PAGE ============
const Profile = {
  template: `
    <div class="profile">
      <header class="page-header">
        <div class="container"><h1>Profil Pembuat</h1><p>Mengenal lebih dekat pembuat website Wisata Alam Jabodetabek</p></div>
      </header>
      <section class="profile-section section">
        <div class="container">
          <div class="profile-card reveal">
            <div class="profile-cover">
              <div class="cover-gradient"></div>
            </div>
            <div class="profile-photo-wrapper">
              <div class="profile-photo">
                <!-- GANTI FOTO ANDA DI SINI -->
                <img src="images/profile-placeholder.jpg" alt="Foto Profil Mahasiswa">
                <!-- GANTI FOTO ANDA DI SINI -->
              </div>
            </div>
            <div class="profile-info">
              <!-- GANTI NAMA DI SINI -->
              <h2 class="profile-name">Nama Mahasiswa</h2>
              <!-- GANTI NAMA DI SINI -->
              <!-- GANTI NIM DI SINI -->
              <span class="profile-nim">NIM: 1234567890</span>
              <!-- GANTI NIM DI SINI -->
              <!-- GANTI BIO DI SINI -->
              <p class="profile-bio">Mahasiswa yang tertarik dengan pengembangan web dan teknologi informasi. Memiliki passion dalam desain UI/UX dan pengembangan aplikasi modern. Website ini dibuat sebagai bagian dari pembelajaran dan pengaplikasian teknologi web terkini.</p>
              <!-- GANTI BIO DI SINI -->
              <div class="profile-tags">
                <span class="profile-tag">Vue.js Developer</span>
                <span class="profile-tag">UI/UX Enthusiast</span>
                <span class="profile-tag">Web Designer</span>
              </div>
            </div>
          </div>
          <div class="about-website reveal stagger-1">
            <div class="about-card">
              <div class="about-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></div>
              <h3 style="font-size:1.5rem;margin-bottom:1rem">Tujuan Pembuatan Website</h3>
              <p class="about-text">Website "Wisata Alam Jabodetabek" ini dibuat sebagai proyek akademik untuk memenuhi tugas pemrograman web. Website ini bertujuan untuk mempromosikan dan memberikan informasi lengkap mengenai destinasi wisata alam di kawasan Jabodetabek, dengan fokus utama pada Agrowisata Gunung Mas Bogor.</p>
              <p class="about-text">Melalui website ini, pengunjung dapat mengeksplorasi berbagai daya tarik wisata, melihat galeri foto, serta mendapatkan informasi kontak yang diperlukan untuk merencanakan kunjungan. Website ini dibangun menggunakan teknologi Vue.js 3, Vue Router, dan Vite sebagai modern frontend development stack.</p>
              <div class="tech-stack">
                <h4>Teknologi yang Digunakan:</h4>
                <div class="tech-list">
                  <span v-for="(tech, i) in technologies" :key="i" class="tech-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="features-section reveal stagger-2">
            <div class="section-header">
              <span class="section-label">Implementasi</span>
              <h2 class="section-title">Fitur yang Diimplementasikan</h2>
              <p class="section-subtitle">Berikut adalah materi dan fitur yang diterapkan dalam pembuatan website ini</p>
            </div>
            <div class="features-grid">
              <div v-for="(f, i) in features" :key="i" class="feature-card reveal" :class="'stagger-'+((i%6)+1)">
                <div class="feature-number">{{ i+1 }}</div>
                <div class="feature-content"><h4>{{ f.name }}</h4><p>{{ f.description }}</p></div>
                <div class="feature-check"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  setup() {
    const technologies = [
      'Vue.js 3 Composition API', 'Vue Router 4', 'Vite Build Tool',
      'HTML5 Semantic Elements', 'CSS3 Flexbox & Grid', 'Responsive Design',
      'Media Queries', 'CSS Transitions & Animations', 'JavaScript Event Handling',
      'Vue Data Binding (v-model)', 'Vue Conditional Rendering (v-if)', 'Vue List Rendering (v-for)',
      'Vue Computed Properties', 'Form Validation'
    ];
    const features = [
      { name: 'HTML Semantic Elements', description: 'Penggunaan header, section, main, footer, nav untuk struktur yang bermakna' },
      { name: 'CSS Flexbox', description: 'Layout fleksibel untuk navbar, card, dan komponen lainnya' },
      { name: 'CSS Grid', description: 'Grid layout untuk gallery, cards, dan responsive grids' },
      { name: 'Responsive Design', description: 'Tampilan optimal di mobile, tablet, dan desktop' },
      { name: 'Media Query', description: 'Breakpoint 1024px, 768px, dan 480px untuk responsivitas' },
      { name: 'Hover Animation', description: 'Efek hover pada card, button, dan gallery items' },
      { name: 'Transition', description: 'Transisi halus pada semua elemen interaktif' },
      { name: 'Vue Router', description: 'Navigasi antar 5 halaman tanpa reload' },
      { name: 'Event Handling', description: 'Penanganan klik, submit, scroll, dan keyboard events' },
      { name: 'Data Binding', description: 'Two-way binding pada form contact dengan v-model' },
      { name: 'v-for', description: 'Rendering list untuk gallery, cards, dan navigasi' },
      { name: 'v-if', description: 'Conditional rendering untuk lightbox dan form states' },
      { name: 'Computed Property', description: 'Validasi form, filter gallery, dan dynamic data' },
      { name: 'Form Validation', description: 'Validasi real-time pada form kontak dengan error messages' }
    ];
    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    });
    return { technologies, features };
  }
};

// ============ APP COMPONENT ============
const App = {
  template: `
    <div class="app">
      <Navbar />
      <main>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
      <Footer />
    </div>
  `,
  components: { Navbar, Footer }
};

// ============ ROUTER ============
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home, meta: { title: 'Beranda - Wisata Alam Jabodetabek' } },
    { path: '/explore', name: 'Explore', component: Explore, meta: { title: 'Jelajahi - Agrowisata Gunung Mas Bogor' } },
    { path: '/gallery', name: 'Gallery', component: Gallery, meta: { title: 'Galeri - Wisata Alam Jabodetabek' } },
    { path: '/contact', name: 'Contact', component: Contact, meta: { title: 'Kontak - Wisata Alam Jabodetabek' } },
    { path: '/profile', name: 'Profile', component: Profile, meta: { title: 'Profil - Wisata Alam Jabodetabek' } }
  ],
  scrollBehavior() { return { top: 0 }; }
});

router.beforeEach((to) => { document.title = to.meta.title || 'Wisata Alam Jabodetabek'; });

// ============ MOUNT APP ============
const app = createApp(App);
app.use(router);
app.mount('#app');
