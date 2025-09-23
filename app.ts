import express from "express";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use((req, res, next)=>{
    let compteur: number = 0;
    if(req.method ==='GET'){
        compteur++;
        console.log("GET: " + compteur)
    }
})

export default app;
