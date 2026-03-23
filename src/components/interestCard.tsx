
import "../styles/interestCard.css";

type InterestCardProps = {
  icon: string;
  label?: string;
  className?: string;
};

const InterestCard = ({ icon, label, className = "" }: InterestCardProps) => {
  return (
    <div className={`interestCard ${className}`}>
      <span className="material-symbols-outlined interestIcon" aria-hidden="true">
        {icon}
      </span>
      {label && <p className="interest-label">{label}</p>}
    </div>
  );
};

export default InterestCard;
