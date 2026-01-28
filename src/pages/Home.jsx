import "./Home.css";
import homeimg from "../assets/homeimg.png";

const Home = () => {
  return (
    <section className="home">
      <div className="hero">

        {/* LEFT TEXT */}
        <div className="hero-text">
          <h1>Healthy Diet<br />Everyday</h1>
          <p>
            Order today and receive your
            package tomorrow
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img src={homeimg} alt="Food Illustration" />
        </div>

      </div>
    </section>
  );
};

export default Home;
