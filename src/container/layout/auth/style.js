import { styled } from '@mui/material/styles'
export const LoginLayout = styled('div')`
  background-color: #8f8f8f6b;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  padding: 0px 20px;
  z-index: 9998;
  display: flex;
  justify-content: center;
    .layoutItem {
        position: absolute;
        background-color: #fff;
        width: 70%;
        min-heigh: 500px;
        height: auto;
        top: 13%;
        z-index: 9999;
        border-radius: 20px;
        outline: none;
        padding: 25px;
        display: flex;
        .layoutItem-goBack {
            position: absolute;
            width: 35px;
            height: 35px;
            top: -2%;
            right: -1%;
            background-color: #e4e4e4;
            border-radius: 50%;
            padding: 0;
            border: 0;
            font-weight: 600;
            cursor: pointer;s
        }
        .layoutItem-left {
            width: 55%;
            padding:15px;
        }
        .layoutItem-right {
            margin: auto;
            width: 30%;
            padding: 30px 25px;
            height: 100%;
            .layoutItem-title {
                font-size: 40px;
                font-weight: 600;
                text-align: center;
                color: #4475F2;
                padding: 10px;
            }

            .layoutItem-description {
                font-size: 16px;
                text-align: center;
                padding: 10px 0;
            }

            .layoutLogin-item {
                width: 100%;
                margin: 10px 0;
                
            }

            .layoutRegister-item {
                margin: 3px 0;
            }
            .login_label {
                color: #0E1937;
                font-weight: 500;
                width: 100%;
                font-size: 16px;
                
                .note {
                    color: #FF3E30   
                }
            }

            .login_input {
                width: 95%;
                font-size: 16px;
                padding: 10px 10px;
                border-radius: 30px;
                outline: none;
                border: 1px solid #D2D2D2;
                color: #9C9C9C;
                margin: 5px 0px;

            }

            .btn-Submit {
                padding: 8px;
                border-radius: 30px;
                width: 100%;
                margin: 8px;
            }

            .layoutLogin-memorize{
                display: flex;
                justify-content: space-between;
                padding-bottom: 20px;

                .memorize-password {
                    margin: auto 0;
                    label {
                        font-size: 16px;
                    }
                    
                }
                .forgot-password {
                    font-size: 16px;
                    cursor: pointer;
                    text-decoration: none;
                }

                .item-note {
                    text-decoration: none;
                }
            }
            
        }

        .layoutRegister-right {
            padding: 0px 25px;
        }
    }

    .layoutRegister {
        top: 10%;
        padding: 25px;
    }
  }
`
