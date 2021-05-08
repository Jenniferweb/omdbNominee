import React from 'react';

const MovieList = (props) => {

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container'>
					<img class="movieImage" src={movie.Poster} alt='movie'></img>
					<div className='after'>
						<h1 className="movieTitle">{movie.Title} ({movie.Year})</h1>
						{!(props.nominees.length >= 5) ? !(props.nominees === undefined) ? !(props.nominees.some(item => item.imdbID === movie.imdbID)) ?
							<button
								onClick={() => (
									props.editNominees(movie))}
								class="nominateButton">{props.button}</button> :
							<button class="nominateButton">Added</button> : null : null}
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;