const express = require('express');
const app = express();

app.use(express.json());

// Sample in-memory data store
let tickets = [];
let ticketIdCounter = 1;

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to GlobalTech Solutions Customer Support Portal!');
});

// Create a ticket
app.post('/tickets', (req, res) => {
    const { title, description, status = 'open', priority = 'low' } = req.body;
    const newTicket = { id: ticketIdCounter++, title, description, status, priority };
    tickets.push(newTicket);
    res.status(201).json(newTicket);
});

// View all tickets
app.get('/tickets', (req, res) => {
    res.json(tickets);
});

// Filter tickets by status
app.get('/tickets/status/:status', (req, res) => {
    const { status } = req.params;
    const filteredTickets = tickets.filter(ticket => ticket.status === status);
    res.json(filteredTickets);
});

// Filter tickets by priority
app.get('/tickets/priority/:priority', (req, res) => {
    const { priority } = req.params;
    const filteredTickets = tickets.filter(ticket => ticket.priority === priority);
    res.json(filteredTickets);
});

// Update a ticket's status or priority
app.put('/tickets/:id', (req, res) => {
    const { id } = req.params;
    const { status, priority } = req.body;
    const ticket = tickets.find(t => t.id == id);

    if (ticket) {
        if (status) ticket.status = status;
        if (priority) ticket.priority = priority;
        res.json(ticket);
    } else {
        res.status(404).send('Ticket not found');
    }
});

// Delete a ticket
app.delete('/tickets/:id', (req, res) => {
    const { id } = req.params;
    tickets = tickets.filter(ticket => ticket.id != id);
    res.status(204).send();
});

// 404 Error handling middleware
app.use((req, res, next) => {
    res.status(404).send('Page Not Found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
