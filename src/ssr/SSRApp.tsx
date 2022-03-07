import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// Routes
import Hub from "../components/routes/Hub";

// Style
import '../App.css';
import '../App.global.css';

export default function SSRApp() {
    return (
        <div>
          <Routes>
            <Route path="/" element={<Hub />}>
              <Route path="tests" element={<span>Tests</span>} >
                <Route index path="intelligence" element={<span>Intelligence</span>} />
                <Route path="personality" element={<span>Personality</span>} />
              </Route>
              <Route path="blog" element={<span>Blog</span>} />
            </Route>
            <Route path="/test/:testId" element={<span>Test Landing Page</span>} />
            <Route path="/test/:testId?start" element={<span>Testing Page</span>} />
            <Route path="/blog/:blogId" element={<span>Specific Blog</span>} />
            <Route path="/login" />
            <Route path="*" element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
            } />
          </Routes>
        </div>
    );
}
