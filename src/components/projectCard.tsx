import "../styles/projects.css";
import { useState } from "react";
import SkillPill from "./skillPill";

interface ProjectCardProps {
    title: string;
    subtitle?: string;
    startDate: string;
    endDate: string;
    images: string[];
    imageAlts: string[];
    summary: string;
    skills: string[];
    insights: string[];
}

const ProjectCard = ({ title, subtitle, startDate, endDate, images, imageAlts, summary, skills, insights }: ProjectCardProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    return(
        <div className="projectCard">
            <h3>{title}{subtitle && ` — ${subtitle}`}</h3>

            <div className="cardRow">
                <div className="cardColumn">
                    <div className="dateBoxes">
                        <div className="dateBox startDate">
                            <p className="dateLabel">Start</p>
                            <p className="dateValue">{startDate}</p>
                        </div>
                        <div className="dateBox endDate">
                            <p className="dateLabel">End</p>
                            <p className="dateValue">{endDate}</p>
                        </div>
                    </div>

                    <div className="skillsSection">
                        <h4>Skills</h4>
                        <div className="skillsContainer">
                            {skills.slice(0, 5).map((skill, index) => (
                                <SkillPill key={index} skill={skill} />
                            ))}
                        </div>
                    </div>

                    <div className="summarySection">
                        <h4>Summary</h4>
                        <p>{summary}</p>
                    </div>
                </div>

                <div className="imageColumn">
                    <div className="imageCarousel">

                        <img
                            src={images[currentImageIndex]}
                            alt={imageAlts[currentImageIndex]}
                            className="projectImage"
                        />
                    </div>

                    <div className="imageIndicators">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                                onClick={() => goToImage(index)}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>

                    <div className="insightsSection">
                        <h4>Insights</h4>
                        <ul>
                            {insights.map((insight, index) => (
                                <li key={index}>{insight}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;