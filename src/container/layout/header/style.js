import { styled } from '@mui/material/styles'
export const HeaderMV = styled('div')`
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 72px;
  padding: 0px 20px;
  z-index: 99;

  .header-right {
    display: flex;
    .login {
      border-radius: 30px !important;
      background-color: #e3ebfd;
      margin: 0 10px;
      padding: 0 20px;
    }
  }
`

export const MenuList = styled('ul')`
  display: flex;
  justify-content: start;
`
export const MenuListItem = styled('li')`
  display: flex;
  padding: 0 15px;
  a {
    cursor: pointer;
    margin: auto;
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    color: #4475F2;
  }
`

export const InputSearch = styled('div')`
  width: 240px;
  height: 48px;
  border-radius: 30px;
  background: #f2f2f2;
  display: flex;
  margin: auto 0;
  overflow: hidden;

  button {
    border: 0;
    margin: 15px 10px;
  }

  .search-input {
    font-size: 14px;
    line-height: 20px;
    outline: none;
    border: 0;
    background-color: transparent;

    &:focus-visible {
        
    }
  }
`
