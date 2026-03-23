import { useNavigate } from "react-router-dom";

function ContactButton() {
    const navigate = useNavigate();

    return (
        <button onClick={() => {navigate("/contact")}} >
            <p>Message Me</p>
        </button>
    );  
}   
export default ContactButton;
