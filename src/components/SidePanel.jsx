import React from "react";

function SidePanel() {
  return (
    <div className="side__panel flex gap-5 px-4 rounded-lg items-center justify-center mx-4 my-3">
      <a href="https://twitter.com/imVamsi_Krishna" target="_blank">
        <img
          src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
          alt="twitter logo"
          className="shadow-sm shadow-white"
          style={{ width: "40px", borderRadius: "50%" }}
        />
      </a>
      <a href="https://www.instagram.com/vamsi_23__/" target="_blank">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
          alt="Instagram logo"
          className="shadow-sm shadow-white"
          style={{ width: "35px", borderRadius: "5px" }}
        />
      </a>
      <a href="https://www.linkedin.com/in/vamsitupakula/" target="_blank">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
          alt="Linkedin logo"
          className="shadow-sm shadow-white"
          style={{ width: "35px" }}
        />
      </a>
      <a href="https://github.com/vamsi-tupakula" target="_blank">
        <img
          src="https://w7.pngwing.com/pngs/555/573/png-transparent-github-commonjs-source-code-node-js-github-purple-mammal-cat-like-mammal.png"
          alt="GitHub logo"
          className="shadow-sm shadow-white"
          style={{ width: "35px", borderRadius: "50%" }}
        />
      </a>
    </div>
  );
}

export default SidePanel;
