// import LinkedInIcon from "./assets/linkedin.svg";
// import GitHubIcon from "./assets/github.svg";
import "./Member.scss";

const Member = ({ name, description, image, linkedIn, gitHub }) => {
  return (
    // This one can be a flex parent
    <div className="member">
      {/* Column-like */}
      <div className="member-info">
        {/* Pass image and name to MemberInfo */}
        <p className="member-name">{name}</p>
        <img src={image} alt={name} className="member-photo" />

        <div className="member-social">
          <a href={linkedIn} className="btn" target="_blank" rel="noreferrer">
            {/* <img src={LinkedInIcon} alt="LinkedIn icon" /> */}
            <i className="fab fa-lg fa-linkedin-in"></i>
          </a>
          <a href={gitHub} className="btn" target="_blank" rel="noreferrer">
            {/* <img src={GitHubIcon} alt="GitHub Icon" /> */}
            <i className="fab fa-lg fa-github"></i>
          </a>
        </div>
      </div>

      <p className="member-description">{description}</p>
    </div>
  );
};

Member.defaultProps = {
  description:
    "Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
};

export default Member;
