import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { movies as movieData } from './datas/movies';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import GenreFilter from './components/GenreFilter';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

// Lấy danh sách thể loại, không trùng lặp (Set tự bỏ phần tử trùng)
const genres = [...new Set(movieData.map((movie) => movie.genre))];

// Thêm trường favorite = false cho mỗi phim
const startMovies = movieData.map((movie) => ({ ...movie, favorite: false }));

function App() {
    // ===== STATE =====
    const [movies, setMovies] = useState(startMovies);
    const [search, setSearch] = useState('');
    const [genre, setGenre] = useState('All');
    const [sort, setSort] = useState('none');
    // Phim đang xem chi tiết (null = chưa chọn phim nào)
    const [selectedMovie, setSelectedMovie] = useState(null);

    // ===== LỌC & SẮP XẾP =====
    // Bước 1: lọc theo thể loại
    let shownMovies = movies.filter((movie) => genre === 'All' || movie.genre === genre);

    // Bước 2: lọc theo tên (không phân biệt hoa thường)
    shownMovies = shownMovies.filter((movie) =>
        movie.title.toLowerCase().includes(search.trim().toLowerCase())
    );

    // Bước 3: sắp xếp theo rating
    // (filter đã tạo mảng mới nên sort ở đây không làm hỏng state movies)
    if (sort === 'desc') {
        shownMovies.sort((a, b) => b.rating - a.rating); // cao -> thấp
    } else if (sort === 'asc') {
        shownMovies.sort((a, b) => a.rating - b.rating); // thấp -> cao
    }

    // ===== ĐẾM =====
    const favoriteCount = movies.filter((movie) => movie.favorite).length;

    // ===== XỬ LÝ SỰ KIỆN =====
    // Bấm "Yêu thích": đảo favorite của phim có id tương ứng
    function toggleFavorite(id) {
        const newMovies = movies.map((movie) => {
            if (movie.id === id) {
                return { ...movie, favorite: !movie.favorite };
            }
            return movie;
        });
        setMovies(newMovies);
    }

    // Bấm "Chi tiết": lưu phim được chọn vào state
    function showDetail(movie) {
        setSelectedMovie(movie);
    }

    // Bấm "Close": bỏ chọn phim -> khung chi tiết biến mất
    function closeDetail() {
        setSelectedMovie(null);
    }

    // Có phim được chọn thì nới rộng khung để đủ chỗ cho 2 cột
    const containerWidth = selectedMovie ? 1140 : 720;

    // ===== GIAO DIỆN =====
    return (
        <Container className="py-4" style={{ maxWidth: containerWidth }}>
            <Row>
                {/* ===== CỘT TRÁI: bảng chính ===== */}
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

                {/* ===== CỘT PHẢI: chỉ hiện khi đã chọn 1 phim ===== */}
                {selectedMovie && (
                    <Col md={4}>
                        <MovieDetail movie={selectedMovie} onClose={closeDetail} />
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default App;
