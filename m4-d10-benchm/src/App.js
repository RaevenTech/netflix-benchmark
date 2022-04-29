import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumPage from "./components/AlbumPage";
import Home from "./components/Home";
import ArtistPage from "./components/ArtistPage";
import SideBar from "./components/SideBar";

function App() {
    return (
        <Container>
            <Row>
                <Col>
                    <SideBar />
                </Col>
                <Col>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/albumPage" element={<AlbumPage />} />
                            <Route
                                path="/artistPage"
                                element={<ArtistPage />}
                            />
                        </Routes>
                    </BrowserRouter>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
