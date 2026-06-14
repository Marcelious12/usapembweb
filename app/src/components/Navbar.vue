<template>
  <header class="navbar" :class="{ 'navbar-scrolled': isScrolled, 'navbar-open': isMenuOpen }">
    <div class="container navbar-container">
      <!-- Logo -->
      <router-link to="/" class="navbar-logo" @click="closeMenu">
        <span class="logo-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 3v2m8-2v2M3 8h18M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"/>
            <path d="M12 11v6M9 14h6"/>
          </svg>
        </span>
        <div class="logo-text">
          <span class="logo-title">Jabodetabek</span>
          <span class="logo-subtitle">Wisata Alam</span>
        </div>
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="navbar-nav" role="navigation" aria-label="Navigasi utama">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :class="{ 'nav-link-active': $route.path === item.path }"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        class="menu-toggle"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle menu"
      >
        <span class="menu-bar" :class="{ 'menu-bar-open': isMenuOpen }"></span>
        <span class="menu-bar" :class="{ 'menu-bar-open': isMenuOpen }"></span>
        <span class="menu-bar" :class="{ 'menu-bar-open': isMenuOpen }"></span>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <transition name="slide-down">
      <nav v-if="isMenuOpen" class="navbar-mobile" role="navigation" aria-label="Navigasi mobile">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="mobile-nav-link"
          :class="{ 'mobile-nav-link-active': $route.path === item.path }"
          @click="closeMenu"
        >
          {{ item.label }}
        </router-link>
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
      navItems: [
        { path: '/', label: 'Beranda' },
        { path: '/explore', label: 'Jelajahi' },
        { path: '/gallery', label: 'Galeri' },
        { path: '/contact', label: 'Kontak' },
        { path: '/profile', label: 'Profil' }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
/* ---- Navbar Base ---- */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: var(--space-md) 0;
  transition: all var(--transition-base);
  background: transparent;
}

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: var(--shadow-sm);
  padding: var(--space-sm) 0;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ---- Logo ---- */
.navbar-logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  z-index: 1001;
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--primary);
  color: var(--white);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.navbar-scrolled .logo-icon {
  background: var(--primary);
}

.logo-icon svg {
  width: 22px;
  height: 22px;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-title {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--white);
  line-height: 1.2;
  transition: color var(--transition-base);
}

.navbar-scrolled .logo-title {
  color: var(--gray-900);
}

.logo-subtitle {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.8);
  transition: color var(--transition-base);
}

.navbar-scrolled .logo-subtitle {
  color: var(--gray-500);
}

/* ---- Desktop Navigation ---- */
.navbar-nav {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.nav-link {
  padding: var(--space-sm) var(--space-md);
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  border-radius: var(--radius-full);
  transition: all var(--transition-base);
  position: relative;
}

.navbar-scrolled .nav-link {
  color: var(--gray-700);
}

.nav-link:hover {
  color: var(--white);
  background: rgba(255, 255, 255, 0.1);
}

.navbar-scrolled .nav-link:hover {
  color: var(--primary);
  background: var(--primary-lightest);
}

.nav-link-active {
  color: var(--white) !important;
  background: rgba(255, 255, 255, 0.15) !important;
  font-weight: 600 !important;
}

.navbar-scrolled .nav-link-active {
  color: var(--primary) !important;
  background: var(--primary-lightest) !important;
}

/* ---- Mobile Menu Button ---- */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: var(--space-sm);
  z-index: 1001;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: all var(--transition-base);
}

.navbar-scrolled .menu-bar {
  background: var(--gray-800);
}

.menu-bar-open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-bar-open:nth-child(2) {
  opacity: 0;
}

.menu-bar-open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* ---- Mobile Navigation ---- */
.navbar-mobile {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  padding: var(--space-md);
  box-shadow: var(--shadow-lg);
  border-radius: 0 0 var(--radius-lg) var(--radius-lg);
}

.mobile-nav-link {
  display: block;
  padding: var(--space-md) var(--space-lg);
  font-size: 1rem;
  font-weight: 500;
  color: var(--gray-700);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  margin-bottom: var(--space-xs);
}

.mobile-nav-link:hover {
  background: var(--primary-lightest);
  color: var(--primary);
}

.mobile-nav-link-active {
  background: var(--primary-lightest) !important;
  color: var(--primary) !important;
  font-weight: 600 !important;
}

/* ---- Transitions ---- */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ============================================
   RESPONSIVE - MEDIA QUERIES
   ============================================ */

@media (max-width: 768px) {
  .navbar-nav {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .navbar-mobile {
    display: block;
  }

  .navbar-open {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(12px);
  }

  .navbar-open .logo-title,
  .navbar-open .nav-link {
    color: var(--gray-900);
  }

  .navbar-open .menu-bar {
    background: var(--gray-800);
  }
}
</style>
