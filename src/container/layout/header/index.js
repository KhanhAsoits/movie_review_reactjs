import { HeaderMV, InputSearch, MenuList, MenuListItem } from './style'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Button, Link } from '@mui/material'
import Logo from '../../../assets/images/Logo.png'
import IconSearch from '../../../assets/images/Iconsearch.png'

function MVHeader() {
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
              <Link>
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
          <Button className="login">Đăng nhập</Button>
        </Grid>
      </Grid>
    </HeaderMV>
  )
}

export default MVHeader
