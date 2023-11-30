import React, { useState } from 'react';

function Resume() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = () => {
        if (selectedFile) {

            console.log(`File Name: ${selectedFile.name}, Size: ${selectedFile.size} bytes`);
        } else {
            console.log('Please select a file');
        }
    };

    return (
        <div>
            <h2>Your Resume</h2>
            <div>
                <input type="file" accept=".pdf" onChange={handleFileChange} />
            </div>
            <button onClick={handleUpload}>Upload Resume</button>
        </div>
    );
}

export default Resume;
