import Image from "next/image"
import moreArrow from '../../../public/images/landingImages/moreArrow.png'

const AboutUs = () => {
    return (
        <div className="flex justify-center lg:p-[80px_50px_144px] p-[72px_75px]">
            <div className="lg:w-275 w-171 lg:p-[56px_167px_72px_167px] sm:p-[32px_80px] p-6 bg-[url('/images/landingImages/aboutUsBg.svg')] bg-size-[100%_100%] h-full w-full relative">
                <img src="/images/landingImages/aboutUsCorner.svg" className="absolute right-0 top-0 lg:w-auto w-[71.30px]" />
                <img src="/images/landingImages/paperClips.svg" className="absolute lg:-top-17 -top-11.25 right-33 lg:w-auto w-30" />
                <img src="/images/landingImages/keyChain.svg" className="lg:w-auto w-[150.95px] absolute top-7 left-[-49.73px] hidden sm:block" />
                <div className="flex flex-col lg:gap-6 gap-4">
                    <h2 className="lg:text-[40px] sm:text-[32px] text-[20px] lg:leading-16 leading-12">ჩვენ შესახებ</h2>
                    <p className="lg:text-[20px] text-[16px] lg:leading-6 leading-5">ოდესმე გიფიქრია პატარა ოთახზე, რომელში შესვლისას დროსა და სივრცეში იკარგები და საშუალება გეძლევა მომავლის გარკვეული ნაწილი დაინახო? ისეთი იმპულსები მიიღო, რომლებიც სუპერძალებს შეგძენდა? <br />
                        მოგესალმებით  უნილაბში, რომელიც საშუალებას მოგცემს საკუთარ თავში ახალი...</p>
                    <button className="border-2 flex gap-2 bg-[#94B0E2] rounded-[64px] sm:p-[16px_24px] p-[12px_24px] cursor-pointer shadow-[-8px_8px_4px_0_rgba(0,0,0,0.1),-2px_2px_0px_0px_black] lg:w-54 w-full justify-center lg:text-[24px] text-[20px] leading-6">გაიგე მეტი <Image alt="more" src={moreArrow} /></button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs