import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
const Wrapper = () => {
  const navigate=useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
 const [isLogined,setisLogined]=useState(true)
  const [user, setUser] = useState([])
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let getAllUser = async () => {
    let { data } = await axios("http://localhost:3001/users")
    setUser(data)
  }
  let register=()=>{
    navigate("/register")
  }
  let login=()=>{
    navigate("/login")
  }
  useEffect(() => {
    getAllUser()
  }, [])
  let existUser = user.find((user) => user.isLogined === true)


  let logoutfunc = async () => {
    await axios.put(`${"http://localhost:3001/users"}/${existUser.id}`,
      { ...existUser, isLogined: false })
      setisLogined(false)
  }
  getAllUser()
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='inherit'
      >
        <ManageAccountsIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          existUser ? (
            <MenuItem onClick={() => {
                logoutfunc()
                handleClose()
                getAllUser(); 
            }}>Logout</MenuItem>
          ) : (
            <div>
              <MenuItem onClick={()=>{
                login(),
                handleClose()
              }
              }>Login</MenuItem>
              <MenuItem onClick={()=>{
                register()
                handleClose()
              }}>Register</MenuItem>
            </div>
          )
        }
      </Menu>
    </div>
  )
}

export default Wrapper
