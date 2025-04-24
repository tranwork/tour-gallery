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
      const res = await fetch('https://course-api.com/react-tours-project');
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
      <h1>Tour Gallery</h1>
      <Gallery tours={tours} onRemove={(id) =>
        setTours((prev) => prev.filter((tour) => tour.id !== id))
      } />
    </main>
  );
}  

export default App;