import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import style from './Register.module.css'
import Button from '@mui/material/Button';
import { userShecma } from "../../schema/RegisterSchema"
import { useFormik } from 'formik';

const Register = () => {
  const navigate = useNavigate();

  const { values, handleChange, resetForm, errors, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmpassword: '',
      isLogined: false
    },
    onSubmit: async (values) => {
      await axios.post("http://localhost:3000/users", values);
      resetForm(); 
      navigate("/login");
      toast.success("login succesfuly")
    },
    validationSchema: userShecma
  });

  const { name, email, username, password, confirmpassword } = values;

  return (
    <div className={style.container}>
      <form action="" className={style.form} onSubmit={handleSubmit} >
        <h2>Register</h2>
        <TextField
          id="name"
          label="Name"
          variant="filled"
          value={name}
          onChange={handleChange}
          name='name' />
        {errors.name && <span className={style.errors}>{errors.name}</span>}

        <TextField
          id="username"
          label="Username"
          variant="filled"
          value={username}
          onChange={handleChange}
          name='username' />
        {errors.username && <span className={style.errors}>{errors.username}</span>}

        <TextField
          id="email"
          label="Email"
          variant="filled"
          value={email}
          onChange={handleChange}
          name='email' />
        {errors.email && <span className={style.errors}>{errors.email}</span>}

        <TextField
          id="password"
          label="Password"
          type="password"
          name='password'
          autoComplete="current-password"
          variant="filled"
          value={password}
          onChange={handleChange}
        />
        {errors.password && <span className={style.errors}>{errors.password}</span>}

        <TextField
          id="confirmpassword"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          name='confirmpassword'
          value={confirmpassword}
          onChange={handleChange}
        />
        {errors.confirmpassword && <span className={style.errors}>{errors.confirmpassword}</span>}

        <Button variant="contained" type='submit'>Sign Up
        </Button>
        <ToastContainer position="top-right" autoClose={1000} />
      </form>
    </div>
  )
}

export default Register;
