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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>

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
