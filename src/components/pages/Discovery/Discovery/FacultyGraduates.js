import React from 'react';

function FacultyGraduates() {
    // Automatically import all files from the logos directory
    const importAll = (r) => {
        let images = {};
        r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    };

    const images = importAll(require.context('../../../../img/Homepage/SchoolLogo', false, /\.(png|jpe?g|svg)$/));

    // Convert object to array if needed
    const logos = Object.entries(images).map(([key, value]) => {
        return {
            src: value,
            alt: key.replace(/\..+$/, '')  // Remove file extension from alt text
        };
    });

    return (
        <section className="school-logos">
            <div className="container">
                <div className="row justify-content-center">
                    {logos.map((logo, index) => (
                        <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center align-items-center">
                            <img src={logo.src} alt={logo.alt} className="img-fluid" style={{ maxHeight: "100px" ,padding:"10px" }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FacultyGraduates;
