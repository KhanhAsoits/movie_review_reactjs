import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, CircularProgress} from "@mui/material";
import {loginThunk} from "./app/slices/AuthSlice";
import {HTTP_STATUS} from "./contants/https.const";
import {useLayoutEffect} from "react";

function App() {
    const authState = useSelector(state => state.authentication);
    const dispatch = useDispatch();
    const handleLogin = () => {
        if (authState?.status !== HTTP_STATUS.DEFAULT) {
            return;
        }
        dispatch(loginThunk({
            email: 'dangkhanh.dev@gmail.com', password: '13122002'
        }))
    }
    useLayoutEffect(() => {
        console.log("auth data :::: ", authState.authData)
    }, [authState?.authData])
    return (
        <Box>
            <Button variant={'contained'} onClick={handleLogin}>
                {authState?.status === HTTP_STATUS.PENDING ?
                    <CircularProgress size={24} color={'primary'}/> :
                    "Login"
                }
            </Button>
        </Box>
    )
}

export default App;
