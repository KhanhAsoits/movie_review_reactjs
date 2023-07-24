import React, { useLayoutEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector, useDispatch } from 'react-redux'
import { loginThunk } from '../../../app/slices/AuthSlice'
import {
  Button,
  CircularProgress,
  FormControl,
  FormLabel,
  Link,
} from '@mui/material'
import { LoginLayout } from './style'
import LoginImage from '../../../assets/images/Rectangle121.png'

function Login({ isOpen, onClose }) {
  const { isLogging, alert } = useSelector(
    (state) => state.authentication._draft,
  )
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleLogin = () => {
    const loginData = {
      email: email,
      password: password,
    }
    dispatch(loginThunk(loginData))
  }

  const showToast = ({ type, msg }) => {
    switch (type) {
      case 'success':
        toast.success(msg)
        break
      case 'error':
        toast.error(msg)
        break
    }
  }
  useLayoutEffect(() => {
    if (alert != null) {
      showToast(alert)
    }
  }, [alert])

  if (!isOpen) return null
  return (
    <LoginLayout>
      <div className="layoutItem">
        <button onClick={onClose} className="layoutItem-goBack">
          X
        </button>
        <div className="layoutItem-left">
          <img
            src={LoginImage}
            className="layoutItem-img"
            height="100%"
            width="100%"
          ></img>
        </div>

        <div className="layoutItem-right">
          <FormControl width="100%">
            <div className="layoutItem-title">Đăng nhập</div>
            <div className="layoutItem-description">
              Đăng nhập để trải nghiệm dịch vụ đặt vé xem phim ở bất kì đâu
            </div>
            <div className="username layoutLogin-item">
              <FormLabel className="login_label">
                Email <span className="note">*</span>
              </FormLabel>
              <input
                name="email"
                id="email"
                className="login_input"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>

            <div className="password layoutLogin-item">
              <FormLabel className="login_label">
                Mật khẩu <span className="note">*</span>
              </FormLabel>
              <input
                name="password"
                id="password"
                className="login_input"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
            </div>

            <div className="layoutLogin-item layoutLogin-memorize">
              <div className="memorize-password">
                <input type="checkbox"></input>
                <FormLabel>Nhớ mật khẩu</FormLabel>
              </div>

              <Link className="forgot-password">Quên mật khẩu?</Link>
            </div>

            <Button
              variant="contained"
              className="btn-Submit"
              type="submit"
              onClick={handleLogin}
            >
              {isLogging ? (
                <CircularProgress color="info" size={24} />
              ) : (
                'Đăng nhập'
              )}
            </Button>
          </FormControl>
        </div>
      </div>
      <ToastContainer />
    </LoginLayout>
  )
}

export default Login
