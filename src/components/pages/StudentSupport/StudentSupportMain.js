import React from 'react';

// 一個簡單的 Student Support 組件
const StudentSupport = () => {
  return (
    <section>
      <h1>Student Support Page</h1>
      <p>Welcome to the Student Support section! We are here to help you succeed in your academic journey.</p>

      <div>
        <h2>Available Services</h2>
        <ul>
          <li>Counseling Services: Mental health and well-being support</li>
          <li>Academic Advising: Guidance on course selection and career planning</li>
          <li>Tutoring Programs: Help with specific subjects and skills</li>
          <li>Financial Aid: Assistance with scholarships, grants, and loans</li>
        </ul>
      </div>

      <div>
        <h2>Contact Information</h2>
        <ul>
          <li>Email: support@school.edu</li>
          <li>Phone: (123) 456-7890</li>
          <li>Office Hours: Monday - Friday, 9 AM - 5 PM</li>
        </ul>
      </div>
    </section>
  );
};

export default StudentSupport;
