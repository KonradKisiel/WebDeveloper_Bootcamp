import React, {Component} from 'react'
import CardList from './CardList';
import SearchBox from './SearchBox';
//if we use xeport instead export default we have to use {}
import { robots } from './robots';

class App extends Component{
    constructor(){
        super(); {/* calls the constructor of the element */}
        {/* in state we defines what changes in our app, what describes the app*/}
        this.state = {
            /*app has two states */
            robots: robots,
            searchfield: ''
        }
    }
    /*everytime we search smg we got an event */
onSearchChange = (event) =>{
        {/* setState is a React method */}
        {/* setting new state of the searchfield*/}
        this.setState({searchfield: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                {/* passing search */}
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;
