const express = require("express");
const app = express();
const cors = require("cors");
//mongodb+srv://bereketdinku:beki1234@cluster0.a7un02o.mongodb.net/
const { default: mongoose } = require("mongoose");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  return res.json("hi fronted");
});
mongoose.connect(
  "mongodb+srv://bereketdinku:beki1234@cluster0.a7un02o.mongodb.net/musicLibrary"
);
mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log(`Error: ${error}`);
  });
const userRoute = require("./routes/auth");
app.use("/api/users", userRoute);

const artistRoute = require("./routes/artist");
app.use("/api/artist", artistRoute);

const albumRoute = require("./routes/album");
app.use("/api/album", albumRoute);

const songRoute = require("./routes/song");
app.use("/api/song", songRoute);

app.listen(8000, () => console.log("Listening to port 8000"));
