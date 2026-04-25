import { useState } from "react"
import Videos from "../assets/Wacth.webm"
import banner from "../assets/Rolex.jpg"

export default function Home() {

    let obj = [{ name: "vi", srcs: Videos }, { name: "im", srcs: banner }]
    let [change, setChange] = useState(obj[0])

    return (
        <>
            <div className="w-[100%] h-[65vh] md:h-[80vh] lg:h-[90vh] relative top-0 overflow-x-hidden">
                {
                    change.name === "vi" ? <>
                        <video src={Videos} className="w-[100%] overflow-x-hidden h-[65vh] md:h-[80vh] lg:h-[90vh] object-cover absolute top-0" autoPlay muted loop></video>
                        {/* <div className="absolute top-0 w-100 h-100 flex flex-col justity-center items-start mt-[200px] gap-5 px-5">
                            <h1 className="text-2xl font-mediumn">Modern Design</h1>
                            <h1 className="text-3xl font-bold">Zuo Pure Collection Sale Off 50%</h1>
                            <button className="bg-[#1d2939] p-2 px-4 text-white rounded-full" onClick={() => setChange(obj[1])}>Shop Now <span><i class="ri-arrow-right-long-line"></i></span></button>
                        </div> */}
                    </> : <>
                        <img src={banner} className="w-[100%] h-[65vh] md:h-[80vh] lg:h-[90vh] object-cover" alt="" />
                        <div className="absolute top-0 w-[100%] h-[auto] flex flex-col justity-center items-start mt-[200px] md:mt-[600px] lg:mt-[250px] gap-5 px-5 md:px-20 lg:px-40">
                            <h1 className="text-2xl font-mediumn md:text-4xl">Modern Design</h1>
                            <h1 className="text-3xl md:text-5xl font-bold">Zuo Pure Collection <br /> Sale Off 50%</h1>
                            <button className="bg-[#1d2939] p-2 px-4 text-white rounded-full" onClick={() => setChange(obj[1])}>Shop Now <span><i class="ri-arrow-right-long-line"></i></span></button>
                        </div>
                    </>
                }
                <div className="flex gap-3 absolute end-0 bottom-0 p-4">
                    <button onClick={() => setChange(obj[0])} className="p-3 px-4 bg-[#1d2939] text-white text-xl rounded-[50%] w-auto h-auto active:bg-[#C91F28]"><i class="ri-arrow-left-s-line"></i></button>
                    <button onClick={() => setChange(obj[1])} className="p-3 px-4 bg-[#1d2939] text-white text-xl rounded-[50%] w-auto h-auto active:bg-[#C91F28]"><i class="ri-arrow-right-s-line"></i></button>
                </div>
            </div>


            <div className="flex justify-center items-center">
                <div className="w-full lg:w-[70%] h-auto flex flex-col text-center justify-center items-center">
                    <h1 className="text-3xl font-medium text-[#293341] my-7">Welcome to Kalles Wacth</h1>
                    <p className="text-base/7">I feel so proud of my website now! I want everyone to see it and find myself sharing the link anywhere I can. I feel so relieved
                        that this foundational part of my business is finally 'done' and the best part</p>
                    <img src="https://kalles-5-3.myshopify.com/cdn/shop/files/signature.png?v=1765269463&width=360" alt="" />
                </div>
            </div>


            <div>
                
            </div>
        </>
    )
}