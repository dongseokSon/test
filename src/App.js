import "./index.css";
import { useState } from "react";
import { ReactComponent as BSI_LOGO } from "./assets/bsi_logo.svg";
import { ReactComponent as SEARCH_ICON } from "./assets/icons/search_icon.svg";
import {
  MdArrowOutward,
  MdOutlineKeyboardArrowDown,
  MdOutlineArrowDownward,
} from "react-icons/md";

import mainBg from "./assets/images/main_bg.jpg";
import featureImage from "./assets/images/M4-New Concept of Fixed Structure 2.png";

const TITLES = [
  "The new concept of Fixed structure",
  "Ultra-Rigid Bridged Die Casting",
  "Cable-free hub boards",
  "Low Power - Low Heat",
  "EZ Mount™ Only Installation Bracket",
  "Highly versatile",
];
const MAIN_TEXT = [
  "It's completely structural, which meanst's much better for assembly, flatness, and screen quality than traditional methods.",
  "Ultra-Rigid Bridged Die Casting",
  "Cable-free hub boards",
  "Low Power - Low Heat",
  "EZ Mount™ Only Installation Bracket",
  "Highly versatile",
];

export default function App() {
  const [accordianStates, setAccordianStates] = useState(Array(6).fill(false));

  const toggleAccordian = (index) => {
    setAccordianStates((prevStates) =>
      prevStates.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="App">
      <header className="sticky top-0 z-50 bg-white p-4 flex my-auto justify-between w-full px-40 h-[104px] max-w-[1920px] mx-auto">
        <div className="my-auto mr-6">
          <BSI_LOGO />
        </div>
        <nav className="flex my-auto items-center justify-between gap-[72px]">
          <ul className="flex gap-3">
            <div>HOME</div>
          </ul>
          <ul className="flex gap-3">
            <div>PRODUCTS</div>
            <div className="m-auto">
              <MdOutlineKeyboardArrowDown size="20" />
            </div>
          </ul>
          <ul className="flex gap-3">
            <div>CAPABILITIES</div>
            <div className="m-auto">
              <MdOutlineKeyboardArrowDown size="20" />
            </div>
          </ul>
          <ul className="flex gap-3">
            <div>INDUSTRIES</div>
            <div className="m-auto">
              <MdOutlineKeyboardArrowDown size="20" />
            </div>
          </ul>
          <ul className="flex gap-3">
            <div>COMPANY</div>
            <div className="m-auto">
              <MdOutlineKeyboardArrowDown size="20" />
            </div>
          </ul>
        </nav>
        <div className="flex gap-6 my-auto">
          <div className="my-auto cursor-pointer">
            <SEARCH_ICON />
          </div>
          <div className="flex px-6 py-4 bg-[#E00024] rounded-[70px] gap-5 cursor-pointer border-[1px] border-white text-white hover:bg-white hover:text-[#E00024] hover:border-[1px] hover:border-[#E00024] transition-all">
            <div className="text-[13] font-medium ">CONTACT US</div>
            <div className="my-auto">
              <MdArrowOutward size="20" />
            </div>
          </div>
        </div>
      </header>
      <div
        className="h-[1100px] bg-fixed bg-center bg-no-repeat bg-cover flex items-center text-center justify-center text-white text-3xl"
        style={{ backgroundImage: `url(${mainBg})` }}
      >
        <div className="flex flex-col items-center">
          <div className="px-6 py-1 text-xs font-semibold border-2 rounded-3xl max-w-40">
            INDOOR PANEL
          </div>
          <h1 className="my-5 text-6xl font-bold">M4</h1>
          <div className="text-base font-medium">
            <div>
              Pixel pitch │ p0.7 p0.9 p1.2 p1.5 p1.8 <br />
              Application │ Commercial Space Advertising Lobby Church
            </div>
          </div>
        </div>
      </div>
      <div className="px-40 py-24 text-center text-[#222222]">
        <div className="max-w-[1920px] mx-auto">
          <div className="mb-5 text-sm font-bold text-[#CCCCCC]">FEATURES</div>
          <div className="mb-12 text-5xl font-bold">
            Lower price, higher performance
          </div>
          <div className="flex gap-8">
            <div className="relative w-full h-[100%]">
              <img src={featureImage} alt="featureImage" />
            </div>

            <div className="w-full align-top">
              {accordianStates.map((isOpen, index) => (
                <Accordian
                  key={index}
                  index={index}
                  isOpen={isOpen}
                  titleText={`${TITLES[index]}`}
                  mainText={`${MAIN_TEXT[index]}`}
                  onToggle={() => toggleAccordian(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-40 py-24 pb-[500px] bg-[#222222] text-white font-bold">
        <div className="flex justify-center m-auto gap-14 max-w-[1920px]">
          <div className="flex flex-col gap-5 mx-auto">
            <div className="text-sm text-[#CCCCCC]">INSTALLATION EXAMPLES</div>
            <h1 className="text-5xl">
              Pororo Theme Park 40-meter ultra-large screen
            </h1>
            <ul className="text-base font-medium list-disc list-inside">
              <li>Product: M4</li>
              <li>Pixel Pitch: 2.5mm 3.0mm</li>
              <li>Screen size: 41 x 3 m</li>
            </ul>
          </div>
          <div className="relative flex flex-col w-full h-[600px] items-start">
            <iframe
              src="https://player.vimeo.com/video/936450207?h=d546bc6e30"
              className="relative top-0 left-0 w-full h-full"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

const Accordian = ({ index, isOpen, titleText, mainText, onToggle }) => {
  return (
    <div className="w-full align-top">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-5 my-4">
          <div className="text-base font-medium">0{index + 1}.</div>
          <div className="text-2xl font-bold">{titleText}</div>
        </div>
        <div className={`transition-all ${isOpen ? "rotate-180" : ""}`}>
          <MdOutlineArrowDownward size="24" />
        </div>
      </button>
      {/* <div
        className={`h-0 overflow-hidden transition-all mt-4 border-[#717171] border-[${
          isOpen ? "1px" : "1px"
        }] `}
      ></div> */}
      <div
        className={`h-0 overflow-hidden transition-all border-[#717171] border-[1px]`}
      ></div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div
          className={`overflow-hidden text-base font-medium transition-all text-start mx-4 ${
            isOpen ? "my-4" : "my-0"
          }`}
        >
          {mainText}
        </div>
        <div className="border-[1px] h-0 border-[#717171] transition-none"></div>
      </div>
    </div>
  );
};
