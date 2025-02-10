const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Default route for testing
app.get("/", (req, res) => {
    res.send("Welcome to the API");
});

const router = express.Router();

router.get("/songs", (req, res) => {
    const songs = [
        { title: "Uptown Funk", artist: "Bruno Mars", popularity: "10", genre: ["funk", "boogie"] },
        { title: "We Found Love", artist: "Rihanna", popularity: "10", genre: ["Electro House"] }
    ];
    res.json(songs);
});

app.use("/api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
