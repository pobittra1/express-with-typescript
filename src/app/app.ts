import express, { Request, Response } from "express";
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
app.get("/", async(req: Request, res: Response)=>{
  try{
    res.send(something);
  }catch(err){
    res.status(400).json({
      success: false,
      message: "failed to get data"
    })
  }
})

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

export default app;
