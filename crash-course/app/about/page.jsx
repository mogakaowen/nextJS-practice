import Link from "next/link";

export const metadata = {
  title: "About Mogaka Media",
};

const AboutPage = () => {
  return (
    <div className="about">
      <p>
        Mogaka Media is a creative digital agency dedicated to providing
        innovative solutions for our clients.
      </p>

      <h4>Our Story</h4>
      <p>
        Founded in [year], Mogaka Media has been on a journey to [describe your
        journey and mission].
      </p>

      <h4>Our Services</h4>
      <p>At Mogaka Media, we specialize in [list your services or products].</p>
      <h4>Contact Us</h4>
      <p>
        Have questions or want to collaborate? Reach out to us at{" "}
        <a href="owenmogaka@gmail.com">owenmogaka@gmail.com</a>.
      </p>
      <Link href="/">Go Back</Link>
    </div>
  );
};

export default AboutPage;
