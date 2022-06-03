import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

// Middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

// routers
import homeRouter from "./routes/homeRoutes.js";

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Welcome");
});

app.use("/api", homeRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
