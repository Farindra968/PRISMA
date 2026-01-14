import app from "./src/app";
import { config } from "./src/config/config";

const startSrver =()=>{
    const pot = config.port
    app.listen((port)=>{
        console.log(`Server Start in port ${port}`)
    })
}

startSrver()