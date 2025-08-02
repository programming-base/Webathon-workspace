import React from "react";
import { UserCircle } from "lucide-react";
import "../styles/TeamPage.css";
import Gautam from "../assets/team/Gautam.jpg";
import Prasham from "../assets/team/Prasham.jpg";
import Dev from "../assets/team/Dev.jpg";
import Anshul from "../assets/team/Anshul.jpg";
const teamMembers = [
  {
    name: "Gautam Vishwakarma",
    img: Gautam,
  },
  {
    name: "Prasham Tiwari",
    img: Prasham,
  },
  {
    name: "Dev Singh",
    img: Dev,
  },
  {
    name: "Anshul Singh",
    img:Anshul,
  },
];

export default function TeamPage() {
  return (
    <div className="team-body">
      <h1 className="team-heading">Meet Our Team</h1>
      <div className="team-container">
        {teamMembers.map((member, idx) => (
          <div className="team-member" key={idx}>
            <UserCircle size={24}  style={{marginRight: "10px"}} />
            {idx + 1}. {member.name}
            <div className="popup-img z-50" id={"TeamMember"+idx} >
              <img src={member.img} alt={member.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}