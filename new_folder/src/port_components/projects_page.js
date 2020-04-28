import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import firstProject from '../images/liveinthebestplac.png'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'


class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0};
  }
  
  tabToggler() {
    if(this.state.activeTab === 0){
      return(
      <div className='projects-grid'>
      {/* First project card */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color:'white', height:'176px', background:'url(https://reactjs.org/logo-og.png) center/cover'}}>Live In The Best Place</CardTitle>
          <CardText>
          Whether you want to look up a specific location you have in mind, or just want to scroll across a map and see how certain cities rank compared to others, Live In the Best Place is here to help.
          </CardText>
          <CardActions border>
            <Button onClick={() => window.open('https://github.com/Lambda-School-Labs/best-places-to-live-fe', "_blank")}  colored>Github</Button>
            <Button  onClick={() => window.open('https://liveinthebestplace.netlify.app/', "_blank")} colored>Check it out here!</Button>
          </CardActions>
          <CardMenu style={{color:'fff'}}></CardMenu>
        </Card>

        {/* Second Project Card */}
        {/* <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color:'white', height:'176px', background:'url(https://reactjs.org/logo-og.png) center/cover' }}>Foodie Fun</CardTitle>
        <CardText>
          
        </CardText>
        <CardActions border>
          <Button colored>Github</Button>
          
        </CardActions>
        <CardMenu style={{color:'fff'}}></CardMenu> */}
        {/* </Card> */}
        {/* Third project card */}

        {/* <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color:'white', height:'176px', background:'url(https://reactjs.org/logo-og.png) center/cover' }}>React Project #1</CardTitle>
        <CardText>
          Project #3 description
        </CardText>
        <CardActions border>
          <Button colored>Github</Button>
          <Button colored>Check it out here!</Button>
        </CardActions>
        <CardMenu style={{color:'fff'}}></CardMenu>
        </Card> */}
      </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color:'white', height:'176px', background:'url(https://lilly021.com/wp-content/uploads/2019/07/springBoot_featured_image-1024x549.png) center/cover' }}>Foodie Fun</CardTitle>
        <CardText>
        This application helps users save all of their favorite restaurants and rate their experiences while also allowing them to leave a detailed review!
        </CardText>
        <CardActions border>
          <Button onClick={() => window.open('https://github.com/Build-Week-Oct-2019-Foodie-Fun/Front-end', "_blank")} colored>Github</Button>
          
        </CardActions>
        <CardMenu style={{color:'fff'}}></CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color:'white', height:'176px', background:'url(https://lh6.googleusercontent.com/rU8dZ0x67y63AeujFhM79UG_I3ZagEqTmDffagrUVuBI5eXPHtW2Z7zP1KU1MLKtl0wU5eNS_QHU-9v3GUJgxlKYeAR1yKADY8xCj7xMrpL8z9Rr2Zde9_OGsmXTigvBr7DEWggV) center/cover' }}>Adventure</CardTitle>
    <CardText>
    A fun and intuitive online multiplayer maze game with over 500 active rooms, built in a neural network style map, each with their own attributes. The game also includes a fully functioning character/player model that the user is in full control of!
    </CardText>
    <CardActions border>
      <Button onClick={() => window.open('https://github.com/binary-assasins', "_blank")} colored>Github</Button>
      <Button onClick={() => window.open('https://fun-game-ba.herokuapp.com/', "_blank")} colored>Check it out here!</Button>
    </CardActions>
    <CardMenu style={{color:'fff'}}></CardMenu>
    </Card>
    </div>
        
      )
    }
  }

  render() {
      return(
        <div id="cardsTabs">
          <Tabs id="mainTabs" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>React</Tab>
            <Tab>Java/Spring</Tab>
            <Tab>Python/Django</Tab>
          </Tabs>

            <Grid>
              <Cell col={12}>
                <div className= 'content'>{this.tabToggler()}</div>
              </Cell>
            </Grid>
        </div>
      )
  }
}

export default Project; 
  