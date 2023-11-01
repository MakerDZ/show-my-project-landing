"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { useSlideNavigationStore } from '@/store/slide-navigation';
import 'swiper/css';
import HomePage from './pages/HomePage';

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
        >       
                <SwiperSlide className='slider'>
                    <HomePage />
                </SwiperSlide>
                <SwiperSlide className='slider'>Slide 2</SwiperSlide>
                <SwiperSlide className='slider'>Slide 3</SwiperSlide>
        </Swiper>
    )
}