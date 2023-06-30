import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className='h-screen flex justify-center flex-col text-center'>
      <div className="flex items-center flex-col pb-4 sm:pb-6">
        <Image 
          src="/Logo.png"
          width={100}
          height={94.4}
          alt="Logo"
        />        
      </div>

      <div className="flex flex-col pt-4 pb-5 sm:pt-6 sm:pb-7">
        <h1 className="text-ml sm:text-l font-kalam pb-4 sm:pb-6">DIGIMATIC</h1>
        <h1 className="font-quicksand text-s sm:text-ml font-semibold">BUSINESS SUPPORT</h1>
      </div>

      <div className="pt-4 sm:pt-6">
        <Link href="/login">
          <button className=
          "bg-white text-backblack text-sm sm:text-m font-semibold rounded-md sm:rounded-xl h-8 sm:h-10 w-28 sm:w-44 duration-300 hover:bg-buttonback hover:text-buttontext hover:duration-300">
            LOGIN
          </button>
        </Link>
      </div>
    </main>
  )
}
