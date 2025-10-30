<template>
  <div class="tickets-container">
    <h2>Ticket Management</h2>
    <ticket-form @ticket-created="fetchTickets"></ticket-form>
    <div class="tickets-list">
      <ticket-card
        v-for="ticket in tickets"
        :key="ticket.id"
        :ticket="ticket"
        @updated="fetchTickets"
        @deleted="fetchTickets"
      ></ticket-card>
    </div>
  </div>
</template>

<script>
import TicketCard from "./TicketCard.vue";
import TicketForm from "./TicketForm.vue";

export default {
  name: "TicketManagement",
  components: { TicketCard, TicketForm },
  data() {
    return { tickets: [] };
  },
  methods: {
    fetchTickets() {
      this.tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
    },
  },
  mounted() {
    this.fetchTickets();
  },
};
</script>

<style>
.tickets-container { max-width: 960px; margin: 50px auto; }
.tickets-list { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 20px; }
</style>
