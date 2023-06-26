import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className='h-screen flex justify-center flex-col text-center'>
      <div className="flex items-center flex-col pb-6">
        <Image 
          src="/Logo.png"
          width={100}
          height={94.4}
          alt="Logo"
        />        
      </div>

      <div className="flex flex-col pt-6 pb-7">
        <h1 className="text-l font-kalam pb-6">DIGIMATIC</h1>
        <h1 className="font-quicksand text-ml font-semibold">BUSINESS SUPPORT</h1>
      </div>

      <div className="pt-6">
        <Link href="/login">
          <button className=
          "bg-white text-backblack font-semibold rounded-xl h-10 w-44 duration-300 hover:bg-buttonback hover:text-buttontext hover:duration-300">
            LOGIN
          </button>
        </Link>
      </div>
    </main>
  )
}
