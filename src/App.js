import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      setMonsters(response.data)
          })
  }, [])
  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField))
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters,searchField])
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }
  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
    <SearchBox onChangeHandler={ onSearchChange } placeholder="search monsters" className="monsters-search-box" />
    <CardList monsters={ filteredMonsters} />
  </div>
  )
}

export default App;
