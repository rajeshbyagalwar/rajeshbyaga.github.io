import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://avatars.githubusercontent.com/u/83168515?v=4"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        HEY,I'M Rajesh Byagalwar
        </p>
        <p className="a-desc">
          A Full stack web Developer building the most interactive Websites and Web Application that leads to the success of the overall product
        </p>
        
      </div>
    </div>
  );
};

export default About;