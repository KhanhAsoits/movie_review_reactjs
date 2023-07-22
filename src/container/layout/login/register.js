import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  Link,
} from '@mui/material'

import { LoginLayout } from './style'
import LoginImage from '../../../assets/images/Rectangle121.png'

function Register() {
  return (
    <LoginLayout>
      <div className="layoutItem layoutRegister">
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
              ></input>
            </div>

            <div className="password layoutLogin-item layoutRegister-item">
              <FormLabel className="login_label">
                Số điện thoại <span className="note">*</span>
              </FormLabel>
              <input
                name="phone"
                id="phone"
                className="login_input"
                type="number"
                required
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
                type="text"
                required
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
                type="text"
                required
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

            <Button variant="contained" className="btn-Submit" type="submit">
              Đăng nhập
            </Button>
          </FormControl>
        </div>
      </div>
    </LoginLayout>
  )
}

export default Register
