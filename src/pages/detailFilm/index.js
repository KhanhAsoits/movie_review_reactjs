import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import {
  CommentDetail,
  DetailFilmMV,
  DetailFilmStyle,
  TrailerMV,
} from './style'
import LayoutMV from '../../render/App'
import { useDispatch, useSelector } from 'react-redux'
import { useLayoutEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMovieDetail } from '../../app/slices/MovieSlice'
import Avatar from '../../assets/images/avatar.jpg'

function DetailFilm() {
  const { movieId } = useParams()
  const navigation = useNavigate()
  const dispatch = useDispatch()
  const { isFetchingMovieDetail } = useSelector((state) => state.movie._draft)
  const { movieDetail } = useSelector((state) => state.movie)
  useLayoutEffect(() => {
    dispatch(getMovieDetail(movieId))
  }, [])
  useLayoutEffect(() => {}, [movieDetail])
  return (
    <LayoutMV>
      <DetailFilmStyle>
        {isFetchingMovieDetail ? (
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
          <div>
            <Grid container>
              <Typography color="#fff" fontSize={34} textTransform="uppercase">
                Chi tiết phim
              </Typography>
            </Grid>

            <DetailFilmMV>
              <Grid container my={3}>
                <Grid className="showTimeMV-img">
                  <img
                    style={{ height: 500, objectFit: 'cover', borderRadius: 6 }}
                    src={movieDetail?.thumbnail}
                  />
                </Grid>
                <Grid className="showTimeMV-description">
                  <Typography color="#fff" fontSize={36}>
                    {movieDetail?.name}
                  </Typography>
                  <Typography color="#b8b8b8" fontSize={14} lineHeight="30px">
                    {movieDetail?.desc?.concat('.')}
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
                      {movieDetail?.director}
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
                      {Array.isArray(movieDetail?.actors)
                        ? movieDetail?.actors?.join(',')
                        : movieDetail.actors}
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
                      {Array.isArray(movieDetail?.types)
                        ? movieDetail.types.join(',')
                        : movieDetail.types}
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
                      {movieDetail?.duration?.replace('m', ' phút')}
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
                      {movieDetail?.language}
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
                      {movieDetail?.showDate}
                    </Typography>
                  </Grid>
                  {movieDetail?.category === 'special' && (
                    <Grid container className="buy-ticket">
                      <button
                        onClick={() => {
                          navigation('/ticket/' + movieId)
                        }}
                        className="btn-ticket"
                      >
                        Đặt vé ngay
                      </button>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </DetailFilmMV>

            <TrailerMV>
              <Typography
                color="#fff"
                fontSize={28}
                textAlign="center"
                textTransform="uppercase"
                my={5}
              >
                Trailer
              </Typography>
              <Grid container justifyContent="center">
                <iframe
                  width="860"
                  height="500"
                  src={movieDetail.trailer}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Grid>
            </TrailerMV>

            <CommentDetail>
              <div className="comment">
                <div className="comment-itemInput">
                  <Grid container justifyContent="center">
                    <Grid item xs={1} className="comment-avatar">
                      <img
                        src={Avatar}
                        alt="avatar"
                        className="comment-avatar-img"
                      />
                    </Grid>
                    <Grid item xs={9} ml={3} border="1px solid #333" p={0.2}>
                      <div className="comment-input">
                        <textarea placeholder="nhập bình luận ở đây" />
                      </div>
                      <div className="comment-button">
                        <button className="btn-ticket">Đặt vé ngay</button>
                      </div>
                    </Grid>
                  </Grid>

                  <div className="comment-item">
                    <Grid container justifyContent="center">
                      <Grid item xs={1} className="comment-avatar">
                        <img
                          src={Avatar}
                          alt="avatar"
                          className="comment-avatar-img"
                        />
                      </Grid>
                      <Grid item xs={9} ml={3}>
                        <Typography color="#000" fontSize={14} fontWeight={700}>
                          Duy Bán Xe Máy
                        </Typography>
                        <Typography
                            color="#000"
                            fontSize={14}
                            className='commentDes'
                          >
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
                            
                          </Typography>

                          <Grid container>
                            <button className='btn-comment'>Thích</button>
                            <button className='btn-comment'>Phản hồi</button>
                            <Typography
                            color="#000"
                            fontSize={12}
                            className='comment-time'
                          >
                            12 phút trước
                            
                          </Typography>
                          </Grid>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="comment-item">
                    <Grid container justifyContent="center">
                      <Grid item xs={1} className="comment-avatar">
                        <img
                          src={Avatar}
                          alt="avatar"
                          className="comment-avatar-img"
                        />
                      </Grid>
                      <Grid item xs={9} ml={3}>
                        <Typography color="#000" fontSize={14} fontWeight={700}>
                          Duy Bán Xe Máy
                        </Typography>
                        <Typography
                            color="#000"
                            fontSize={14}
                            className='commentDes'
                          >
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es
                            
                          </Typography>

                          <Grid container>
                            <button className='btn-comment'>Thích</button>
                            <button className='btn-comment'>Phản hồi</button>
                            <Typography
                            color="#000"
                            fontSize={12}
                            className='comment-time'
                          >
                            12 phút trước
                            
                          </Typography>
                          </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </CommentDetail>
          </div>
        )}
      </DetailFilmStyle>
    </LayoutMV>
  )
}

export default DetailFilm
