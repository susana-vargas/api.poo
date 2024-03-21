import * as express from 'express';
import userRoutes from './routes/user-routers'

const app = express();

app.use(express.json()); 

app.use('/users', userRoutes);
app.use('/',userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});