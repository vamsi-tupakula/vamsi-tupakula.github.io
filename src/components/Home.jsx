import React from "react";

function Home() {
  return (
    <div className="home flex flex-col gap-2 justify-center text-center min-h-screen text-white">
      <h1 className="blackops text-5xl font-bold sm:text-8xl">WELCOME</h1>
      <p className="text-lg leading-8 sm:text-2xl">
        My Name is{" "}
        <span className="underline decoration-red-500 underline-offset-4 animate-pulse">
          Vamsi Krishna Tupakula{" "}
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
