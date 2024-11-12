import express from "express";
import cors from "cors";
import router from './routes/index.js';
import { constants } from "./constants.js";

const app = express();

// enabling CORS for some specific origins only.
let corsOptions = {
  origin : [constants.origin],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
  credentials: true, // If you need to send cookies or authorization headers
  optionsSuccessStatus: 204 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle errors
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", router)

const port = constants.port;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
