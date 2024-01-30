import React from "react";
import "../styles/CountrySlide.css";
import { Link } from "react-router-dom";
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
          <div className="pic-border-box">
            <div className="pic-inside-box">{Country[i].pic}</div>
          </div>
        </div>
        <div className="companies-box">
          <div className="boxes-grid">
            {/* Country[i].companies.map */}
            {Country[i].companies.map((Name, index) => (
              <Link className="company-box" to={`/cp/${Name}`}>
                <div className="company-box-name" key={index}>
                  {Name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default CountrySlide;
