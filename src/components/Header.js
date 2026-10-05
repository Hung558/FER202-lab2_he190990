import { Button } from 'react-bootstrap';
import { MoonFill, SunFill } from 'react-bootstrap-icons';
import { useTheme } from '../context/ThemeContext';

function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
            <h2 className="m-0">Mini Movie Manager</h2>

            <Button variant="outline-secondary" onClick={toggleTheme}>
                {theme === 'light' ? <><MoonFill /> Dark</> : <><SunFill /> Light</>}
            </Button>
        </div>
    );
}

export default Header;
