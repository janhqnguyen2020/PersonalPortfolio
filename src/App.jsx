import './App.css'

import {Routes, Route} from 'react-router-dom';

// Component Imports
import PortfolioFooter from './components/footer';
import PortfolioHeader from './components/header';
import NameCard from './components/nameCard';
import InterestSection from './components/InterestSection';
import Summary from './components/summary';
import SkillsBox from './components/skills';
import ContactBox from './components/contact';
import ProjectsBox from './components/projects';
import ContactForm from './components/contactForm';

//interest data variables
const interests = [
  { icon: "music_note_2", label: "Singing" , variant: "blue"},
  { icon: "auto_stories", label: "Reading Manga" , variant: "blue"},
  { icon: "park", label: "Hiking" , variant: "blue"},
  { icon: "rice_bowl", label: "Asian Food" , variant: "red"},
  { icon: "sports_mma", label: "Kickboxing" , variant: "red"},
  { icon: "theaters", label: "Theaters" , variant: "red"},
];

function App() {

  return (
    // STEP 1: Routes wraps all your different pages
    <Routes>

      {/* STEP 2: Home page route - path="/" shows all sections */}
      <Route path="/" element={
        <>
          <div className="background-checkerboard">
            <div id="top" />
            <div className='page'>
              <main>

                <PortfolioHeader />

                <section id="about" className='section'>
                  <div className='heroSection'>
                    <div className='heroInner'>
                      <NameCard />
                      <InterestSection items={interests} />
                    </div>
                  </div>

                  <div className='summaryContainer'>
                    <Summary />
                  </div>
                </section>

                <section id="skills" className='section'>
                  <SkillsBox />
                </section>

                <section id="projects" className='section'>
                  <ProjectsBox />
                </section>

                <section id="contact" className='section'>
                  <ContactBox />
                </section>

              </main>
            </div>
          </div>
          <PortfolioFooter />
        </>
      } />

      {/* STEP 3: Contact page route - path="/contact" shows only contact */}
      <Route path="/contact" element={
        <>
          <div className="background-checkerboard">
            <div className='page'>
              <ContactForm />
            </div>
          </div>
          <PortfolioFooter />
        </>
      } />

    </Routes>
  );
};

export default App
