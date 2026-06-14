<template>
  <footer class="footer">
    <div class="footer-wave">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="var(--primary-dark)"/>
      </svg>
    </div>
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand -->
          <div class="footer-brand">
            <div class="footer-logo">
              <span class="footer-logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M8 3v2m8-2v2M3 8h18M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"/>
                  <path d="M12 11v6M9 14h6"/>
                </svg>
              </span>
              <span class="footer-logo-text">Jabodetabek Wisata Alam</span>
            </div>
            <p class="footer-desc">
              Eksplorasi keindahan wisata alam Jabodetabek dengan fokus utama pada Agrowisata Gunung Mas Bogor.
              Nikmati pengalaman wisata alam yang tak terlupakan.
            </p>
            <div class="footer-social">
              <a href="#" class="social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-links-col">
            <h4 class="footer-heading">Tautan Cepat</h4>
            <ul class="footer-links">
              <li v-for="item in quickLinks" :key="item.path">
                <router-link :to="item.path" class="footer-link">
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="footer-links-col">
            <h4 class="footer-heading">Kontak Kami</h4>
            <ul class="footer-contact">
              <li class="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Agrowisata Gunung Mas, Bogor</span>
              </li>
              <li class="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>info@wisatajabodetabek.id</span>
              </li>
              <li class="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+62 812-3456-7890</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p class="copyright">
          &copy; {{ currentYear }} Wisata Alam Jabodetabek. Dibuat dengan
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          untuk tugas akademik.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      quickLinks: [
        { path: '/', label: 'Beranda' },
        { path: '/explore', label: 'Jelajahi' },
        { path: '/gallery', label: 'Galeri' },
        { path: '/contact', label: 'Kontak' },
        { path: '/profile', label: 'Profil' }
      ]
    }
  }
}
</script>

<style scoped>
.footer {
  margin-top: auto;
}

.footer-wave {
  line-height: 0;
  margin-bottom: -1px;
}

.footer-wave svg {
  width: 100%;
  height: auto;
  display: block;
}

.footer-main {
  background: var(--primary-dark);
  color: var(--white);
  padding: var(--space-3xl) 0 var(--space-2xl);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--space-3xl);
}

/* Brand */
.footer-brand {
  max-width: 400px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);
}

.footer-logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--primary-light);
  border-radius: var(--radius-md);
  color: var(--white);
}

.footer-logo-text {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--white);
}

.footer-desc {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
}

.footer-social {
  display: flex;
  gap: var(--space-sm);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  color: var(--white);
  transition: all var(--transition-base);
}

.social-link:hover {
  background: var(--primary-light);
  transform: translateY(-3px);
}

/* Links Columns */
.footer-heading {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--white);
  margin-bottom: var(--space-lg);
}

.footer-links,
.footer-contact {
  list-style: none;
}

.footer-link {
  display: block;
  padding: var(--space-xs) 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  transition: all var(--transition-base);
}

.footer-link:hover {
  color: var(--primary-lighter);
  padding-left: var(--space-sm);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--space-xs) 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.contact-item svg {
  flex-shrink: 0;
  margin-top: 3px;
  color: var(--primary-lighter);
}

/* Bottom Bar */
.footer-bottom {
  background: #142D23;
  padding: var(--space-lg) 0;
  text-align: center;
}

.copyright {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
}

.copyright svg {
  color: #e74c3c;
}

/* ============================================
   RESPONSIVE - MEDIA QUERIES
   ============================================ */

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-2xl);
  }

  .footer-brand {
    grid-column: 1 / -1;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .footer-main {
    padding: var(--space-2xl) 0 var(--space-xl);
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  .footer-brand {
    grid-column: 1;
  }
}
</style>
