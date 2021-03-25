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
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route exact path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile} />*/}
                    {/*<Route path='/news' component={News} />*/}
                    {/*<Route path='/music' component={Music} />*/}

                    <Route exact path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.posts}/>} />
                    <Route path='/news' render={() => <News/>} />
                    <Route path='/music' render={() => <Music/>} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
