import React from 'react'
import SimilarMovies from './pages/similar';
export default function SimilarMoviesContainer(props) {
    let similar_movie = props.similar_movies_array.map((similar_item, index) =>
            <SimilarMovies vote={similar_item.vote_average}
                path={similar_item.poster_path}
                title={similar_item.title}
                key={index}
                id={similar_item.id}
            />
        )
        return (
            <React.Fragment>
                <div className="list-container">
                    {similar_movie}
                </div>
            </React.Fragment>
        )
}