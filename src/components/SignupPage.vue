<template>
  <div class="auth-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label>Email</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Login</button>
      <p class="error" v-if="error">{{ error }}</p>
    </form>
    <p>Don't have an account? <router-link to="/signup">Sign up</router-link></p>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      // Simulated authentication
      if (this.email === "test@example.com" && this.password === "password") {
        localStorage.setItem("ticketapp_session", "token123");
        this.$router.push("/dashboard");
      } else {
        this.error = "Invalid credentials!";
        setTimeout(() => (this.error = ""), 3000);
      }
    },
  },
};
</script>

<style>
.auth-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
.auth-container h2 { margin-bottom: 20px; }
.form-group { margin-bottom: 15px; display: flex; flex-direction: column; }
input { padding: 10px; font-size: 1rem; border-radius: 5px; border: 1px solid #ccc; }
button { padding: 10px 20px; background-color: #0099ff; color: white; border: none; border-radius: 5px; cursor: pointer; }
.error { color: red; margin-top: 10px; }
</style>
