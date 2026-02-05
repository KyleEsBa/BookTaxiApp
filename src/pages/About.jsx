import '../styles/About.css';

export default function About() {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Ube</h1>
        <p>Revolutionizing Urban Transportation</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Ube, our mission is to provide safe, reliable, and affordable taxi services
            to our community. We believe that quality transportation should be accessible to everyone,
            and we're committed to delivering excellence in every ride.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            We envision a future where booking a taxi is seamless, transparent, and trustworthy.
            Through cutting-edge technology and a dedicated team of professionals, we aim to become
            the leading taxi service provider in the region.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, Ube started as a small venture with a big dream: to transform
            the way people book and experience taxi services. What began with just 10 drivers has grown
            into a network of over 500 professional drivers serving thousands of satisfied customers.
          </p>
          <p>
            Our success is built on three pillars: customer satisfaction, driver welfare, and
            technological innovation. We continuously invest in our platform to ensure the best
            experience for both our passengers and drivers.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li><strong>Safety First:</strong> Your safety and security are our highest priorities</li>
            <li><strong>Transparency:</strong> Clear pricing and honest communication</li>
            <li><strong>Reliability:</strong> On-time pickups and professional service</li>
            <li><strong>Sustainability:</strong> Eco-friendly practices and modern vehicle fleet</li>
            <li><strong>Community:</strong> Supporting local employment and community development</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
