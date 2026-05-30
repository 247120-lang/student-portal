const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

// Home Page
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Student Portal</title>
        </head>
        <body>
            <h1>Welcome to Secure Student Portal</h1>
            <p>This portal allows students to access academic information securely.</p>

            <a href="/login">
                <button>Login</button>
            </a>
        </body>
        </html>
    `);
});

// Login Page
app.get('/login', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Login</title>
        </head>
        <body>
            <h1>Student Login</h1>

            <form action="/dashboard" method="POST">
                <label>Email:</label><br>
                <input type="email" name="email" required><br><br>

                <label>Password:</label><br>
                <input type="password" name="password" required><br><br>

                <button type="submit">Login</button>
            </form>

            <br>
            <a href="/">Back to Home</a>
        </body>
        </html>
    `);
});

// Dashboard
app.post('/dashboard', (req, res) => {
    res.send(`
        <html>
        <body>
            <h1>Student Dashboard</h1>

            <ul>
                <li>View Profile</li>
                <li>View Courses</li>
                <li>Assignments</li>
                <li>Results</li>
            </ul>

            <a href="/">Logout</a>
        </body>
        </html>
    `);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
