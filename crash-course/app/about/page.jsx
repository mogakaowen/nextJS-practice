import Link from "next/link";

export const metadata = {
  title: "About Us",
};

const AboutPage = () => {
  return (
    <div className="about">
      <h2>Welcome to Mogaka Media School</h2>
      <p>
        Mogaka Media School is a premier online education platform committed to
        empowering individuals with the skills and knowledge needed in the
        dynamic field of software development.
      </p>
      <h4>Our Mission</h4>
      <p>
        At Mogaka Media School, our mission is to make quality education
        accessible to everyone, providing comprehensive courses in the latest
        software development technologies.
      </p>
      <h4>Why Choose Mogaka Media School?</h4>
      <ul className="features-list">
        <li>
          Expert Instructors: Learn from industry professionals and experts.
        </li>
        <li>
          Hands-On Learning: Gain practical experience through real-world
          projects.
        </li>
        <li>
          Comprehensive Curriculum: Stay updated with the latest technologies
          and trends.
        </li>
        <li>
          Flexible Learning: Access courses anytime, anywhere, at your own pace.
        </li>
      </ul>
      <h4>Our Courses</h4>
      <p>
        Explore our diverse range of courses covering programming languages, web
        development, mobile app development, and more.
      </p>
      <h4>Get in Touch</h4>
      <p>
        Ready to start your learning journey? Contact us at{" "}
        <a href="mailto:owenmogaka@gmail.com">owenmogaka@gmail.com</a>
      </p>
      <Link href="/">Go Back</Link>
    </div>
  );
};

export default AboutPage;
