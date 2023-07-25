import { styled } from '@mui/material'

export const ShowTimesStyle = styled('div')`
  padding: 10% 5% 5%;
  position: relative;
`
export const ShowTimesMV = styled('div')`
  margin: 30px 0;
`
export const ShowTimeStyle = styled('div')`
  height: auto;
  background-color: #1b2330;
  position: relative;
  padding-bottom: 50px;
  .showTimeMV-img {
    width: 18%;
    img {
      width: 90%;
    }
  }

  .showTimeMV-description {
    width: 82%;
  }

  .btn-showtimeMV {
    width: calc(100% / 6);
    margin: 2px 0;
    padding: 10px 20px;
    font-size: 14px;
    color: #4f4f4f;
    cursor: pointer;
  }
`

export const ShowTimeStyleItem = styled('div')`
  .trangchu {
    position: absolute;
    opacity: 0.2;
    width: 100%;
    z-index: 1;
  }

  .select {
    margin: 10px;
    :first-child {
      margin-left: 0;
    }
    div {
      background-color: #fff;
      padding: 7px 25px;
    }
  }
`
