import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6 gap-6">
      {/* Experience Section */}
      <div className="col-span-9 md:col-span-4 space-y-6">
        <ResumeTitle title="Experience" icon={<MdWork />} />

        <ResumeCard
          badge="2016 - 2020"
          title="Call Center Advisor"
          subTitle="EthioTelecom"
          des="Handled customer inquiries and technical support, resolving issues efficiently. Achieved a 95% customer satisfaction rating and assisted in training new advisors."
        />

        <ResumeCard
          badge="2021 - Present"
          title="Fixed Network Technician"
          subTitle="Freelance & EthioTelecom"
          des="Configured and maintained telecommunication networks, diagnosing and resolving technical faults. Collaborated with teams to optimize network performance and reliability."
        />

        <ResumeCard
          badge="2023 - Present"
          title="Full Stack Developer & Fixed Network Technician"
          subTitle="Freelance & EthioTelecom"
          des="Designed and developed full stack web applications using React, Node.js, and MySQL. Integrated front-end and back-end solutions, improving system efficiency and user experience."
        />
      </div>

      {/* Vertical Divider */}
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>

      {/* Education Section */}
      <div className="col-span-9 md:col-span-4 space-y-6">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />

        <ResumeCard
          badge="2011 - 2015"
          title="BSc in Electrical and Computer Engineering"
          subTitle="Arba Minch University, Ethiopia"
          des="Specialized in telecommunications, digital systems, and software development. Completed final-year project on network optimization."
        />

        <ResumeCard
          badge="2023 - 2024"
          title="MERN Stack Developer"
          subTitle="Evangadi Network"
          des="Completed an intensive Full Stack Web Development program covering MongoDB, Express.js, React.js, and Node.js. Built multiple real-world projects and deployed web applications."
        />
      </div>
    </div>
  );
};

export default Education;
