import { Button, Card } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';

// movie: phim đang được chọn, onClose: hàm đóng khung chi tiết (nhận từ App)
function MovieDetail({ movie, onClose }) {
    return (
        <Card>
            <Card.Header as="h5">Movie Details</Card.Header>
            <Card.Body>
                <p><strong>Title:</strong> {movie.title}</p>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Year:</strong> {movie.year}</p>
                <p><strong>Rating:</strong> <StarFill className="text-warning" /> {movie.rating}</p>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Duration:</strong> {movie.duration} minutes</p>
                <p><strong>Description:</strong> {movie.description}</p>

                <Button variant="outline-primary" onClick={onClose}>
                    Close
                </Button>
            </Card.Body>
        </Card>
    );
}

export default MovieDetail;
