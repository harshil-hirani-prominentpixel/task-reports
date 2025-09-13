import Product from './components/client/Product';
import data from './data/data';

import './App.css'

function App() {
  return (
    <>
    {data.map((product)=>{
      return <Product Product={product} key={product.id} />;
    })}
      
    </>
  )
}

export default App
