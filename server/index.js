require("dotenv").config();
const app = require('./app');
const PORT = process.env.port;

app.listen(PORT, async () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})