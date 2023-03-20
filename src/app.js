import express from "express";
import indexRoutes from './routes/indexRoutes';
import exphbs from "express-handlebars";
import path from "path"; //Nos sirve para las rutas modulo node
import morgan from "morgan";

const app = express();
app.set("views", path.join(__dirname,"views"));
app.engine(
    ".hbs",
    exphbs({
        layoutsDir: path.join(app.get("views"), "layouts"),
        defaultLayout: "main",
        extname: ".hbs",
    })
);
app.set("view engine", ".hbs");

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));

//Rutas
app.use(indexRoutes);

export default app;
