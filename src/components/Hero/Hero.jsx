import "./Hero.css";

const HeroComponent = () => {
  return (
    <div className="hero-container">
      <section className="hero-content">
        <a
          href="https://play.google.com/store/apps/details?id=in.tickertape&amp;hl=en_IN&amp;gl=US&amp;pli=1"
          target="_blank"
          rel="noopener noreferrer"
          className="rating-container"
        >
          <p className="typography-body-medium-xl">🌟 50L+ downloads</p>
          <div className="rating">
            {/* <img
              src="https://assets.tickertape.in/images/landing-page/heroPhoneBg_Compressed.webp"
              alt="img"
            /> */}
            <p className="rating-desc typography-body-medium-xl">
              4.5 rated on Google Play
            </p>
          </div>
        </a>
        <h1 className="hero-content-heading">Financial freedom begins here</h1>
        <p className="hero-content-desc">
          All the tools you need to make wise & effective investment decisions
        </p>
        <a
          className="app-download"
          href="https://ttape.in/bcvXnxVeMxb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Now
        </a>
      </section>
      <figure className="hero-image">
        <img
          src="https://assets.tickertape.in/images/landing-page/heroPhoneBg_Compressed.webp"
          alt="Ticker Tape Logo"
          className="w-auto h-auto"
        />
      </figure>
    </div>
  );
};

export default HeroComponent;
