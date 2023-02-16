import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import PostListPage from './pages/PostListPage';
import ReadPage from './pages/ReadPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/regist" element={<RegisterPage />} />
        <Route path="/wirte" element={<WritePage />} />
        <Route path="/read" element={<ReadPage />} />
        <Route path=":id/postlist" element={<PostListPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
