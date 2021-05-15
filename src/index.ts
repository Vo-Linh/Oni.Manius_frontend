import { appendFile } from "fs";
import "reflect-metadata";
import { createConnections } from "typeorm";
import express from "express"
import path from "path";
import methodOverride from "method-override";
import bodyparser from "body-parser"

import exphbs from "express-handlebars";
import morgan from "morgan"

import homeRouter from "./routers/home.routes";
import workRouter from "./routers/work.routes";
import aboutRouter from "./routers/about.routes";
import blogRouter from "./routers/blog.routes";
import contactRouter from "./routers/contact.routes";

let app = express();

app.use(express.static(path.join(__dirname, "/public")));
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(express.json());

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use('' , homeRouter);
app.use('/work', workRouter);
app.use('/about', aboutRouter);
app.use('/blog', blogRouter);
app.use('/contact', contactRouter);


app.listen(3000, async () => {
    console.log('connected on port 3000')
    try {
        await createConnections();
        console.log('Database connect success')
    } catch (error) {
        console.log(error)
    }
})
