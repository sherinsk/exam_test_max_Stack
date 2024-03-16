import Navbar from './components/Navbar';
import Hero from './components/hero';
import Card from './components/card';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Page1() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar/>
      <div className="absolute grid md:grid-cols-3 grid-rows-3 gap-4 mt-20">
        {products.map((product) => (
          <Link key={product.id} to={`/${product.id}`}>
            <Card key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Page1;
