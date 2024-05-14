import { Server } from "http";
import app  from "../app/app";
const port = 5000;


let server: Server;

async function bootstrap(){
    server = app.listen(port, ()=>{
        console.log(`server listening on port ${port}`);
    })
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });