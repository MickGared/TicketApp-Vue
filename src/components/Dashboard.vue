<template>
  <div class="dashboard-container">
    <h2>Dashboard</h2>
    <div class="stats">
      <div class="stat-card">
        <h3>Total Tickets</h3>
        <p>{{ total }}</p>
      </div>
      <div class="stat-card open">
        <h3>Open Tickets</h3>
        <p>{{ open }}</p>
      </div>
      <div class="stat-card closed">
        <h3>Resolved Tickets</h3>
        <p>{{ closed }}</p>
      </div>
    </div>
    <div class="dashboard-buttons">
      <router-link to="/tickets" class="btn">Manage Tickets</router-link>
      <button class="btn logout-btn" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      tickets: JSON.parse(localStorage.getItem("tickets") || "[]"),
    };
  },
  computed: {
    total() { return this.tickets.length; },
    open() { return this.tickets.filter(t => t.status === "open").length; },
    closed() { return this.tickets.filter(t => t.status === "closed").length; },
  },
  methods: {
    logout() {
      localStorage.removeItem("ticketapp_session");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.dashboard-container { max-width: 960px; margin: 50px auto; }
.stats { display: flex; gap: 20px; flex-wrap: wrap; }
.stat-card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); flex: 1; min-width: 150px; }
.stat-card.open { background-color: #ccffcc; }
.stat-card.closed { background-color: #e0e0e0; }
.dashboard-buttons { margin-top: 20px; display: flex; gap: 10px; }
.btn { padding: 10px 20px; background-color: #0099ff; color: white; border: none; border-radius: 5px; cursor: pointer; text-decoration: none; }
.logout-btn { background-color: #ff4d4d; }
</style>
