import fibonacci from "./fib";
import { Request, Response } from "express";

// Modified to resolve errors
// Endpoint for querying the fibonacci numbers
export default (req: Request, res: Response): void => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
