import express from 'express';
import routes from './routes.js';
import './database/index.js';
import fileRouteConfig from './config/fileRoutes.cjs';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors({
    origin: [
        "http://localhost:3001",
        "http://localhost:5173",
        "https://restaurantesaborecor.netlify.app"]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/product/file', fileRouteConfig);
app.use('/category-file', fileRouteConfig);

app.use(routes);

export default app;
