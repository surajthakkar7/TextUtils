import React from 'react';

const About = (props) => {
  const aboutPageStyles = `
    /* Custom CSS for the About Us page */

    /* Container styling */
    .about-container {
      padding: 30px;
      background-color: #f7f7f7;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    /* Heading styling */
    .about-heading {
      font-size: 36px;
      color: #333;
      text-align: center;
      margin-bottom: 20px;
    }

    /* Description styling */
    .about-description {
      font-size: 18px;
      color: #555;
      text-align: center;
      margin-bottom: 30px;
    }

    /* Subheading styling */
    .about-subheading {
      font-size: 24px;
      color: #333;
      margin-bottom: 20px;
    }

    /* Mission paragraph styling */
    .about-mission {
      font-size: 18px;
      color: #555;
    }

    /* Team member container */
    .about-team {
      display: flex;
      justify-content: space-between;
    }

    /* Team member styling */
    .team-member {
      text-align: center;
      margin-bottom: 30px;
    }

    /* Team member name styling */
    .team-member-name {
      font-size: 20px;
      color: #333;
    }

    /* Team member role styling */
    .team-member-role {
      font-size: 16px;
      color: #555;
    }

    /* Media query for smaller screens */
    @media (max-width: 768px) {
      /* Center align team members on smaller screens */
      .about-team {
        flex-direction: column;
        align-items: center;
      }

      /* Adjust team member margin */
      .team-member {
        margin-bottom: 20px;
      }
    }
  `;
  let myStyle = {
    color: props.mode ==='dark' ? 'white' : 'black',
    backgroundColor : props.mode ==='dark' ? 'grey' : 'white',
  }

  return (
    <div className="container about-container" style={myStyle}>
      <h1 className="about-heading" style={myStyle}>About Us</h1>
      <p className="about-description" style={myStyle}>
        Welcome to TextUtils, your go-to tool for text manipulation. We're on a mission to simplify your text-related
        tasks and provide you with a seamless experience.
      </p>
      <div className="row">
        <div className="col-md-6">
          <h2 className="about-subheading" style={myStyle}>Our Mission</h2>
          <p className="about-mission" style={myStyle}>
            Our mission is to empower users by offering a user-friendly, efficient, and versatile text manipulation
            platform. We believe that working with text should be accessible to everyone, and we're committed to making
            it possible.
          </p>
        </div>
        <div className="col-md-6">
          <h2 className="about-subheading" style={myStyle}>Meet the Team</h2>
          <div className="about-team">
            <div className="team-member">
              <h3 className="team-member-name" style={myStyle}>Suraj Thakkar</h3>
              <p className="team-member-role" style={myStyle}>MERN Developer</p>
            </div>
        
          </div>
        </div>
      </div>
      <style>{aboutPageStyles}</style>
    </div>
  );
};

export default About;
