//dependencies
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const loginRoute = require("./routes/LoginRoute");
// configure app
const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use(loginRoute);

// app.get("/BuiltCRM", (req, res) => {
//   res.send("hello world");
// });

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
