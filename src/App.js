import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MovieMainScreen from './components/MovieMainScreen';
import MovieDetail from './components/MovieDetail';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/movies" element={<MovieMainScreen />} />
                <Route path="/movie/details/:id" element={<MovieDetail />} />
                <Route path="*" element={<Navigate to="/movies" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
