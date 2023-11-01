import Image from "next/image"

export default function HomePage(){
    return(
        <div className="xl:max-w-[70rem] lg:max-w-[60rem] md:max-w-[45rem] sm:max-w-[35rem] w-11/12 mx-auto overflow-y-auto">
            <div className="relative w-full sm:text-center">
                <div className='absolute sm:w-72 w-56 h-auto mr-3 xl:left-[23%] lg:left-[21%] md:left-[12%] sm:left-[5%] -left-[13%] sm:top-0 top-[8%] -z-50'>
                    <Image
                    src="/heroBg.png"
                    alt="The Background"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className='w-full h-auto rounded-md'
                    />
                </div>
                <h1 className="font-extrabold xl:text-3xl md:text-2xl text-[1.375rem] sm:pt-14 pt-7 z-30 sm:w-auto w-80"><span className="text-[#7B57FC] font-black">Are You</span> Techie, Coder, UI/UXer?</h1>
            </div>
            <p className="text-[#4E4E4E] text-lg sm:max-w-[400px] pt-6 sm:text-center sm:mx-auto font-medium">ကိုယ့် project ​​လေးတွေ ကိုယ်တိုင်လုပ်​နေကြတဲ့ သူ​တွေ အားလုံးအတွက် project ​​လေးတွေကို mentally secure ဖြစ်ဖြစ်နဲ့ sharing ​ကောင်း​ကောင်းလုပ်လို့ရနိုင်မဲ့ ​နေရာ​လေးတစ်ခုကို ဖန်တီးထားပါတယ်။</p>
            <div className="pt-5">
                <div className='absolute sm:w-72 w-60 h-auto xl:left-[40%] lg:left-[37%] md:left-[33%] sm:left-[28%] left-[25%] sm:-mt-12 -mt-8 -z-10'>
                    <Image
                    src="/imageBg.png"
                    alt="The Background"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className='w-full h-auto'
                    />
                </div>
                <div className='mx-auto sm:w-[460px] w-full pt-12 z-10'>
                    <Image
                    src="/fbGroup.png"
                    alt="The Background"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className='w-full h-auto rounded-md border-[#CDCDCD] border-1'
                    />
                </div>
            </div>
        </div>
    )
}