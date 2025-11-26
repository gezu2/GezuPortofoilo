import React, { useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { FiSend } from "react-icons/fi";
import { bannerImg } from "../../assets/index";
import { Link } from "react-router-dom";
import ProfessionalResume from "../resume/Resumepdf";

const Left = () => {
  const resumePDF = useRef();

  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "UI Designer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });



const handleDownloadPDF = () => {
  const link = document.createElement("a");
  link.href = resumePDF;
  link.download = "Gezu_Gudisa_Resume.pdf"; // name of file user sees
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5 ">
      
      <div ref={resumePDF} className="hidden">
  <ProfessionalResume />
</div>

        <img
          className="w-96 h-90
           object-cover rounded-full"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>

      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Gezu Gudisa</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>

          <div className="flex justify-center gap-2 mt-2">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <Link
                to=" https://github.com/gezu2/"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub />
              </Link>
            </span>

            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <Link
                to="https://www.linkedin.com/in/gezu-gudisa-b08455101"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin />
              </Link>
            </span>

            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <Link
                to="https://www.youtube.com/@gezugudisa586"
                target="_blank"
                rel="noopener noreferrer">
                <SiYoutubemusic />
              </Link>
            </span>

            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <Link
                to="https://web.facebook.com/gezu.gudisa.1/"
                target="_blank"
                rel="noopener noreferrer">
                <BsFacebook />
              </Link>
            </span>

            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <Link
                to="https://t.me/zugeA/"
                target="_blank"
                rel="noopener noreferrer">
                <FaTelegram />
              </Link>
            </span>
          </div>
        </div>

        <div className="flex h-14">
          <button
             onClick={handleDownloadPDF}
            className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
            Download CV <BsCloudLightningFill />
          </button>

          <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
            Contact me <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
