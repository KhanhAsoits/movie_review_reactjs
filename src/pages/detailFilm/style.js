import { styled } from '@mui/material'

export const DetailFilmStyle = styled('div')`
  padding: 10% 5% 5%;
  position: relative;
  height: auto;
  background-color: #1b2330;
  position: relative;
  padding-bottom: 50px;
`


export const TrailerMV = styled('div')`
    padding-top: 20px;
`

export const DetailFilmMV = styled('div')`
  margin: 30px 0;
  .showTimeMV-img {
    width: 25%;
    img {
      width: 90%;
    }
  }

  .showTimeMV-description {
    width: 75%;
  }

  .btn-showtimeMV {
    margin: 10px;
    padding: 10px 20px;
    font-size: 14px;
    color: #4F4F4F;
    cursor: pointer;
    :first-child {
      margin-left: 0;
    }
  }
  .buy-ticket {
    margin: 3% 0 0;

    .btn-ticket {
      padding: 15px 50px;
      color: #4475f2;
      font-size: 18px;
      font-weight: 700px;
    }
  }
`