<template>
  <div class="landing-container">
    <!-- Decorative Circles -->
    <div class="decorative-circle circle1"></div>
    <div class="decorative-circle circle2"></div>

    <!-- Hero Section -->
    <header class="hero">
      <h1 data-testid="test-hero-title">TicketApp</h1>
      <p data-testid="test-hero-description">
        Manage, track, and resolve your tickets effortlessly.
      </p>
      <div class="hero-buttons">
        <button class="btn login-btn" @click="navigate('/login')">Login</button>
        <button class="btn get-started-btn" @click="navigate('/signup')">Get Started</button>
      </div>
    </header>

    <!-- Wave Background -->
    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" aria-hidden="true">
      <path fill="#0099ff" fill-opacity="1" d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"></path>
    </svg>

    <!-- Features Section -->
    <section class="features">
      <div class="feature-card">
        <h3>📊 Smart Dashboard</h3>
        <p>Get instant insights into ticket statuses and activity trends.</p>
      </div>
      <div class="feature-card">
        <h3>⚡ Fast & Reliable</h3>
        <p>Track, update, and manage tickets in real-time without delays.</p>
      </div>
      <div class="feature-card">
        <h3>🔒 Secure Sessions</h3>
        <p>Built with simulated authentication and session protection.</p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>© {{ currentYear }} <strong>TicketApp</strong> — Built by {{ authorName }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      authorName: "Mick",
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style>
.landing-container {
  font-family: Arial, sans-serif;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero {
  padding: 100px 20px 60px;
  background-color: #f6f6f6;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.btn {
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
}

.login-btn {
  background-color: #0099ff;
  color: white;
}

.get-started-btn {
  background-color: #00cc88;
  color: white;
}

.wave {
  width: 100%;
  display: block;
  margin-bottom: 40px;
}

.features {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 40px 20px;
}

.feature-card {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  width: 250px;
}

.footer {
  padding: 20px;
  background-color: #f6f6f6;
}
</style>
