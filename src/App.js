
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import FindDoctorsPage from './components/FindDoctorsPage';
 import Home from "./Home";

function App() {
    return (
        <div className="App">
            <Header />
            {/*<Home/>*/}
            <Routes> {/* Define your routes */}
                {/*<Route path="Home" element={<Home />} />*/}
                <Route path="/FindDoctorsPage" element={<FindDoctorsPage />} />
            </Routes>
            <Home/>

        </div>
    );
}

export default App;



