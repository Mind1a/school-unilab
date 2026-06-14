import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-8">
      <section className="flex w-full max-w-237 flex-col items-center text-center">
        <h1 className="text-[20px] font-bold leading-6 text-black md:text-[32px] md:leading-12">
          უი! გვერდი ვერ მოიძებნა
        </h1>

        <p className="mt-4 max-w-89.5 text-[14px] leading-5 text-[#666666] md:max-w-196.5 md:text-[20px] md:leading-6 lg:mt-5 lg:max-w-237">
          გვერდი, რომელსაც ეძებთ, არ არსებობს ან დროებით მიუწვდომელია. დაბრუნდით
          მთავარ გვერდზე და გააგრძელეთ ჩვენი თავგადასავალი!
        </p>

        <Image
          src="/404img.svg"
          alt="404"
          width={668}
          height={443}
          priority
          className="mt-6 h-auto w-full max-w-89.5 md:mt-16 md:max-w-167"
        />

        <div className="mt-6 flex w-full max-w-89.5 flex-col items-center gap-5 md:max-w-none lg:flex-row lg:justify-center lg:gap-2">
          <Link
            href="/"
            className="flex h-14.5 w-full items-center justify-center rounded-full border-2 border-black bg-white px-6 text-[16px] font-bold text-black shadow-[0_5px_0_0_#000] md:w-62.5 lg:order-2 lg:w-50.5"
          >
            უკან დაბრუნება
          </Link>

          <Link
            href="/"
            className="flex h-14.5 w-full items-center justify-center rounded-full border-2 border-black bg-[#FF6B5E] px-6 text-[16px] font-bold text-black shadow-[0_5px_0_0_#000] md:w-101.25 lg:order-1"
          >
            მთავარ გვერდზე დაბრუნება
          </Link>
        </div>
      </section>
    </main>
  );
}
