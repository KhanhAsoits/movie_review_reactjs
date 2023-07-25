import { Grid, Typography } from '@mui/material'
import { DetailFilmMV, DetailFilmStyle, TrailerMV } from './style'
import LayoutMV from '../../render/App'
import Movie_1 from '../../assets/images/Rectangle102.png'

function DetailFilm() {
  return (
    <LayoutMV>
      <DetailFilmStyle>
        <div>
          <Grid container>
            <Typography color="#fff" fontSize={34} textTransform="uppercase">
              Chi tiết phim
            </Typography>
          </Grid>

          <DetailFilmMV>
            <Grid container my={3}>
              <Grid className="showTimeMV-img">
                <img src={Movie_1} />
              </Grid>
              <Grid className="showTimeMV-description">
                <Typography color="#fff" fontSize={36}>
                  Black Panther: Wakanda Forever
                </Typography>
                <Typography color="#b8b8b8" fontSize={14} lineHeight="30px">
                  "Quỷ quyệt: Cửa Đỏ Vô Định" là bộ phim kinh dị siêu nhiên của
                  Mỹ ra mắt năm 2023 được đạo diễn bởi Patrick Wilson, đây đồng
                  thời cũng là bộ phim đạo diễn đầu tay của anh, với kịch bản
                  dựa trên câu chuyện từ nhà sáng tạo của loạt phim Leigh
                  Whannell và được chấp bút bởi Scott Teems.
                </Typography>
                <Typography color="#fff" fontSize={14} lineHeight="30px">
                  Thời lượng: 110 phút
                </Typography>

                <Grid container>
                  <Typography
                    color="#fff"
                    fontSize={14}
                    lineHeight="30px"
                    minWidth={170}
                  >
                    Đạo diễn:
                  </Typography>
                  <Typography color="#b8b8b8" fontSize={14} lineHeight="30px">
                    Patrick Wilson
                  </Typography>
                </Grid>

                <Grid container>
                  <Typography
                    color="#fff"
                    fontSize={14}
                    lineHeight="30px"
                    minWidth={170}
                  >
                    Diễn viên:
                  </Typography>
                  <Typography color="#b8b8b8" fontSize={14} lineHeight="30px">
                    Patrick Wilson, Ty Simpkins, Rose Byrne
                  </Typography>
                </Grid>

                <Grid container>
                  <Typography
                    color="#fff"
                    fontSize={14}
                    lineHeight="30px"
                    minWidth={170}
                  >
                    Thể loại:
                  </Typography>
                  <Typography color="#b8b8b8" fontSize={14} lineHeight="30px">
                    Kinh dị, Hồi Hộp
                  </Typography>
                </Grid>

                <Grid container>
                  <Typography
                    color="#fff"
                    fontSize={14}
                    lineHeight="30px"
                    minWidth={170}
                  >
                    Thời lượng:
                  </Typography>
                  <Typography color="#b8b8b8" fontSize={14} lineHeight="30px">
                    107 phút
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    color="#fff"
                    fontSize={14}
                    lineHeight="30px"
                    minWidth={170}
                  >
                    Ngôn ngữ:
                  </Typography>
                  <Typography color="#b8b8b8" fontSize={14} lineHeight="30px">
                    Tiếng Anh
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    color="#fff"
                    fontSize={14}
                    lineHeight="30px"
                    minWidth={170}
                  >
                    Ngày khởi chiếu:
                  </Typography>
                  <Typography color="#b8b8b8" fontSize={14} lineHeight="30px">
                    14/07/2023
                  </Typography>
                </Grid>
                <Grid container className="buy-ticket">
                <button className="btn-ticket">Đặt vé ngay</button>
              </Grid>
              </Grid>
            </Grid>

            
          </DetailFilmMV>

          <TrailerMV >
          <Typography color="#fff" fontSize={28} textAlign='center' textTransform="uppercase" my={5}>
              Trailer
            </Typography>
            <Grid container justifyContent='center'>
            <iframe width="860" height="500"  src="https://www.youtube.com/embed/cDmlGhcKXeQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Grid>
          </TrailerMV>
        </div>
      </DetailFilmStyle>
    </LayoutMV>
  )
}

export default DetailFilm
