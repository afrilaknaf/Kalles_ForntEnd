import { useEffect, useState } from "react"
import Videos from "../assets/Wacth.webm"
import banner from "../assets/Rolex.jpg"
import Cookies from "js-cookie"
import CryptoJs from "crypto-js"

export default function Home() {

    let obj = [{ name: "vi", srcs: Videos }, { name: "im", srcs: banner }]
    let [change, setChange] = useState(obj[0])
    const url = import.meta.env.VITE_URL
    const token = Cookies.get("User Token")
    const secr = import.meta.env.VITE_SECRETKEY

    useEffect(() => {
        fetch(`${url}api/profile`, {
            method: "GET",
            headers: { "Authorization": `Bearer ${token}`, "Content-type": "Application/json" }
        }).then((res) => res.json()).then((res) => {
            let name = CryptoJs.AES.encrypt(res.exist.Name, secr).toString()
            let email = CryptoJs.AES.encrypt(res.exist.Email, secr).toString()
            let password = CryptoJs.AES.encrypt(res.exist.Password, secr).toString()
            let id = res.exist._id
            Cookies.set("User_Details_Name", name, { expires: 5 / 24 })
            Cookies.set("User_Details_Email", email, { expires: 5 / 24 })
            Cookies.set("User_Details_Password", password, { expires: 5 / 24 })
            Cookies.set("User_Details_Role", res.exist.Role, { expires: 5 / 24 })
            Cookies.set("User_Details_id", id, { expires: 5 / 24 })
        }).catch((err) => console.log(err))
    }, [])

    return (
        <>
            <div className="w-[100%] h-[65vh] md:h-[80vh] lg:h-[90vh] relative top-0 overflow-x-hidden">
                {
                    change.name === "vi" ? <>
                        <video src={Videos} className="w-[100%] overflow-x-hidden h-[65vh] md:h-[80vh] lg:h-[90vh] object-cover absolute top-0" autoPlay muted loop></video>
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
                <div className="w-full lg:w-[70%] h-auto flex flex-col text-center justify-center items-center px-3">
                    <h1 className="text-3xl font-medium text-[#293341] my-7">Welcome to Kalles Wacth</h1>
                    <p className="text-base/7">I feel so proud of my website now! I want everyone to see it and find myself sharing the link anywhere I can. I feel so relieved
                        that this foundational part of my business is finally 'done' and the best part</p>
                    <img src="https://kalles-5-3.myshopify.com/cdn/shop/files/signature.png?v=1765269463&width=360" alt="" />
                </div>
            </div>


            <div className="w-full h-auto px-2 flex flex-col md:flex-row gap-3 justify-center items-center " >

                <div data-aos="fade-up"
                    data-aos-duration="1000" className="w-full lg:w-[50%] overflow-hidden">

                    <div className="relative top-0" >
                        <img src="https://kalles-5-3.myshopify.com/cdn/shop/files/women-collection.jpg?v=1765269463&width=600" alt="" className="w-full lg:w-[100%] h-[250px] md:h-[615px] object-cover hover:scale-[1.1] transition-all duration-500" />
                        <h1 className="absolute bottom-0 w-auto h-auto p-3 m-2 bg-white text-black hover:bg-black hover:text-white transition-all start-[40%] lg:start-[43%]">GetItems</h1>
                    </div>

                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className="flex gap-5 justify-evenly items-center w-[100%] lg:w-[50%] lg:h-[615px] ">

                    <div className="flex flex-col gap-3 w-full lg:w-[220px] h-full overflow-hidden">

                        <div className="relative top-0">
                            <img src="https://kalles-5-3.myshopify.com/cdn/shop/files/Withings-vert.jpg?v=1765269463" alt="" className="w-full h-[250px] md:h-[300px] object-cover hover:scale-[1.1] transition-all duration-500" />
                            <h1 className="absolute bottom-0 w-auto h-auto p-3 m-2 bg-white text-black hover:bg-black hover:text-white transition-all start-[28%]">GetItems</h1>
                        </div>
                        <div className="relative top-0">
                            <img src="https://kalles-5-3.myshopify.com/cdn/shop/files/i2.jpg?v=1765269463" alt="" className="w-full h-[250px] md:h-[300px] object-cover hover:scale-[1.1] transition-all duration-500" />
                            <h1 className="absolute bottom-0 w-auto h-auto p-2 m-2 bg-white text-black  hover:bg-black hover:text-white transition-all start-[28%] ">GetItems</h1>
                        </div>
                    </div>

                    <div className="w-full lg:w-[310px] lg:h-[615px] overflow-hidden">
                        <div className="relative top-0">
                            <img src="https://kalles-5-3.myshopify.com/cdn/shop/files/accessori.jpg?v=1765269463" alt="" className="w-full h-[515px] md:h-[615px] object-cover hover:scale-[1.1] transition-all duration-500 z-1 " />
                            <h1 className="absolute bottom-0 start-[28%] lg:start-[34%] w-auto h-auto p-2 m-2 bg-white text-black  hover:bg-black hover:text-white transition-all">GetItems</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}