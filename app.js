const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Hello World from Krishna Sumanth's app!")
})

app.get('/about', (req, res) => {
    res.send("I am Krishna Sumanth Koyyalamudi. I am from India and I have completed my undergraduation in Electronics and Communication Engineering (Hons) at Lovely Professional University. I am an active student of Masters in Applied Computer Science at Northwest Missouri State University. I have completed CCNA training and have worked as systems engineer at Infosys.Ltd in India. I am a tech enthusiast who is more drawn towards the Virtual and Augmented Reality space.")
})

app.get('/contact', (req, res) => {
    res.send("Contact me at: s538345@nwmissouri.edu")
})

app.get('/help', (req, res) => {
    res.send("I am the one who needs a lot of help")
})

app.get('/help/:topic', (req, res) => {
    res.send(`You had enough help for ${req.params.topic} start grinding!`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})