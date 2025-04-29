import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import style from './Login.module.css'
import { useFormik } from 'formik';
import { LoginShecma } from "../../schema/LoginSchema"
import Button from '@mui/material/Button';


const Login = () => {
    const navigate = useNavigate();

  const { values, handleChange, resetForm, errors, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3000/users", values);
        resetForm();
        toast.success("Login successfuly");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } catch (error) {
        toast.error("Login failed");
      }
    },
    validationSchema: LoginShecma
  })
  const nav = useNavigate()
  const { username, password } = values
  return (
    <div className={style.container}>
      <form action="" className={style.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <TextField
          id="username"
          label="Username"
          variant="filled"
          value={username}
          onChange={handleChange}
          name='username' />
        {errors ? <span className={style.errors}>{errors.username}</span> : null}
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
        {errors ? <span className={style.errors}>{errors.password}</span> : null}
        <Button variant="contained" onClick={() => nav('/')}>Sign In</Button>
        <ToastContainer />
      </form>
    </div>
  )
}

export default Login
