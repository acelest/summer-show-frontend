import { FaInstagram } from "react-icons/fa";
// import Image from "../public/assets/images/summer-show.jpg";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-4 bg-white lg:p-24">
      <div
        className="w-full h-screen"
        style={{
          // backgroundImage: `url(${Image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-between w-full h-full py-8 bg-gray-100 bg-opacity-70 lg:py-16 animate-fadeIn">
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="flex items-center justify-center px-4 py-2 space-x-2 text-red-600 bg-red-900 bg-opacity-10 rounded-xl lg:space-x-4 ">
              <span className="text-xl font-bold bg-gray-200 lg:text-2xl xl:text-3xl">
                The Summer show 2024
              </span>
            </div>
            <h1 className="mt-8 text-4xl font-bold tracking-wider text-center text-black lg:text-6xl xl:text-7xl lg:mt-12 animate-pulse">
              Coming Soon
            </h1>
            <div className="flex flex-col items-center mt-12 space-y-4">
              <p className="text-sm text-black uppercase lg:text-base ">
                {" -> "}
                <span className="underline">www.thesummer-show-2k24.com</span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full p-2 animate-bounce">
            <p className="mr-2 text-sm text-black lg:text-base">
              Suivez-nous sur Instagram :
            </p>
            <ul className="flex items-center space-x-8">
              <li className="animate-pulse">
                <a
                  href="https://www.instagram.com/p/CvA6P72OJVo/"
                  title="Instagram"
                >
                  <FaInstagram className="w-6 h-6 text-black transition duration-300 lg:w-8 lg:h-8 hover:scale-110" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
