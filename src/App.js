import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {

  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header />
      <Navbar />
      <div className="wrapper-content">
        <Route path='/profile' render={ () => <Profile posts={props.posts} />} />
        <Route path='/dialogs' render={ () => <Dialogs users={props.users} messages={props.messages}/>}  />
        <Route path='/music' component={Music} />
        <Route path='/news' component={News} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
