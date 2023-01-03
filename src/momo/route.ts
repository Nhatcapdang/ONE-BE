import express from 'express';
import { createOrder } from './controller';
export const createOrderRouter = express.Router();

// createOrderRouter.get('/createorder', getAllusers);

// createOrderRouter.get('users/new', (req, res) => {
//   res.send('user new');
// });

createOrderRouter.post('/createorder', createOrder);

// createOrderRouter
//   .route('/:id')
//   .get((req, res) => {
//     console.log(req.params.id);
//     res.send(`get user ${req.params.id}`);
//   })
//   .put((req, res) => {
//     res.send(`put user ${req.params.id}`);
//   })
//   .delete((req, res) => {
//     res.send(`delete user ${req.params.id}`);
//   });

// const users = [{ name: 'Kyle' }, { name: 'dang' }];
// createOrderRouter.param('id', (req, res, next, id) => {
//   req.params = users[id];
//   next();
// });
// createOrderRouter.put('/:id', (req, res) => {
//   res.send(`update user ${req.params.id}`);
// });

// createOrderRouter.delete('/:id', (req, res) => {
//   res.send(`delete user ${req.params.id}`);
// });

exports = { createOrderRouter };
