import { Container } from "react-bootstrap";
import "./App.css";
import { Routes, Route } from "react-router-dom";
//import AlbumPage from "./components/AlbumPageComponents/AlbumPage";
import Home from "./components/HomeComponents/Home";
//import ArtistPage from "./components/AlbumPageComponents/ArtistPage";
//import SideBar from "./components/SideBar";

function App() {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<Home />} />
                {/*<Route path="/albumPage" element={<AlbumPage />} />*/}
                {/*<Route path="/artistPage" element={<ArtistPage />} />*/}
                <Route
                    path="*"
                    element={
                        <div class="alert alert-danger" role="alert">
                            404 Path not found!
                        </div>
                    }
                />
            </Routes>
        </Container>
    );
}

export default App;
