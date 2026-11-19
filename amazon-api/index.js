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

app.post("/payment/create", async(req, res) => { 
    const total = req.query.total;

    if(total > 0){
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "usd",
        })

        res.status(201).json({
            clientSecret: paymentIntent.client_secret,
        })
    }else{
        res.status(403).json({
            message: "Total must be greate than 0"
        })
    }
})

const PORT = 1600
app.listen(PORT, ((err) => {
    if(err) throw err
    console.log(`Amazon Server running on http://localhost:${PORT}`)
}))