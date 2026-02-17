import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BooksProvider } from './context/BooksContext';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Favorites } from './pages/Favorites';
import { Chats } from './pages/Chats';
import { NewListing } from './pages/NewListing';
import { BookDetails } from './pages/BookDetails';

const App = () => {
    return (
        <BooksProvider>
            <Router>
                <div className="app">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/chats" element={<Chats />} />
                        <Route path="/new" element={<NewListing />} />
                        <Route path="/book/:id" element={<BookDetails />} />
                    </Routes>
                </div>
            </Router>
        </BooksProvider>
    );
};

export default App;

