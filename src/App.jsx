import { useMemo } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import TicketCard from './components/TicketCard';
import FormsPage from './pages/FormsPage';

const baseFeatures = [
  { key: 'lounge', label: 'Access to ConneXions & Investor Lounge' },
  { key: 'network', label: 'Network Events' },
  { key: 'masterclasses', label: 'All Masterclasses' },
  { key: 'conference', label: 'All Conference Tracks' },
  { key: 'access', label: '3 Days Access to the Show' },
  { key: 'dubai', label: 'Access to Dubai Internet City Lounge' },
];

const tickets = [
  {
    id: 'purple',
    variant: 'hero',
    gradient:
      'linear-gradient(160deg, #0f0b1f 0%, #161527 32%, #3f1657 62%, #7d1e7f 100%)',
    badge: null,
    oldPrice: '43',
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
    variant: 'visitor',
    gradient:
      'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 32%), radial-gradient(circle at 80% 18%, rgba(0,0,0,0.35), transparent 40%), linear-gradient(165deg, #1a0c16 0%, #050507 55%, #0d1823 100%)',
    badge: null,
    price: { currency: 'FREE', amount: '', note: 'Incl. 19% VAT' },
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

function TicketsPage() {
  const navigate = useNavigate();
  const rows = useMemo(() => [tickets.slice(0, 3), tickets.slice(3)], []);

  const handleBuy = (ticket) => {
    navigate('/form', { state: { ticketId: ticket.id } });
  };

  return (
    <div className="page-shell">
      <header className="header-strip">
        <div className="strip-overlay" />
        <div className="strip-frame" />
      </header>

      <main className="content-frame">
        <div className="tickets-rows">
          {rows.map((group, idx) => (
            <div className="tickets-row" key={idx}>
              {group.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  baseFeatures={baseFeatures}
                  onBuy={handleBuy}
                />
              ))}
            </div>
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
          <button className="footer-button" onClick={() => handleBuy(tickets[1])}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

function FormsPageWrapper() {
  const navigate = useNavigate();
  const location = useLocation();
  const ticketId = location.state?.ticketId;
  const selectedTicket = tickets.find((t) => t.id === ticketId);

  return <FormsPage selectedTicket={selectedTicket} onBack={() => navigate('/')} />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TicketsPage />} />
        <Route path="/form" element={<FormsPageWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
