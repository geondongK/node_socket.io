const express = require('express'),
    path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const port = 5502;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});