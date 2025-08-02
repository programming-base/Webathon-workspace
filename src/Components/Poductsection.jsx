import React from "react";
import { ArrowRight} from "lucide-react";
const ProductMarquee = ({ title }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl text-yellow-500 font-bold mb-4">{title}</h2>
      <div className="w-full overflow-x-auto scroll-smooth flex gap-3 min-w-max auto-scroll">
        <div className="flex gap-3 min-w-max p-4 bg-yellow-500">
          <div className="flex gap-3 min-w-max">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="min-w-[25rem] h-[15rem]  flex items-center justify-center text-white bg-gray-800">
              {i}
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProductSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-700 to-blue-900 p-8">
      <div className="max-w-7xl mx-auto h-[calc(100vh-5rem)] ">
        <h1 className="text-4xl text-yellow-500 font-bold mb-10">Our Products</h1>
        <ProductMarquee title="Our Products Section" />
      </div>
      <div className="w-full h-[4rem] flex justify-center">
        <span className="flex items-center"> Meet the Team <ArrowRight /></span> 
      </div>
    </section>
  );
}
