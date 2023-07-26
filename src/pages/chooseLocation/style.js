import { styled } from '@mui/material'

export const ChooseLocationStyle = styled('div')`
  padding: 10% 5% 5%;
  position: relative;
  height: auto;
  background-color: #1b2330;
  position: relative;
`
export const ChooseLocationItem = styled('div')`
  padding: 3% 5%;
  margin-top: 20px;
  width: 80%;
  margin: 5% auto 0;
  position: relative;
  height: auto;
  background-color: #fff;
  position: relative;
`

export const ChooseLocationScreen = styled('div')`
  width: 50%;
  margin: auto;
  position: relative;
  padding-top: 10px;

  .position {
    padding-top: 15px;
  }


  .btn-maintenance {
    overflow: hidden;
    position: relative;

    :before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 2px;
      background-color: #333333;
      transform-origin: center;
      transform: translate(-50%, -50%) rotate(45deg);
    }

    :after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 2px;
      background-color: #333333;
      transform-origin: center;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  .position-chair {
    .btn-chair {
      width: calc((100% - 5%) / 8);
      margin: 0.2%;
      font-size: 1.2rem;
      light-height: 1.6rem;
      background-color: #fff;
      border: 1px solid #6cbf28;
      padding: 10px;
      cursor: pointer;

      :hover {
        border: 1px solid #f2f2f2;
        background-color: #4475f2;
      }

      :focus {
        border: 1px solid #4475f2;
        background-color: #4475f2;
        color: #fff;
      }
    }

    .btn-vip {
      border-color: #fa0;
    }

    .btn-selected {
      border-color: #f2f2f2;
      background-color: #f2f2f2;
      cursor: default;

      :hover {
        border-color: #f2f2f2;
        background-color: #f2f2f2;
      }

      :focus {
        border-color: #f2f2f2;
        background-color: #f2f2f2;
      }
    }

    .btn-sweetbox {
      width: calc((100% - 2.5%) / 6);
      border-color: #ff3e30;
      background-color: #ff3e30;
      color: #fff;

      :hover {
        border-color: #4475f2;
        background-color: #4475f2;
      }

      :focus {
        border-color: #4475f2;
        background-color: #4475f2;
        color: #fff;
      }
    }
  }

  .position-note {
    width: 55%;
    margin: 25px auto;
  }

  .btn-chairNote {
    min-width: 40px;
    min-height: 40px;
    background-color: #fff;
    border: 1px solid;
  }

  .btn-selected {
    border: 1px solid #aaa;
    background-color: #aaa;
  }

  .btn-sweetbox {
    border-color: #ff3e30;
    background-color: #ff3e30;
  }

  .btn-checked {
    background-color: #4475f2;
    border-color: #4475f2;
  }

  .btn-chair {
    border: 1px solid #6cbf28;
    background-color: #fff;
  }

  .btn-vip {
    border: 1px solid #fa0;
    background-color: #fff;
  }
`

export const FilmItem = styled('div')`
  width: 90%;
  margin: 0 auto;
  background-color: #e3ebfd;

  .detail-film {
    padding: 5% 10%;
  }

  .detail-film-img {
    img {
      width: 100%;
      min-height: 166px;
    }
  }

  .detail-film-title {
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
  }

  .buy-ticket {
    margin: 3% 0 0;
    width: 100%;

    .btn-ticket {
      padding: 15px 50px;
      background-color: #4475f2;
      border: 0;
      color: #fff;
      font-size: 18px;
      font-weight: 700px;
      width: 100%;
      cursor: pointer;
    }
  }
`
