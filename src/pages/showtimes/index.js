import {Box, Button, CircularProgress, Grid, MenuItem, Select, Typography} from '@mui/material'
import LayoutMV from '../../render/App'
import {
    ShowTimeStyle,
    ShowTimeStyleItem,
    ShowTimesMV,
    ShowTimesStyle,
} from './style'
import {useLayoutEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getSpecialMovie} from "../../app/slices/MovieSlice";

function ShowTimes() {
    const dispatch = useDispatch()
    const {specialMovie} = useSelector(state => state.movie)
    const {isFetchingSpecialMovie} = useSelector(state => state.movie._draft)
    useLayoutEffect(() => {
        dispatch(getSpecialMovie())
    }, [])

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
                                        <MenuItem value={3}>Huế</MenuItem>
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
                            {isFetchingSpecialMovie ?
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
                                    {specialMovie.map((movie, index) => {
                                        return (
                                            <Grid container my={3} key={index.toString()}>
                                                <Grid className="showTimeMV-img">
                                                    <img style={{minHeight: 300, borderRadius: 6, objectFit: 'cover'}}
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
                                                        Ngôn ngữ : {movie?.language}
                                                    </Typography>

                                                    <Grid container>
                                                        {movie?.seats.map((val, index) => {
                                                            console.log(val)
                                                            return (
                                                                <button className="btn-showtimeMV">
                                                                    {val?.hours}:{val?.minute} - {val?.seats?.total - val?.seats?.current} ghế
                                                                    trống
                                                                </button>
                                                            )
                                                        })}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
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

export default ShowTimes
