import {ChooseLocationItem, ChooseLocationScreen} from "../pages/chooseLocation/style";
import {Grid, Typography} from "@mui/material";
import {isTrue} from "../utils/getSelector";
import {useDispatch} from "react-redux";
import {setSeat} from "../app/slices/TicketSlice";

export const LocationDetail = ({time}) => {

    const dispatch = useDispatch();
    return (
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
                        {new Array(time.seats.total).fill(0).map((val, index) => {
                            let disable = false;
                            // get selected ratio
                            let type = 0;
                            const ratioSelected = ((time.seats.current / time.seats.total) * 100);
                            let typeSeat = ''
                            if (isTrue(ratioSelected, 100)) {
                                typeSeat = 'btn-selected'
                            } else if (isTrue(20, 100)) {
                                typeSeat = 'btn-vip';
                                type = 1;
                            } else if (isTrue(5, 100)) {
                                typeSeat = 'btn-maintenance'
                                disable = true;
                            } else if (isTrue(20, 100)) {
                                typeSeat = 'btn-sweetbox'
                                type = 2;
                            }

                            return (
                                <button
                                    onClick={() => {
                                        dispatch(setSeat({index, type}))
                                    }}
                                    className={`btn-chair ${typeSeat}`} disabled={disable}>A{index}</button>
                            )
                        })}


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
    )
}