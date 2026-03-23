import "../styles/interestSection.css";

import InterestCard from "./interestCard";

//defines shape of data
type InterestItem = {
  icon: string;
  label?: string;//optional
  variant?: string;//optional
};

type InterestSectionProps = {
  items?: InterestItem[];
};

//react loop to render card interests
const InterestSection = ({ items = [] }: InterestSectionProps) => {
  return (
    <div className="interestSection">
      {items.map((item, idx) => (
        <InterestCard
          key={idx}
          icon={item.icon}
          label={item.label}
          className={item.variant || ""}
        />
      ))}
    </div>
  );
};

export default InterestSection;
