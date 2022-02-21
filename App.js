import './App.css';
import React, {useState, useEffect} from 'react'
//connect gets the state and such from the store or createStore and passes it into the app.js
import {connect} from 'react-redux'
import {aniList} from './state/actions'
import AnimeCard from './components/AnimeCard'
function App(props) {
  const {data} = props
  console.log(props)
  
  useEffect(() => {
    props.aniList()
  }, [])
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    props.aniList(search)
  }
  return (
    <div className="App">
      <div className="top">
      <h1>AnimeList</h1>
      <div className="search">
      <input placeholder='Search'value={search} onChange={handleChange}/>
      <button onClick={handleSearch}>Search</button>
      </div>
      </div>
      <div className="aniCards">
      {data.results && data.results.map(show => <AnimeCard show={show} key={show.mal_id}/>)}
      </div>
    </div>
  );
}

//This takes the state from the reducer and adds it to the props.
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {aniList})(App);
