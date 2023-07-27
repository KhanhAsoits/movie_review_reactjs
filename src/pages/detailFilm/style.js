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
    color: #4f4f4f;
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

export const CommentDetail = styled('div')`
  background-color: #fff;
  width: 60%;
  height: auto;
  margin: 15px auto;
  padding: 15px;

  .comment-avatar-img {
    width: 100%;
    border-radius: 50%;
    overflow: hidden;
  }

  .comment-input {
    border-bottom: 1px solid #333;
  }

  textarea {
    width: 97%;
    height: 70px;
    font-size: 1rem;
    outline: 0;
    padding: 10px;
    border: 0;
  }

  .comment-button {
    text-align: right;
    padding: 5px 0;

    .btn-ticket {
      background-color: #4475f2;
      color: #fff;
      border: 0;
      padding: 10px 20px;
    }
  }

  .comment-item {
    padding-top: 20px;

    .commentDes {
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      display: -webkit-box;
    }

    .btn-comment {
      border: 0;
      background-color: transparent;
      color: #4475f2;
      font-size: left;
      cursor: pointer;
      margin: -5px;
      padding-right: 20px;
    }
  }
`
