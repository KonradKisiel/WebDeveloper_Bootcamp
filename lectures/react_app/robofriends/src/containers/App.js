import './App.css';
import React, {Component} from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component{
    constructor(){
        super(); {/* calls the constructor of the element */}
        {/* in state we defines what changes in our app, what describes the app*/}
        {/*smart component - component with state */}
        this.state = {
            /*app has two states */
            robots: [],
            searchfield: ''
        }
    }
    /*everytime we search smg we got an event */


    componentDidMount(){
        {/* fetch is a window method to make request to a servers */}
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) =>{
        {/* setState is a React method */}
        {/* setting new state of the searchfield*/}
        this.setState({searchfield: event.target.value})
    }

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
         return !robots.length ? <h1 className="tc">Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                {/* passing search */}
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll >
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );    
    }
}

export default App;