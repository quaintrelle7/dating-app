import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors'

//App Config

const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://Sharayu:GraceSha7@cluster0.hyha3ym.mongodb.net/?retryWrites=true&w=majority'

//Middleware

app.use(express.json())
app.use(Cors())
//DB Config

mongoose.connect(connection_url, {
    //mongoose behaves as if the following is always true in v6
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true
})

//API Endpoints

app.get("/", (req, res) => res.status(200).send("Hello Date!"))

app.post('/dating/cards', (req, res) => {
    const dbCard = req.body

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/dating/cards', (req, res) => {
    Cards.find((err, data) => {

        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }

    })
})









app.listen(port, () => console.log(`Listening on localhost: ${port}`))