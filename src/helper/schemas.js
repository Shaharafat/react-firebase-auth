/*
 *
 * Title: Yup schemas
 * Description: signup and login related validation schemas defined here
 * Author: Shah Arafat
 * Date: 17-03-2021
 *
 */

import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
});
