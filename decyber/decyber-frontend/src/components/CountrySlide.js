import React from "react";
import "../styles/CountrySlide.css";
// import CountryBox from "./CountryBox";
import { useParams } from "react-router-dom";
const CountrySlide = () => {
  const idx = useParams();
  console.log(idx);
  let i = 0,
    value;
  value = Number(idx.idx);
  while (i < 20) {
    if (value === i) break;
    i++;
    console.log(i);
  }
  const Country = [
    {
      title: "Austrila",
      pic: <></>,
      companies: ["Atlassian", "Westpac", "hello"],
    },
    {
      title: "USA",
      pic: <></>,
      companies: ["Wells Fargo", " JP morgan", "Goldman Sachs", "CITI bank"],
    },
    {
      title: "India",
    },
  ];
  return (
    <>
      <div className="CountrySlide">
        <div className="desh">
          <div className="CountryName-title">{Country[i].title}</div>
          <div>{Country[i].pic}</div>
        </div>
        <div className="companies-box">
          <div className="boxes-grid">
            {/* Country[i].companies.map */}
            {Country[i].companies.map((Name, index) => (
              <div className="company-box" key={index}>
                {Name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default CountrySlide;
