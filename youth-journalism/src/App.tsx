// import React from 'react';
// import { FaSearch, FaBell, FaBook } from 'react-icons/fa';
// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import PasteHandler from './components/doc.tsx';
// import Home from './components/home';
// import Article from './components/article.tsx';

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
//       <div className="w-full px-4">
//         <div className="flex items-center justify-between h-14">
//           {/* Left side: Logo and Search */}
//           <div className="flex items-center gap-6">
//             <h2 className="text-lg font-bold text-gray-900">
//               Youth Journalism
//             </h2>
//             <div className="relative w-64">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full pl-8 pr-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
//               />
//               <div className="absolute inset-y-0 left-2.5 flex items-center pointer-events-none">
//                 <FaSearch className="h-3.5 w-3.5 text-gray-400" />
//               </div>
//             </div>
//           </div>

//           {/* Right side: Actions */}
//           <div className="flex items-center gap-5">
//             <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded-full transition-colors">
//               <FaBook className="h-4 w-4 text-gray-600" />
//               <span className="text-sm text-gray-600 font-medium">Write</span>
//             </button>
//             <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
//               <FaBell className="h-4 w-4 text-gray-600" />
//             </button>
//             <button className="flex items-center">
//               <img
//                 src="/api/placeholder/32/32"
//                 alt="Profile"
//                 className="h-8 w-8 rounded-full object-cover"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <Router>
//       <Navbar />
//       <div style={{ paddingTop: '60px' }}>
//         <Routes>
//           <Route path="/" element={<Home />} /> 
//           <Route path="/docs" element={<PasteHandler />} />
//           <Route path="/article" element={<Article />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import { FaSearch, FaBell, FaBook } from 'react-icons/fa';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import './App.css';
// import PasteHandler from './components/doc.tsx';
// import Home from './components/home';
// import Article from './components/article.tsx';
// import logo from './assets/logoplaceholder.png';

// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
//       <div className="w-full px-4">
//         <div className="flex items-center justify-between h-14">
//           {/* Left side: Logo and Search */}
//           <div className="flex items-center gap-6">
//             <h2 className="text-lg font-bold text-gray-900">
//               Youth Journalism
//             </h2>
//             <div className="relative w-64">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full pl-8 pr-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
//               />
//               <div className="absolute inset-y-0 left-2.5 flex items-center pointer-events-none">
//                 <FaSearch className="h-3.5 w-3.5 text-gray-400" />
//               </div>
//             </div>
//           </div>

//           {/* Right side: Actions */}
//           <div className="flex items-center gap-5">
//             <button 
//               onClick={() => navigate('/docs')}
//               className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded-full transition-colors"
//             >
//               <FaBook className="h-4 w-4 text-gray-600" />
//               <span className="text-sm text-gray-600 font-medium">Write</span>
//             </button>
//             <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
//               <FaBell className="h-4 w-4 text-gray-600" />
//             </button>
//             <button className="flex items-center">
//               <img
//                 src={logo}
//                 alt="Profile"
//                 className="h-8 w-8 rounded-full object-cover"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// // Wrapper component to provide navigation context
// const NavbarWrapper = () => {
//   return <Navbar />;
// };

// function App() {

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={
//           <>
//             <NavbarWrapper />
//             <div style={{ paddingTop: '60px' }}>
//               <Home />
//             </div>
//           </>
//         } />
//         <Route path="/docs" element={
//           <>
//             <NavbarWrapper />
//             <div style={{ paddingTop: '60px' }}>
//               <PasteHandler />
//             </div>
//           </>
//         } />
//         <Route path="/article" element={
//           <>
//             <NavbarWrapper />
//             <div style={{ paddingTop: '60px' }}>
//               <Article />
//             </div>
//           </>
//         } />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { useState } from 'react';
import { FaSearch, FaBell, FaBook } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import PasteHandler from './components/doc.tsx';
import Home from './components/home';
import Article from './components/article.tsx';
import logo from './assets/logoplaceholder.png';

// Mock article data - replace with your actual data source
const MOCK_ARTICLES = [
  {
    id: 1,
    title: "Mass Media and the Need for Nonprofit Journalism",
    excerpt: "In August of 2013, billionaire Jeff Bezos acquired the Washington Post...",
    author: "Videep Cheemangunta"
  },
  // Add more articles as needed
];

interface SearchResultProps {
  article: {
    id: number;
    title: string;
    excerpt: string;
    author: string;
  };
  onSelect: () => void;
}

const SearchResult = ({ article, onSelect }: SearchResultProps) => (
  <div
    onClick={onSelect}
    className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
  >
    <h3 className="text-sm font-medium text-gray-900">{article.title}</h3>
    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{article.excerpt}</p>
    <span className="text-xs text-gray-400 mt-1">{article.author}</span>
  </div>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const filteredArticles = MOCK_ARTICLES.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchFocus = () => {
    if (searchQuery) {
      setShowResults(true);
    }
  };

  const handleArticleSelect = (articleId: number) => {
    setShowResults(false);
    setSearchQuery("");
    navigate(`/article/${articleId}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-14">
          {/* Left side: Logo and Search */}
          <div className="flex items-center gap-6">
            <h2 
              className="text-lg font-bold text-gray-900 cursor-pointer" 
              onClick={() => navigate('/')}
            >
              Youth Journalism
            </h2>
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowResults(e.target.value.length > 0);
                }}
                onFocus={handleSearchFocus}
                className="w-full pl-8 pr-3 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-2.5 flex items-center pointer-events-none">
                <FaSearch className="h-3.5 w-3.5 text-gray-400" />
              </div>
              
              {/* Search Results Dropdown */}
              {showResults && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
                  {filteredArticles.length > 0 ? (
                    filteredArticles.map(article => (
                      <SearchResult
                        key={article.id}
                        article={article}
                        onSelect={() => handleArticleSelect(article.id)}
                      />
                    ))
                  ) : (
                    <div className="p-3 text-sm text-gray-500">
                      No articles found
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right side: Actions */}
          <div className="flex items-center gap-5">
            <button 
              onClick={() => navigate('/docs')}
              className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FaBook className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600 font-medium">Write</span>
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
              <FaBell className="h-4 w-4 text-gray-600" />
            </button>
            <button className="flex items-center">
              <img
                src={logo}
                alt="Profile"
                className="h-8 w-8 rounded-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Wrapper component to provide navigation context
const NavbarWrapper = () => {
  return <Navbar />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <NavbarWrapper />
            <div style={{ paddingTop: '60px' }}>
              <Home />
            </div>
          </>
        } />
        <Route path="/docs" element={
          <>
            <NavbarWrapper />
            <div style={{ paddingTop: '60px' }}>
              <PasteHandler />
            </div>
          </>
        } />
        <Route path="/article/:id" element={
          <>
            <NavbarWrapper />
            <div style={{ paddingTop: '60px' }}>
              <Article />
            </div>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;