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
    { //0
      title: "Australia",
      companies: [
        { url: "/image/Atlassian.png", name: "Atlassian" },
        { url: "/image/Westpac.png", name: "Westpac" },
        { url: "/image/Zip.png", name: "Zip Co" },
      ],
      pic: "/image/australia.png"
    },
    { //1
      title: "USA",
      // companies: ["Wells Fargo", "JP Morgan", "Goldman Sachs"],
      companies: [
        { url: "/image/Wells-Fargo.png", name: "Wells Fargo" },
        { url: "/image/JP-Morgan.png", name: "JP Morgan" },
        { url: "/image/goldman-sachs.png", name: "Goldman Sachs" },
      ],
      pic: "/image/usa.png"
    },
    { //2
      title: "India",
      // companies: ["HDFC Bank", "QuadEye", "Paytm"],
      companies: [
        { url: "/image/hdfc.png", name: "HDFC Bank" },
        { url: "/image/quad_eye.png", name: "QuadEye" },
        { url: "/image/Paytm.png", name: "Paytm" },
      ],
      pic: "/image/india.png"
    },
    { //3
      title: "Argentina",
      // companies: ["Mercado Pago", "Ualá", "Banco Santander Río"],
      companies: [
        { url: "/image/mercadoPago.png", name: "Mercado Pago" },
        { url: "/image/Ualá.png", name: "Ualá" },
        { url: "/image/Banco Santander Río.png", name: "Banco Santander Río" },
      ],
      pic: "/image/argentina.png"
    },
    { // 4
      title: "Germany",
      // companies: ["Deutsche Bank", "N26", "Solarisbank"],
      companies: [
        { url: "/image/deutsche-bank.png", name: "Deutsche Bank" },
        { url: "/image/n26.png", name: "N26" },
        { url: "/image/Solarisbank.png", name: "Solarisbank" },
      ],
      pic: "/image/germany.png"
    },
    { //5
      title: "Switzerland",
      // companies: ["Credit Suisse", "Aduno Group", "Lykke"],
      companies: [
        { url: "/image/Credit Suisse.png", name: "Credit Suisse" },
        { url: "/image/Aduno Group.png", name: "Aduno Group" },
        { url: "/image/Lykke.png", name: "Lykke" },
      ],
      pic: "/image/switzerland.png"
    },
    { //6
      title: "Italy",
      // companies: ["Intesa Sanpaolo", "Satispay", "MoneyFarm"],
      companies: [
        { url: "/image/intesa-sanpaolo-squarelogo.png", name: "Intesa Sanpaolo" },
        { url: "/image/Satispay.jpeg", name: "Satispay" },
        { url: "/image/MoneyFarm.png", name: "MoneyFarm" },
      ],
      pic: "/image/italy.png"
    },
    { //7
      title: "China",
      companies: [
        { url: "/image/Ant Group.png", name: "Ant Group (Alipay)" },
        { url: "/image/JD Digits.png", name: "JD Digits" },
        { url: "/image/Lufax.png", name: "Lufax" },
      ],
      pic: "/image/china.png"
    },
    { // 8
      title: "Japan",
      companies: [
        { url: "/image/Rakuten Pay.png", name: "Rakuten Pay" },
        { url: "/image/toyota.png", name: "toyota" },
        { url: "/image/Money Forward.png", name: "Money Forward" },
      ],
      pic: "/image/japan.png"
    },
    { // 9
      title: "Taiwan",
      companies: [
        { url: "/image/KKBOX.png", name: "KKBOX Pay" },
        { url: "/image/E sun bank (Fugle).png", name: "E.SUN Bank (Fugle)" },
        {
          url: "/image/Orient_Securities.png",
          name: "Orient Securities",
        },
      ],
      pic: "/image/Taiwan.png"
    },
    { // 10
      title: "Russia",
      companies: [
        { url: "/image/Gazprom.png", name: "Gazprom" },
        { url: "/image/Lukoil.png", name: "Lukoil" },
        { url: "/image/Sberbank.png", name: "Sberbank" },
      ],
      pic: "/image/russia.png"
    },
    { //11
      title: "Sweden",
      // companies: ["Klarna", "Tink", "iZettle"],
      companies: [
        { url: "/image/Klarna.png", name: "Klarna" },
        { url: "/image/TINK.png", name: "Tink" },
        { url: "/image/IZETTLE.png", name: "iZettle" },
      ],
      pic: "/image/sweden.png"
    },
    { //12
      title: "Austria",
      companies: [
        { url: "/image/George.png", name: "George" },
        { url: "/image/Bitpanda.png", name: "Bitpanda" },
        { url: "/image/Raiffeisen Bank International.png", name: "Raiffeisen Bank International" },
      ],
      pic: "/image/austria.png"
    },
    { //13
      title: "Canada",
      // companies: ["Wealthsimple", "Wave Financial", "KOHO"],
      companies: [
        { url: "/image/Wealthsimple.png", name: "Wealthsimple" },
        { url: "/image/WAVE Financial.png", name: "Wave Financial" },
        { url: "/image/KOHO.png", name: "KOHO" },
      ],
      pic: "/image/canada.png"
    },
    { //14
      title: "Brazil",
      companies: [
        { url: "/image/Nubank.png", name: "Nubank" },
        { url: "/image/PagSeguro.png", name: "PagSeguro" },
        { url: "/image/Itaú Unibanco.png", name: "Itaú Unibanco" },
      ],
      pic: "/image/brazil.png"
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
