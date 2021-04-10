const express = require('express');
const app = express();


const port = process.env.PORT || 7866;

app.get('/', (req, res) => {
  res.send("Hii");
})

app.listen(port, () => console.log(`Server is listening at http://localhost:${port}`));