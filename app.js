const express = require("express");
const axios = require("axios")
const cors = require("cors")
require('dotenv').config()

const app = express();

app.use(cors())
app.use(express.json())

app.get("/api/gallery/:galleryId", (async (req, res) => {
    const {galleryId} = req.params
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/albums/${galleryId}/photos`)
    const formattedData=data.map(d=>{
        return {title:d.title,thumbnailUrl:d.thumbnailUrl}
    })
    res.send(formattedData)
}))

app.listen(process.env.PORT || 5000, () => {
    console.log("Listening...")
})