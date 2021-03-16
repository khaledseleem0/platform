import Left from './../left/left';
import Feed from './../feed/feed';
import Notification from './../notification/notification';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import React from 'react';
import Chat from './../chat/chat'
import Requests from './../requests/requests';
import {width,maximam} from './../getter';
import Nav from './../navbar/nav';
export default function Index  (props){
 
    return (
       <>
     <BrowserRouter>
          {width < maximam ? <Nav/> : ""}
          {width >= maximam ? <Left/> : ""}
          <Switch>
          <Route path={"/notification"} component={Notification} exact></Route>
          <Route path={"/requests"} component={Requests} exact></Route>
          {width < maximam? <Route path={"/messages"} component={Left} exact></Route> : ""}
          {width ? <Route path={"/platform"} component={Feed} exact></Route>:""}
          {width > maximam? <Route path={"/messages"+"/:chat"} component={Chat} exact></Route> : <Route path={"/messages"+"/:chat"} component={Chat} ></Route>}
          </Switch>
           </BrowserRouter>
            </>
        )
   

}

