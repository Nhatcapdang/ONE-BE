import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { userRouter } from './src/routers/users';
import { createOrderRouter } from './src/momo/route';
const app = express();

// allow access req.body
app.use(express.urlencoded({ extended: true }));
// allow body json url name=dsadas https://expressjs.com/en/api.html#express.json
app.use(express.json());

app.get('/', (req, res) => {
  console.log('home');
  res.send('/home');
});

app.use('/users', userRouter);
app.use('/momo', cors(), createOrderRouter);

mongoose.set('strictQuery', false);
mongoose
  .connect(
    'mongodb+srv://admin:BtfuJwEKUBxDc3Wv@cluster0.08kjyko.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() =>
    app.listen(5000, () =>
      console.log('Connected and Running on port http://localhost:5000')
    )
  )
  .catch((err) => console.log('Error connecting to Mongo', err));
