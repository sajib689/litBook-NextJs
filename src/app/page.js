import Image from "next/image";
import bgImg from "/public/home/bg-img.png";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center relative h-screen">
      <Image
        className="blur-sm"
        src={bgImg}
        alt="bgImage"
        fill
        sizes="100vh"
        style={{ objectFit: "cover" }}
      />
      <div className="flex flex-col justify-center items-center bg-purple-200 rounded-md p-2 lg:w-2/5 h-2/6 z-10">
        <div className="flex pb-5 mb-5 text-5xl text-purple-800">
          <p>LitBook</p>
        </div>
        <div>
          <Link
            className="bg-purple-700 text-white rounded-sm p-2"
            href="/store"
          >
            Take me to the Store
          </Link>
        </div>
      </div>
    </div>
  );
}
