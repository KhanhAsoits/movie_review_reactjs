import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useLayoutEffect, useState } from 'react'
import LayoutMV from '../../render/App'
import {
  ShowTimesMV,
  ShowTimesStyle,
  ShowTimeStyle,
  ShowTimeStyleItem,
} from '../showtimes/style'
import {
  Box,
  CircularProgress,
  Grid,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'

import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { filterMovie, getAllMovie } from '../../app/slices/MovieSlice'
import { Link } from 'react-router-dom'

export const ListMovie = () => {
  const dispatch = useDispatch()
  const { allMovies } = useSelector((state) => state.movie)
  const { isFetchingAllMovie } = useSelector((state) => state.movie._draft)
  const [selectFilter, setSelectFilter] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentData, setCurrentData] = useState(allMovies)
  useLayoutEffect(() => {
    dispatch(getAllMovie())
  }, [])
  useEffect(() => {
    setCurrentData(allMovies.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage,
    ))
  }, [])

  const itemsPerPage = 10

  const totalPages = Math.ceil(allMovies.length / itemsPerPage)

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber)
    console.log(pageNumber)
    const newCurrentData = allMovies.slice(
      (pageNumber - 1) * itemsPerPage,
      pageNumber * itemsPerPage
    );
    setCurrentData((prev) => (prev= newCurrentData));
  }

  const handleChangeFilter = ({ target }) => {
    const value = target.value
    let type_ = ''
    switch (value) {
      case 0:
        type_ = 'allMovies'
        break
      case 1:
        type_ = 'new'
        break
      case 2:
        type_ = 'recently'
        break
      case 3:
        type_ = 'best'
        break
    }
    dispatch(filterMovie({ type_ }))
  }
  return (
    <LayoutMV>
      <ShowTimeStyle>
        <ShowTimeStyleItem>
          <ShowTimesStyle>
            <Grid container>
              <Typography color="#fff" fontSize={34}>
                DANH SÁCH PHIM
              </Typography>
              <Grid container>
                <Grid item>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectFilter}
                    label="Age"
                    className="select"
                    onChange={handleChangeFilter}
                  >
                    <MenuItem value={0}>Tất cả</MenuItem>
                    <MenuItem value={1}>Phim Mới</MenuItem>
                    <MenuItem value={2}>Phim Sắp Chiếu</MenuItem>
                    <MenuItem value={3}>Phim Thịnh Hành</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Grid>

            <ShowTimesMV>
              {isFetchingAllMovie ? (
                <Box
                  backgroundColor={'black'}
                  style={{
                    height: '100vh',
                    width: '100vw',
                    position: 'absolute',
                    zIndex: 10,
                    top: 0,
                    left: 0,
                  }}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <CircularProgress color={'info'} size={30} />
                </Box>
              ) : (
                <>
                  {currentData.map((movie, index) => {
                    return (
                      <Link
                        to={'/detail-film/' + movie?.id}
                        style={{ textDecoration: 'none' }}
                      >
                        <Grid container my={3}>
                          <Grid className="showTimeMV-img">
                            <img
                              style={{
                                minHeight: 300,
                                borderRadius: 6,
                                objectFit: 'cover',
                              }}
                              src={movie?.thumbnail}
                            />
                          </Grid>
                          <Grid className="showTimeMV-description">
                            <Typography color="#fff" fontSize={36}>
                              {movie?.name}
                            </Typography>
                            <Typography
                              color="#fff"
                              fontSize={14}
                              lineHeight="30px"
                            >
                              Thể loại :{' '}
                              {Array.isArray(movie?.types)
                                ? movie?.types?.join(',')
                                : movie?.types}
                            </Typography>
                            <Typography
                              color="#fff"
                              fontSize={14}
                              lineHeight="30px"
                            >
                              Thời lượng:{' '}
                              {movie?.duration?.replace('m', ' phút')}
                            </Typography>

                            <Typography color="#fff" fontSize={18} py={2}>
                              Phụ Đề : {movie?.language}
                            </Typography>
                            <Typography color="#fff" fontSize={18} py={2}>
                              Diễn viên :{' '}
                              {Array.isArray(movie?.actors)
                                ? movie?.actors?.join(',')
                                : movie?.actors}
                            </Typography>
                            <Typography color="#fff" fontSize={18} py={2}>
                              Khởi chiếu : {movie?.showDate}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Link>
                    )
                  })}
                </>
              )}
            </ShowTimesMV>
            <Stack
              spacing={2}
              justifyContent="center"
              color="#fff"
              className="pagination"
            >
              <Pagination
                count={totalPages}
                color="primary"
                className="pagination-item"
                style={{ margin: 'auto' }}
                page={currentPage} 
                onChange={handlePageChange}
              />
            </Stack>
          </ShowTimesStyle>
        </ShowTimeStyleItem>
      </ShowTimeStyle>
    </LayoutMV>
  )
}
