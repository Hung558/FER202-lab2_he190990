import { Button, Card, Container } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { movies } from '../datas/movies';

// Trang chi tiết phim: lấy id từ đường dẫn /movie/details/:id
function MovieDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = movies.find((m) => m.id === Number(id));

    return (
        <Container className="py-4" style={{ maxWidth: 720 }}>
            <Card>
                <Card.Header as="h5">Movie Details</Card.Header>
                <Card.Body>
                    {movie ? (
                        <>
                            <p><strong>Title:</strong> {movie.title}</p>
                            <p><strong>Genre:</strong> {movie.genre}</p>
                            <p><strong>Year:</strong> {movie.year}</p>
                            <p><strong>Rating:</strong> <StarFill className="text-warning" /> {movie.rating}</p>
                            <p><strong>Director:</strong> {movie.director}</p>
                            <p><strong>Duration:</strong> {movie.duration} minutes</p>
                            <p><strong>Description:</strong> {movie.description}</p>
                        </>
                    ) : (
                        <p className="text-muted">Không tìm thấy phim.</p>
                    )}

                    <Button variant="outline-primary" onClick={() => navigate('/movies')}>
                        Back
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default MovieDetail;
