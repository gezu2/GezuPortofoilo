import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="I design and build powerful, secure, and scalable web applications using modern technologies such as React.js, Node.js, Express.js, and MySQL.
My goal is to turn your ideas into functional digital solutions that are fast, reliable, and easy to use.
From responsive front-end interfaces to robust back-end systems, I develop complete solutions tailored to your business needs."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="I create clean, engaging, and user-friendly designs that combine creativity with functionality.
My focus is on delivering visually appealing layouts that enhance user experience and reflect your brand identity.
Every design I produce is responsive, accessible, and optimized for both mobile and desktop users."
      />
    </div>
  );
};

export default MyServices;
