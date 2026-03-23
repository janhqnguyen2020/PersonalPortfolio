import "../styles/projects.css";
import { useState } from "react";

import ProjectCard from "./projectCard";

import helloHealth1 from '../assets/helloHealth1.png';
import helloHealth2 from '../assets/helloHealth2.png';
import helloHealth3 from '../assets/helloHealth3.png';
import helloHealth4 from '../assets/helloHealth4.png';

import anime1 from '../assets/anime1.png';
import anime2 from '../assets/anime2.png';
import anime3 from '../assets/anime3.png';
import anime4 from '../assets/anime4.png';

import agonus1 from '../assets/agonus1.jpg';
import agonus2 from '../assets/agonus2.jpg';
import agonus3 from '../assets/agonus3.jpg';
import agonus4 from '../assets/agonus4.jpg';

import jukejam1 from '../assets/jukejam1.jpg';
import jukejam2 from '../assets/jukejam2.jpg';
import jukejam3 from '../assets/jukejam3.jpg';
import jukejam4 from '../assets/jukejam4.jpg';


const ProjectsBox = () => {
    const projects = [
                {
            title: "Anime Recommendation System",
            subtitle: "(Content-Based NLP)",
            startDate: "November 2024",
            endDate: "December 2024",
            images: [anime1, anime2, anime3, anime4],
            imageAlts: [
                "Anime Recommendation System - table of anime data",
                "Anime Recommendation System - sample anime metadata",
                "Anime Recommendation System - wordcloud of anime descriptions",
                "Anime Recommendation System - function to get anime recommendations",
            ],
            summary: "This project explores how natural language processing can power content discovery. Given a title a user enjoys, the system finds anime with similar descriptions and themes by representing each entry as a TF-IDF vector and ranking candidates by cosine similarity. The dataset — over 1,000 anime records — required significant preprocessing through NLTK and SpaCy before it was usable: removing stopwords, lemmatizing, and stripping noise from crowdsourced descriptions. The end result is a recommendation engine that surfaces thematically similar titles rather than just matching on genre tags.",

            insights: [
                "Preprocessing the dataset took longer than building the model — it taught me that the quality of your features determines the ceiling of your results, no matter how good your algorithm is",
                "Cosine similarity clicked for me during this project in a way textbook definitions never did — seeing it produce meaningful recommendations made the math feel real",
                "Working with noisy, crowdsourced data built a habit of questioning what's actually in a dataset before trusting it to train anything"
            ],
            skills: ["Python", "Natural Language Processing (NLP)", "Scikit-learn", "NLTK", "Pandas"],
        },
        {
            title: "HelloHealth",
            subtitle: "Healthcare Accessibility Design Project",
            startDate: "March 2025",
            endDate: "June 2025",
            images: [helloHealth1, helloHealth2, helloHealth3, helloHealth4],
            imageAlts: [
                "HelloHealth App - Login screen",
                "HelloHealth App - Dashboard view",
                "HelloHealth App - Symptom reporting",
                "HelloHealth App - Medical terminology guide"
            ],
            summary: "HelloHealth is a Figma prototype designed to make healthcare more accessible for non-native English speakers. The core problem it addresses is that medical settings rely heavily on precise language — symptom descriptions, consent forms, terminology — which puts non-English speakers at a significant disadvantage. The prototype introduces a guided pre-appointment symptom helper that walks users through reporting step by step, a medical glossary that translates clinical terms into plain language, and a document scanning feature for foreign-language records. Every design decision was grounded in survey research and user personas built from real feedback.",

            insights: [
                "User research reframed how I think about design — the most important features weren't the ones I assumed upfront, they were the ones users kept struggling without during testing",
                "Designing for accessibility forced me to question every default — font size, icon choice, workflow order — because what feels intuitive to one user can be a wall for another",
                "Presenting findings to peers and instructors taught me that design work isn't finished when the prototype is done — being able to explain your decisions is just as important as making them"
            ],

            skills: ["Figma", "User Research & Personas", "UI/UX Design", "Prototyping & Usability Testing", "Competitive Analysis"],
        },
        {
            title: "Agonus",
            subtitle: "AI Trading Tournament Platform",
            startDate: "November 2025",
            endDate: "February 2026",
            images: [agonus1, agonus2, agonus3, agonus4],
            imageAlts: [
                "Agonus - Live tournament leaderboard",
                "Agonus - Agent profile view",
                "Agonus - Wallet-based betting interface",
                "Agonus - Agent feed UI"
            ],
            summary: "Agonus is an AI trading tournament platform where autonomous agents compete in live markets and users bet on their performance. I led the frontend architecture using Next.js and React, mapping out the full data flow from tournament state to the UI. The core challenge was building interfaces that felt live — leaderboards that update in real time, agent feeds that reflect on-chain activity, and a betting system tied to wallet interactions via Wagmi. Most of the work was coordinating with backend and blockchain teams to agree on API contracts before building, so the frontend wasn't blocked waiting on data shapes to stabilize.",

            insights: [
                "Leading frontend architecture on a multi-team project meant making decisions early that other people would build around — I learned to document assumptions and API contracts before writing a single component",
                "Integrating on-chain data through Wagmi showed me how blockchain state differs from traditional REST — data is eventual, not immediate, and the UI has to reflect that honestly",
                "Working across frontend, backend, and blockchain simultaneously taught me how to scope my work to what I could control while staying aligned on what I depended on"
            ],

            skills: ["Next.js", "React", "Wagmi", "UI/UX Design", "API Integration"],
        },
        {
            title: "Juke Jam",
            subtitle: "Collaborative Music Web App",
            startDate: "January 2026",
            endDate: "March 2026",
            images: [jukejam1, jukejam2, jukejam3, jukejam4],
            imageAlts: [
                "Juke Jam - Home screen",
                "Juke Jam - Music queue view",
                "Juke Jam - Collaborative session",
                "Juke Jam - Playback controls"
            ],
            summary: "JukeJam is a full-stack music recommendation engine that goes beyond simple playlist shuffling. It uses a 3-stage pipeline — inverted index lookup, TF-IDF cosine scoring, and weighted ranking — to surface relevant tracks from an 81K-song corpus in under 150ms. Users onboard through a multi-step flow that pulls their listening history via Spotify OAuth 2.0 to build a personalized audio profile. When Spotify is unavailable, a manual fallback keeps the experience intact. A score_debug API layer exposes exactly how each recommendation was ranked, making the system transparent rather than a black box.",
            insights: [
                    "Designing a ranking system taught me that relevance alone isn't enough — balancing TF-IDF, user fit, and popularity without letting any one signal dominate is an engineering problem as much as a math one",
                    "Building the score_debug API changed how I think about backend design — surfacing internal logic to the frontend made the whole system easier to reason about and debug",
                    "AbortController debouncing was a small addition that had a big impact — it taught me to think about what happens between user actions, not just after them"
                ],
            skills: ["React", "Node.js", "JavaScript", "CSS"],
        },
        // Add more projects here with the same structure
    ];

    const [current, setCurrent] = useState(0);
    const reversed = [...projects].reverse();

    const goNext = () => setCurrent((prev) => (prev + 1) % reversed.length);
    const goPrev = () => setCurrent((prev) => (prev - 1 + reversed.length) % reversed.length);

    return (
    <div className="projectsBox">
        <h2>Projects</h2>
        <div className="projectCarousel">
            <button className="carouselBtn" onClick={goPrev}>&#8592;</button>
            <ProjectCard
                key={current}
                title={reversed[current].title}
                subtitle={reversed[current].subtitle}
                startDate={reversed[current].startDate}
                endDate={reversed[current].endDate}
                images={reversed[current].images}
                imageAlts={reversed[current].imageAlts}
                summary={reversed[current].summary}
                skills={reversed[current].skills}
                insights={reversed[current].insights}
            />
            <button className="carouselBtn" onClick={goNext}>&#8594;</button>
        </div>
        <div className="projectIndicators">
            {reversed.map((_, i) => (
                <button
                    key={i}
                    className={`indicator ${i === current ? "active" : ""}`}
                    onClick={() => setCurrent(i)}
                />
            ))}
        </div>
    </div>
);


};

export default ProjectsBox;