import React from 'react'
import './App.css';
import HomePage from './pages/homepage';
import TodoList  from './pages/todo-page';
import {Switch, Route} from 'react-router-dom'


class App extends React.Component {

  componentDidUpdate(prevProps,prevState){
    console.log(prevProps)
    console.log(prevState)
    if(this.props.state.todoList !== prevState.state.todoList )
      alert("Todo Added")
  }
  

  render(){
    return(
  <div className="App">
      
      <Switch>
      
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/todopage' component={TodoList}/>
      </Switch>
     
    </div>
)}
}
  
export default App;
