import React from 'react'
import { BrowserRouter as Router,Redirect,Route,Switch } from 'react-router-dom'
import Home from '../pages/Home'

export const AppRouter = () => {
    return (
        <>
            <Router>
                <div>
                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/:lang">
                            <Home />
                        </Route>
                        <Redirect to={`${navigator.language.includes('es') ? '/es' : '/en'}`}/>
                    </Switch>
                </div>
            </Router>
        </>
    )
}
