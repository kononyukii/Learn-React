import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrap">
        <Header />
        <Navbar />
        <div className="content">
          <Route
            path="/profile"
            render={() => <Profile posts={props.posts} />}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs messages={props.messages} users={props.users} />
            )}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
        <div>
          <p>test</p>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
