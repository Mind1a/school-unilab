import Image from "next/image"

const AboutUs = () => {
    return (
        <section className="flex justify-center lg:p-[80px_50px_144px] md:p-[72px_75px] p-[72px_16px_56px]">
            <div className="lg:w-275 w-171 lg:h-112 md:h-[359.99px] h-72 relative">

                <div className="absolute inset-0 border-4 bg-[#7196D8] lg:[clip-path:polygon(90%_0,91%_9%,100%_12.5%,100%_100%,0_100%,0_0)] md:[clip-path:polygon(95%_0,96%_4%,100%_7%,100%_100%,0_100%,0_0)] [clip-path:polygon(90%_0,96%_4.5%,100%_7.5%,100%_100%,0_100%,0_0)]"></div>

                <Image src={"/images/landingImages/aboutUsCorner.svg"} alt="about us corner" width={114.67} height={60.50} className="absolute right-0 top-0 hidden lg:block" />

                <Image src={"/images/landingImages/aboutUsCornerSm.svg"} alt="about us corner" width={38.98} height={30.76} className="absolute right-0 top-0 lg:hidden" />

                <Image src={"/images/landingImages/paperClips.svg"} alt="papper clips" width={195.18} height={160} className="absolute lg:right-33 lg:-top-17 lg:w-[195.18px] md:w-30 w-[97.59px] md:-top-10.75 -top-8.75 right-10" />

                <Image src={"/images/landingImages/keyChain.svg"} alt="key chain" width={262.70} height={360} className="absolute right-33 lg:top-7 top-0 left-[-49.73px] hidden sm:block lg:w-[262.70px] w-[150.95px]" />

                <div className="relative z-10 flex justify-center items-center h-full sm:p-[32px_80px] p-6">
                    <div className="flex flex-col lg:gap-6 gap-4 max-w-191.5">
                        <h2 className="lg:text-[40px] sm:text-[32px] text-[20px] lg:leading-16 leading-12 font-bold">ჩვენ შესახებ</h2>
                        <p className="lg:text-[20px] text-[16px] lg:leading-6 leading-5">ოდესმე გიფიქრია პატარა ოთახზე, რომელში შესვლისას დროსა და სივრცეში იკარგები და საშუალება გეძლევა მომავლის გარკვეული ნაწილი დაინახო? ისეთი იმპულსები მიიღო, რომლებიც სუპერძალებს შეგძენდა? <br />
                            მოგესალმებით  უნილაბში, რომელიც საშუალებას მოგცემს საკუთარ თავში ახალი...</p>
                        <button className="border-2 flex gap-2 bg-[#94B0E2] rounded-[64px] sm:p-[16px_24px] p-[12px_24px] cursor-pointer shadow-[-8px_8px_4px_0_rgba(0,0,0,0.1),-2px_2px_0px_0px_black] lg:w-54 md:w-131 w-77.5 justify-center lg:text-[24px] text-[20px] leading-6 self-center md:self-auto">გაიგე მეტი <Image alt="more" src={"/images/landingImages/moreArrow.svg"} width={12.75} height={16.96} /></button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutUs