import "../styles/skills.css";
import SkillPill from "./skillPill";

const SkillsBox = () => {
    return(

        <div className="skillsBox">
            <h2>Skills</h2>
            <div className="skill-Category">
                <h4>Languages</h4>
                <br></br>
                <SkillPill skill="JavaScript" />
                <SkillPill skill="Python" />
                <SkillPill skill="Java" />
                <SkillPill skill="C++" />
                <SkillPill skill="SQL" />
            </div>

            <div className="skill-Category">
                <h4>Frameworks & Tools</h4>
                <br></br>   

                <SkillPill skill="React" />
                <SkillPill skill="HTML & CSS" />
                <SkillPill skill="Node.js" />
                <SkillPill skill="Git & GitHub" />
                <SkillPill skill="Figma" />
            </div>

            <div className="skill-Category">
                <h4>Concepts</h4>
                <SkillPill skill="Object-Oriented Programming" />
                <SkillPill skill="Data Structures & Algorithms" />
                <SkillPill skill="Component-Based Architecture" />
                <SkillPill skill="Agile Methodologies" />
            </div>

        </div>
    );
};

export default SkillsBox;