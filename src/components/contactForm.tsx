import "../styles/contact.css";
import { useState } from "react";

const ContactForm = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mayvlrze", {
                method: "POST",
                body: data,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("Thanks for your message! Redirecting...");
                form.reset();
                setTimeout(() => {
                    window.location.href = "/";
                }, 1500);
            } else {
                setStatus("Oops! There was a problem submitting your form.");
            }
        } catch (error) {
            setStatus("Oops! There was a problem submitting your form.");
        }
    };

    return(
        <div className="contactBox">
            <h2>Contact Form</h2>

                <form onSubmit={handleSubmit}>
                    <div className="formRow">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className="formRow">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="formRow">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>

                    <button type="submit">Send</button>
                    {status && <p>{status}</p>}
                </form>
        </div>
    );
}
export default ContactForm;