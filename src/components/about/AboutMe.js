const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Gezu Gudisa</h2>
          <p className="text-base leading-6 ">
           I am a dedicated, organized, and methodical individual with good interpersonal skills. I excel as a team worker, am keen to learn and develop new skills, and am reliable and dependable. I actively seek new responsibilities within a wide range of employment areas. My approach to work is active and dynamic, and I am determined and decisive. I identify and develop opportunities with precision and agility.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">birth date:</span>
            june 30 1991
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Addis Ababa, Ethiopia
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Addis Ababa, Ethiopia
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
