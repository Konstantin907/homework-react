
import './App.css';
import Listings from "../src/components/Listings"

function App() {
  return (
    
    <div className='card-container'>
      <Listings 
        src={"https://a0.muscache.com/im/pictures/397ed026-16a9-4418-af19-1d2b31fe0aa8.jpg?im_w=720"}
        title={"Korčula, Croatia"}
        price={"From $2230"}
        num={30}
        country={'Croatia'}
        rating={4.8}
      />

      <Listings 
        src={"https://a0.muscache.com/im/pictures/357e08a4-bc0a-43e8-9a3c-72098beeac52.jpg?im_w=720"}
        title={"Sorrento, Italy"}
        price={"From $3200"}
        num={3}
        country={'Italy'}
        rating={5.0}
      />
      <Listings 
        src={"https://a0.muscache.com/im/pictures/4b005f9f-f50b-4a35-9b42-f5f305185c3c.jpg?im_w=720"}
        title={"Positano, Italy"}
        price={"From $418"}
        num={32}
        country={'Italy'}
        rating={5.0}
      />
  </div>
  );
}

export default App;
