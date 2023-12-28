import PropTypes from "prop-types";
import "./StockTicker.css";

const StockTicker = ({ stocks }) => {
  return (
    <div className="stock-ticker">
      <div className="ticker-content">
        {stocks.map((stock, index) => (
          <div key={index} className="stock-item">
            <span className="stock-name">{stock.name}</span>
            <span
              className={`stock-price ${
                stock.change > 0 ? "increase" : "decrease"
              }`}
            >
              {stock.price} ({stock.change > 0 ? "+" : ""}
              {stock.change})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

StockTicker.propTypes = {
  stocks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      change: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default StockTicker;
