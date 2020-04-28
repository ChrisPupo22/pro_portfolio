import React from 'react'
import LandingPage from './landing_page'
import { Switch, Route } from 'react-router-dom'
import About from './about_page'
import Projects from './projects_page'
import Resume from './resume'
import Contact from './Contact'


const Main = () => (

    <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/about' component={About}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/resume' component={Resume}/>
    </Switch>
)

export default Main; 