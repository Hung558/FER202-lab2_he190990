import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { movies as movieData } from '../datas/movies';
import Header from './Header';
import SearchBar from './SearchBar';
import GenreFilter from './GenreFilter';
import MovieList from './MovieList';

const genres = [...new Set(movieData.map((movie) => movie.genre))];

const startMovies = movieData.map((movie) => ({ ...movie, favorite: false }));

function MovieMainScreen() {
    const [movies, setMovies] = useState(startMovies);
    const [search, setSearch] = useState('');
    const [genre, setGenre] = useState('All');
    const [sort, setSort] = useState('none');
    const navigate = useNavigate();

    let shownMovies = movies.filter((movie) => genre === 'All' || movie.genre === genre);

    shownMovies = shownMovies.filter((movie) =>
        movie.title.toLowerCase().includes(search.trim().toLowerCase())
    );

    if (sort === 'desc') {
        shownMovies.sort((a, b) => b.rating - a.rating); // cao -> thấp
    } else if (sort === 'asc') {
        shownMovies.sort((a, b) => a.rating - b.rating); // thấp -> cao
    }

    const favoriteCount = movies.filter((movie) => movie.favorite).length;


    function toggleFavorite(id) {
        const newMovies = movies.map((movie) => {
            if (movie.id === id) {
                return { ...movie, favorite: !movie.favorite };
            }
            return movie;
        });
        setMovies(newMovies);
    }

    function showDetail(movie) {
        navigate(`/movie/details/${movie.id}`);
    }

    return (
        <Container className="py-4" style={{ maxWidth: 720 }}>
            <Row>
                <Col>
                    <Header />

                    <SearchBar search={search} setSearch={setSearch} />

                    <Row className="mb-3 g-2">
                        <Col>
                            <GenreFilter genres={genres} genre={genre} setGenre={setGenre} />
                        </Col>
                        <Col>
                            <Form.Select value={sort} onChange={(event) => setSort(event.target.value)}>
                                <option value="none">Sắp xếp theo rating</option>
                                <option value="desc">Rating: cao → thấp</option>
                                <option value="asc">Rating: thấp → cao</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    <div className="border-top border-bottom py-2 mb-3">
                        Tổng: {movies.length} | Yêu thích: {favoriteCount} | Đang hiển thị: {shownMovies.length}
                    </div>

                    <MovieList
                        movies={shownMovies}
                        onToggleFavorite={toggleFavorite}
                        onShowDetail={showDetail}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default MovieMainScreen;
