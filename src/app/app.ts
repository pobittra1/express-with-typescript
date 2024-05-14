import express, { NextFunction, Request, Response } from "express";
const app = express();

//parsers
app.use(express.json());

//create Router object
const userRouter = express.Router();

//use router
app.use("/api/v1/users", userRouter);

//create userRouter listener
userRouter.get("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    succuess: true,
    message: "user created successfully",
    data: user,
  });
});

//for params implementation
app.get("/:userId/:subId", (req: Request, res: Response) => {
  console.log(req.params);
  console.log(req.params.userId);
  console.log(req.params.subId);
  res.send("Hello simran");
});

//handling error with try catch block
app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(something);
  } catch (err) {
    console.log(err);
    next(err);
    // res.status(400).json({
    //   success: false,
    //   message: "failed to get data"
    // })
  }
});

//for query implementation
app.get("/", (req: Request, res: Response) => {
  console.log(req.query);
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    name: "somothing",
  });
});

//handle can'nt get route
app.all("*", (req: Request, res: Response)=>{
  res.status(400).json({
    success: false,
    message: "can'nt find this route",
  });
})

//create global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "failed to get data",
    });
  }
});

export default app;
