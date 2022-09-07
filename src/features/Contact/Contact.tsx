import * as React from 'react';
import { useNavigate } from 'react-router-dom'

export interface ContactProps {
}

export function Contact(props: ContactProps) {
    const navigate = useNavigate()
    const contactPage = () => {
        navigate('/call');
    }

    return (
        <div>
            Contact
            <button className="btn-primary"
                onClick={contactPage}
            >
                Call
            </button>
        </div>
    );
}
