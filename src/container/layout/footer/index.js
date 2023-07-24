import { FooterStyle, InputSearch, MenuList, MenuListItem } from './style'
import Logo from '../../../assets/images/Logo.png'
import Grid from '@mui/material/Grid'
import { Button, Link } from '@mui/material'

function FooterMV() {
  return (
    <FooterStyle>
      <Grid container display="flex">
        <Grid item className="footer-left">
          <div className="footer-left--logo">
            <img src={Logo}></img>
          </div>
          <div className="footer-left--description">
            <span>
              We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat...
            </span>
            <Link className="footer-left--descriptionLink">Read More</Link>
          </div>

          <Grid container className="footer-left--contact" display="flex">
            <Grid
              container
              className="footer-left--contact-item"
              width="40%"
              alignItems="center"
            >
              <button className="btn-footer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.3083 16.2751C17.3083 16.5751 17.2417 16.8834 17.1 17.1834C16.9583 17.4834 16.775 17.7667 16.5333 18.0334C16.125 18.4834 15.675 18.8084 15.1667 19.0167C14.6667 19.2251 14.125 19.3334 13.5417 19.3334C12.6917 19.3334 11.7833 19.1334 10.825 18.7251C9.86667 18.3167 8.90834 17.7667 7.95834 17.0751C7.00001 16.3751 6.09167 15.6001 5.22501 14.7417C4.36667 13.8751 3.59167 12.9667 2.90001 12.0167C2.21667 11.0667 1.66667 10.1167 1.26667 9.17508C0.866672 8.22508 0.666672 7.31675 0.666672 6.45008C0.666672 5.88341 0.766672 5.34175 0.966672 4.84175C1.16667 4.33341 1.48334 3.86675 1.92501 3.45008C2.45834 2.92508 3.04167 2.66675 3.65834 2.66675C3.89167 2.66675 4.12501 2.71675 4.33334 2.81675C4.55001 2.91675 4.74167 3.06675 4.89167 3.28341L6.82501 6.00842C6.97501 6.21675 7.08334 6.40841 7.15834 6.59175C7.23334 6.76675 7.27501 6.94175 7.27501 7.10008C7.27501 7.30008 7.21667 7.50008 7.10001 7.69175C6.99167 7.88341 6.83334 8.08341 6.63334 8.28341L6.00001 8.94175C5.90834 9.03341 5.86667 9.14175 5.86667 9.27508C5.86667 9.34175 5.87501 9.40008 5.89167 9.46675C5.91667 9.53341 5.94167 9.58341 5.95834 9.63341C6.10834 9.90841 6.36667 10.2667 6.73334 10.7001C7.10834 11.1334 7.50834 11.5751 7.94167 12.0167C8.39167 12.4584 8.82501 12.8667 9.26667 13.2417C9.70001 13.6084 10.0583 13.8584 10.3417 14.0084C10.3833 14.0251 10.4333 14.0501 10.4917 14.0751C10.5583 14.1001 10.625 14.1084 10.7 14.1084C10.8417 14.1084 10.95 14.0584 11.0417 13.9667L11.675 13.3417C11.8833 13.1334 12.0833 12.9751 12.275 12.8751C12.4667 12.7584 12.6583 12.7001 12.8667 12.7001C13.025 12.7001 13.1917 12.7334 13.375 12.8084C13.5583 12.8834 13.75 12.9917 13.9583 13.1334L16.7167 15.0917C16.9333 15.2417 17.0833 15.4167 17.175 15.6251C17.2583 15.8334 17.3083 16.0417 17.3083 16.2751Z"
                    stroke="#4475F2"
                    stroke-width="1.2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M14.4167 8.50016C14.4167 8.00016 14.025 7.2335 13.4417 6.6085C12.9084 6.0335 12.2 5.5835 11.5 5.5835"
                    stroke="#4475F2"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.3334 8.50008C17.3334 5.27508 14.725 2.66675 11.5 2.66675"
                    stroke="#4475F2"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div className="contact-phone" md={8} p={1}>
                <p className="contact-phone-text">Bạn cần hỗ trợ?</p>

                <Link href="#" underline="none" color="black">
                  <span className="contact-phone-number">+8476.627.5432</span>
                </Link>
              </div>
            </Grid>

            <Grid
              container
              className="footer-left--contact-item"
              width="60%"
              alignItems="center"
            >
              <button className="btn-footer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M14.1667 17.0834H5.83332C3.33332 17.0834 1.66666 15.8334 1.66666 12.9167V7.08342C1.66666 4.16675 3.33332 2.91675 5.83332 2.91675H14.1667C16.6667 2.91675 18.3333 4.16675 18.3333 7.08342V12.9167C18.3333 15.8334 16.6667 17.0834 14.1667 17.0834Z"
                    stroke="#4475F2"
                    stroke-width="1.2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.1667 7.5L11.5583 9.58333C10.7 10.2667 9.29167 10.2667 8.43334 9.58333L5.83334 7.5"
                    stroke="#4475F2"
                    stroke-width="1.2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div className="contact-phone" md={8} p={1}>
                <p className="contact-phone-text">Liên hệ với chúng tôi</p>

                <Link href="#" underline="none" color="black">
                  <span className="contact-phone-number">
                    duyscott.work@gmail.com
                  </span>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item className="footer-right">
          <div className="footer-right--title">
            <span>Tin tức</span>
          </div>

          <div className="footer-right--description">
            <span>
              Hãy là người đầu tiên biết về giảm giá, ưu đãi và sự kiện. Hủy
              đăng ký bất cứ khi nào bạn muốn.
            </span>
          </div>
          <InputSearch>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M11.3333 13.6666H4.66665C2.66665 13.6666 1.33331 12.6666 1.33331 10.3333V5.66659C1.33331 3.33325 2.66665 2.33325 4.66665 2.33325H11.3333C13.3333 2.33325 14.6666 3.33325 14.6666 5.66659V10.3333C14.6666 12.6666 13.3333 13.6666 11.3333 13.6666Z"
                  stroke="#AAAAAA"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.3334 6L9.24668 7.66667C8.56002 8.21333 7.43335 8.21333 6.74668 7.66667L4.66669 6"
                  stroke="#AAAAAA"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <input placeholder="Search..." className="search-input"></input>
            <Button variant="contained" className="btn-footer-search">
              Gửi
            </Button>
          </InputSearch>
          <Grid
            container
            className="footer-left--contact"
            display="flex"
            justifyContent="right"
          >
            <Grid container className="footer-left--contact-item" width="12.5%">
              <button className="btn-footer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.3083 16.2751C17.3083 16.5751 17.2417 16.8834 17.1 17.1834C16.9583 17.4834 16.775 17.7667 16.5333 18.0334C16.125 18.4834 15.675 18.8084 15.1667 19.0167C14.6667 19.2251 14.125 19.3334 13.5417 19.3334C12.6917 19.3334 11.7833 19.1334 10.825 18.7251C9.86667 18.3167 8.90834 17.7667 7.95834 17.0751C7.00001 16.3751 6.09167 15.6001 5.22501 14.7417C4.36667 13.8751 3.59167 12.9667 2.90001 12.0167C2.21667 11.0667 1.66667 10.1167 1.26667 9.17508C0.866672 8.22508 0.666672 7.31675 0.666672 6.45008C0.666672 5.88341 0.766672 5.34175 0.966672 4.84175C1.16667 4.33341 1.48334 3.86675 1.92501 3.45008C2.45834 2.92508 3.04167 2.66675 3.65834 2.66675C3.89167 2.66675 4.12501 2.71675 4.33334 2.81675C4.55001 2.91675 4.74167 3.06675 4.89167 3.28341L6.82501 6.00842C6.97501 6.21675 7.08334 6.40841 7.15834 6.59175C7.23334 6.76675 7.27501 6.94175 7.27501 7.10008C7.27501 7.30008 7.21667 7.50008 7.10001 7.69175C6.99167 7.88341 6.83334 8.08341 6.63334 8.28341L6.00001 8.94175C5.90834 9.03341 5.86667 9.14175 5.86667 9.27508C5.86667 9.34175 5.87501 9.40008 5.89167 9.46675C5.91667 9.53341 5.94167 9.58341 5.95834 9.63341C6.10834 9.90841 6.36667 10.2667 6.73334 10.7001C7.10834 11.1334 7.50834 11.5751 7.94167 12.0167C8.39167 12.4584 8.82501 12.8667 9.26667 13.2417C9.70001 13.6084 10.0583 13.8584 10.3417 14.0084C10.3833 14.0251 10.4333 14.0501 10.4917 14.0751C10.5583 14.1001 10.625 14.1084 10.7 14.1084C10.8417 14.1084 10.95 14.0584 11.0417 13.9667L11.675 13.3417C11.8833 13.1334 12.0833 12.9751 12.275 12.8751C12.4667 12.7584 12.6583 12.7001 12.8667 12.7001C13.025 12.7001 13.1917 12.7334 13.375 12.8084C13.5583 12.8834 13.75 12.9917 13.9583 13.1334L16.7167 15.0917C16.9333 15.2417 17.0833 15.4167 17.175 15.6251C17.2583 15.8334 17.3083 16.0417 17.3083 16.2751Z"
                    stroke="#4475F2"
                    stroke-width="1.2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M14.4167 8.50016C14.4167 8.00016 14.025 7.2335 13.4417 6.6085C12.9084 6.0335 12.2 5.5835 11.5 5.5835"
                    stroke="#4475F2"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.3334 8.50008C17.3334 5.27508 14.725 2.66675 11.5 2.66675"
                    stroke="#4475F2"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </Grid>

            <Grid container className="footer-left--contact-item" width="12.5%">
              <button className="btn-footer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M14.1667 17.0834H5.83332C3.33332 17.0834 1.66666 15.8334 1.66666 12.9167V7.08342C1.66666 4.16675 3.33332 2.91675 5.83332 2.91675H14.1667C16.6667 2.91675 18.3333 4.16675 18.3333 7.08342V12.9167C18.3333 15.8334 16.6667 17.0834 14.1667 17.0834Z"
                    stroke="#4475F2"
                    stroke-width="1.2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.1667 7.5L11.5583 9.58333C10.7 10.2667 9.29167 10.2667 8.43334 9.58333L5.83334 7.5"
                    stroke="#4475F2"
                    stroke-width="1.2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </Grid>
            <Grid container className="footer-left--contact-item" width="12.5%">
              <button className="btn-footer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M15.4167 3.9917C13.25 7.78337 9.07504 9.95837 4.72504 9.5667L2.08337 9.32503"
                    stroke="#4475F2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.58337 16.1417C6.75004 12.3501 10.925 10.1751 15.275 10.5667L17.9167 10.8084"
                    stroke="#4475F2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.99996 18.3334C14.6023 18.3334 18.3333 14.6025 18.3333 10.0001C18.3333 5.39771 14.6023 1.66675 9.99996 1.66675C5.39759 1.66675 1.66663 5.39771 1.66663 10.0001C1.66663 14.6025 5.39759 18.3334 9.99996 18.3334Z"
                    stroke="#4475F2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.35828 2.5L9.00828 5.79167C10.7833 7.99167 12.0416 10.55 12.7083 13.2917L13.7166 17.45"
                    stroke="#4475F2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </Grid>

            <Grid container className="footer-left--contact-item" width="12.5%">
              <button className="btn-footer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M9.99996 1.66675H7.24996C5.66663 1.66675 4.41663 2.91675 4.41663 4.41675C4.41663 5.91675 5.66663 7.16675 7.16663 7.16675H9.99996V1.66675Z"
                    stroke="#4475F2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M10 7.25H7.25C5.75 7.25 4.5 8.5 4.5 10C4.5 11.5 5.75 12.75 7.25 12.75H10V7.25Z"
                    stroke="#4475F2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M10 12.75H7.25C5.75 12.75 4.5 14 4.5 15.5C4.5 17 5.75 18.25 7.25 18.25C8.75 18.25 10 17 10 15.5V12.75Z"
                    stroke="#4475F2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M10 1.66675H12.75C14.25 1.66675 15.5 2.91675 15.5 4.41675C15.5 5.91675 14.25 7.16675 12.75 7.16675H10V1.66675Z"
                    stroke="#4475F2"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M12.75 7.25C14.25 7.25 15.5 8.5 15.5 10C15.5 11.5 14.25 12.75 12.75 12.75C11.25 12.75 10 11.5 10 10C10 8.5 11.25 7.25 12.75 7.25Z"
                    stroke="#4475F2"
                    stroke-miterlimit="10"
                  />
                </svg>
              </button>
            </Grid>
            <Grid container className="footer-left--contact-item" width="12.5%">
              <button className="btn-footer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5.74996 17.1667C6.99996 17.9167 8.49996 18.3334 9.99996 18.3334C14.5833 18.3334 18.3333 14.5834 18.3333 10.0001C18.3333 5.41675 14.5833 1.66675 9.99996 1.66675C5.41663 1.66675 1.66663 5.41675 1.66663 10.0001C1.66663 11.5001 2.08329 12.9167 2.74996 14.1667L2.10707 16.6394C1.91235 17.3883 2.60555 18.0652 3.34961 17.8526L5.74996 17.1667Z"
                    stroke="#4475F2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.75 12.3737C13.75 12.5087 13.72 12.6475 13.6561 12.7825C13.5923 12.9175 13.5096 13.045 13.4007 13.165C13.2167 13.3675 13.0139 13.5138 12.7848 13.6075C12.5595 13.7013 12.3153 13.75 12.0525 13.75C11.6694 13.75 11.26 13.66 10.8281 13.4763C10.3962 13.2925 9.96432 13.045 9.53618 12.7338C9.10428 12.4188 8.69492 12.07 8.30433 11.6837C7.9175 11.2937 7.56823 10.885 7.25651 10.4575C6.94855 10.03 6.70068 9.6025 6.52041 9.17875C6.34014 8.75125 6.25 8.3425 6.25 7.9525C6.25 7.6975 6.29507 7.45375 6.3852 7.22875C6.47534 7 6.61805 6.79 6.8171 6.6025C7.05746 6.36625 7.32036 6.25 7.59827 6.25C7.70343 6.25 7.80859 6.2725 7.90248 6.3175C8.00013 6.3625 8.0865 6.43 8.15411 6.5275L9.02541 7.75375C9.09301 7.8475 9.14184 7.93375 9.17564 8.01625C9.20944 8.095 9.22822 8.17375 9.22822 8.245C9.22822 8.335 9.20193 8.425 9.14935 8.51125C9.10053 8.5975 9.02917 8.6875 8.93903 8.7775L8.65361 9.07375C8.61229 9.115 8.59352 9.16375 8.59352 9.22375C8.59352 9.25375 8.59727 9.28 8.60478 9.31C8.61605 9.34 8.62732 9.3625 8.63483 9.385C8.70243 9.50875 8.81885 9.67 8.9841 9.865C9.1531 10.06 9.33337 10.2588 9.52867 10.4575C9.73147 10.6563 9.92677 10.84 10.1258 11.0087C10.3211 11.1737 10.4826 11.2862 10.6103 11.3537C10.6291 11.3612 10.6516 11.3725 10.6779 11.3837C10.7079 11.395 10.738 11.3987 10.7718 11.3987C10.8356 11.3987 10.8845 11.3763 10.9258 11.335L11.2112 11.0538C11.3051 10.96 11.3952 10.8887 11.4816 10.8438C11.568 10.7912 11.6544 10.765 11.7482 10.765C11.8196 10.765 11.8947 10.78 11.9773 10.8138C12.06 10.8475 12.1463 10.8963 12.2402 10.96L13.4834 11.8412C13.581 11.9087 13.6486 11.9875 13.6899 12.0812C13.7275 12.175 13.75 12.2687 13.75 12.3737Z"
                    stroke="#4475F2"
                    stroke-miterlimit="10"
                  />
                </svg>
              </button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className="footer-menu" justifyContent="space-between">
          <Grid item my="auto">
            <MenuList>
              <MenuListItem>
                <Link className="footer-link">Trang chủ</Link>
              </MenuListItem>
              <MenuListItem>
                <Link className="footer-link">Lịch chiếu</Link>
              </MenuListItem>
              <MenuListItem>
                <Link className="footer-link">Danh sách phim</Link>
              </MenuListItem>
              <MenuListItem>
                <Link className="footer-link">Giá vé</Link>
              </MenuListItem>
              <MenuListItem>
                <Link className="footer-link">Điều khoản sử dụng</Link>
              </MenuListItem>
            </MenuList>
          </Grid>
          <Grid item my="auto">
            <Link color="#AAA" textAlign="right" className="footer-link">
              Bản quyền thuộc về Duy Bán Xe Máy
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </FooterStyle>
  )
}

export default FooterMV
