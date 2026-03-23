import "../styles/skillPill.css";

const SkillPill = ({ skill }: { skill: string }) => {
    return(
        <div className="skillPill">
            {skill}
        </div>
    );
};
export default SkillPill;