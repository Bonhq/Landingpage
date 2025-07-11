// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import LandingPage from './pages/landingpage'

// function App() {

//   return (
//       <div className='font-grotesk'>
//         <LandingPage />
//         </div>
//   )
// }

// export default App

import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import BlogHome from './BlogContainer/view/Blog';
import BlogPost from './BlogContainer/view/Blog/components/BlogPost';
import { getBlogs } from './BlogContainer/actions/blog';
import TermsPage from './BlogContainer/view/Terms';
import PrivarcyPage from './BlogContainer/view/Privarcy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const blogData = useSelector(({ blogData }) => blogData, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    if(window.location.pathname.includes("blog") && blogData?.blogs?.length == 0) dispatch(getBlogs());
  }, []);

  return (
    <div className='font-grotesk'>
    <BrowserRouter basename={"/"}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog">
          <Route index element={<BlogHome blogData={blogData} />} />
          <Route path=":postId" element={<BlogPost blogData={blogData} />} />
        </Route>
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        <Route path="/privacy-policy" element={<PrivarcyPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

