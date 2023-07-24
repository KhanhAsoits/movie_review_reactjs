import {
  Button,
  FormControl,
  FormLabel,
  Link,
} from '@mui/material'

import { LoginLayout } from './style'
import LoginImage from '../../../assets/images/Rectangle121.png'

function Login() {
  return (
    <LoginLayout>
      <div className="layoutItem">
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
            {/* <InputLabel >Email address</InputLabel>
            <Input  />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText> */}
            <div className="layoutItem-title">Đăng nhập</div>
            <div className="layoutItem-description">
              Đăng nhập để trải nghiệm dịch vụ đặt vé xem phim ở bất kì đâu
            </div>
            <div className="username layoutLogin-item">
              <FormLabel className="login_label">
                Tên đăng nhập <span className="note">*</span>
              </FormLabel>
              <input
                name="username"
                id="username"
                className="login_input"
                type="text"
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
                type="text"
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

            <Button variant="contained" className="btn-Submit" type="submit">
              Đăng nhập
            </Button>
          </FormControl>
        </div>
      </div>
    </LoginLayout>
  )
}

export default Login
