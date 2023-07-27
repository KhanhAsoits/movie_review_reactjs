import { styled } from '@mui/material/styles'
export const HomeStyle = styled('div')`
  height: auto;
  background-color: #1b2330;
  position: relative;
  padding-bottom: 50px;
  background: radial-gradient(42% 28% at 50.00% 30%, rgba(27, 35, 48, 0.00) 0%, #1B2330 95%);
  
`

export const HomeStyleItem = styled('div')`
.trangchu {
    position: absolute;
    opacity: 0.2;
    width: 100%;
    z-index: 1;
  }
`

export const NavInfo = styled('div')`
  display: flex;
  padding: 10% 0 2%;
  position: relative;
  z-index: 9;
  .navInfo-left {
    width: 43%;
    color: #fff;
    padding: 3%;
    .home-title {
      font-size: 60px;
      font-weight: 500;
    }

    .home-description {
      text-align: justify;
      font-size: 16px;
      line-height: 20px;
      padding: 10px 0;
    }

    .home-navTop {
      margin: 15px 0;
      span {
        background-color: #3fa5ff;
        padding: 5px 10px;
      }
    }

    .home-mvInfor {
      border-right: 2px solid #fff;
      margin: 10px 0;
      padding: 0 7px;
      font-size: 14px;
      display: flex;
      align-items: center;
      &:first-child {
        color: #fa0;
      }
      &:last-child {
        border-right: none;
      }
    }

    .home-mvBtn {
      padding: 10px 0;
      button {
        border: 0;
        margin-right: 5px;
        padding: 3px 10px;
        background-color: rgba(255, 255, 255, 0.4);
        color: #fff;
        cursor: pointer;
      }
    }

    .buy-ticket {
      margin: 10% 0 0;

      .btn-ticket {
        padding: 15px 50px;
        color: #4475f2;
        font-size: 18px;
        font-weight: 700px;
      }
    }
  }

  .navInfo-right {
    width: 50%;
    margin-top: 10%;
    margin-left: 8%;

    .navInfo-poster {
      .navInfo-title {
        color: #fff;
        font-size: 30px;
        padding: 10px;
      }
    }

    .navInfo-actors {
      .navInfo-title {
        color: #fff;
        font-size: 30px;
        padding: 8px;
      }

      .home-mvInfor--actor {
        width: 95px;
        height: 95px;
        border-radius: 50%;
        margin: 10px 0;

      }

      .home-mvInfor--actorName {
        color: #fff;
      }
    }
  }
`

export const MovieItem = styled('div')`
  padding:  1% 3%;
  z-index: 9;
  position: relative;
  .MovieItem-link {
    text-decoration: none;
    width: calc(100%/6);
    cursor: pointer;
  }
  .MovieItem-listmv {
    padding-bottom: 20px;
    .MovieItem-listmv-title {
      color: #fff;
      font-size: 34px;
      font-weight: 600;
    }

    .MovieItem-listmv-more {
      font-size: 16px;
      cursor: pointer;
      color: #fff;
      text-decoration-color: white;
    }

    .MovieItem-listmv-image {

      width: 100%;
      height: 271px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .MovieItem-listmv-info {
      font-size: 14px;
      color: #fff;
      line-height: 20px;
      padding: 2px 0;
      color:#9f9f9f;
      font-weight: 400;
    }

    .MovieItem-listmv-name {
      font-size: 18px;
      line-height: 30px;
      color: #fff;
    }
  }
`
