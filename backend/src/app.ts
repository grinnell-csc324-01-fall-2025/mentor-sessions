import express from "express";
import { Request, Response } from "express";
import { fizzBuzz } from "./fizzbuzz";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());

let fizzBuzzValues = fizzBuzz(21);
let next = 0;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
})

/**
 * Get the next fizz buzz value
 */
app.get("/fizzbuzz/next", (req: Request, res: Response) => {
  if (next < fizzBuzzValues.length) {
    res.json({ "next": fizzBuzzValues[next] });
    next++;
  } else {
    res.status(404).json({ error: "no more values" });
  }
})

/**
 * Start counting the fizz buzz values from 0 again
 */
app.post("/fizzbuzz/reset", (req: Request, res: Response) => {
  next = 0;
})

/**
 * Set the upper bound of fizz buzz (exclusive) and start counting from 0 again.
 */
app.post("/fizzbuzz/reset-max/:max", (req: Request, res: Response) => {
  try {
    const max = parseInt(req.params.max);
    if (max > 1001) {
      throw new Error();
    }
    fizzBuzzValues = fizzBuzz(max);
    next = 0;
    res.status(200);
  } catch {
    res.status(404).json({ error: "Invalid input" });
  }
})

// For testing purposes.
// https://stackoverflow.com/a/63293781
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}
