import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBox from './components/SearchBox';
import MovieList from './components/MovieList';
import Banner from './components/Banner';

function App() {
	const [movies, setMovies] = useState([]);
	const [searchText, setSearchText] = useState('Avengers');
	const [nominees, setNominees] = useState([]);

	const searchResult = <h3 class='nominees5 mt-2'>Search Results for "{searchText}"</h3>;

	const getMovieRequest = async (searchText) => {
		const url = `http://www.omdbapi.com/?s=${searchText}&apikey=a114e079`;
		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchText);
	}, [searchText]);

	useEffect(() => {
		const movieNominees = JSON.parse(localStorage.getItem('react-movie-nominees'));
		setNominees(movieNominees);
	}, []); // gets nominees from local storage

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-nominees', JSON.stringify(items))
	};

	const removeNomineeMovie = (movie) => {
		const newNomineeList = nominees.filter((nominee) =>
			nominee.imdbID !== movie.imdbID);
		setNominees(newNomineeList);
		saveToLocalStorage(newNomineeList);
	};

	const removeAllNominees = (movie) => {
		setNominees([]);
		saveToLocalStorage([]);
	};

	const addNomineeMovie = (movie) => {
		const newNomineeList = [...nominees, movie];
		setNominees(newNomineeList);
		saveToLocalStorage(newNomineeList);
	};


	return (
		<div className="App">
			<h2 className="shoppiesTitle">The Shoppies</h2>
			<div class="searchBox">
				<h3>Movie Title</h3>
				<SearchBox searchText={searchText} setSearchText={setSearchText} />
				<Banner nominees={nominees}/>
			</div>
			<div className="sectionTitle d-flex">
				<h2>Movies</h2>
				{searchResult}
			</div>
			<div className="container-fluid movieScroll">
				<div className='row'>
					<MovieList
						movies={movies}
						button="nominate"
						nominees={nominees}
						editNominees={addNomineeMovie}
					/>
				</div>
			</div>

			<div className="sectionTitle d-flex">
				<h2>Nominees</h2>
				{!(nominees.length === 0) ?<button className="clearButton" onClick={removeAllNominees}>Clear All</button> : 
				<div className='nominees5 mt-2'>You have no nominees</div>}
			</div>

			<div className="container-fluid movieScroll">
				<div className='row'>
					<MovieList
						movies={nominees}
						button="remove"
						nominees={[]}
						editNominees={removeNomineeMovie}
					/>
				</div>
			</div>

		</div>
	);
}

export default App;
