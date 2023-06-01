import bg1 from '/img/9935.jpg'
import bg2 from '/img/9929.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { useRef } from 'react';

import style from './Content.module.scss'

export const Content = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className={style.ContentWrap}>
            <div className={style.SwiperContainer}>
                <div className={style.SwiperWrap}>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        effect={"fade"}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[EffectFade, Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={bg1}></img></SwiperSlide>
                        <SwiperSlide><img src={bg2}></img></SwiperSlide>
                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};
