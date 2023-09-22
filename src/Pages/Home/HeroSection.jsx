export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Abdullahi Yusuf</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">FrontEnd</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          I am a committed FrontEnd Developer with 2years of experience in the tech industry. I am passionate and responsible for the design and implementation of user interfaces (UIs) and UI components using React, a front-end JavaScript library.
          </p>
        </div>
       <a href="https://wa.link/dn512o"> <button className="btn btn-primary">Get In Touch</button></a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
