import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongoDB/connect.js";
import dalleRoutes from "./Routes/dalleRoutes.js";
import postRoutes from "./Routes/postRoutes.js";
// import auth from "./Routes/auth.js";
// import authLogin from "./Routes/authLogin.js";
dotenv.config();
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Knock Knock, it's OpenAI's DALE 2");
});

app.use("/api/v1/dalle", dalleRoutes);
app.use("/api/v1/design", postRoutes);
// app.use("`/api/v1`/auth", auth);
// app.use("/api/v1/authlogin", authLogin);


const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("Server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
