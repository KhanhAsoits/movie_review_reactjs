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
    
    .btn-auth {
      border-radius: 30px !important;
      background-color: #e3ebfd;
      margin-left: 10px;
      padding: 0 20px;

      
    }
    .user {
      list-style: none;
      position: relative;
      margin: auto;
      padding: 15px;
      .logout {
        display: none;
        position: absolute;
        border: 0;
        bottom: -50%;
        left: 5%;
        padding: 10px 0;
        width: 90%;
        cursor: pointer;
      }

      :hover .logout {
        display: block;
      }
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
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #4F4F4F;
  }
  a:hover {
    color: #4475f2;
  }

  .active {
    color: #4475f2;
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
