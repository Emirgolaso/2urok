import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Users, Posts, Main, Header, UserDetail } from './pages';
import './App.css'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<Main />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/users/:id" element={<UserDetail />} />

                </Route>
            </Routes>
        </Router>
    );
}

export default App;
