"use client"

import { useSlideNavigationStore } from "@/store/slide-navigation"
import Image from "next/image"

export default function NavBar(){
    const [ activeIndex ] = useSlideNavigationStore((state)=> [state.activeIndex]);
    return(
        <div className="sticky top-9 z-50 w-full h-16 border-[#CDCDCD] border-b-1 bg-white">
            <div className="xl:max-w-[70rem] lg:max-w-[60rem] md:max-w-[45rem] sm:max-w-[35rem] w-11/12 h-full mx-auto flex flex-row items-center justify-between">
                <div className="flex flex-row items-center -ml-3"> 
                    <div className='relative h-11 w-11 mr-3'>
                        <Image
                        src="/logo.png"
                        alt="The Logo"
                        fill
                        />
                    </div>
                    <h1 className="text-black font-extrabold xl:text-2xl lg:text-xl text-lg -ml-3">Show My Project</h1>
                </div>
                <div className="rotate-12 px-2 py-1 rounded-md font-bold bg-[#FFE53D] text-[#B2A02B]">
                    { activeIndex === 0 ? "Home" : activeIndex === 1 ? "About" : "Announce"}
                </div>
            </div>
        </div>
    )
}