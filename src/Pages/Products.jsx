import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import Loading from "../Compoents/Loading"
export default function Products() {

    const url = import.meta.env.VITE_URL

    const { data, isLoading, error, isError } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch(`${url}products/get`)
            return await res.json()
        }
    })
    if (isLoading) {
        return <Loading />
    }

    if (isError) {
        return <h1>Something Wents Wrong 🩻</h1>
    }

    console.log(data.data)




    return (
        <>
            <div className="w-full  h-auto p-4 flex flex-wrap justify-center items-center gap-5">
                {
                    data.data.map((item, index) => (
                        <div data-aos="fade-up"
                            data-aos-duration="1000" key={index} className="w-[full] md:w-[315px]  h-auto p-3 hover:border hover:border-black/30 rounded-lg hover:shadow-lg relative top-0">
                            <img src={item.images} className="w-full h-auto object-cover" alt="" />
                            <h1 className="font-bold">{item.details}</h1>
                            <h1 className="font-bold text-[#C91F28]">${item.price}</h1>
                            <button className="w-9 h-9 block lg:hidden lg:group-hover:block text-xl rounded-full border absolute top-0 mt-5 ml-2 "><i class="ri-heart-line "></i></button>
                            <button className="w-9 h-9 text-xl rounded-full border absolute top-60 end-0 mr-5"><i class="ri-eye-line"></i></button>
                            <button className="w-9 h-9 text-xl bg-[#C91F28] text-white rounded-full border absolute top-70 mt-3 end-0 mr-5"><i class="ri-shopping-cart-2-line"></i></button>
                        </div>

                    ))
                }
            </div>
        </>
    )
}