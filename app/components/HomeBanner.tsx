import Image from "next/image";
import Img from "../../../public/Zoom75SpecialEdition-SpaceGrey3.webp";
const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-pink-500 to-pink-700 mb-8">
      <div className="mx-auto px-8 py-12 flex flex-col gap 2 md:flex-row items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="font-bold text-4xl md:text-6xl text-white mb-4">
            Summer Sale
          </h1>
          <p className="text-lg md:text-xl text-white mb-2">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="text-2xl font-bold md:text-5xl text-gray-700">
            GET 50% OFF
          </p>
        </div>
        <div className="w-1/3 relative aspect-video">
          <Image
           src="/banner-image.png" 
           fill 
           alt="Banner Image"
          className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
