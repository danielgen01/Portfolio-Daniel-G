import React from "react"

const Contact: React.FC = () => {
  return (
    <>
      <div
        id="contact"
        className="text-white selection:bg-sky-300 flex flex-col items-center gap-6 w-screen mt-10"
      >
        <h1 className="text-5xl lg:text-6xl font-bold">Get in touch</h1>
        <h2 className=" text-2xl lg:text-3xl mx-10 lg:mx-72 font-medium ">
          Visit{" "}
          <a
            href="https://github.com/danielgen01 "
            target={"_blank"}
            className="text-sky-500 "
          >
            Github
          </a>{" "}
          or{" "}
          <a
            href="mailto:gendik38@gmail.com"
            target={"_blank"}
            className="text-sky-500 "
          >
            MailMe
          </a>
        </h2>
      </div>
    </>
  )
}

export default Contact
