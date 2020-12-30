const app = require('./app');
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';



app.listen(PORT, () => {
    console.log(`Express-GraphQL server is running. http://${HOST}:${PORT}`);
})