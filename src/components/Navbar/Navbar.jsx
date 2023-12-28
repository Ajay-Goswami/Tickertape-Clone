import "./Navbar.css"; // Import your CSS file
import StockTicker from "../StockTicker/StockTicker";

const Navbar = () => {
  const stocks = [
    { name: "Stock A", price: "$100", change: "+5" },
    { name: "Stock B", price: "$80", change: "-3" },
    { name: "Stock C", price: "$120", change: "+8" },
    { name: "Stock D", price: "$80", change: "-3" },
    { name: "Stock E", price: "$120", change: "+8" },
    { name: "Stock F", price: "$80", change: "-4" },
    { name: "Stock G", price: "$120", change: "+5" },
    { name: "Stock H", price: "$80", change: "-9" },
    { name: "Stock I", price: "$120", change: "+7" },
    { name: "Stock J", price: "$120", change: "+7" },
    { name: "Stock K", price: "$120", change: "+7" },
    { name: "Stock L", price: "$120", change: "+7" },
    // Add more stock data as needed
  ];
  return (
    <div className="navbar-wrapper">
      <StockTicker stocks={stocks} />
      <nav className="navbar">
        <div className="navbar-logo">
          {/* Logo with Dropdown */}
          <div className="logo">
            Your Logo
            {/* Dropdown */}
            <div className="dropdown">
              {/* Dropdown Content */}
              {/* Links: Stock, ETF, Gold, Stock Screener, etc. */}
            </div>
          </div>
        </div>

        <div className="navbar-search">
          {/* Search Bar */}
          <input type="text" placeholder="Search" />
        </div>

        <div className="navbar-right">
          {/* Social Buttons */}
          <div className="social-buttons">
            {/* Your Social Buttons */}
            <button>Social</button>
          </div>

          {/* Login Button with Dropdown */}
          <div className="login-dropdown">
            {/* Login Button */}
            <button>Login</button>
            {/* Dropdown */}
            <div className="dropdown">{/* Links: Home, About, etc. */}</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
