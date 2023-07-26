import {Grid, Typography} from '@mui/material'
import LayoutMV from '../../render/App'
import {
    ChooseLocationStyle,
} from './style'
import {useLocation} from "react-router-dom";
import {useLayoutEffect} from "react";
import {TicketDetail} from "../../components/TicketDetail";
import {LocationDetail} from "../../components/LocationDetail";
import {useDispatch, useSelector} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import {setAlert, setAlertTicket} from "../../app/slices/TicketSlice";
import 'react-toastify/dist/ReactToastify.css'

function ChooseLocation() {
    const {state} = useLocation();
    const {movie, time} = state;
    const {alert} = useSelector(state => state.ticket)

    const dispatch = useDispatch();

    const showToast = (type, msg) => {
        switch (type) {
            case 'error':
                toast.error(msg);
                break;
            case 'success':
                toast.success(msg);
                break;
        }
    }

    useLayoutEffect(() => {
        if (alert != null) {
            showToast(alert.type, alert.msg);
            dispatch(setAlertTicket(null))
        }
    }, [alert])
    return (
        <LayoutMV>
            <ChooseLocationStyle>
                <div>
                    <Grid container>
                        <Typography color="#fff" fontSize={34} textTransform="uppercase">
                            Chọn vị trí
                        </Typography>
                    </Grid>
                    <LocationDetail time={time}/>
                    <TicketDetail time={time} movie={movie}/>
                </div>
            </ChooseLocationStyle>
            <ToastContainer/>
        </LayoutMV>
    )
}

export default ChooseLocation
