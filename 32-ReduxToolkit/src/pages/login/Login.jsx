import React from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import style from './Login.module.css'
import { useFormik } from 'formik';
import { LoginShecma } from "../../schema/LoginSchema"
import Button from '@mui/material/Button';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const navigate = useNavigate();

  const { values, handleChange, resetForm, errors, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: LoginShecma,
    onSubmit: async () => {

      let response = await axios("http://localhost:3001/users")
      let findUser = response.data.find((user) => user.username === username || user.password === password)

      if (findUser) {
        await axios.put(`${"http://localhost:3001/users"}/${findUser.id}`, { ...findUser, isLogined: true })
        resetForm();
        toast.success("login succesfuly")
        setTimeout(() => {
          navigate("/")
        }, 1000);
      }else{
        toast.apply("username or password not  be same")
      }

    },

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
        {errors.username ? <span className={style.errors}>{errors.username}</span> : null}
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
        {errors.password ? <span className={style.errors}>{errors.password}</span> : null}
        <Button variant="contained" type='submit' style={{ backgroundColor: "rgb(191, 168, 245)", height: 40 }}>Sign In</Button>
        <ToastContainer />
      </form>
    </div>
  )
}

export default Login

