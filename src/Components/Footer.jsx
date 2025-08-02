
import React from "react";

const team = [
  { name: "Gautam Vishkarma", img: "/team/gautam.jpg" },
  { name: "Ananya Rao", img: "/team/ananya.jpg" },
  { name: "Karthik Mehta", img: "/team/karthik.jpg" },
  { name: "Sanya Kapoor", img: "/team/sanya.jpg" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-500 py-10 border-t border-yellow-500">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Meet the Innovators</h2>

        <ul className="flex flex-wrap justify-center gap-8">
          {team.map((member, i) => (
            <li key={i} className="relative group text-lg cursor-pointer">
              {member.name}
              <img
                src={member.img}
                alt={member.name}
                className="absolute left-1/2 transform -translate-x-1/2 mt-2 rounded-lg w-24 h-24 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 shadow-lg"
              />
            </li>
          ))}
        </ul>

        <p className="text-center text-sm mt-8 text-gray-400">
          © {new Date().getFullYear()} StartupX. Built with 💡 and ☕.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
