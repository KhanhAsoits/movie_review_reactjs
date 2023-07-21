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
            <Grid container className="footer-left--contact-item" width="50%">
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

            <Grid container className="footer-left--contact-item" width="50%">
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
            <Grid container className="footer-left--contact-item" width="15%">
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

            <Grid container className="footer-left--contact-item" width="15%">
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
            <Grid container className="footer-left--contact-item" width="15%">
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

            <Grid container className="footer-left--contact-item" width="15%">
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
            <Grid container className="footer-left--contact-item" width="15%">
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
          </Grid>
        </Grid>
        <Grid container className='footer-menu' justifyContent='space-between'>
          <Grid item my="auto">
            <MenuList>
              <MenuListItem>
                <Link>Trang chủ</Link>
              </MenuListItem>
              <MenuListItem>
                <Link>Lịch chiếu</Link>
              </MenuListItem>
              <MenuListItem>
                <Link>Danh sách phim</Link>
              </MenuListItem>
              <MenuListItem>
                <Link>Giá vé</Link>
              </MenuListItem>
              <MenuListItem>
                <Link>Điều khoản sử dụng</Link>
              </MenuListItem>
            </MenuList>
          </Grid>
          <Grid item my="auto">
          <Link color="#AAA" fontSize="14px" textAlign="right" >Bản quyền thuộc về Duy Bán Xe Máy</Link>
          </Grid>
        </Grid>
      </Grid>
    </FooterStyle>
  )
}

export default FooterMV
