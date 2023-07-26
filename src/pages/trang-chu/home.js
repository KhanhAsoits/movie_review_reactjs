import LayoutMV from '../../render/App'
import {HomeStyle, HomeStyleItem, MovieItem, NavInfo} from './style'
import backgroundHome from '../../assets/images/trangchu.png'
import {Box, CircularProgress, Grid, Link} from '@mui/material'
import {useLayoutEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getShowingMovie, getBestMovie, getSpecialMovie} from "../../app/slices/MovieSlice";

function Home() {
    const dispatch = useDispatch()
    const {bestMovie, recentlyMovie, specialMovie} = useSelector((state) => state.movie)

    useLayoutEffect(() => {
        if (bestMovie.length === 0) {
            dispatch(getBestMovie())
        }
        if (recentlyMovie.length === 0) {
            dispatch(getShowingMovie())
        }
        if (specialMovie.length === 0) {
            dispatch(getSpecialMovie())
        }
    }, [])
    const {
        isFetchingBestMovie,
        isFetchingSpecialMovie,
        isFetchingRecentlyMovie
    } = useSelector((state) => state.movie._draft);

    return (
        <LayoutMV>
            <HomeStyle>
                <HomeStyleItem>
                    <img src={backgroundHome} className="trangchu"></img>
                    <NavInfo>
                        <div className="navInfo-left">
                            <div className="home-title">Nhà Bà Nữ</div>
                            <div className="home-description">
                                Câu chuyện xoay quanh gia đình bà Nữ gồm ba thế hệ sống cùng nhau trong một ngôi nhà. Bà
                                Nữ một tay cáng đáng mọi sự, nổi tiếng với quán bánh canh cua và cũng khét tiếng với
                                việc kiểm soát cuộc sống của tất cả mọi người, từ con gái đến con rể. Mọi chuyện diễn ra
                                bình thường cho đến khi cô con gái út si mê anh chàng điển trai xuất thân từ một gia
                                đình giàu có. Truyện phim khắc họa mối quan hệ phức tạp, đa chiều xảy ra với các thành
                                viên trong gia đình. Câu
                            </div>
                            <div className="home-navTop">
                                <span>Top Phim Thịnh Hành</span>
                            </div>
                            <Grid container>
                                <Grid
                                    item
                                    display="flex"
                                    alignItems="center"
                                    className="home-mvInfor"
                                >
                                    <span>4.8</span>
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
                                <button> Phim chính kịch</button>
                                <button> Phim Hài</button>
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
                                        <img style={{
                                            width: '250px',
                                            height: '120px',
                                            objectFit: 'cover',
                                            borderRadius: 8
                                        }}
                                             src={'https://image.tmdb.org/t/p/w342/kOvKHespgDEfzbYpq1cas2i8EZn.jpg'}></img>
                                    </Grid>
                                    <Grid
                                        item
                                        display="flex"
                                        alignItems="center"
                                        className="home-mvInfor"
                                        m={1}
                                    >
                                        <img style={{
                                            width: '250px',
                                            height: '120px',
                                            objectFit: 'cover',
                                            borderRadius: 8
                                        }}
                                             src={'https://news-thumb2.ymgstatic.com/YanThumbNews/2167221/202212/6af5e030-baa6-467e-bab0-ae31cb981045.jpg'}></img>
                                    </Grid>
                                    <Grid
                                        item
                                        display="flex"
                                        alignItems="center"
                                        className="home-mvInfor"
                                        m={1}
                                    >
                                        <img style={{
                                            width: '250px',
                                            height: '120px',
                                            objectFit: 'cover',
                                            borderRadius: 8
                                        }} src={'https://i.ytimg.com/vi/IkaP0KJWTsQ/maxresdefault.jpg'}></img>
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
                                            <img
                                                style={{width: 100, height: 100, borderRadius: 100, objectFit: 'cover'}}
                                                src={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAL0AfgMBIgACEQEDEQH/xAAcAAACAwADAQAAAAAAAAAAAAAEBgMFBwECCAD/xAA+EAACAQMBBQQHBQYGAwAAAAABAgMABBEFBhIhMVETQWFxBxQiMoGRsSNSYqHBM0LR4fDxFSRjcrLCU4KS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEAQAF/8QAJhEAAgIDAAIBBAIDAAAAAAAAAAECEQMhMRIiMgRBYXEUQhMzUf/aAAwDAQACEQMRAD8AkVKlVK7qlSKleWe9ZxGlEJGelfRpxo2FAcVyQLZAsR6VIIzjlQe0O0Gn7PWokum35X/Zwr7zn9B41mGtbbapqcjBJ5Le3/8AFb+zjzbnToYnIRPPGJqct9ZQSdnLdQo/3WcA1JFc20rARzxsegcVg41DdkLEOSerZz59a+9bkd1Mkj4yMAd1N/jr/oj+V+D0EqZFdTHWUbP7W6xpqjflS4hBwYpiSfga0/Z7WrPX7EXNqcEHdkjPNGpU8TiNhmUyfs/Cupjo4xiujJQUNUgEpXBjospxrndFDQVlcY+NciInuot0Ga7R4ArqMsqlFSqtfKlSqlYGfItcXdytpbPK5wqjJqVVpP8ASRqZtNPFrG2HlODg8SOZ/rxFFFW6Bk6Vmd7Q6pNqupS3UzE5OEH3V7hUNhp9xfMqIrYPJVr7SbN9Qv1jVS2CAAO8mta0TRNP0WAPqF1BDKRk77gVZKXj6oghDz95CGNjrhApeJ6l/wAASBckY860Sa/s7kkWsnbBRgsvKqy/jtp13BPGHx7pYA0lzlfSqOKFcM2upHtmkjyQG55FE7I7QyaDrKXDEm2lIW4X8PXzHP50ftFpLCHtSPlxpR9pCeq1RFqcSOcXjlaPTMWJYlkQhlYZDDvFdWWlr0RasNU2dazlbemsmC8ee4eXy4j5U4TxYNTSjRVGaYDuHNd/V2bkKnjjywq2gtx0oVGzZToXntmB4iibfTmkXNWlzbgcQKOsIh2XKjUNgSy0rEgR12C0SUroy0qiizoFrIPSZddpr8qZ4RKqAfDJP0+VbGg68qwDau89d1y8nzkPMxXyzw/LFNwx9hOeVQHD0T6cjx3OpTDCxkqrcuP9vrU2uatpNzcerx28rSMTuTclbGckZGTypi9FVvGmx0bMoOZpC/8A9EfpR2taCmoXayQ3saAfetVYgeB4UT3J2ZDUUkLGgQzXNldG1xuIu8Gxz4UrX86NcF7tt0ZwWNbLaWUNlpTwwZKLHul25knvNJv+GWuoxT27xQrLG+CZYQ4+RodJjfJyi6FBZbd03YWmj3lzhj7w6jrVHq0KwyNj95VP9fKn652aSIASzQMQMKI493A8KS9o4XgkKSAgxqE48+bGjxy9qEfUR9LLf0U6uNI2oiaR92CZTFLk8MHBz8CBW+XSYNeYNAuFg1S2kcewHG95Z4/lXpfTnaXSrZnOWEYBPXArcnReHh3hT2hVxAvCqyIcRVrb8qCPQsjIbocKKsh9lQ9yOAoqzH2dGuipfEUWWo3WinWoHFIaLEwS8LR2U7p7wjYjzxXnK7DC4kJHEOeB869IXABibeHAcx141get2yrqd0qD2O0Yrjpmm4HtivqVcUab6LrpZtm7hUwFFycKO7IB+uat55J1lZIwS7HCikj0QXohm1HT5WALhZYx1xkN9VrQbyTsT28UfaSAewmcZNBkVTaG4ZXBMV9qNR1axna0kjaK3RVEbJnEhxk8fP8AWgLDU5p5I5Hg7O47IrKw4B8ciB1xn8qK1+41+6WU3UlnFE3uQM2d0dc7pGfjVTpr3kYWG6g30ZvZlU53eH9qxooSaSbLSynae6eaXPZxDIpP26leW8eSX35WBI6cP7U/JbLBaxj7x3j41mu2k4k1TcU53Rx86PD8ib6p3CyqsMm4XA5DPyr07s8M7N6dxyexGT1rzVoqg3PH7pr0psvKJtmrBu8Qqp8wMfpTMvSbF8SxjHGrK2oCMUfb0EehT4cXK8qKsx9lUMw4URajEYpkVsTJ+orutDSDFHSLQkoqdlsWCyD7Nup5VhGtQvb6lLEykssjqw+NbxKVRS7MFC8SW5Csg27dBrEkqW7pvhX9tcFwDz8jR4vkDm+JQafPPZSRXlm2Jo+IPXqp8xWkbNbS2etoo3+zuF4NGx4qf4eNZrFLuB23d6MkkeHWgb1jDcpcWzNG4Gd5Tgg07JjU/wBk+PM8evsa5rmk2UhMvrjJL3ccg0Jo1hgM5kDKG4HwpGstcu7pFE7hyOBJHE0dqGtXUVgyJMYxjGE4VP4NOi3/ACxcbRf7VbRWml/YxuJZgpxGp48evSswup5Lq5eeU5dzk1CSWYsxyScknvrsoqqEFE8+eV5P0WOkHdu4yeW+Afjwr0VsOSuzkUL+9ESv9fHNed9NCdpGX93tU3vLNb9sVN/lGhZ1YoxXIPEg+0CfHiT/AO1Ky9HYl6saY6NgoOOjIOdDHp0wiQcKlth9nXR/dqW3/ZinLpPLgvSLVfcGV5OxtYu1nI4KW3VHix7hVjcndXgMsTgAd5omMJAhCgDP3aSo2UufjwoJ9mWugGv7+YsB7luTGgPhg5z45+VZr6TNlf8AD5IryzMssDKVkMrBip8+eK2Ge8EfdkngBmqPXDa3NpPHd+2ksZV8dPCmqoi7lLp55UDsm9rDL729UFyC0KJj2lY4I7xij9TUWN7NCjCRPaUNz3wRwPnVaX3I0DHJyT8KYJf5O+lyBZ9xjjPLzorV3PZYqvYbxDR8GB7j31bmRbu0V3Rd8DDcO+lyVOx+N+UHEXakWu08e7JiuqjhTSeqD9N4kjHHII+HH9K2HYO4kfWLdFYmOe2MhHQjA/lWQaUwWVgenD5itW9FB7e7nmc8beLdUf7jx+lT5VsqwvRqsVFRHjQsdExe8KFGSCXPs1Nbe4Khb3amtvcpy6IlwX1+3vGc/s4OWeW91+Ar64n9jIPDqe+o4VPq0aE8ZPtHPhzoW/mxGzcgOQoVpDntlXr1y8FmbhScr9M4qsE5mt4riNveHec4PSj9fUPo58Uqk0t1bRomH7uVbzzS5dHwS8bETb2CDtEuYrZYJScSbnJ/HHcaUI91l3SOPH6VpG2MBnsmcAF14464rNnjIUOuT18KfB2iXNGpHcxdk4I5YBx34NF2TjtGXPB+Y8etBMx3UPPd69M0VZRicnB3WXAFbLhmN1Ih1GLdbeoNDV7e27SQ7zLg9+KpCN2TB61kHaNyxp2F2CMbhQBktxrVPRfC8V6kiZ3JYmLfPhWV25KAuuQRwB6HNaz6GpRcPOjcXjT2fIn+X50vKMwujVouVER+8KjjiIFTxJxFCosyUkTnitTW/uVE3AVLBxSnLoh8FeaaTtiixLggbx38EDpyqk1i+RSkMgMTOScPgcMd3cfIcav0GQ8rfvZNJ+pRnVNXW3Y5j3sEUuTpFONJssdSQnQUY/vxgj4ilrZuQS6XdQc2SQnHgRV7r+q2Su2mxylniXDZz73TNKezMwj1i7tm/fVseYNBL5DoJ+DJJPty6kAkKw49+RWca3aNZX0yqCo3/ZGPCtJjA9ecHkCcVRbS6dFdTMBkShN5B96txyozNDyM9c5GRy6VPayNC/DkelfSwtFKYpAQc448K+VcSle7PI91UdRFtMb7KNL6yBAyW/I0q6taNb3ByOGacthofXbeeJeakEfL+vlXXanSGMLPuYYcc9DU6fjOitpZMf5Ey2BeBk8a130E9mLiaQnEjHswOq4LfUVkkZER4dcEdKePR5qEtlcRNAeCyhmx3d355osnBONXo9Dyhd/hXyChbOcXEaSg5DDNGjFNXBD0dJKktz7NRScqkt/dND9wv6i9fuIbRiOmBSnoREmpPNzIyfKrzaSYrAUXuFUug435WA44Pf4Ut/JFMNQbFOyHrmq3hl9r2HY565oKxm9X2lt2J5yBSeuRj9aM0P2db1FG+4/1FUupuYNSRxwK7rfI/wAqUit7tDLJ9nqpH48Ue9rAssdxuDfQ8Seh5/x+FV2qezqTODzfNWETmWMKv71bH7gy4mKW12gmWV5IAN/BZMd/hSJhxKEcEnp31tGpwdnbRB/f5Up6nst215Hc26nd5uB3GmRnWmT5MfkvJFdsDqHqWq4fHZyrg+YPP8/l+ej65Zrc2bSR8d5e7vrPF0G6troSRJkM2eH7hHGtJ05nm0tDLxJQeH9GslT2dBOJjOt2XqWpED3HXeHw/nRGzuoiy1IgnCtlD5Hkfng1a7a229qDsF4LCVX/AHZH8qpdHsxfalDFEQGkwEP4uhoruOwGnHJo9F7NXi3FjE8TBkdA6kfnV6shJpX2N01rW3HY/sHVXAPdvAHh4ZzTQyGNgDQQbOyeN6JeYqaEECoA27zqZJV5ZpqexL4Z1tBdbxY80z0Jx54obZ5Gwzcd1uWaF1N2muTuqRu9+/j9Kt9JZ2RTIiqB7ooFuRU9QoUOy9X2xuY+Xa2+98eX6Us7Sndu1/2kfmaadoJBDtjbNwAZGU4HL+s0p7VnFynk31oK2PT0M1+2/Ir5zlFP5VcbPJ27hieAqiuGykJ/0l+lMmyif5Zn6msivYzI/Qh2if8AzMa92aP0pVMzxsAQ0eR8KpNoJc6iozwFW2mvi7gPcw3fmK3+zAkvREe6kU8uQO/FE6RKr2lxCOcTZHkf7UHqDblw/dnNdNm5Q2ouhPCRSv60KezmrjYqbUxH1iBiPZcNn44/hQezWjXMdxBdIpKK4flwyKY9rrcC8t4QBjsyfmxpx2AtIZtEcFQdw9/xH6VqvhkqSUmNeiBILKOLAwqgDHTuoqSRWbPSubCNI7ZQuDjhQt4wMpCcB4V0dE79pM5mukVlGQc0E18vaN2Z4Zrg2ZkyxJ+dcxaeCSBW3Kw/GKQgLG5vDuIWx72RwpgtWHTGBx4VW2LxscKyMXbOVbezVpns0Y4UgeApkTZuzPtr5ca/bSg+6xH0pZ2knEupCJeIQZ+J/oVcbR3HrN32v+tw8sGlu4+11CZvx4+XD9KBdH8SQ3zviCHr2K/Sm/ZgbmkIx7xSNLJvKoHHCqo+VaFp0fq+kwoeYQZrodByv1SFXW5N7U/I4q6t23OwYc1YGlzVJM37E/eFXiN9gp6AGsXWFLiOuuv2crHzFB7Nz7mqxHPNq52nlzdKo713vnVdpUvZ3sbZ5MKB9CS9C522UC/h5fsj/wAjTH6NJwunXkfepH6/xpe2343Vq/3oz9f51Y+jmXAvU6gUV1MW1eFDqsh44POvieNDq/GpA1cAGRn2KlgOGaoIz7Fd7c+21GhTM90yWJBv22nOAeIwzDOfM0bdxNcwYFgWJ+7I31BFZtPFqtvpSXaa7f7pUHsxM4H/ACpffUdQaZVk1G9cEHIa4cj61qY2UWnY77T2LWmn77WHq6o4JYBiT3cyTSZACZd4jiTmoo7qWe7ZZHZlXgAWzRoQLLwrHoZF3sv9IgN5qFvCB7O8GbyFaFdHdtTgcAMUqbDwK3aXJ9/kPAUzagf8q/lWxVIXkdyoRNQcG6c5/fpggbetwfw/pSxeNmVz+OmGyY+qL4rQRGyAtfbN3G3c0KEfLH6VXWz7txGfxCjtb4i0fvMRHyY/xqriP2qnxoWthJ6GnbE7yac/WNv+tEej6YJd3anvjoHapibLSz+F/wDrXOxTEX04/wBKufQV/rofBLUiS8arN80RCxOKxMxxLqKT2Kkt2yzUHEfYqe1PtHypglo//9k='}></img>
                                        </div>
                                        <span className="home-mvInfor--actorName">Ngọc Nhi</span>
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
                                            <img
                                                style={{width: 100, height: 100, borderRadius: 100, objectFit: 'cover'}}
                                                src={'data:image/jpeg;base64,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'}></img>
                                        </div>
                                        <span className="home-mvInfor--actorName">Trấn thành</span>
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
                                            <img
                                                style={{width: 100, height: 100, borderRadius: 100, objectFit: 'cover'}}
                                                src={'data:image/jpeg;base64,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'}></img>
                                        </div>
                                        <span className="home-mvInfor--actorName">Song Luân</span>
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
                            {isFetchingBestMovie &&
                                <Box minHeight={250} width={'100%'} display={'flex'} justifyContent={'center'}
                                     alignItems={'center'}>
                                    <CircularProgress size={30} color={'primary'}/>
                                </Box>
                            }
                            {bestMovie.slice(0, 6).map((movie, index) => {
                                return (
                                    <Link key={index.toString()} className='MovieItem-link'
                                          href={'/detail-film/' + movie.id}>
                                        <Grid item className="MovieItem-listmv" m={1}>
                                            <div className="MovieItem-listmv-image">
                                                <img src={movie?.thumbnail} style={{
                                                    objectFit: 'cover',
                                                    backgroundColor: 'white',
                                                    borderRadius: 6
                                                }} alt='movie back ground'/>
                                            </div>
                                            <div className="MovieItem-listmv-name MovieItem-listmv-info">
                                                <p style={{maxWidth:'250px'}}>{movie?.name}</p>
                                            </div>

                                            <div className="MovieItem-listmv-rules MovieItem-listmv-info">

                                                <p style={{maxWidth:'150px',textOverflow:'ellipsis'}}> <span>Thể loại: </span>{movie?.types?.join(',')}</p>
                                            </div>

                                            <div className="MovieItem-listmv-time MovieItem-listmv-info">
                                                <span>Thời lượng: </span>
                                                <span>{movie?.duration.replace('h', " giờ").replace('m', " phút")}</span>
                                            </div>
                                        </Grid>
                                    </Link>
                                )
                            })}
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
                                <span className="MovieItem-listmv-title">Phim sắp chiếu</span>
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
                            {isFetchingRecentlyMovie &&
                                <Box minHeight={250} width={'100%'} display={'flex'} justifyContent={'center'}
                                     alignItems={'center'}>
                                    <CircularProgress size={30} color={'primary'}/>
                                </Box>
                            }
                            {recentlyMovie.slice(0, 6).map((movie, index) => {
                                return (
                                    <Link key={index.toString()} className='MovieItem-link'
                                          href={`/detail-film/${movie.id}`}>
                                        <Grid item className="MovieItem-listmv" m={1}>
                                            <div className="MovieItem-listmv-image">
                                                <img src={movie?.thumbnail} style={{
                                                    objectFit: 'cover',
                                                    backgroundColor: 'white',
                                                    borderRadius: 6
                                                }} alt='movie back ground'/>
                                            </div>
                                            <div className="MovieItem-listmv-name MovieItem-listmv-info">
                                                <p style={{maxWidth:'250px'}}>{movie?.name}</p>
                                            </div>

                                            <div className="MovieItem-listmv-rules MovieItem-listmv-info">

                                                <p style={{maxWidth:'150px',textOverflow:'ellipsis'}}> <span>Thể loại: </span>{movie?.types?.join(',')}</p>
                                            </div>

                                            <div className="MovieItem-listmv-time MovieItem-listmv-info">
                                                <span>Thời lượng: </span>
                                                <span>{movie?.duration.replace('h', " giờ").replace('m', " phút")}</span>
                                            </div>
                                        </Grid>
                                    </Link>
                                )
                            })}
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
                                <span className="MovieItem-listmv-title">Suất chiếu đặc biệt</span>
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
                            {isFetchingSpecialMovie &&
                                <Box minHeight={250} width={'100%'} display={'flex'} justifyContent={'center'}
                                     alignItems={'center'}>
                                    <CircularProgress size={30} color={'primary'}/>
                                </Box>
                            }
                            {specialMovie.slice(0, 6).map((movie, index) => {
                                return (
                                    <Link key={index.toString()} className='MovieItem-link'
                                          href={`/detail-film/${movie.id}`}>
                                        <Grid item className="MovieItem-listmv" m={1}>
                                            <div className="MovieItem-listmv-image">
                                                <img src={movie?.thumbnail} style={{
                                                    objectFit: 'cover',
                                                    backgroundColor: 'white',
                                                    borderRadius: 6
                                                }} alt='movie back ground'/>
                                            </div>
                                            <div className="MovieItem-listmv-name MovieItem-listmv-info">
                                                <p style={{maxWidth:'250px'}}>{movie?.name}</p>
                                            </div>

                                            <div className="MovieItem-listmv-rules MovieItem-listmv-info">

                                                <p style={{maxWidth:'150px',textOverflow:'ellipsis'}}> <span>Thể loại: </span>{movie?.types?.join(',')}</p>
                                            </div>

                                            <div className="MovieItem-listmv-time MovieItem-listmv-info">
                                                <span>Thời lượng: </span>
                                                <span>{movie?.duration.replace('h', " giờ").replace('m', " phút")}</span>
                                            </div>
                                        </Grid>
                                    </Link>
                                )
                            })}
                        </Grid>
                    </MovieItem>
                </HomeStyleItem>
            </HomeStyle>
        </LayoutMV>
    )
}

export default Home
