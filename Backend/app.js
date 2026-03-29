import express from "express"
import connectDB from "./src/config/mongo.config.js"
import shortUrl from "./src/routes/shortUrl.route.js"
import { redirectFromShortUrl } from "./src/controllers/shortUrl.controller.js"
import dotenv from "dotenv"

dotenv.config("./.env")



const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/create', shortUrl) 

app.get("/:id",redirectFromShortUrl)

app.listen(3000 ,()=>{
    connectDB()
    console.log(`Server running at http://localhost:3000/ .`)
})