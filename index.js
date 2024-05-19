/* importing modules START */
import express from "express";
import ejsLayouts from "express-ejs-layouts";
import session from "express-session";
import path from "path"
import OemController from "./src/controllers/OemController.js";
import vafController from "./src/controllers/vafController.js";
import { auth } from "./src/middlewares/auth.middleware.js";

/* importing modules END */


/* server setting START */
const app=express();

app.use(
    session({
      secret: 'SecretKey',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    })
  );

app.use(express.static('public'));

/* server setting END */

/* controller setting START */
const oemcontroller= new OemController();
const vafcontroller= new vafController();

/* ejs  settings START */
app.use(ejsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.set('views', path.join(path.resolve(),'src','views'));
/* ejs  settings END */

app.get('/',oemcontroller.getLandingPage);
app.post('/register',oemcontroller.signUp);
app.get('/login',oemcontroller.getLogin);
app.post('/login',oemcontroller.signIn);
app.get('/new-VafView',auth,vafcontroller.addVaf);












export default app;