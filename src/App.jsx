import Logo from "./assets/react.svg";
import Header from "./Header.jsx";
import Description from "./Description.jsx";
import Project from "./microProject2.jsx";
import Code from "./Code.jsx";
import Footer from "./Footer.jsx";

let projectTitle = "isLoggedin?";
const projectDescription =
  "You can toggle login button to toggle boolean value of isLoggedin and based on the value the navbar will be conditionally rendered.";
const projectCode = `import { useState } from "react";

function Project(props) {
  let [loginStatus, setLoginStatus] = useState(false);
  const toggleStatus = () => {
    loginStatus ? setLoginStatus(false) : setLoginStatus(true);
  };

  return (
    <div className="flex flex-col items-center space-y-3 font-mono font-bold">
      <div className="flex space-x-7 rounded-full border border-black p-3">
        <div>
          <img className="h-10 w-10" src={props.projectLogo}></img>
        </div>
        <div className="flex items-center justify-around space-x-3">
          <a href="/" className="rounded-full p-1 hover:bg-yellow-100">
            Home
          </a>
          <a href="/" className="rounded-full p-1 hover:bg-yellow-100">
            About
          </a>
          <a href="/" className="rounded-full p-1 hover:bg-yellow-100">
            Contact
          </a>
        </div>
        <div>
          <button
            onClick={toggleStatus}
            className={
              loginStatus
                ? "rounded-xl border border-red-300 bg-red-400 p-2 hover:bg-red-200"
                : "rounded-xl border border-yellow-300 bg-yellow-400 p-2 hover:bg-yellow-200"
            }
          >
            {loginStatus ? "Logout" : "Login"}
          </button>
        </div>
      </div>

      <div
        className={
          loginStatus
            ? "rounded-full border border-green-300 bg-green-400 p-3"
            : "rounded-full border border-red-300 bg-red-400 p-3"
        }
      >
        Current Status : {loginStatus ? "Logged-in" : "Not-Logged-in"}
      </div>
    </div>
  );
}
export default Project;
`;
function App() {
  return (
    <>
      <Header projectLogo={Logo} projectTitle={projectTitle} />
      <Description
        projectTitle={projectTitle}
        projectLogo={Logo}
        projectDescription={projectDescription}
      />
      <div className="my-12">
        <Project projectLogo={Logo} />
      </div>
      <Code projectCode={projectCode} />
      <Footer />
    </>
  );
}

export default App;
