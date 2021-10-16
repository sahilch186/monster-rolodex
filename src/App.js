import {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {Searchbox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchFeild: "",
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(monsters => this.setState({monsters}))
  }

  handleChange = (e) =>{
    this.setState({searchFeild: e.target.value})
  }

  render() {
    const {monsters, searchFeild} = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchFeild.toLocaleLowerCase());
    })
    return(
      <div className="App">
        <Searchbox placeholder="Search Monster by Name" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
    </div>
    )
  }

}

export default App;
