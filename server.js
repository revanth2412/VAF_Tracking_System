import app from "./index.js"
import { connectUsingMongoose } from "./src/config/mongooseConfig.js";

app.listen(3200, ()=>{
    console.log('Server is up and running at 3200');
    connectUsingMongoose()
})