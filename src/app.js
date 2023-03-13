import express from "express";
import indexRoutes from './routes/indexRoutes';
import exphbs from "express-handlebars";
import path from "path";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine(
    ".hbs",
    exphbs({
        layoutsDir: path.join(app.get("views"), "layouts"),
        defaultLayout: "main",
        extname: ".hbs",
    })
);

app.set("view engine", ".hbs")

//rutas
app.use(indexRoutes);

export default app;  //exportamos el objeto app