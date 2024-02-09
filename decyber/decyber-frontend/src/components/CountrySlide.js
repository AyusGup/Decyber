import React from "react";
import "../styles/CountrySlide.css";
import { Link } from "react-router-dom";
// import CountryBox from "./CountryBox";
import { useParams } from "react-router-dom";
// import Country from "Country.json";
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
      companies: [
        { url: "/image/Atlassian.png", name: "Atlassian" },
        { url: "/image/Westpac.png", name: "Westpac" },
        { url: "/image/Zip.png", name: "Zip Co" },
      ],
      pic: "/image/australia.png"
    },
    {
      title: "USA",
      // companies: ["Wells Fargo", "JP Morgan", "Goldman Sachs"],
      companies: [
        { url: "/image/Wells-Fargo.png", name: "Wells Fargo" },
        { url: "/image/JP-Morgan.png", name: "JP Morgan" },
        { url: "/image/goldman-sachs.png", name: "Goldman Sachs" },
      ],
      pic: "/image/america.png"
    },
    {
      title: "India",
      // companies: ["HDFC Bank", "QuadEye", "Paytm"],
      companies: [
        { url: "/image/hdfc.png", name: "HDFC Bank" },
        { url: "/image/quad_eye.png", name: "QuadEye" },
        { url: "/image/Paytm.png", name: "Paytm" },
      ],
      pic: "/image/india.png"
    },
    {
      title: "Argentina",
      // companies: ["Mercado Pago", "Ualá", "Banco Santander Río"],
      companies: [
        { url: "/image/hdfc.png", name: "Mercado Pago" },
        { url: "/image/quad_eye.png", name: "Ualá" },
        { url: "/image/Paytm.png", name: "Banco Santander Río" },
      ],
      pic: "/image/argentina.png"
    },
    {
      title: "Germany",
      // companies: ["Deutsche Bank", "N26", "Solarisbank"],
      companies: [
        { url: "/image/deutsche-bank.png", name: "Deutsche Bank" },
        { url: "/image/n26.png", name: "N26" },
        { url: "/image/Solarisbank.png", name: "Solarisbank" },
      ],
      pic: "/image/germany.png"
    },
    {
      title: "Switzerland",
      // companies: ["Credit Suisse", "Aduno Group", "Lykke"],
      companies: [
        { url: "/image/.png", name: "Credit Suisse" },
        { url: "/image/quad_eye.png", name: "Aduno Group" },
        { url: "/image/Paytm.png", name: "Lykke" },
      ],
      pic: "/image/switzerland.png"
    },
    {
      title: "Sudan",
      // companies: ["Intesa Sanpaolo", "Satispay", "MoneyFarm"],
      companies: [
        { url: "/image/hdfc.png", name: "Intesa Sanpaolo" },
        { url: "/image/quad_eye.png", name: "Satispay" },
        { url: "/image/Paytm.png", name: "MoneyFarm" },
      ],
      pic: "/image/italy.png"
    },
    {
      title: "China",
      companies: [
        { url: "/image/hdfc.png", name: "Ant Group (Alipay)" },
        { url: "/image/hdfc.png", name: "JD Digits (Jingdong Digital)" },
        { url: "/image/hdfc.png", name: "Lufax" },
      ],
      pic: "/image/china.png"
    },
    {
      title: "Spain",
      companies: ["Rakuten Pay", "Toyota", "Money Forward"],
      pic: "/image/japan.png"
    },
    {
      title: "Taiwan",
      companies: [
        { url: "/image/KKBOX.png", name: "KKBOX Pay" },
        { url: "/image/E sun bank (Fugle).png", name: "E.SUN Bank (Fugle)" },
        {
          url: "/image/Orient_Securities.png",
          name: "Orient Securities (Wortai)",
        },
      ],
      pic: "/image/taiwan.png"
    },
    {
      title: "Israel",
      // companies: ["Payoneer", "eToro", "Lemonade"],
      companies: [
        { url: "/image/Payoneer.png", name: "Payoneer" },
        { url: "/image/eToro.png", name: "eToro" },
        { url: "/image/Lemonade.png", name: "Lemonade" },
      ],
      pic: "/image/israel.png"
    },
    {
      title: "Sweden",
      // companies: ["Klarna", "Tink", "iZettle"],
      companies: [
        { url: "/image/Klarna.png", name: "Klarna" },
        { url: "/image/TINK.png", name: "Tink" },
        { url: "/image/IZETTLE.png", name: "iZettle" },
      ],
      pic: "/image/sweden.png"
    },
    {
      title: "Austria",
      companies: ["George", "Bitpanda", "Raiffeisen Bank International"],
      pic: "/image/austria.png"
    },
    {
      title: "Canada",
      // companies: ["Wealthsimple", "Wave Financial", "KOHO"],
      companies: [
        { url: "/image/Wealthsimple.png", name: "Wealthsimple" },
        { url: "/image/WAVE Financial.png", name: "Wave Financial" },
        { url: "/image/KOHO.png", name: "KOHO" },
      ],
      pic: "/image/canada.png"
    },
    {
      title: "Kazakhstan",
      companies: [
        { url: "/image/uipath.png", name: "UI Path" },
        { url: "/image/databrick.png", name: "Databrick" },
        { url: "/image/Telecom.png", name: "Telecom" },
      ]
    },
  ];

  return (
    <>
      <div className="CountrySlide">
        <div className="desh">
          <div className="CountryName-title">{Country[i].title}</div>
          <div className="pic-border-box">
            <div className="pic-inside-box">
            <img className="country-img" style={{"width":"250px"}} src={Country[i].pic} alt={Country[i].title} />
            </div>
          </div>
        </div>
        <div className="companies-box">
          <div className="boxes-grid">
            {/* Country[i].companies.map */}
            {Country[i].companies.map((ELE, index) => (
              <Link className="company-box" to={`/cp/${ELE.name}`}>
                <div className="company-box-name" key={index}>
                  {/* {Name[0]} */}
                  <img className="company-img" src={ELE.url} alt={ELE.name} />
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
