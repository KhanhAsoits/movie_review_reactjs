import styled from '@emotion/styled'

export const FooterStyle = styled('div')`
  background-color: #fff;
  padding: 15px;
  .btn-footer {
    border: 0;
    background-color: #e3ebfd;
    border-radius: 50%;

    margin: 5px;
    width: 48px;
    height: 48px;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }
  }
  .footer-menu {
    padding: 0 10% 0 4%;
  }
  .footer-left {
    width: 50%;
    padding: 3% 8%;

    .footer-left--description {
      color: #aaa;
      font-size: 14px;
      line-height: 24px;
      padding: 5px 0;
      text-align: justify;
      padding: 20px 0;
    }
    .footer-left--descriptionLink {
      color: #4475f2;
      text-decoration: none;
      font-weight: 600;
    }

    .footer-left--contact {
      
      .contact-phone {
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .contact-phone-text {
          color: #9a9ea6;
          font-size: 12px;
          line-height: 18px;
        }

        .contact-phone-number {
          color: #4475F2;
          font-size: 16px;
          line-height: 22px;
          font-weight: 600;
        }
      }
    }
  }

  .footer-right {
    width: 50%;
    padding: 3% 10%;
    .footer-right--title {
      font-size: 20px;
      font-weight: 600;
      color: #4F4F4F;
      padding: 5px 0;
    }

    .footer-right--description {
      color: #aaa;
      font-size: 14px;
      line-height: 24px;
      padding: 5px 0;
      text-align: justify;
    }
  }

  .footer-link {
    font-size: 14px;
    text-decoration: none;
  }
`


export const InputSearch = styled('div')`
  width: 100%;
  height: 48px;
  border-radius: 30px;
  background: #f2f2f2;
  display: flex;
  margin: 20px 0;
  overflow: hidden;

  button {
    border: 0;
    margin: 15px 10px;
  }

  .search-input {
    font-size: 14px;
    line-height: 20px;
    width: 80%;
    outline: none;
    border: 0;
    background-color: transparent;
  }

  .btn-footer-search {
    margin: 5px;
    border-radius: 30px;
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
    color: #AAA;
  }
`