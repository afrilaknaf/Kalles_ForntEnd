export default function MobileMenu() {


    return (
        <>
            <div className="w-[100%] relative top-0 block lg:hidden ">
                <div className="w-[100%] h-[50px] flex justify-between items-center px-2 bg-[#ffffff] fixed bottom-0">
                    <div className="flex flex-col gap-0 items-center text-center">
                        <span><i class="ri-gallery-view-2"></i></span>
                        <h1 className="text-sm">Shop</h1>
                    </div>
                    <div className="flex flex-col gap-0 items-center text-center">
                        <span><i class="ri-heart-line"></i></span>
                        <h1 className="text-sm">Wishlist</h1>
                    </div>
                    <div className="flex flex-col gap-0 items-center text-center">
                        <span><i class="ri-shopping-cart-2-line"></i></span>
                        <h1 className="text-sm">Cart</h1>
                    </div>
                    <div className="flex flex-col gap-0 items-center text-center">
                        <span><i class="ri-user-line"></i></span>
                        <h1 className="text-sm">Account</h1>
                    </div>
                    <div className="flex flex-col gap-0 items-center text-center">
                        <span><i class="ri-search-line"></i></span>
                        <h1 className="text-sm">Search</h1>
                    </div>
                </div>
            </div>
        </>
    )
}