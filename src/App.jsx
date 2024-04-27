function App() {
  const handleClick = () => {
    alert("Item added to cart");
  };

  return (
    <div className="container">
      <div className="card">
        <img
          src="/desktop-img.jpg"
          alt="Image of  Chanel Perfume "
          className="card-img-desktop"
        />
        <img
          src="/mobile-img.jpg"
          alt="Image of  Chanel Perfume "
          className="card-img-mobile"
        />
        <div className="card-content">
          <p className="card-info">PERFUME</p>
          <p className="card-title">Gabrielle Essence Eau De Parfum</p>
          <p className="card-desc">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="card-price">
            <p className="new-price"> $149.99 </p>
            <p className="original-price">$169.99</p>
          </div>
          <div className="card-btn" onClick={handleClick}>
            <img src="/icon-cart.svg" alt="cart-icon" className="cart-icon" />
            <p className="btn-text">Add to Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
