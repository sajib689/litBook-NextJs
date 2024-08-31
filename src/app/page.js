import Image from "next/image";
import bgImg from '/public/home/bg-img.png'
export default function Home() {
  return (
    <div>
      <Image
      src={bgImg}
      alt="bgImage"
      fill
      />

    </div>
  );
}
