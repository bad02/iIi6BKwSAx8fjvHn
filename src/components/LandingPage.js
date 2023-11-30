import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div>
            <section>
                <h2>Candidate Details</h2>
                <p>First Name: Shivam</p>
                <p>Highest Degree Passout Year: August 2022</p>
                <p>Technologies/Languages: JavaScript, React, Git, CSS, HTML</p>
            </section>
            <section>
                <h2>Download Link to Resume</h2>
                <a href="Shivam-Badoniya.pdf" download>
                    Download Resume
                </a>
            </section>
            <section>
                <h2>Link to BMI Calculation Page</h2>
                <Link to="/bmi">Go to BMI Calculation</Link>
            </section>
            <section>
                <h2>Link to upload you resume</h2>
                <Link to="/resume">Go to upload your resume</Link>
            </section>
        </div>
    );
}

export default LandingPage;
