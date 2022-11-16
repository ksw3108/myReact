import Categories from './components/Categories';
import NewsList from './components/NewsList';
import { useState, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import NotFound from '../NotFound';
//import NewsPage from './Pages/NewsPage';
const NewsPage = loadable(() => import('./Pages/NewsPage')); //컴포넌트의 동적 임포팅

const News = () => {
  return (
    <Routes>
      <Route path="newsmain" element={<NewsPage />} />
      <Route path=":category" element={<NewsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default News;
