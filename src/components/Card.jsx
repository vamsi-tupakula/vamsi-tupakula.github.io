import React, { useRef } from "react";

function Card(props) {
  const { img, title, desc, tech, livesite, github } = props.details;
  const card = useRef(null);

  return (
    <div
      className="card_ w-[20rem] sm:w-[26rem] md:w-[30rem] py-8 px-5 flex flex-col gap-5 bg-[#224b6658] rounded-xl sofadione-font shadow-sm shadow-[#ececec67]"
      ref={card}
    >
      <div className="img__container hover:scale-[1.02] transition">
        <img src={img} alt="" className="w-full rounded-lg" />
      </div>
      <div className="details text-left flex flex-col gap-3">
        <h1 className="text-3xl font-bold md:text-4xl">{title}</h1>
        <p className="text-lg md:text-xl">{desc}</p>
      </div>
      <div className="buttons">
        <div className="tags flex gap-4 my-2">
          {tech.map((item, index) => {
            return (
              <button
                className="bg-[#643030] hover:bg-[#702c2c] px-3 py-1 text-sm md:text-lg rounded-md"
                key={index}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="links flex gap-4 mt-4">
          <a
            href={livesite}
            className="bg-[#30644E] hover:bg-[#1b6043] px-3 py-1 text-sm md:text-lg rounded-md"
            target="_blank"
          >
            Live Site
          </a>
          <a
            href={github}
            className="bg-[#30644E] hover:bg-[#1b6043] px-3 py-1 text-sm md:text-lg rounded-md"
            target="_blank"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
