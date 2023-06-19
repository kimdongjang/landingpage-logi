import bg1 from '/img/1.jpg'
import bg2 from '/img/2.jpg'
import bg3 from '/img/3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import "swiper/css/effect-fade";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { useRef } from 'react';

import style from './Content.module.scss'

const Main = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className={style.ContentWrap}>
            <div className={style.overlay}></div>
            <div className={style.SwiperContainer}>
                <div className={style.SwiperWrap}>
                    <div className={style.ContentWrap}>
                        {/* Meet Minutes Landing page */}
                    </div>
                    <Swiper
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        effect={"fade"}
                        navigation={true}
                        pagination={{
                            clickable: true,
                            renderFraction: function (currentClass, totalClass) {
                                return '<span class="' + currentClass + '"></span>' +
                                    '<span class="barSpace">' +
                                    '/</span>' +
                                    '<span class="' + totalClass + '"></span>';
                            }
                        }}

                        modules={[Autoplay, EffectFade, Pagination, Navigation]}
                        // onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={bg1}></img></SwiperSlide>
                        <SwiperSlide><img src={bg2}></img></SwiperSlide>
                        <SwiperSlide><img src={bg3}></img></SwiperSlide>
                        {/* <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div> */}
                    </Swiper>
                </div>
            </div>
            <div className={style.ScrollDownWrap}>
                <p>Scroll</p>
                <span className={style.ScrollDown}>

                </span>
            </div>
            <div className={style.SectionContainer}>
                <p>153로지스틱스의<br />
                    다양한 서비스를 확인해 보세요.</p>
            </div>
            <div className={style.DateSectionContainer}>
                <p className={style.tit}>물류의 최적화를 향한
                    153로지스틱스의 노력
                </p>
                <p className={style.txt}>
                    153로지스틱스가 이루어 온 성과를 숫자로 확인해 보세요.
                </p>
                <small>
                    ※ 2022년 12월 기준 누적 출고량 및 투입인력
                </small>
                <div className={style.PercentWrap}>

                </div>
            </div>
        </div >
    );
};

export default Main;