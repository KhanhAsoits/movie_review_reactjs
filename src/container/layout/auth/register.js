import React, { useState, useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  Button,
  CircularProgress,
  FormControl,
  FormLabel,
  Link,
} from '@mui/material'

import { LoginLayout } from './style'
import LoginImage from '../../../assets/images/Rectangle121.png'
import { registerThunk } from '../../../app/slices/AuthSlice'

function Register({ isOpen, onClose }) {
  const { isRegistering, setAlert } = useSelector(
    (state) => state.authentication._draft,
  )
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const dispatch = useDispatch()
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Mật khẩu không trùng khớp')
    }

    const registrationData = {
      email: email,
      password: password,
      username: userName,
    }
    dispatch(registerThunk(registrationData))
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
      <div className="layoutItem layoutRegister">
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

        <div className="layoutItem-right layoutRegister-right">
          <FormControl width="100%">
            <div className="layoutItem-title">Đăng kí</div>
            <div className="layoutItem-description">
              Đăng kí tài khoản mới để trải nghiệm dịch vụ đặt vé xem phim ở bất
              kì đâu
            </div>
            <div className="username layoutLogin-item layoutRegister-item">
              <FormLabel className="login_label">
                Họ tên <span className="note">*</span>
              </FormLabel>
              <input
                name="name"
                id="name"
                className="login_input"
                type="text"
                required
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            </div>

            <div className="password layoutLogin-item layoutRegister-item">
              <FormLabel className="login_label">
                Email <span className="note">*</span>
              </FormLabel>
              <input
                name="email"
                id="email"
                className="login_input"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            <div className="password layoutLogin-item layoutRegister-item">
              <FormLabel className="login_label">
                Mật khẩu <span className="note">*</span>
              </FormLabel>
              <input
                name="password"
                id="password"
                className="login_input"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="password layoutLogin-item layoutRegister-item">
              <FormLabel className="login_label">
                Nhập lại mật khẩu <span className="note">*</span>
              </FormLabel>
              <input
                name="passwordAgain"
                id="passwordAgain"
                className="login_input"
                type="password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>

            <div className="layoutLogin-item layoutRegister-item layoutLogin-memorize">
              <div className="memorize-password">
                <input type="checkbox"></input>
                <FormLabel>
                  Tôi cam kết tuân theo{' '}
                  <Link className="item-note">chính sách bảo mật</Link> và{' '}
                  <Link className="item-note">điều khoản sử dụng</Link> của
                  Lorem Ipsum
                </FormLabel>
              </div>
            </div>

            <Button
              variant="contained"
              className="btn-Submit"
              type="submit"
              onClick={handleRegister}
            >
              {isRegistering ? (
                <CircularProgress size={24} color={'info'} />
              ) : (
                'Đăng Ký'
              )}
            </Button>
          </FormControl>
        </div>
      </div>
      <ToastContainer />
    </LoginLayout>
  )
}

export default Register
