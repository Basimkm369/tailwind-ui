import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import TicketCard from '../components/TicketCard';
import { baseFeatures, tickets } from '../data/tickets';

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

export default TicketsPage;
