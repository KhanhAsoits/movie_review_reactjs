import { Grid, Typography } from '@mui/material'
import LayoutMV from '../../render/App'
import {
  ChooseLocationItem,
  ChooseLocationScreen,
  ChooseLocationStyle,
  FilmItem,
} from './style'
import Movie_1 from '../../assets/images/Rectangle102.png'

function ChooseLocation() {
  return (
    <LayoutMV>
      <ChooseLocationStyle>
        <div>
          <Grid container>
            <Typography color="#fff" fontSize={34} textTransform="uppercase">
              Chọn vị trí
            </Typography>
          </Grid>

          <ChooseLocationItem>
            <ChooseLocationScreen>
              <Typography
                color="#000"
                fontSize={34}
                textTransform="uppercase"
                textAlign="center"
                borderBottom="1px solid #000"
              >
                SCREEN
              </Typography>
              <div className="position">
                <Grid container className="position-chair">
                  <button className="btn-chair">A1</button>
                  <button className="btn-chair">A1</button>
                  <button className="btn-chair">A1</button>
                  <button className="btn-chair">A1</button>
                  <button className="btn-chair">A1</button>
                  <button className="btn-chair">A1</button>
                  <button className="btn-chair">A1</button>
                  <button className="btn-chair">A1</button>
                  <button className="btn-chair">A1</button>
                  <button className="btn-chair">A1</button>
                  <button className="btn-chair">A1</button>
                  <button className="btn-chair">A1</button>

                  <button className="btn-chair btn-maintenance">A1</button>
                  <button className="btn-chair btn-vip">A1</button>
                  <button className="btn-chair btn-vip">A1</button>
                  <button className="btn-chair btn-vip">A1</button>
                  <button className="btn-chair btn-vip">A1</button>
                  <button className="btn-chair btn-vip">A1</button>
                  <button className="btn-chair btn-vip">A1</button>
                  <button className="btn-chair btn-vip">A1</button>
                  <button className="btn-chair btn-vip">A1</button>
                  <button className="btn-chair btn-vip">A1</button>
                  <button className="btn-chair btn-selected" disabled>A1</button>
                  <button className="btn-chair btn-selected" disabled>A1</button>

                  <button className="btn-chair btn-sweetbox">A1</button>
                  <button className="btn-chair btn-sweetbox">A1</button>
                  <button className="btn-chair btn-sweetbox">A1</button>
                  <button className="btn-chair btn-sweetbox">A1</button>
                  <button className="btn-chair btn-sweetbox">A1</button>
                  <button className="btn-chair btn-sweetbox">A1</button>
                </Grid>

                <Grid container className="position-note">
                  <Grid container xs={6} md={6} mt={2}>
                    <button className="btn-chairNote btn-chair"></button>
                    <Typography
                      color="#333"
                      fontSize={14}
                      margin="auto 5px"
                      fontWeight={700}
                    >
                      Ghế thường
                    </Typography>
                  </Grid>

                  <Grid container xs={6} md={6} mt={2}>
                    <button className="btn-chairNote btn-selected"></button>
                    <Typography
                      color="#333"
                      fontSize={14}
                      margin="auto 5px"
                      fontWeight={700}
                    >
                      Đã chọn
                    </Typography>
                  </Grid>
                  <Grid container xs={6} md={6} mt={2}>
                    <button className="btn-chairNote btn-vip"></button>
                    <Typography
                      color="#333"
                      fontSize={14}
                      margin="auto 5px"
                      fontWeight={700}
                    >
                      Ghế vip
                    </Typography>
                  </Grid>
                  <Grid container xs={6} md={6} mt={2}>
                    <button className="btn-chairNote btn-maintenance"></button>
                    <Typography
                      color="#333"
                      fontSize={14}
                      margin="auto 5px"
                      fontWeight={700}
                    >
                      Ghế bảo trì
                    </Typography>
                  </Grid>
                  <Grid container xs={6} md={6} mt={2}>
                    <button className="btn-chairNote btn-sweetbox"></button>
                    <Typography
                      color="#333"
                      fontSize={14}
                      margin="auto 5px"
                      fontWeight={700}
                    >
                      Sweetbox
                    </Typography>
                  </Grid>
                  <Grid container xs={6} md={6} mt={2}>
                    <button className="btn-chairNote btn-checked"></button>
                    <Typography
                      color="#333"
                      fontSize={14}
                      margin="auto 5px"
                      fontWeight={700}
                    >
                      Checked
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </ChooseLocationScreen>
          </ChooseLocationItem>

          <FilmItem>
            <Grid container className="detail-film">
              <Grid item xs={2} className="detail-film-img">
                <img src={Movie_1} width="100%" />
              </Grid>
              <Grid item xs={6} className="detail-film-item" px={3}>
                <Typography
                  color="#4f4f4f"
                  fontSize={20}
                  fontWeight={700}
                  className="detail-film-title"
                >
                  Black Phanther: Wakanda Foreverk
                </Typography>
                <Grid container>
                  <Typography
                    color="#333"
                    fontWeight={700}
                    fontSize={14}
                    lineHeight="30px"
                    minWidth={170}
                  >
                    Thể loại:
                  </Typography>
                  <Typography
                    color="#333"
                    fontSize={14}
                    lineHeight="30px"
                    fontWeight={400}
                  >
                    Kinh dị, Hồi Hộp
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    color="#333"
                    fontWeight={700}
                    fontSize={14}
                    lineHeight="30px"
                    minWidth={170}
                  >
                    Thời lượng
                  </Typography>
                  <Typography
                    color="#333"
                    fontSize={14}
                    lineHeight="30px"
                    fontWeight={400}
                  >
                    107 phút
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    color="#333"
                    fontWeight={700}
                    fontSize={14}
                    lineHeight="30px"
                    minWidth={170}
                  >
                    Ngôn ngữ
                  </Typography>
                  <Typography
                    color="#333"
                    fontSize={14}
                    lineHeight="30px"
                    fontWeight={400}
                  >
                    Tiếng Anh
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    color="#333"
                    fontWeight={700}
                    fontSize={14}
                    lineHeight="30px"
                    minWidth={170}
                  >
                    Ngày khởi chiếu
                  </Typography>
                  <Typography
                    color="#333"
                    fontSize={14}
                    lineHeight="30px"
                    fontWeight={400}
                  >
                    10/07/2023
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={4} className="detail-film-item">
                <Grid container>
                  <Typography
                    color="#333"
                    fontWeight={700}
                    fontSize={14}
                    lineHeight="30px"
                    minWidth={170}
                  >
                    Rạp:
                  </Typography>
                  <Typography
                    color="#333"
                    fontSize={14}
                    lineHeight="30px"
                    fontWeight={400}
                  >
                    VN Thanh Xuân - HN
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    color="#333"
                    fontWeight={700}
                    fontSize={14}
                    lineHeight="30px"
                    minWidth={170}
                  >
                    Xuất chiếu
                  </Typography>
                  <Typography
                    color="#333"
                    fontSize={14}
                    lineHeight="30px"
                    fontWeight={400}
                  >
                    12:00AM
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    color="#333"
                    fontWeight={700}
                    fontSize={14}
                    lineHeight="30px"
                    minWidth={170}
                  >
                    Phòng chiếu
                  </Typography>
                  <Typography
                    color="#333"
                    fontSize={14}
                    lineHeight="30px"
                    fontWeight={400}
                  >
                    Cinema 8
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    color="#333"
                    fontWeight={700}
                    fontSize={14}
                    lineHeight="30px"
                    minWidth={170}
                  >
                    Vị trí
                  </Typography>
                  <Typography
                    color="#333"
                    fontSize={14}
                    lineHeight="30px"
                    fontWeight={400}
                  >
                    L1, L2, L3
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    color="#333"
                    fontWeight={700}
                    fontSize={14}
                    lineHeight="30px"
                    minWidth={170}
                  >
                    Giá dự tính
                  </Typography>
                  <Typography
                    color="#333"
                    fontSize={14}
                    lineHeight="30px"
                    fontWeight={400}
                  >
                    300.000VNĐ
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    color="#333"
                    fontWeight={700}
                    fontSize={14}
                    lineHeight="30px"
                    minWidth={170}
                  >
                    Tổng tiền
                  </Typography>
                  <Typography
                    color="#333"
                    fontSize={14}
                    lineHeight="30px"
                    fontWeight={400}
                  >
                    300.000VNĐ
                  </Typography>
                </Grid>
                <Grid className="buy-ticket" width="100%">
                  <button className="btn-ticket" width="100%">
                    Đặt vé ngay
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </FilmItem>
        </div>
      </ChooseLocationStyle>
    </LayoutMV>
  )
}

export default ChooseLocation
