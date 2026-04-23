export default function Login() {

    return (
        <>
            <div className="w-full h-[100vh] realtive">

                <img src="https://media.rolex.com/rolexcom/094398bf1f99/media/wallpapers/yacht-master-ii/m126680-0001_3840x2160.jpg?imformat=generic" alt="" className="w-full h-full object-cover absolute" />

                <div className="w-full h-[100%]  flex justify-center items-center">

                    <form className="absolute z-2 w-[80%] h-[50%] lg:w-[30%] lg:h-[50%] bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl flex flex-col justify-center items-center gap-6 p-5">
                        <h1 className="text-3xl font-extrabold">Login</h1>
                        <input required type="email" placeholder="Email" className="w-full border border-black p-2 rounded-lg text-white" />
                        <input required type="password" placeholder="Password" className="w-full border border-black p-2 rounded-lg text-white" />
                        <input type="submit" className="w-full bg-[#C91F28] font-bold text-white hover:border-white border border-black p-2 rounded-lg transition-all hover:scale-[1.1]" />
                        <div className="self-start">
                            <input type="checkbox" className="w-10 accent-[#C91F28]" id="ch" />
                            <label htmlFor="ch">Remember Me</label>
                        </div>
                        <a href="#">Don't have an Account <a href="/signup" className="text-[#C91F28] underline font-bold">Signup</a></a>
                    </form>

                </div>

            </div>
        </>
    )
}