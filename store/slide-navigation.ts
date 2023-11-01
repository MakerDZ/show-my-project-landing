import { create } from "zustand";

interface Menu {
    swiper : any
    totalIndex : number
    activeIndex : number
    setSwiper : (swiper : any) => void
    setTotalIndex : (index : number) => void
    setActiveIndex : (index : number) => void
}

export const useSlideNavigationStore = create<Menu>()(
        (set) => ({
            swiper : null,
            totalIndex : 0,
            activeIndex : 0,
            setSwiper : ((swiper) => set((state)=> ({ swiper : swiper}))),
            setTotalIndex : ((index) => set((state)=> ({ totalIndex : index}))),
            setActiveIndex : ((index) => set((state)=> ({ activeIndex : index})))
        })
)