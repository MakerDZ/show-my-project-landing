"use client"

import { useSlideNavigationStore } from "@/store/slide-navigation"

export default function SlideNavigation(){
   const [swiper, totalIndex, activeIndex] = useSlideNavigationStore((state) => [state.swiper , state.totalIndex , state.activeIndex])
   const slideComponents = Array.from({ length: totalIndex }, (_, index) => (
    <div
      key={index}
      className={activeIndex == index ? "bg-white w-3 h-3 rounded-full transition-background ease-in-out duration-300 hover:cursor-pointer" : "w-3 h-3 rounded-full bg-[#B8B8B8] transition-background ease-in-out duration-300 hover:cursor-pointer"}
      onClick={() => {
        swiper.slideTo(index);
      }}
    ></div>
    ));

    return(
        <section className="w-full bg-[#7B57FC] h-9 rounded-md">
            <div className="xl:max-w-[70rem] lg:max-w-[60rem] md:max-w-[45rem] sm:max-w-[35rem] w-11/12 h-full mx-auto flex flex-col justify-center relative">
              <div className="absolute right-0 flex flex-row space-x-2 ">
                  {slideComponents}
              </div>
            </div>
        </section>
    )
}