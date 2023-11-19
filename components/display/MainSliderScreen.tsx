"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { useSlideNavigationStore } from '@/store/slide-navigation';
import 'swiper/css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AnnouncePage from './pages/AnnouncePage';

export default function MainSliderScreen(){
    const [setSwiper , setTotalIndex, setActiveIndex ] = useSlideNavigationStore((state) => [state.setSwiper , state.setTotalIndex, state.setActiveIndex]);

    return(
        <Swiper
            spaceBetween={1}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => {
                setSwiper(swiper);
                setTotalIndex(swiper.slides.length);
                setActiveIndex(swiper.activeIndex);
            }}
            onActiveIndexChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
            }}
            autoHeight={true}
        >       
                <SwiperSlide className='slider'>
                    <HomePage />
                </SwiperSlide>
                <SwiperSlide className='slider'>
                    <AboutPage />
                </SwiperSlide>
                <SwiperSlide className='slider'>
                    <AnnouncePage />
                </SwiperSlide>
        </Swiper>
    )
}