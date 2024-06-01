import React from "react";
import LeftSidebar from "./LeftSidebar";
import Navbar from "./Navbar";
import Card from "./Card";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
function DashWind() {
  const data = [
    {
      id: 1,
      img: <img src={img1} alt="" />,
      name: "Slack",
      desc: "Slack is an instant messaging program designed by Slack Technologies and owned by Salesforce.",
    },
    {
      img: <img src={img2} alt="" />,
      id: 2,
      name: "Facebook",
      desc: "Meta Platforms, Inc., doing business as Meta and formerly named Facebook, Inc., and TheFacebook.",
    },
    {
      img: <img src={img3} alt="" />,
      id: 3,
      name: "LinkedIn",
      desc: "Linkedin is a business and employment- focused social media platform that works through websites and mobile apps.",
    },
    {
      img: <img src={img4} alt="" />,
      id: 4,
      name: "Google Ads",
      desc: "Google Ads is an online advertising platform developed by Google, where advertisers bid to display brief advertisements, service offerings",
    },
    {
      img: <img src={img5} alt="" />,
      id: 5,
      name: "Gmail",
      desc: "Gmail is a free email service provided by Google. As of 2019, it had 1.5 billion active users worldwide.",
    },
    {
      img: <img src={img6} alt="" />,
      id: 6,
      name: "Salesforce",
      desc: "It provides customer relationship management software and applications focused on sales, customer service, marketing automation.",
    },
    {
      img: <img src={img7} alt="" />,
      id: 7,
      name: "Hubspot",
      desc: "American developer and marketer of software products for inbound marketing, sales, and customer service.",
    },
  ];

  return (
    <div className="flex">
      <LeftSidebar></LeftSidebar>
      <div className="w-[1236px] bg-white">
        <Navbar />
        <div className="flex flex-wrap gap-10 mt-6 mx-10">
          {data.map((el, index) => (
            <Card data={el} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashWind;
