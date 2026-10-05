import { ListGroup } from 'react-bootstrap';
import MovieItem from './MovieItem';

function MovieList({ movies, onToggleFavorite, onShowDetail }) {
    // Không có phim nào thì báo cho người dùng
    if (movies.length === 0) {
        return <p className="text-muted">Không tìm thấy phim nào.</p>;
    }

    return (
        <ListGroup>
            {movies.map((movie) => (
                <MovieItem
                    key={movie.id}
                    movie={movie}
                    onToggleFavorite={onToggleFavorite}
                    onShowDetail={onShowDetail}
                />
            ))}
        </ListGroup>
    );
}

export default MovieList;
