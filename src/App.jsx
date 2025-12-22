import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const TicketsPage = lazy(() => import('./pages/TicketsPage'));
const FormPage = lazy(() => import('./pages/FormPage'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<TicketsPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
