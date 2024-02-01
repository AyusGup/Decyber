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
      title: "Australia",
      companies: ["Atlassian", "Westpac", "Zip Co"],
    },
    {
      title: "USA",
      companies: ["Wells Fargo", "JP Morgan", "Goldman Sachs"],
    },
    {
      title: "India",
      companies: ["HDFC Bank", "QuadEye", "Paytm"],
    },
    {
      title: "Argentina",   
      companies: ["Mercado Pago", "Ualá", "Banco Santander Río"],
    },
    {
      title: "Germany",
      companies: ["Deutsche Bank", "N26", "Solarisbank"],
    },
    {
      title: "Switzerland",
      companies: ["Credit Suisse", "Aduno Group", "Lykke"],
    },
    {
      title: "Italy",
      companies: ["Intesa Sanpaolo", "Satispay", "MoneyFarm"],
    },
    {
      title: "China",
      companies: ["Ant Group (Alipay)", "JD Digits (Jingdong Digital)", "Lufax"],
    },
    {
      title: "Japan",
      companies: ["Rakuten Pay", "Toyota", "Money Forward"],
    },
    {
      title: "Taiwan",
      companies: ["KKBOX Pay", "E.SUN Bank (Fugle)", "Orient Securities (Wortai)"],
    },
    {
      title: "Israel",
      companies: ["Payoneer", "eToro", "Lemonade"],
    },
    {
      title: "Sweden",
      companies: ["Klarna", "Tink", "iZettle"],
    },
    {
      title: "Austria",   
      companies: ["George", "Bitpanda", "Raiffeisen Bank International" ],
    },
    {
      title: "Canada",
      companies: ["Wealthsimple", "Wave Financial", "KOHO"],
    },
    {
      title: "Brazil",
      companies: ["Nubank", "PagSeguro", "Itaú Unibanco"]
    }
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
