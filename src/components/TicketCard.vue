<template>
  <div class="ticket-card">
    <h4>{{ ticket.title }}</h4>
    <p>Status: <span :class="ticket.status">{{ ticket.status }}</span></p>
    <p>{{ ticket.description }}</p>
    <button @click="editTicket">Edit</button>
    <button @click="deleteTicket">Delete</button>
  </div>
</template>

<script>
export default {
  name: "TicketCard",
  props: ["ticket"],
  methods: {
    editTicket() {
      const newTitle = prompt("Update title:", this.ticket.title);
      const newStatus = prompt("Update status (open, in_progress, closed):", this.ticket.status);
      if (newTitle && ["open","in_progress","closed"].includes(newStatus)) {
        const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
        const idx = tickets.findIndex(t => t.id === this.ticket.id);
        tickets[idx].title = newTitle;
        tickets[idx].status = newStatus;
        localStorage.setItem("tickets", JSON.stringify(tickets));
        this.$emit("updated");
      }
    },
    deleteTicket() {
      if (confirm("Are you sure you want to delete this ticket?")) {
        const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
        const filtered = tickets.filter(t => t.id !== this.ticket.id);
        localStorage.setItem("tickets", JSON.stringify(filtered));
        this.$emit("deleted");
      }
    },
  },
};
</script>

<style>
.ticket-card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); width: 250px; }
.ticket-card .open { color: green; }
.ticket-card .in_progress { color: orange; }
.ticket-card .closed { color: gray; }
.ticket-card button { margin-right: 10px; padding: 5px 10px; border: none; border-radius: 5px; cursor: pointer; }
</style>
