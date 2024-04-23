import React from 'react';

function Introduction() {
    return (
        <div className="container">
            <h2>学校介绍 / School Introduction</h2>
            <div>
                我们学校，创立于1998年，坐落在美丽的山谷中。以其创新的教学方法和对学生个人发展的重视而闻名。通过结合现代科技和综合课程，我们致力于为学生提供一流的教育体验。 / Our school, established in 1998, is nestled in a beautiful valley and is renowned for its innovative teaching methodologies and focus on individual student development. By integrating modern technology and comprehensive curricula, we are committed to providing a top-tier educational experience to our students.
            </div>
            <h2>为什么选择我们? / Why Choose Us?</h2>
            <div className="row">
                <div className="col-md-3">
                    <img src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png" alt="Founder's Portrait" className="img-fluid" />
                </div>
                <div className="col-md-9">
                    我们学校是基于教育不仅塑造思想还培养未来领导者的原则而建立的。我们承诺培养创新和批判性思维，致力于培养新一代的思想家和创新者。我们相信在培养创造力和好奇心的环境中，激发终身学习和探索的旅程。我们的目标是让学生掌握面对未来挑战的必要技能和知识，自信地产生世界的意义影响。 / Our school was established on the principle that education not only shapes minds but also molds future leaders. Embracing a commitment to foster innovation and critical thinking, we aim to nurture a new generation of thinkers and innovators. We believe in cultivating an environment where creativity and curiosity thrive, fueling a lifelong journey of learning and discovery. Our goal is to arm our students with the necessary skills and knowledge to face future challenges confidently and to make a meaningful impact on the world.
                </div>
            </div>
        </div>
    );
}

export default Introduction;
