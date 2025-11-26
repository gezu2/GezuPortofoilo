
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";

import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<SiAntdesign />} des="7 Finished Projects" />
      <FunFactCard icon={<BiCodeAlt />} des="70 hours of coding" />
    </div>
  );
};

export default FunFact;
