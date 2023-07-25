import { Button, Grid, MenuItem, Select, Typography } from '@mui/material'
import LayoutMV from '../../render/App'
import {
  ShowTimeStyle,
  ShowTimeStyleItem,
  ShowTimesMV,
  ShowTimesStyle,
} from './style'
import Movie_1 from '../../assets/images/Rectangle102.png'

function ShowTimes() {
  return (
    <LayoutMV>
      <ShowTimeStyle>
        <ShowTimeStyleItem>
          <ShowTimesStyle>
            <Grid container>
              <Typography color="#fff" fontSize={34}>
                LỊCH CHIẾU THEO RẠP
              </Typography>
              <Grid container>
                <Grid item>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={1}
                    label="Age"
                    className="select"
                  >
                    <MenuItem value={1}>Hà Nội</MenuItem>
                    <MenuItem value={0}>TPHCM</MenuItem>
                    <MenuItem value={3}>Bình Dương</MenuItem>
                  </Select>
                </Grid>
                <Grid item>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={1}
                    label="Age"
                    className="select"
                  >
                    <MenuItem value={1}>Chi nhánh Hà Nội</MenuItem>
                    <MenuItem value={0}>Chi nhánh Thanh xuân</MenuItem>
                    <MenuItem value={3}>Chi nhánh Bình Dương</MenuItem>
                  </Select>
                </Grid>
                <Grid item>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={1}
                    label="Age"
                    className="select"
                  >
                    <MenuItem value={1}>Hôm nay</MenuItem>
                    <MenuItem value={0}>Tuần Này</MenuItem>
                    <MenuItem value={3}>Tuần sau</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Grid>

            <ShowTimesMV>
              <Grid container my={3}>
                <Grid className="showTimeMV-img">
                  <img src={Movie_1} />
                </Grid>
                <Grid className="showTimeMV-description">
                  <Typography color="#fff" fontSize={36}>
                    Black Panther: Wakanda Forever
                  </Typography>
                  <Typography color="#fff" fontSize={14} lineHeight="30px">
                    Thể loại: Phiêu lưu, Trinh thám
                  </Typography>
                  <Typography color="#fff" fontSize={14} lineHeight="30px">
                    Thời lượng: 110 phút
                  </Typography>

                  <Typography
                    color="#fff"
                    fontSize={18}
                    textTransform="uppercase"
                    py={2}
                  >
                    Phụ Đề
                  </Typography>

                  <Grid container>
                    <button className="btn-showtimeMV">
                      21:45 - 15 ghế trống
                    </button>
                    <button className="btn-showtimeMV">
                      22:15 - 15 ghế trống
                    </button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container my={3}>
                <Grid className="showTimeMV-img">
                  <img src={Movie_1} />
                </Grid>
                <Grid className="showTimeMV-description">
                  <Typography color="#fff" fontSize={36}>
                    Black Panther: Wakanda Forever
                  </Typography>
                  <Typography color="#fff" fontSize={14} lineHeight="30px">
                    Thể loại: Phiêu lưu, Trinh thám
                  </Typography>
                  <Typography color="#fff" fontSize={14} lineHeight="30px">
                    Thời lượng: 110 phút
                  </Typography>

                  <Typography
                    color="#fff"
                    fontSize={18}
                    textTransform="uppercase"
                    py={2}
                  >
                    Phụ Đề
                  </Typography>

                  <Grid container>
                    <button className="btn-showtimeMV">
                      21:45 - 15 ghế trống
                    </button>
                    <button className="btn-showtimeMV">
                      22:15 - 15 ghế trống
                    </button>
                  </Grid>
                </Grid>
              </Grid>
            </ShowTimesMV>
          </ShowTimesStyle>
        </ShowTimeStyleItem>
      </ShowTimeStyle>
    </LayoutMV>
  )
}

export default ShowTimes
