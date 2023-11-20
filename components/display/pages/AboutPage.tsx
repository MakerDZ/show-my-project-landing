import Image from "next/image"

export default function AboutPage(){
    return(
        <div className="xl:max-w-[70rem] lg:max-w-[60rem] md:max-w-[45rem] sm:max-w-[35rem] w-11/12 mx-auto overflow-y-auto">
            <div className="mx-auto sm:py-14 py-7 xl:max-w-lg lg:max-w-md md:max-w-md sm:max-w-[460px] w-10/12">

                {/* The Big Bang Container */}
                <div className="w-full h-auto relative">
                    <div className="absolute rounded-md font-bold md:-right-16 sm:-top-5 text-white bg-black sm:py-2 sm:px-3 -right-6 -top-6 px-2 py-1 sm:-right-10">
                        The Big Bang
                    </div>
                    <div className="bg-[#F16D25] xl:h-32 sm:h-28 h-24 md:rounded-2xl rounded-xl flex flex-col justify-center">
                        <div className="h-auto mx-auto flex flex-row sm:w-10/12 w-11/12 xl:space-x-5 lg:space-x-4 md:space-x-3 sm:space-x-2 space-x-0 items-center">
                            <div className='relative md:h-[70px] md:w-[70px] w-20 h-14 mr-3'>
                                <Image
                                src="/bigbang.jpg"
                                alt="The Big Bang"
                                fill
                                className="border-solid border-white border-3 rounded-md"
                                />
                            </div>
                            <p className="text-white :text-xl sm:text-lg text-sm font-extrabold w-80">Show My Project ကို ဘာ​ကြောင့် စတင်ခဲ့ရတာလဲ။</p>
                        </div>
                    </div>
                </div>
                
                <div className="w-full h-auto sm:pt-14 pt-10">
                    <h3 className="md:text-[1.625rem] text-xl font-extrabold">💭 Imagine a place</h3>
                    <p className="md:text-lg text-base text-[#4E4E4E] pt-6 sm:pt-7">အကယ်၍  မိမိတို့ ဖန်တီးထား​သော project ​လေး​တွေကို သေးငယ်သည်ဖြစ်​စေ၊ ကြီးမားသည်ဖြစ်​စေ စိတ်ထဲ comfortable ဖြစ်ဖြစ်နဲ့သီးသန့် sharing လုပ်လို့ရနိုင်မဲ့ ၊အ​ပြောထက် အလုပ်ပေါ် အ​ခြေခံပြီးမိမိအတွက် potential ရှိတဲ့ network အသစ်​တွေကိုရှာလို့ရမဲ့ ဆန်းသစ်တဲ့ဖန်တီးမှု့​တွေကို အား​ပေးတဲ့ atmosphere ​လေးသာရှိ​နေမယ်​ဆိုရင်ရော။</p>
                </div>

                <div className="w-full h-auto sm:pt-14 pt-10">
                    <h3 className="md:text-[1.625rem] text-xl font-extrabold">🚩 The problem</h3>
                    <p className="md:text-lg text-base text-[#4E4E4E] pt-6 sm:pt-7">ကျွန်​တော်တို့ မြန်မာနိုင်ငံသား​တွေအတွက် tech နဲ့ပတ်သက်ပြီး တိုင်ပင်​ဆွေး​နွေး၊ sharing လုပ်လို့ရမဲ့ tech related group ​တွေအများကြီးပဲရှိပါတယ်။ ထို group ​တွေရဲ့ ရည်ရွယ်ချက်​တွေက အပြန်အလှန် ကူညီ​ပေးနိုင်ရန် ရည်ရွယ်ပြီး စတင်ထားတာများတဲ့အတွက် group ထဲမှာ ​တွေ့ရများတဲ့ content ​​​တွေက အ​မေး၊အ​ဖြေ post ​တွေ၊ roadmap ​တွေကို လမ်းညွှန်​ပေးတဲ့ post ​​တွေ၊ knowledge sharing post ​​တွေ၊ သင်တန်း​​ကြော်ငြာ post ​တွေ စသည်ဖြင့် သီးသန့်မဟုတ်တဲ့ မတူညီတဲ့ content များစွာဖြင့် ​ပြည့်နက်လျှက်ရှိပါတယ်။</p>
                    <p className="md:text-lg text-base text-[#4E4E4E] pt-6 sm:pt-7">ထို group ​တွေမှာ project sharing လုပ်လို့ရပါတယ်။ ဒါ​ပေမဲ့ မိမိတို့ project sharing လုပ်လိုက်တဲ့ ​နေရာက project ​တွေသီးသန့် sharing လုပ်ဖို့ ဖန်တီးထားတဲ့​နေရာမဟုတ်တဲ့အတွက် တစ်ခဏအတွင်း တစ်ခြား မတူညီတဲ့ content ​တွေက ဖုံးလွှမ်းသွားတက်ပါတယ်။</p>
                    <p className="md:text-lg text-base text-[#4E4E4E] pt-6 sm:pt-7">
သင်က ကိုယ်ဖန်တီးထားတဲ့ project ကို feedback ​တောင်းဖို့အတွက်​လောက််ပဲ ရည်ရွယ်ပြီး post တင်ရင် general audience ကြားထဲမှာ ​တော့ အဆင်​ပြေ​ပေမဲ့ အဲ့ထက်ပိုပြီး​မျှော်မှန်းထားတဲ့ သူ​တွေအတွက် potential ရှိတဲ့ learning partner, project partner, contributor, donor, businessman, investor ​တွေကြားထဲ သူတို့ရဲ့ project post ​ရောက်ဖို့က အလွန်ခက်ခဲလှပါတယ်။</p>
<p className="md:text-lg text-base text-[#4E4E4E] pt-6 sm:pt-7">ဘာ​ကြောင့်လဲဆိုရင် အဲ့လိုလိုအပ်​နေတဲ့သူ​တွေအတွက် encourage လုပ်​ပေနိုင်မဲ့ atmosphere ​တွေ
မဟုတ်​နေလို့ပါပဲ။</p>
                </div>

                <div className="w-full h-auto sm:pt-14 pt-10">
                    <h3 className="md:text-[1.625rem] text-xl font-extrabold">⭐ The vision</h3>
                    <p className="md:text-lg text-base text-[#4E4E4E] pt-6 sm:pt-7">ကိုယ်ပိုင် project ​​လေးတွေဖန်တီးချင်စိတ်ရှိသူတိုင်းအတွက် မိမိတို့ဖန်တီးထား​သော project ​လေး​တွေကို mentally comfortable ဖြစ်ဖြစ်နဲ့ sharing လာလုပ်ပြီး မိမိတို့အလိုရှိ​သော potential network ​အသစ်​တွေရှာ​ဖွေလို့ရမဲ့ quality ​ကောင်းတဲ့ positive atmosphere ​လေး တစ်ခုဖြစ်လာ​စေရန် နှင့် innovate ဖြစ်တဲ့ project များစွာ​​ပေါ်​ပေါက်လာ​စေရန် encourage လုပ်​ပေနိုင်​သော innovative community တစ်ခုဖြစ်လာ​စေရန်။</p>
                </div>

                <div className="w-full pt-14">
                    <div className="w-full sm:h-36 h-40 relative flex flex-col justify-end">
                        <div className="flex flex-row">
                            <div className="w-16 text-center">
                                <div className='relative mx-auto w-12 h-12'>
                                    <Image
                                        src="/omega_profile.jpg"
                                        alt="The Founder"
                                        fill
                                        className="rounded-full"
                                    />
                                </div>
                                <h1 className="text-black font-bold pt-2  text">omega</h1>
                            </div>
                            <div className="absolute bg-white max-w-[400px] top-0 sm:left-20 left-16 border-2 border-solid border-[#CDCDCD] py-2 px-4 rounded-3xl rounded-bl-none">
                                <p className="sm:text-base text-sm text-[#4E4E4E]">အ​ပေါ်က​ပြောပြသွားခဲ့တဲ့ အချက်​​တွေအ​ပေါ်အ​ခြေခံ၍ Show My Project ကို စတင်ခဲ့တာဖြစ်ပါတယ်။</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}