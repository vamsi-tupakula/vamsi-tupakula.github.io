import React from "react";

function Skills() {
  const images = [
    {
      name: "java",
      img: "https://cdn.iconscout.com/icon/free/png-512/java-43-569305.png",
    },
    {
      name: "python",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/2048px-Python_logo_01.svg.png",
    },
    {
      name: "javascript",
      img: "https://simg.nicepng.com/png/small/985-9857766_technologies-used-vanilla-javascript.png",
    },
    {
      name: "html",
      img: "https://cdn3d.iconscout.com/3d/free/thumb/free-html-5728485-4781249.png?f=webp",
    },
    {
      name: "css",
      img: "https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png",
    },
    {
      name: "react js",
      img: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
    },
    {
      name: "node js",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    },
    {
      name: "bootstrap",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png",
    },
    {
      name: "Tailwind CSS",
      img: "https://shadowblood.gallerycdn.vsassets.io/extensions/shadowblood/tailwind-moon/3.0.2/1673948732518/Microsoft.VisualStudio.Services.Icons.Default",
    },
    {
      name: "mongodb",
      img: "https://www.svgrepo.com/download/331488/mongodb.svg",
    },
  ];
  return (
    <section className="skills flex flex-col gap-y-10 justify-center text-center min-h-screen text-white py-4">
      <h1 className="blackops text-5xl font-bold sm:text-8xl">SKILLS</h1>
      <div className="grid grid-cols-2 gap-y-16 sm:grid-cols-5">
        {images.map((img, index) => {
          return (
            <div
              className="flex flex-col gap-y-5 items-center justify-between"
              key={index}
            >
              <img
                src={img.img}
                alt={`${img.name} logo`}
                className="skill w-20 sm:w-24 rounded-lg hover:shadow-sm hover:shadow-white"
                key={img.name}
              />
              <p className="lang-name text-lg">{img.name.toUpperCase()}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
