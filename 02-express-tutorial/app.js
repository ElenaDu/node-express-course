console.log('Express Tutorial')
const express = require('express');
const app = express();

//setup static and middleware
app.use(express.static('./public'));

app.all('*', (req, res) => {
    res.status(404).send('Resource not found')
})


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})
