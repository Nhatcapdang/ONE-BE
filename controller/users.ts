import { Request, Response, NextFunction } from 'express';
import User from '../model/users';

export const getAllusers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let users;
  console.log('getAllusers', req);
  try {
    users = await User.find();
  } catch (err) {
    return next(err);
  }
  if (!users) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
  return res.status(200).json({ users });
};

export const addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('addUser');
  const { name, email, password } = req.body;
  if (
    !name &&
    name.trim() == '' &&
    !email &&
    email.trim() == '' &&
    !password &&
    password.trim() == '' &&
    password.length < 6
  ) {
    return res.status(422).json({ message: 'Invalid Data' });
  }
  let user = null;
  try {
    user = new User({
      name,
      email,
      password,
    });
    user.save();
  } catch (error) {
    return next(error);
  }
  if (!user) {
    return res.status(500).json({ message: 'Unable to save user' });
  }
  return res.status(201).json({ user });
};
