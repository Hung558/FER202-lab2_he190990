import { Form } from 'react-bootstrap';

// genres: danh sách thể loại, genre: thể loại đang chọn
function GenreFilter({ genres, genre, setGenre }) {
    return (
        <Form.Select value={genre} onChange={(event) => setGenre(event.target.value)}>
            <option value="All">Tất cả thể loại</option>
            {genres.map((item) => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
        </Form.Select>
    );
}

export default GenreFilter;
