import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Information from "./components/Information";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const history = useHistory();
  const commands = [
    {
      command: ["Go to *", "Open *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];
  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState("");

  const pages = ["home", "contact", "about", "information"];
  const urls = {
    home: "/",
    contact: "/contact",
    about: "/about",
    information: "/information",
  };
  if (!SpeechRecognition.browserSupportsSpeechRecognition) {
    return null;
  }

  let redirect = "";
  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Redirect to={urls[redirectUrl]} />;
    } else {
      <p>Couldnot find the page: {redirectUrl}</p>;
    }
  }
  return (
    <div className="backdrop">
      <Router>
        <Header name={"Info Tech"} />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/information" component={Information} />
        {redirect}
      </Router>
      {/* <h4 id="transcript">Transcript:{transcript}</h4> */}
      <button
        type="button"
        class="btn btn-primary btn-lg"
        onClick={SpeechRecognition.startListening} 
      >
        <i class="bi-mic-fill"></i>
        Click & Say something
      </button>
    </div>
  );
}

export default App;
