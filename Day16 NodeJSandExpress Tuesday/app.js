const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = 3001;

app.use('/api', routes);

app.listen(PORT, () => {
    console.log("Server is listening on Port 3001");
});
 