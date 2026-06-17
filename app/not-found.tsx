import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

const tfMecomicse = localFont({
  src: "../public/font/TFMecomicse-Regular-59522229166.otf",
  display: "swap",
});

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-8">
      <section className="flex w-full max-w-89.5 flex-col items-center text-center md:max-w-196.5 xl:max-w-237">
        <h1
          className={`${tfMecomicse.className} text-[20px] leading-6 text-black md:text-[32px] md:leading-12`}
        >
          უი! გვერდი ვერ მოიძებნა
        </h1>

        <div
          className={`${tfMecomicse.className} mt-4 w-full max-w-89.5 text-[14px] leading-5 text-[#666666] md:max-w-196.5 md:text-[20px] md:leading-6 xl:max-w-237`}
        >
          <div className="md:hidden">
            <span className="block">
              გვერდი, რომელსაც ეძებთ, არ არსებობს ან
            </span>
            <span className="block">დროებით მიუწვდომელია.</span>
            <span className="block">დაბრუნდით მთავარ გვერდზე და</span>
            <span className="block">გააგრძელეთ ჩვენი თავგადასავალი!</span>
          </div>

          <div className="hidden md:block">
            <p>გვერდი, რომელსაც ეძებ, არ არსებობს ან დროებით მიუწვდომელია.</p>
            <p>დაბრუნდი მთავარ გვერდზე და გააგრძელე შენი თავგადასავალი!</p>
          </div>
        </div>

        <Image
          src="/404img.svg"
          alt="404 Illustration"
          width={668}
          height={443}
          priority
          className="mt-6 h-auto w-full max-w-89.5 md:mt-16 md:max-w-167"
        />

        <div className="mt-6 flex w-full max-w-89.5 flex-col items-center gap-5 md:max-w-101.25 xl:max-w-none xl:flex-row xl:justify-center xl:gap-5">
          <Link
            href="/"
            className={`${tfMecomicse.className} flex h-14.5 w-full items-center justify-center rounded-full border-2 border-black bg-white px-6 text-[16px] text-black shadow-[0_5px_0_0_#000] transition-all duration-200 hover:border-[#6098F8] hover:text-[#6098F8] hover:shadow-[0_5px_0_0_#6098F8]  active:shadow-none md:w-62.5 xl:order-2 xl:w-50.5`}
          >
            უკან დაბრუნება
          </Link>

          <Link
            href="/"
            className={`${tfMecomicse.className} flex h-14.5 w-full items-center justify-center rounded-full border-2 border-black bg-[#F87060] px-6 text-[16px] text-black shadow-[0_5px_0_0_#000] transition-all duration-200 hover:border-[#6098F8] hover:bg-[#6098F8]  active:shadow-none md:w-101.25 xl:order-1`}
          >
            მთავარ გვერდზე დაბრუნება
          </Link>
        </div>
      </section>
    </main>
  );
}
