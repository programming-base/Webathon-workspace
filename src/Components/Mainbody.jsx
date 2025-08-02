import AboutUs from "./Aboutus";
import TeamPage from "./TeamPage";
import WhyUs from "./WhyUs";
import "./animations/textanimations.css";
export default function MainBody() {
  return (
    <>
      <main className=" w-full h-fit to-black">
        <div className="w-full h-screen flex flex-col justify-end bg-gradient-to-b from-blue-900 to-black">
          <div className="w-full h-[calc(100%-4rem)] text-gray-100 flex flex-col justify-start items-start px-2 ">
            <h1 className="h-[60vh] w-[60vw] max-md:w-full flex flex-col items-start whitespace-normal contain-content overflow-scroll scroll-smooth border-t-2 border-b-2 border-yellow-500">
              <span className="text-style text-start">Your AI launchpad-</span>
              <span className="text-style  text-start">build and deploy</span>
              <span className="text-style  text-start">apps without the</span>
              <span className="text-style  text-start">
                infrastructure headache.
              </span>
            </h1>
          </div>
        </div>
        <div id="team" className="m-t-4">
          <TeamPage />
        </div>
        <div id="aboutus" className="m-t-4 contain-content overflow-y-scroll scroll-smooth mb-5" style={{scrollbarWidth:"0px"}}>
          <AboutUs />
        </div>
        <div id="whyus" className="m-t-4 contain-content overflow-y-scroll scroll-smooth " style={{scrollbarWidth:"0px"}}>
          <WhyUs />
        </div>
      </main>
    </>
  );
}
