import "./about.css";

const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://media.licdn.com/dms/image/D5603AQFmIdM5L3ZPfw/profile-displayphoto-shrink_400_400/0/1669822563884?e=1677110400&v=beta&t=UKekWyXiGBgzV2bwDXMHb_kLDvKnA_wL1Vr85kUn7G8"
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