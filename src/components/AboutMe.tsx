import React from "react";

const AboutMe:React.FC = () => {
  return(
    <>
    <div id="aboutme" className="text-white selection:bg-sky-300 flex flex-col items-center gap-6 w-screen mt-10 bg-gray-500/20">
        <h1 className="text-6xl font-bold">About me</h1>
        <h2 className="text-3xl mx-72 font-medium">Hello, my name is Daniel Adrian Gendik and I'm a ambitious self taught frontend web developer, who dreams about code.</h2>
        <h3 className="text-2xl mx-72 font-normal">As I wrote my first few lines of simple HTML , I instantly knew that I'll one day become a web dev. I love to write code and learn new things about developing. Admittedly I'm not the best designer, but my passion is to develop web applications and solve code problems - not to design it. I'll better leave this part to the designers and develop the website using their styled wireframe.</h3>
    </div>
    </>
  )
};

export default AboutMe;
