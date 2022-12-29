import express from 'express';
import { addUser, getAllusers } from '../controller/users';
import users from '../model/users';
export const userRouter = express.Router();

userRouter.get('/', getAllusers);

// userRouter.get('users/new', (req, res) => {
//   res.send('user new');
// });

userRouter.post('/new', addUser);

userRouter
  .route('/:id')
  .get((req, res) => {
    console.log(req.params.id);
    res.send(`get user ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`put user ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user ${req.params.id}`);
  });

// const users = [{ name: 'Kyle' }, { name: 'dang' }];
// userRouter.param('id', (req, res, next, id) => {
//   req.params = users[id];
//   next();
// });
// userRouter.put('/:id', (req, res) => {
//   res.send(`update user ${req.params.id}`);
// });

// userRouter.delete('/:id', (req, res) => {
//   res.send(`delete user ${req.params.id}`);
// });

exports = { userRouter };
