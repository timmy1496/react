import './App.css';

import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sideBar}/>
                <div className='app-wrapper-content'>
                    <Route exact path='/dialogs'
                           render={() => <Dialogs
                               state={props.state.dialogsPage}
                               dispatch={ props.dispatch } />}/>
                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch} />} />
                    <Route path='/news' render={() => <News/>} />
                    <Route path='/music' render={() => <Music/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
