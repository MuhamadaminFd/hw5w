import { useState } from 'react';
import axios from 'axios';
import './style.css'

const Comp = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(response.data);
    } catch (err) {
      setError('Error fetching data!');
      console.error('Error fetching!', err);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className='container'>
      <button onClick={fetchData}>GET</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.email}{item.username}{item.phone}{item.zipcode}</li>
          ))}
        </ul>
      ) : (
        !loading && !error && <p>Click the button to fetch data.</p>
      )}
    </div>
  );
};

export default Comp;
