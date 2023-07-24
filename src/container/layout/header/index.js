import { useState } from 'react'
import { HeaderMV, InputSearch, MenuList, MenuListItem } from './style'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Button, Link } from '@mui/material'
import Logo from '../../../assets/images/Logo.png'
import IconSearch from '../../../assets/images/Iconsearch.png'
import IconUser from '../../../assets/images/icons-user.png'
import { useSelector } from 'react-redux'
import Login from '../auth/login'
import Register from '../auth/register'

function MVHeader() {
  const isLoggedIn = useSelector(
    (state) => state.authentication._draft.isLoggedIn,
  )

  const user = useSelector(
    (state) => state.authentication.authData,
  )

  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false)
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false)
  console.log(user.username)
  const handleLoginClick = () => {
    setIsModalLoginOpen(true)
  }

  const closeModalLogin = () => {
    setIsModalLoginOpen(false)
  }

  const handleRegisterClick = () => {
    setIsModalRegisterOpen(true)
  }

  const closeModalRegister = () => {
    setIsModalRegisterOpen(false)
  }
  return (
    <HeaderMV>
      <Grid container height="100%" justifyContent={'space-between'}>
        <Grid item my="auto">
          <MenuList container>
            <MenuListItem>
              <Link>
                <img src={Logo}></img>
              </Link>
            </MenuListItem>
            <MenuListItem>
              <Link className="active">
                <span>Trang chủ</span>
              </Link>
            </MenuListItem>
            <MenuListItem>
              <Link>
                <span>Lịch chiếu</span>
              </Link>
            </MenuListItem>
            <MenuListItem>
              <Link>
                <span>Danh sách phim</span>
              </Link>
            </MenuListItem>
            <MenuListItem>
              <Link>
                <span>Giá vé</span>
              </Link>
            </MenuListItem>
          </MenuList>
        </Grid>
        <Grid item my="auto" className="header-right">
          <InputSearch>
            <button>
              <img src={IconSearch}></img>
            </button>
            <input placeholder="Search..." className="search-input"></input>
          </InputSearch>

          {isLoggedIn ? (
            <li className=" user">
              <img src={IconUser} width={25} height={25} />
              {user.username}
              <button className='logout'>Đăng Xuất</button>
            </li>
            
          ) : (
            <>
            <Button className="login btn-auth" onClick={handleLoginClick}>
                Đăng nhập
              </Button>
              <Button className="register btn-auth" onClick={handleRegisterClick}>
                Đăng Kí
              </Button>
            </>
          )}

          
        </Grid>
      </Grid>
      <Login isOpen={isModalLoginOpen} onClose={closeModalLogin} />
      <Register isOpen={isModalRegisterOpen} onClose={closeModalRegister} />
    </HeaderMV>
  )
}

export default MVHeader
