const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({origin: true}))

app.post('/authenticate', async (req, res) => { // we create a post endpoint for authenticate 
    const { username } = req.body;              // which takes in a username from the request body

    return res.json({username: username, secret: "sha256..."}) // and returns a fake username and password
});

app.listen(3000)