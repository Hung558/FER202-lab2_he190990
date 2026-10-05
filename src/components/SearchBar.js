import { Form } from 'react-bootstrap';

// search: chữ đang gõ, setSearch: hàm cập nhật chữ (nhận từ App)
function SearchBar({ search, setSearch }) {
    return (
        <Form.Control
            className="mb-3"
            placeholder="Tìm phim theo tên..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
        />
    );
}

export default SearchBar;
