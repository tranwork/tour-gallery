import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';

// Fetch tours from https://course-api.com/react-tours-project using useEffect
// Store in state: tours, loading, error

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch('api/react-tours-project');
      const data = await res.json();
      setTours(data);
      setError(false);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <main>
        <div className="boba-icon">🧋</div>
      <h1>Tour Gallery</h1>

      {/* If loading is true, display "Loading..." */}
      {loading && <p>Loading...</p>}

      {/* If error, display an error message */}
      {error && <p style={{ color: 'red' }}>Failed to load tours. Please try again later.</p>}

      {/* Else, render Gallery with tour data or Refresh button if no tours */}
      {!loading && !error && (
        <>
          {tours.length === 0 ? (
            <button onClick={fetchTours} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
              Refresh
            </button>
          ) : (
            <Gallery
              tours={tours}
              onRemove={(id) => setTours((prev) => prev.filter((tour) => tour.id !== id))}
            />
          )}
        </>
      )}
    </main>
  );
}

export default App;