import express from "express";
import cors from "cors";
import "dotenv/config";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_KEY)

const app = express()

app.use(cors({origin: true}))

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({
        messsage: "Success",
    })
})


const PORT = 1600
app.listen(PORT, ((err) => {
    if(err) throw err
    console.log(`Amazon Server running on http://localhost:${PORT}`)
}))