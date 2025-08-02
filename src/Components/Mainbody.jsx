import { ArrowDown } from "lucide-react";
import { useState } from "react";
import ProductSection from "./Poductsection";
import Footer from "./Footer";
import "./animations/textanimations.css";
export default function MainBody() {
  const [animateUp, setAnimateUp] = useState(false);
  return (
    <>
      <main
        className={`w-full h-screen bg-gradient-to-b from-blue-900 to-black ${
          animateUp ? "-translate-y-full transition-all duration-1000" : ""
        }`}
      >
        <div className="w-full h-full flex flex-col justify-end">
          <div className="w-full h-[calc(100%-4rem)] text-gray-100 flex flex-col justify-center items-start px-5">
            <h1 className="flex heading text-start max-w-[90vw]">
              Your AI launchpad — build and deploy apps without the infrastructure headache. <div className="blink "></div>
            </h1>
          </div>

          <div
            onClick={() => {
              setAnimateUp(true);
            }}
            className=" w-full h-16 flex justify-center items-center group transition-all duration-300 hover:scale-125 active:hover:scale-125"
            style={{
              boxShadow: "0 0 4px 1px rgb(234, 179, 8)",
            }}
          >
            <button
              id="next-section"
              type="button"
              className="transition-transform duration-300 group-hover:scale-150"
            >
              <ArrowDown className="text-white" />
            </button>
          </div>
        </div>
        {animateUp && (
          <>
            <ProductSection />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}
