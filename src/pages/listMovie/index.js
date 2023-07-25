import {useDispatch, useSelector} from "react-redux";
import {useLayoutEffect} from "react";
import LayoutMV from "../../render/App";
import {ShowTimesMV, ShowTimesStyle, ShowTimeStyle, ShowTimeStyleItem} from "../showtimes/style";
import {Box, CircularProgress, Grid, MenuItem, Select, Typography} from "@mui/material";
import {getAllMovie} from "../../app/slices/MovieSlice";
import {Link} from "react-router-dom";

export const ListMovie = () => {

    const dispatch = useDispatch()
    const {allMovies} = useSelector(state => state.movie)
    const {isFetchingAllMovie} = useSelector(state => state.movie._draft)
    useLayoutEffect(() => {
        dispatch(getAllMovie())
    }, [])

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
                                        value={1}
                                        label="Age"
                                        className="select"
                                    >
                                        <MenuItem value={1}>Tất cả</MenuItem>
                                        <MenuItem value={1}>Phim Mới</MenuItem>
                                        <MenuItem value={0}>Phim Sắp Chiếu</MenuItem>
                                        <MenuItem value={3}>Phim Thịnh Hành</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>
                        </Grid>

                        <ShowTimesMV>
                            {isFetchingAllMovie ?
                                <Box backgroundColor={'black'}
                                     style={{
                                         height: '100vh',
                                         width: '100vw',
                                         position: 'absolute',
                                         zIndex: 10,
                                         top: 0,
                                         left: 0
                                     }}
                                     display={'flex'}
                                     justifyContent={'center'} alignItems={'center'}>
                                    <CircularProgress color={'info'} size={30}/>
                                </Box> :
                                <>
                                    {allMovies.map((movie, index) => {
                                        return (
                                            <Link to={'/detail-film/' + movie?.id}>
                                                <Grid container my={3}>
                                                    <Grid className="showTimeMV-img">
                                                        <img style={{
                                                            minHeight: 300,
                                                            borderRadius: 6,
                                                            objectFit: 'cover'
                                                        }}
                                                             src={movie?.thumbnail}/>
                                                    </Grid>
                                                    <Grid className="showTimeMV-description">
                                                        <Typography color="#fff" fontSize={36}>
                                                            {movie?.name}
                                                        </Typography>
                                                        <Typography color="#fff" fontSize={14} lineHeight="30px">
                                                            Thể loại
                                                            : {Array.isArray(movie?.types) ? movie?.types?.join(',') : movie?.types}
                                                        </Typography>
                                                        <Typography color="#fff" fontSize={14} lineHeight="30px">
                                                            Thời lượng: {movie?.duration?.replace('m', ' phút')}
                                                        </Typography>

                                                        <Typography
                                                            color="#fff"
                                                            fontSize={18}
                                                            py={2}
                                                        >
                                                            Phụ Đề : {movie?.language}
                                                        </Typography>
                                                        <Typography
                                                            color="#fff"
                                                            fontSize={18}
                                                            py={2}
                                                        >
                                                            Diễn viên
                                                            : {Array.isArray(movie?.actors) ? movie?.actors?.join(',') : movie?.actors}
                                                        </Typography>
                                                        <Typography
                                                            color="#fff"
                                                            fontSize={18}
                                                            py={2}
                                                        >
                                                            Khởi chiếu : {movie?.showDate}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Link>
                                        )
                                    })}
                                </>
                            }
                        </ShowTimesMV>
                    </ShowTimesStyle>
                </ShowTimeStyleItem>
            </ShowTimeStyle>
        </LayoutMV>
    )
}