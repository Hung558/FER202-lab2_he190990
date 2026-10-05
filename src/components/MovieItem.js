import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';

// Hiển thị 1 phim
function MovieItem({ movie, onToggleFavorite, onShowDetail }) {
    return (
        <ListGroup.Item>
            {/* Dòng thông tin: title, genre, year, rating */}
            <Row>
                <Col xs={5} className="fw-semibold">{movie.title}</Col>
                <Col xs={3}>{movie.genre}</Col>
                <Col xs={2}>{movie.year}</Col>
                <Col xs={2}><StarFill className="text-warning" /> {movie.rating}</Col>
            </Row>

            {/* Dòng nút: nằm giữa, dưới 3 cột genre, year, rating */}
            <Row className="mt-2">
                <Col xs={{ span: 7, offset: 5 }} className="d-flex justify-content-center gap-2">
                    <Button
                        size="sm"
                        className="px-5"
                        variant={movie.favorite ? 'danger' : 'outline-danger'}
                        onClick={() => onToggleFavorite(movie.id)}
                    >
                        {movie.favorite ? 'Đã thích' : 'Yêu thích'}
                    </Button>

                    <Button
                        size="sm"
                        className="px-5"
                        variant="outline-primary"
                        onClick={() => onShowDetail(movie)}
                    >
                        Chi tiết
                    </Button>
                </Col>
            </Row>
        </ListGroup.Item>
    );
}

export default MovieItem;
