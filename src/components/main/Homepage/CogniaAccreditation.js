import React from 'react';
import cogniaImage from '../../../../src/img/Homepage/cognia_logo.jpg';

function CogniaAccreditation() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={cogniaImage} alt="Cognia Logo" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h1>Cognia Accreditation</h1>
                    <p>
                        Our institution is proud to be accredited by Cognia, a global nonprofit that ensures educational institutions meet rigorous standards. Cognia accreditation is a testament to our commitment to excellence in education, providing a framework for continuous improvement and fostering environments that enhance learning.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CogniaAccreditation;
