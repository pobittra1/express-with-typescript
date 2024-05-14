import express, { Request, Response } from "express";
const app = express();

//parsers
app.use(express.json());

app.get("/:userId/:subId", (req: Request, res: Response) => {
  console.log(req.params);
  console.log(req.params.userId);
  console.log(req.params.subId);
  res.send("Hello simran");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    name:"somothing"
  });
});

export default app;
