import React from "react";

export const metadata = {
  title: "Meet The Team",
};

const TeamPage = () => {
  return (
    <div className="about">
      <h1>Our Team</h1>

      <div className="team-member">
        <div className="member-info">
          <h4>Mogaka Owen</h4>
          <p>Founder and Creative Director</p>
          <p>
            Mogaka Owen is the visionary behind our mission. With a passion for
            technology and creativity, he leads the team to new heights.
          </p>
        </div>
      </div>

      <div className="team-member">
        <div className="member-info">
          <h4>Jane Doe</h4>
          <p>Lead Developer</p>
          <p>
            Jane is a seasoned developer with expertise in full-stack
            development. She brings innovation and efficiency to every project.
          </p>
        </div>
      </div>

      <div className="team-member">
        <div className="member-info">
          <h4>John Doe</h4>
          <p>UX/UI Designer</p>
          <p>
            John is a creative mind focused on designing seamless and
            user-friendly experiences. His attention to detail is unparalleled.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
