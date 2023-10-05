import React from "react";

function Home() {
  return (
    <div className="home flex flex-col justify-center text-center h-screen text-white">
      <h1 className="blackops text-8xl font-bold">WELCOME</h1>
      <p className="text-2xl leading-8">
        My Name is{" "}
        <span className="underline decoration-red-500 underline-offset-4">
          Vamsi Krishna Tupakula
        </span>
        . I am a student at Lovely Professional University, Punjab, India. I am
        a Logical and organized Individual with strong foundation. Looking to
        start a career as Software Engineer. Highly analytical and diligent
        person
      </p>
    </div>
  );
}

export default Home;
