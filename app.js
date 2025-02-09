//setup
const express = require("express")
var cors = require("cors")

const app = express()
app.use(cors())
const router = express.Router()


//start the web server *port number, function)

router.get("/songs", function(req, res){
    const songs = [
    {
        title: "Uptown Funk",
        artist: "Bruno Mars",
        popularity: "10",
        genre: ["funk", "boogie"]
    },
    {
        title: "We Found Love",
        artist: "Rihana",
        popularity: "10",
        genre: ["Electro House"]
    }
    ];
    res.json(songs)
})

app.use("/api", router)
app.listen(3000)