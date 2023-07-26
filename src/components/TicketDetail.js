import {FilmItem} from "../pages/chooseLocation/style";
import {CircularProgress, Grid, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {orderTicker, setIsSuccessOrderTicket} from "../app/slices/TicketSlice";
import {toast} from "react-toastify";
import {useLayoutEffect} from "react";
import {useNavigate} from "react-router-dom";

export const TicketDetail = ({movie, time}) => {
    const {seat} = useSelector(state => state.ticket)
    const {isCreatingTicket, isSuccessOrderTicket} = useSelector(state => state.ticket._draft)
    const {isLoggedIn} = useSelector(state => state.authentication._draft)
    const {authData} = useSelector(state => state.authentication)
    const nav = useNavigate();
    const dispatch = useDispatch()
    const handleOrderTicket = () => {
        if (!isLoggedIn) {
            toast.error('Bạn cần đăng nhập để đặt vé');
            return;
        }
        if (!isCreatingTicket) {
            const data = {...seat, movieId: movie.id, ...time, userId: authData.id};
            const seats = movie.seats;
            dispatch(orderTicker(data, seats))
        }
    }
    useLayoutEffect(() => {
        toast.success("Đặt vé thành công")
        if (isSuccessOrderTicket) {
            setIsSuccessOrderTicket(false)
            nav("/")
        }
    }, [isSuccessOrderTicket])
    return (
        <FilmItem>
            <Grid container className="detail-film">
                <Grid item xs={2} className="detail-film-img">
                    <img src={movie.thumbnail} width="100%"/>
                </Grid>
                <Grid item xs={6} className="detail-film-item" px={3}>
                    <Typography
                        color="#4f4f4f"
                        fontSize={20}
                        fontWeight={700}
                        className="detail-film-title"
                    >
                        {movie.name}
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
                            {Array.isArray(movie.types) ? movie.types.join(',') : movie.types}
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
                            {movie.duration.replace('m', 'phút')}

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
                            {movie.language}
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
                            {movie.showDate}
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
                            {time.hours}:{time.minute} {time.hours > 12 ? 'PM' : 'AM'}
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
                            CGV Cinemas
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
                            A{seat.index}
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
                            {(150000 + (seat.type === 1 ? 150000 : seat.type === 2 ? 200000 : 0)).toLocaleString('it-IT', {
                                style: 'currency',
                                currency: 'VND'
                            })}
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
                            {(150000 + (seat.type === 1 ? 150000 : seat.type === 2 ? 200000 : 0)).toLocaleString('it-IT', {
                                style: 'currency',
                                currency: 'VND'
                            })}
                        </Typography>
                    </Grid>
                    <Grid className="buy-ticket" width="100%">
                        <button onClick={handleOrderTicket} className="btn-ticket" width="100%">
                            {isCreatingTicket ? <CircularProgress color={'primary'} size={16}/> :
                                'Đặt vé ngay'
                            }
                        </button>
                    </Grid>
                </Grid>
            </Grid>
        </FilmItem>
    )
}