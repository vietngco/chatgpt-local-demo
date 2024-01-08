const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors()); // Use cors middleware
app.use(express.json());
app.use('/files', express.static(path.join(__dirname, '../ui/files')));

const AI_SERVER =  "http://localhost:8000/v1" 
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../ui/index.html'));
});

app.post('/ai/chat/completions', function (req, res) {
    axios.post(`${AI_SERVER}/chat/completions`, req.body)
        .then(function (response) {
            console.log("response", response.data);
            res.json({
                choices: [
                    {
                        message: {
                            content:  response.data.choices[0].message.content,
                        }
                    }
                ]
            }
            );
        })
        .catch(function (error) {
            console.error(error);
            res.status(500).send(error);
        });
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});