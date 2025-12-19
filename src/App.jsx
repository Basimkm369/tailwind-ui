import './App.css';

const baseFeatures = [
  { key: 'lounge', label: 'Access to Conventions & Investor Lounge' },
  { key: 'network', label: 'Network Events' },
  { key: 'masterclasses', label: 'All Masterclasses' },
  { key: 'conference', label: 'All Conference Tracks' },
  { key: 'access', label: '3 Days Access to the Show' },
  { key: 'dubai', label: 'Access to Dubai Internet City Lounge' },
];

const tickets = [
  {
    id: 'purple',
    gradient:
      'linear-gradient(160deg, #0f0b1f 0%, #161527 32%, #3f1657 62%, #7d1e7f 100%)',
    badge: null,
    price: { currency: 'USD', amount: '32.5', note: 'Incl. 20% VAT' },
    button: 'Buy Now',
    logoText: ['GITEX', 'Africa Ai'],
    featureStatus: {
      lounge: 'active',
      network: 'warning',
      masterclasses: 'muted',
      conference: 'muted',
      access: 'muted',
      dubai: 'muted',
    },
    toggles: ['USD', 'AED', 'EUR'],
    quantity: '25',
  },
  {
    id: 'orange',
    gradient: 'linear-gradient(150deg, #f06f21 0%, #f9b25a 100%)',
    badge: null,
    price: { currency: 'FREE', amount: '', note: 'Incl. 15% VAT' },
    button: 'BUY NOW',
    featureStatus: {
      lounge: 'active',
      network: 'active',
      masterclasses: 'muted',
      conference: 'active',
      access: 'active',
      dubai: 'muted',
    },
  },
  {
    id: 'teal',
    gradient: 'linear-gradient(150deg, #1ca077 0%, #4ed9ba 100%)',
    badge: null,
    sideBadge: { text: 'Exclusive', color: 'green' },
    price: { currency: 'FREE', amount: '', note: 'Incl. 15% VAT' },
    button: 'BUY NOW',
    featureStatus: {
      lounge: 'active',
      network: 'active',
      masterclasses: 'active',
      conference: 'active',
      access: 'active',
      dubai: 'muted',
    },
  },
  {
    id: 'red',
    gradient: 'linear-gradient(145deg, #d52d2e 0%, #ef7f3f 100%)',
    badge: { text: 'Best Seller', color: 'green' },
    price: { currency: 'FREE', amount: '', note: 'Incl. 15% VAT' },
    button: 'BUY NOW',
    featureStatus: {
      lounge: 'active',
      network: 'active',
      masterclasses: 'active',
      conference: 'active',
      access: 'active',
      dubai: 'active',
    },
  },
  {
    id: 'green',
    gradient: 'linear-gradient(150deg, #1c9f81 0%, #61d36d 100%)',
    badge: null,
    price: { currency: 'FREE', amount: '', note: 'Incl. 15% VAT' },
    button: 'BUY NOW',
    featureStatus: {
      lounge: 'active',
      network: 'active',
      masterclasses: 'active',
      conference: 'active',
      access: 'active',
      dubai: 'muted',
    },
  },
  {
    id: 'blue',
    gradient: 'linear-gradient(150deg, #1d4aa8 0%, #2f8adb 100%)',
    badge: null,
    price: { currency: 'FREE', amount: '', note: 'Incl. 15% VAT' },
    button: 'BUY NOW',
    featureStatus: {
      lounge: 'active',
      network: 'active',
      masterclasses: 'muted',
      conference: 'active',
      access: 'muted',
      dubai: 'muted',
    },
  },
];

const glowLayers =
  'radial-gradient(circle at 18% 18%, rgba(255,255,255,0.18), transparent 32%), radial-gradient(circle at 80% 12%, rgba(255,255,255,0.14), transparent 28%), radial-gradient(circle at 60% 80%, rgba(0,0,0,0.25), transparent 45%)';

function FeaturePill({ label, status }) {
  return (
    <div className={`feature-pill ${status}`}>
      <span className="pill-dot" />
      <span className="pill-text">{label}</span>
    </div>
  );
}

function TicketCard({ ticket }) {
  const features = baseFeatures.map((item) => ({
    ...item,
    status: ticket.featureStatus[item.key] || 'muted',
  }));
  const isFree = ticket.price.currency === 'FREE';

  return (
    <div className="ticket-card">
      <div
        className="ticket-bg"
        style={{ backgroundImage: `${glowLayers}, ${ticket.gradient}` }}
      />
      <div className="ticket-overlay" />

      {ticket.sideBadge && (
        <div className={`side-badge ${ticket.sideBadge.color}`}>
          {ticket.sideBadge.text}
        </div>
      )}

      {ticket.badge && (
        <div
          className={`ribbon ${
            ticket.badge.color === 'orange' ? 'orange' : ''
          }`}
        >
          {ticket.badge.text}
        </div>
      )}

      <div className="notch left">
        <span />
      </div>
      <div className="notch right">
        <span />
      </div>

      <div className="ticket-inner">
        <div className="ticket-header">
          <p className="ticket-title">VISITOR 3 DAY ACCESS TICKET</p>
          <p className="ticket-sub">VIEW DETAILS -&gt;</p>
        </div>

        <p className="ticket-description">
          Visitor Passes provide <span>3 DAYS ACCESS</span> to GITEX NIGERIA
          exhibition and all free conference
        </p>

        {ticket.logoText && (
          <div className="logo-row">
            <span className="logo-main">{ticket.logoText[0]}</span>
            <span className="logo-sub">{ticket.logoText[1]}</span>
          </div>
        )}

        <div className="feature-list">
          {features.map((item) => (
            <FeaturePill
              key={item.key}
              label={item.label}
              status={item.status}
            />
          ))}
        </div>

        <div className="ticket-footer">
          <div className="price-block">
            {isFree ? (
              <>
                <div className="price-free">FREE</div>
                <div className="vat-note">{ticket.price.note}</div>
              </>
            ) : (
              <>
                <span className="currency-tag">{ticket.price.currency}</span>
                <span className="price-number">{ticket.price.amount}</span>
                <div className="vat-note">{ticket.price.note}</div>
              </>
            )}
          </div>

          <div className="cta-area">
            {ticket.toggles ? (
              <div className="toggle-row">
                {ticket.toggles.map((toggle, index) => (
                  <span
                    key={toggle}
                    className={`toggle-chip ${index === 0 ? 'active' : ''}`}
                  >
                    {toggle}
                  </span>
                ))}
                {ticket.quantity && <div className="qty-chip">{ticket.quantity}</div>}
              </div>
            ) : (
              <button className="buy-button">{ticket.button}</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="page-shell">
      <header className="header-strip">
        <div className="strip-overlay" />
        <div className="strip-frame" />
      </header>

      <main className="content-frame">
        <div className="tickets-grid">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </main>

      <footer className="footer-strip">
        <div className="strip-overlay" />
        <div className="strip-frame" />
      </footer>

      <div className="footer-bar">
        <div className="footer-card">
          <div className="footer-text">
            <div className="footer-total">
              <span className="footer-total-label">Total: </span>
              <span className="footer-amount">EUR 0</span>
              <span className="footer-note"> Incl. 19% VAT</span>
            </div>
            <div className="footer-subline">View Ticket summary</div>
          </div>
          <button className="footer-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
