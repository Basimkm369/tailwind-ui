import gitexLogo from '../assets/gitex.png';

function HeroTicket({ ticket }) {
  return (
    <div className="ticket-card hero-card">
      <div className="hero-bg" />
      <div className="hero-glow" />
      <div className="notch left">
        <span />
      </div>
      <div className="notch right">
        <span />
      </div>

      <div className="hero-top">
        <div className="hero-title">VISITOR 3 DAY ACCESS TICKET</div>
        <div className="hero-link">VIEW DETAILS -&gt;</div>
      </div>

      <div className="hero-body">
        <div className="hero-content-block">
          <p className="hero-copy">
            Visitor Passes provide <span>3 DAYS ACCESS</span> to GITEX NIGERIA
            exhibition and all free conference
          </p>

          <div className="hero-logos">
            <div className="hero-logo-image">
              <img src={gitexLogo} alt="GITEX Nigeria" className="hero-logo-img" />
            </div>
          </div>
        </div>

        <div className="hero-divider" />

        <div className="hero-price-row">
          <div className="hero-price-left">
            {ticket.oldPrice && (
              <span className="old-price">
                {ticket.price.currency} {ticket.oldPrice}
              </span>
            )}
            <span className="price-chip">{ticket.price.amount}</span>
            <span className="hero-note">{ticket.price.note}</span>
          </div>
          <div className="hero-toggles">
            <button className="hero-toggle">-</button>
            <div className="hero-qty">{ticket.quantity || '25'}</div>
            <button className="hero-toggle">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroTicket;
