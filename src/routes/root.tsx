import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage/HomePage";
import FriendPage from "../pages/FriendPage/FriendPage";
import PrivateProfilePage from "../pages/PrivateProfilePage/PrivateProfilePage";
import PublicProfilePage from '../pages/PublicProfilePage/PublicProfilePage';
import SubmissionPage from '../pages/SubmissionPage/SubmissionPage';

const Root = () => {
    return (
        <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<PrivateProfilePage />} />
        <Route path="/user/:userId" element={<PublicProfilePage />} />
        <Route path="/friends" element={<FriendPage />} />
        <Route path="/submit" element={<SubmissionPage />} />
      </Routes>
      </Router>
    )
}

export default Root;