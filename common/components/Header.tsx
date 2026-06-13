import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <header className="w-full flex justify-center">
            <div className="flex items-center w-full min-w-0 max-w-300 p-[20px_24px] lg:h-37 h-30 font-mecomisce lg:text-[24px] text-[20px] leading-6 justify-between">
                <Image alt="Logo" src="/images/header/Logo.svg" width={158.63} height={100} className="cursor-pointer lg:w-[158.63px] md:w-31.25 w-[101.52px] lg:h-25 md:h-20 h-16" />
                <div className="flex gap-16 items-center">
                    <nav className="hidden md:block">
                        <ul className="flex lg:gap-12 gap-4">
                            <li><Link href="#">{"მთავარი".toUpperCase()}</Link></li>
                            <li><Link href="#">{"ჩვენ შესახებ".toUpperCase()}</Link></li>
                            <li><Link href="#">{"პროექტები".toUpperCase()}</Link></li>
                        </ul>
                    </nav>
                    <div className="flex lg:gap-8 gap-5">
                        <div>
                            <Image alt="Search" src="/images/header/Search.svg" width={48} height={48} className="cursor-pointer lg:w-12 w-8 lg:h-12 h-8" />
                        </div>
                        <div className="md:flex hidden gap-2">
                            <Image alt="Search" src="/images/header/Lang.svg" width={48} height={48} className="cursor-pointer lg:w-12 w-8 lg:h-12 h-8" />
                            <button className="cursor-pointer">{"ქარ".toUpperCase()}</button>
                        </div>
                        <div className="cursor-pointer md:hidden block">
                            <Image alt="Burger Menu" src="/images/header/BurgerMenu.svg" width={32} height={32} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header