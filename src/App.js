import './App.css';
// import './card.js'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <header className="container-header">
          <p>Back to Application</p>
          <p>Logo</p>
        </header>
        <div className='Card'>
          <div className='image'>
            <img src='https://cdn.pixabay.com/photo/2024/02/05/17/56/ai-generated-8555001_1280.png' alt='not found'></img>
          </div>
          <div className='details'>
            <h2>CLASSIC PEACE LILY</h2>
            <p className='p2'>popular house plant</p>
            <h2>$18</h2>
            <p className='paradetails'>The Classic Peace Lily is a gorgeous table top size spathiphyllum plant accented with an attractive bow in an elegant ceramic container.</p>
            <div className='mainbutton'>
              <button className='B1'>ADD TO CART</button>
              <button className='B2'>WISHLIST</button>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default App;
