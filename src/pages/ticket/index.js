import {Button, CircularProgress, Grid, Typography} from '@mui/material'
import LayoutMV from '../../render/App'
import {TicketBody, TicketBranch, TicketStyle} from './styles'
import {useLayoutEffect, useState} from "react";
import {getFeatureMonth, getTextOfMonth, getDateOfWeek} from "../../utils/getSelector";
import {useNavigate, useParams} from "react-router-dom";
import {getMovieById} from "../../services/MovieService";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function TicketMV() {
    const months = getFeatureMonth();
    const nav = useNavigate()
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const [selectDate, setSelectDate] = useState();
    const [selectMonth, setSelectMonth] = useState(months[0].month)
    const [selectTime, setSelectTime] = useState();

    const handleSelectMonth = (month) => {
        setSelectMonth(month);
    }

    const canSelectDate = (date, month) => {
        const currentDate = new Date().getDate();
        const currentMonth = new Date().getMonth() + 1;
        if (month === currentMonth) {
            return date >= currentDate;
        }
        return true;
    }
    const showToast = (type, msg) => {
        toast.error(msg);
    }

    const canDoWithTime = (time, date, month) => {
        const currentMonth = new Date().getMonth() + 1;
        const currentDate = new Date().getDate();
        const currentHours = new Date().getHours();
        const currentMinute = new Date().getMinutes();

        if (month > currentMonth || date > currentDate) {
            return true;
        } else {
            if (time?.hours > currentHours) {
                return true;
            } else {
                if (time?.minute > currentMinute) {
                    return true;
                }
            }
        }
        return false;
    }
    const handleAutoSelect = (movie) => {
        let selectedDate = -1;
        for (let date of movie.showTime) {
            if (canSelectDate(date, selectMonth)) {
                selectedDate = date;
                setSelectDate(date);
                break;
            }
        }
        for (let time of movie.seats) {
            if (canDoWithTime(time, selectedDate, selectMonth)) {
                setSelectTime(time);
                break;
            }
        }
    }


    const handleSelectDate = (date) => {
        if (canSelectDate(date, selectMonth)) {
            setSelectDate(date);
        } else {
            showToast('error', "Không thể chọn ngày trong quá khứ!")
        }
    }
    const handleSelectTime = (time) => {
        if (canDoWithTime(time, selectDate, selectMonth)) {
            setSelectTime(time)
        }
    }
    const handleSelectSeat = () => {
        const data = {
            movie, date: selectDate, month: selectMonth, time: selectTime
        }
        nav("/seats", {state: data})
    }
    useLayoutEffect(() => {
        const bs = async () => {
            const resp = await getMovieById(movieId);
            if (resp != null) {
                const sortM = {...resp};
                sortM.showTime.sort((a, b) => a - b);
                setMovie(sortM)
            }
        }
        bs()
    }, [movieId])
    useLayoutEffect(() => {
        if (movie != null) {
            handleAutoSelect(movie)
        }
    }, [selectMonth])

    useLayoutEffect(() => {
        if (movie != null) {
            handleAutoSelect(movie)
        }
    }, [movie])
    return (
        <LayoutMV>
            <TicketStyle>
                <div>
                    <Grid container>
                        <Typography color="#fff" fontSize={34} textTransform="uppercase">
                            Đặt vé
                        </Typography>
                    </Grid>
                </div>
                <TicketBody>
                    <Grid container className="ticket-dateTime" jusifyContent={'center'} alignItems={'center'}>
                        {movie === null ? <CircularProgress color={'info'} size={26}/> :
                            movie?.showTime.map((val, index) => {
                                return (
                                    <Grid key={index.toString()} space={1}
                                          className={`ticket-date ${selectDate === val ? 'active' : ''}`}>
                                        <button onClick={() => {
                                            handleSelectDate(val)
                                        }} className="btn-ticketDate">
                                            <Grid container>
                                                <Typography
                                                    color="#fff"
                                                    fontSize={34}
                                                    textTransform="uppercase"
                                                    fontWeight="700"
                                                >
                                                    {val}
                                                </Typography>

                                                <Grid item className="date">
                                                    <Typography color="#fff" fontSize={14}>
                                                        {getTextOfMonth(selectMonth)}
                                                    </Typography>
                                                    <Typography color="#fff" fontSize={14}>
                                                        {getDateOfWeek(val, selectMonth)}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </button>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>

                    <Grid container className="ticket-address">
                        {months.map((val, index) => {
                            return (
                                <Grid key={index.toString()} className="ticket-Address ">
                                    <button onClick={() => {
                                        handleSelectMonth(val.month)
                                    }} className={`btn-ticketAddress ${selectMonth === val.month ? 'active' : ''}`}>
                                        <Typography color="#aaa" fontSize={14}>
                                            {val.text}
                                        </Typography>
                                    </button>
                                </Grid>
                            )
                        })}
                    </Grid>
                </TicketBody>

                <TicketBranch>
                    <Typography color="#fff" fontSize={24} mt={5}>
                        CGV Cinemas Hà Nội
                    </Typography>

                    <Grid container className="TicketBranch">
                        {movie?.seats.map((val, index) => {
                            return (
                                <Grid key={index.toString()} className="TicketBranch-item">
                                    <button onClick={() => {
                                        handleSelectTime(val)
                                    }}
                                            className={`btn-ticketBranch ${(val?.hours === selectTime?.hours && val.minute === selectTime?.minute) ? 'active' : ''}`}>
                                        <Typography color="#aaa" fontSize={14}>
                                            {val?.hours}:{val?.minute} {val?.hours > 12 ? 'PM' : 'AM'}
                                        </Typography>
                                    </button>
                                </Grid>
                            )
                        })}

                    </Grid>
                </TicketBranch>
                <button onClick={handleSelectSeat} style={{
                    padding: '12px 65px',
                    borderRadius: 4,
                    backgroundColor: '#6630ff',
                    color: 'white',
                    outline: 'none',
                    border: 'none',
                    cursor: 'pointer'
                }}>Chọn ghế
                </button>
            </TicketStyle>
            <ToastContainer/>
        </LayoutMV>
    )
}

export default TicketMV
