<template>
  <form @submit.prevent="createTicket" class="ticket-form">
    <input v-model="title" placeholder="Title" required />
    <select v-model="status" required>
      <option value="" disabled>Select status</option>
      <option value="open">Open</option>
      <option value="in_progress">In Progress</option>
      <option value="closed">Closed</option>
    </select>
    <textarea v-model="description" placeholder="Description (optional)"></textarea>
    <button type="submit">Create Ticket</button>
    <p class="error" v-if="error">{{ error }}</p>
  </form>
</template>

<script>
export default {
  name: "TicketForm",
  data() {
    return {
      title: "",
      status: "",
      description: "",
      error: "",
    };
  },
  methods: {
    createTicket() {
      if (!this.title || !this.status) {
        this.error = "Title and status are required!";
        setTimeout(() => (this.error = ""), 3000);
        return;
      }
      const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
      tickets.push({ id: Date.now(), title: this.title, status: this.status, description: this.description });
      localStorage.setItem("tickets", JSON.stringify(tickets));
      this.$emit("ticket-created");
      this.title = this.status = this.description = "";
    },
  },
};
</script>

<style>
.ticket-form { display: flex; flex-direction: column; gap: 10px; background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
input, select, textarea { padding: 10px; font-size: 1rem; border-radius: 5px; border: 1px solid #ccc; }
button { padding: 10px 20px; background-color: #0099ff; color: white; border: none; border-radius: 5px; cursor: pointer; }
.error { color: red; }
</style>
