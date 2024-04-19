import React from 'react';

function Introduction() {
    return (
        <div className="container">
            <h2>學校介紹</h2>
            <div>
                這邊可以放學校的介紹，例如學校的歷史、特色、教學理念等等
            </div>
            <h2>Why GIIS? or 校長的話 or 創辦人的話</h2>
            <div className="row">
                <div className="col-md-3">
                    <img src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png" alt="Founder's Portrait" className="img-fluid" />
                </div>
                <div className="col-md-9">
                    Our school was established on the principle that education not only shapes minds but also molds future leaders. Embracing a commitment to foster innovation and critical thinking, we aim to nurture a new generation of thinkers and innovators. We believe in cultivating an environment where creativity and curiosity thrive, fueling a lifelong journey of learning and discovery. Our goal is to arm our students with the necessary skills and knowledge to face future challenges confidently and to make a meaningful impact on the world
                </div>
            </div>
        </div>
    );
}

export default Introduction;
