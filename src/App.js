import React, {Component} from 'react';
import './App.css'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";


import AllComments from "./Components/All-Comments/AllComments";
import AllUser from './Components/All-Users/AllUser'
import AllPosts from "./Components/All-Posts/AllPosts";


class App extends Component {
    render() {
        return (
            <Router>
                <div>

                    <div>
                        <Link to={'/users'}>Users</Link>
                    </div>
                    <div>
                        <Link to={'/posts'}>Posts</Link>
                    </div>
                    <div>
                        <Link to={'/comments'}>Comments</Link>
                    </div>

                    <div className={'app-route'}>
                        <Switch>
                            <Route path={'/users'}>
                                <AllUser/>
                            </Route>
                            <Route path={'/posts'}>
                                <AllPosts/>
                            </Route>
                            <Route path={'/comments'}>
                                <AllComments/>
                            </Route>
                        </Switch>
                    </div>
                    
                </div>
            </Router>
        );
    }
}

export default App;