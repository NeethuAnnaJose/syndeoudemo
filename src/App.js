import React from 'react';
import Header from './components/Header';
import VideoUploadGrid from './components/VideoUploadGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="page-header">
          <h1>Demo</h1>
        </div>
        <VideoUploadGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
