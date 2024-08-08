const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to GlobalTech Solutions!');
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
