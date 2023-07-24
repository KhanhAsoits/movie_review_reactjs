import LayoutMV from '../../render/App'
import {HomeStyle, HomeStyleItem, MovieItem, NavInfo} from './style'
import backgroundHome from '../../assets/images/trangchu.png'
import Poster_1 from '../../assets/images/Rectangle122.png'
import Poster_2 from '../../assets/images/Rectangle123.png'
import Poster_3 from '../../assets/images/Rectangle124.png'
import Actor_1 from '../../assets/images/Rectangle125.png'
import Movie_1 from '../../assets/images/Rectangle102.png'
import {Grid, Link} from '@mui/material'
import {useLayoutEffect} from "react";
import {useDispatch} from "react-redux";
import {getAllMovie} from "../../app/slices/MovieSlice";

function Home() {
    const dispatch = useDispatch()
    useLayoutEffect(() => {
        dispatch(getAllMovie())
    }, [])
    return (
        <LayoutMV>
            <HomeStyle>
                <HomeStyleItem>
                    <img src={backgroundHome} className="trangchu"></img>
                    <NavInfo>
                        <div className="navInfo-left">
                            <div className="home-title">LOREM IPSUM IS SIMPLY DUMMY TEXT</div>
                            <div className="home-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s
                            </div>
                            <div className="home-navTop">
                                <span>Top 9 Phim Thịnh Hành</span>
                            </div>

                            <Grid container>
                                <Grid
                                    item
                                    display="flex"
                                    alignItems="center"
                                    className="home-mvInfor"
                                >
                                    <span>9,5</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="17"
                                        height="17"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <path
                                            d="M11.4417 2.92501L12.9083 5.85835C13.1083 6.26668 13.6417 6.65835 14.0917 6.73335L16.75 7.17501C18.45 7.45835 18.85 8.69168 17.625 9.90835L15.5583 11.975C15.2083 12.325 15.0167 13 15.125 13.4833L15.7167 16.0417C16.1833 18.0667 15.1083 18.85 13.3167 17.7917L10.825 16.3167C10.375 16.05 9.63333 16.05 9.175 16.3167L6.68333 17.7917C4.9 18.85 3.81667 18.0583 4.28333 16.0417L4.875 13.4833C4.98333 13 4.79167 12.325 4.44167 11.975L2.375 9.90835C1.15833 8.69168 1.55 7.45835 3.25 7.17501L5.90833 6.73335C6.35 6.65835 6.88333 6.26668 7.08333 5.85835L8.55 2.92501C9.35 1.33335 10.65 1.33335 11.4417 2.92501Z"
                                            fill="#FFAA00"
                                        />
                                    </svg>
                                </Grid>
                                <Grid
                                    item
                                    display="flex"
                                    alignItems="center"
                                    className="home-mvInfor"
                                >
                                    <span>2023</span>
                                </Grid>
                                <Grid
                                    item
                                    alignItems="center"
                                    className="home-mvInfor"
                                >
                                    <span>T13</span>
                                </Grid>
                                <Grid
                                    item
                                    display="flex"
                                    alignItems="center"
                                    className="home-mvInfor"
                                >
                                    <span>Phim chiếu rạp</span>
                                </Grid>
                            </Grid>

                            <Grid container className="home-mvBtn">
                                <button> Phim lẻ</button>
                                <button> Tình cảm</button>
                                <button> Phim chiếu rạp</button>
                                <button> Việt Nam</button>
                                <button> Lãng mạn</button>
                            </Grid>

                            <Grid container className="buy-ticket">
                                <button className="btn-ticket">Đặt vé ngay</button>
                            </Grid>
                        </div>

                        <div className="navInfo-right">
                            <div className="navInfo-poster">
                                <div className="navInfo-title">Posters</div>

                                <Grid container>
                                    <Grid
                                        item
                                        display="flex"
                                        alignItems="center"
                                        className="home-mvInfor"
                                        m={1}
                                    >
                                        <img src={Poster_1}></img>
                                    </Grid>
                                    <Grid
                                        item
                                        display="flex"
                                        alignItems="center"
                                        className="home-mvInfor"
                                        m={1}
                                    >
                                        <img src={Poster_2}></img>
                                    </Grid>
                                    <Grid
                                        item
                                        display="flex"
                                        alignItems="center"
                                        className="home-mvInfor"
                                        m={1}
                                    >
                                        <img src={Poster_3}></img>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="navInfo-actors">
                                <div className="navInfo-title">Actor</div>

                                <Grid container>
                                    <Grid
                                        item
                                        display="flex"
                                        alignItems="center"
                                        flexDirection="column"
                                        className="home-mvInfor"
                                        m={1}
                                    >
                                        <div className="home-mvInfor--actor">
                                            <img src={Actor_1}></img>
                                        </div>
                                        <span className="home-mvInfor--actorName">Lorem ipsum</span>
                                    </Grid>
                                    <Grid
                                        item
                                        display="flex"
                                        alignItems="center"
                                        flexDirection="column"
                                        className="home-mvInfor"
                                        m={1}
                                    >
                                        <div className="home-mvInfor--actor">
                                            <img src={Actor_1}></img>
                                        </div>
                                        <span className="home-mvInfor--actorName">Lorem ipsum</span>
                                    </Grid>
                                    <Grid
                                        item
                                        display="flex"
                                        alignItems="center"
                                        flexDirection="column"
                                        className="home-mvInfor"
                                        m={1}
                                    >
                                        <div className="home-mvInfor--actor">
                                            <img src={Actor_1}></img>
                                        </div>
                                        <span className="home-mvInfor--actorName">Lorem ipsum</span>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </NavInfo>
                    <MovieItem>
                        <Grid container justifyContent="space-between">
                            <Grid
                                item
                                display="flex"
                                alignItems="center"
                                className="MovieItem-listmv"
                                m={1}
                            >
                                <span className="MovieItem-listmv-title">Phim đang chiếu</span>
                            </Grid>
                            <Grid
                                item
                                display="flex"
                                alignItems="center"
                                className="MovieItem-listmv"
                                m={1}
                            >
                                <Link className="MovieItem-listmv-more">Xem thêm</Link>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Link className='MovieItem-link'>
                            <Grid item className="MovieItem-listmv" m={1}>
                                <div className="MovieItem-listmv-image ">
                                    <img src={Movie_1}/>
                                </div>
                                <div className="MovieItem-listmv-name MovieItem-listmv-info">
                                    <span>Trạng Quỳnh</span>
                                </div>

                                <div className="MovieItem-listmv-rules MovieItem-listmv-info">
                                    <span>Thể loại: </span>
                                    <span>Phiêu lưu, Trinh thám</span>
                                </div>

                                <div className="MovieItem-listmv-time MovieItem-listmv-info">
                                    <span>Thời lượng: </span>
                                    <span>110 phút</span>
                                </div>
                            </Grid>
                            </Link>
                            
                            <Grid item className="MovieItem-listmv" m={1}>
                                <div className="MovieItem-listmv-image ">
                                    <img src={Movie_1}/>
                                </div>
                                <div className="MovieItem-listmv-name MovieItem-listmv-info">
                                    <span>Trạng Quỳnh</span>
                                </div>

                                <div className="MovieItem-listmv-rules MovieItem-listmv-info">
                                    <span>Thể loại: </span>
                                    <span>Phiêu lưu, Trinh thám</span>
                                </div>

                                <div className="MovieItem-listmv-time MovieItem-listmv-info">
                                    <span>Thời lượng: </span>
                                    <span>110 phút</span>
                                </div>
                            </Grid>
                            <Grid item className="MovieItem-listmv" m={1}>
                                <div className="MovieItem-listmv-image ">
                                    <img src={Movie_1}/>
                                </div>
                                <div className="MovieItem-listmv-name MovieItem-listmv-info">
                                    <span>Trạng Quỳnh</span>
                                </div>

                                <div className="MovieItem-listmv-rules MovieItem-listmv-info">
                                    <span>Thể loại: </span>
                                    <span>Phiêu lưu, Trinh thám</span>
                                </div>

                                <div className="MovieItem-listmv-time MovieItem-listmv-info">
                                    <span>Thời lượng: </span>
                                    <span>110 phút</span>
                                </div>
                            </Grid>
                            <Grid item className="MovieItem-listmv" m={1}>
                                <div className="MovieItem-listmv-image ">
                                    <img src={Movie_1}/>
                                </div>
                                <div className="MovieItem-listmv-name MovieItem-listmv-info">
                                    <span>Trạng Quỳnh</span>
                                </div>

                                <div className="MovieItem-listmv-rules MovieItem-listmv-info">
                                    <span>Thể loại: </span>
                                    <span>Phiêu lưu, Trinh thám</span>
                                </div>

                                <div className="MovieItem-listmv-time MovieItem-listmv-info">
                                    <span>Thời lượng: </span>
                                    <span>110 phút</span>
                                </div>
                            </Grid>
                        </Grid>
                    </MovieItem>

                    <MovieItem>
                        <Grid container justifyContent="space-between">
                            <Grid
                                item
                                display="flex"
                                alignItems="center"
                                className="MovieItem-listmv"
                                m={1}
                            >
                                <span className="MovieItem-listmv-title">Phim đang chiếu</span>
                            </Grid>
                            <Grid
                                item
                                display="flex"
                                alignItems="center"
                                className="MovieItem-listmv"
                                m={1}
                            >
                                <Link className="MovieItem-listmv-more">Xem thêm</Link>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item className="MovieItem-listmv" m={1}>
                                <div className="MovieItem-listmv-image ">
                                    <img src={Movie_1}/>
                                </div>
                                <div className="MovieItem-listmv-name MovieItem-listmv-info">
                                    <span>Trạng Quỳnh</span>
                                </div>

                                <div className="MovieItem-listmv-rules MovieItem-listmv-info">
                                    <span>Thể loại: </span>
                                    <span>Phiêu lưu, Trinh thám</span>
                                </div>

                                <div className="MovieItem-listmv-time MovieItem-listmv-info">
                                    <span>Thời lượng: </span>
                                    <span>110 phút</span>
                                </div>
                            </Grid>
                            <Grid item className="MovieItem-listmv" m={1}>
                                <div className="MovieItem-listmv-image ">
                                    <img src={Movie_1}/>
                                </div>
                                <div className="MovieItem-listmv-name MovieItem-listmv-info">
                                    <span>Trạng Quỳnh</span>
                                </div>

                                <div className="MovieItem-listmv-rules MovieItem-listmv-info">
                                    <span>Thể loại: </span>
                                    <span>Phiêu lưu, Trinh thám</span>
                                </div>

                                <div className="MovieItem-listmv-time MovieItem-listmv-info">
                                    <span>Thời lượng: </span>
                                    <span>110 phút</span>
                                </div>
                            </Grid>
                            <Grid item className="MovieItem-listmv" m={1}>
                                <div className="MovieItem-listmv-image ">
                                    <img src={Movie_1}/>
                                </div>
                                <div className="MovieItem-listmv-name MovieItem-listmv-info">
                                    <span>Trạng Quỳnh</span>
                                </div>

                                <div className="MovieItem-listmv-rules MovieItem-listmv-info">
                                    <span>Thể loại: </span>
                                    <span>Phiêu lưu, Trinh thám</span>
                                </div>

                                <div className="MovieItem-listmv-time MovieItem-listmv-info">
                                    <span>Thời lượng: </span>
                                    <span>110 phút</span>
                                </div>
                            </Grid>
                            <Grid item className="MovieItem-listmv" m={1}>
                                <div className="MovieItem-listmv-image ">
                                    <img src={Movie_1}/>
                                </div>
                                <div className="MovieItem-listmv-name MovieItem-listmv-info">
                                    <span>Trạng Quỳnh</span>
                                </div>

                                <div className=" MovieItem-listmv-info">
                                    <span>Thể loại: </span>
                                    <span>Phiêu lưu, Trinh thám</span>
                                </div>

                                <div className="MovieItem-listmv-time MovieItem-listmv-info">
                                    <span>Thời lượng: </span>
                                    <span>110 phút</span>
                                </div>
                            </Grid>
                        </Grid>
                    </MovieItem>
                </HomeStyleItem>
            </HomeStyle>
        </LayoutMV>
    )
}

export default Home
