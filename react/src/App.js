import './App.css';

import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavbarContainer />
                <div className='app-wrapper-content'>
                    <Route exact path='/dialogs'
                           render={() => <DialogsContainer />}/>
                    <Route path='/profile'
                           render={() => <ProfileContainer />} />
                    <Route path='/users' render={() => <UsersContainer/> } />
                    <Route path='/news' render={() => <News/>} />
                    <Route path='/music' render={() => <Music/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
