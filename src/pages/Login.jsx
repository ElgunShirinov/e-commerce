import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import admin from "../Data/users"
import Home from "./Home";
import "../langConfig/i18n";


const Login = () => {

  const { t } = useTranslation();

      // Make Error when input be empty
      const [username, setUser] = useState('');
      const [usernameError, setUsernameError] = useState('');
      const [password, setPassword] = useState('');
      const [passwordError, setPasswordError] = useState('');
  
      const handleUsername = (e) => {
          //get name value
          setUsernameError('')
          setUser(e.target.value)
      }
      const handlePassword = (e) => {
          //get password value
  
          setPasswordError('')
          setPassword(e.target.value)
      }
  
      const authenticationSignIn = (e) => {
          e.preventDefault();
          if (username !== "") {
              //check username
              if (username === admin[0].username) {
                  // is username  true 
                  setUsernameError('')
                  if (password === admin[0].password) {
                      // is password true 
                      localStorage.setItem('password', admin[0].password) // info set to localStorage
                      localStorage.setItem('username', admin[0].username)
                      localStorage.setItem('name', admin[0].name)
                      window.location.assign('/')
                  }
                  else {
                      setPasswordError('Password does not match with the e-mail address')
                  }
              }
              else {
                  setUsernameError('UserName does not match with our database')
              }
  
          }
          else {
              setUsernameError('UserName Required')
          }
          if (password === '') {
              setPasswordError('Password Required')
          }
      }
      const getUserName = localStorage.getItem('username')
      const getPassword = localStorage.getItem('password')
      // const getName=localStorage.getItem("name")
  return (
    <>
    
      {
        getUserName && getPassword ? <Home/>:
      
      <div className=" container login-wrapper py-5 home-wrapper-2">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-6">
            <div className="auth-card bg-dark">
              <h3 className="text-center mb-3">{t('login.1')}</h3>
              <form action="" onSubmit={authenticationSignIn} className="d-flex flex-column gap-30">
                <div>
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    onChange={handleUsername}
                    placeholder="Email"
                    className="form-control  rounded-10"
                    required
                  />
                  {usernameError && <div className="text-danger">{usernameError}</div>}
                </div>
                <div className="mb-3">
                <label className="form-label">Password</label>
                  <input
                    type="password"
                    onChange={handlePassword}
                    name="password"
                    placeholder="Password"
                    className="form-control  rounded-10"
                    required
                  />
                  {passwordError && <div className='text-danger'>{passwordError}</div>}
                </div>
                  <Link to="/forgot-password" className="text-white" id="lost_password">{t('forgot.1')} ?</Link>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button type="submit" className="button border-0 signup">{t('login.1')}</button>
                    {/* <Link to="/sign-up" className="button ">
                      Sign Up
                    </Link> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default Login;