import "../styles/nameCard.css";
import anteater from '../assets/anteater.png';

const NameCard = () => {
    return(
        <div className="nameBox">
            <h1><em>Joseph Nguyen</em></h1>
            <h3>Computer Science Undergraduate</h3>
            <h3>University of California, Irvine</h3>
            <div className="nameRow">
                <p>(He/Him/His)</p>
                <a href='https://www.uci.edu/' target="_blank" rel="noopener noreferrer" aria-label="University of California, Irvine Homepage">
                    <img className="anteater" src={anteater} alt="UCI Anteater Mascot"/>
                </a>
            </div>
        </div>
    );
};

export default NameCard;