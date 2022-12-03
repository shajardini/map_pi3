import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import POIRouter from "./routes/poi"

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.get("/",(_, res) => {
    res.send("ok")
} )


app.use("/v1",POIRouter )


app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
})