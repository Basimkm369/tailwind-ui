import FeaturePill from './FeaturePill';
import HeroTicket from './HeroTicket';

const glowLayers =
  'radial-gradient(circle at 18% 18%, rgba(255,255,255,0.18), transparent 32%), radial-gradient(circle at 80% 12%, rgba(255,255,255,0.14), transparent 28%), radial-gradient(circle at 60% 80%, rgba(0,0,0,0.25), transparent 45%)';

function TicketCard({ ticket, baseFeatures, onBuy }) {
  if (ticket.variant === 'hero') {
    return <HeroTicket ticket={ticket} />;
  }

  const features = baseFeatures.map((item) => ({
    ...item,
    status: ticket.featureStatus[item.key] || 'muted',
  }));
  const isFree = ticket.price.currency === 'FREE';
  const isVisitor = ticket.variant === 'visitor';

  return (
    <div className={`ticket-card ${isVisitor ? 'visitor-card' : ''}`}>
      <div
        className="ticket-bg"
        style={{ backgroundImage: `${glowLayers}, ${ticket.gradient}` }}
      />
      <div className={`ticket-overlay ${isVisitor ? 'visitor-overlay' : ''}`} />

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

      <div className={`ticket-inner ${isVisitor ? 'visitor-inner' : ''}`}>
        {isVisitor ? (
          <>
            <div className="visitor-topband">
              <div className="visitor-topline">
                <p className="ticket-title visitor-title">VISITOR 3 DAY ACCESS TICKET</p>
                <p className="ticket-sub visitor-sub">VIEW DETAILS -&gt;</p>
              </div>
            </div>

            <div className="visitor-body">
              <p className="ticket-description visitor-desc">
                Visitor Passes provide <span>3 DAYS ACCESS</span> to GITEX NIGERIA
                exhibition and all free conference
              </p>

              <div className="feature-list visitor-feature-list">
                {features.map((item) => (
                  <FeaturePill
                    key={item.key}
                    label={item.label}
                    status={item.status}
                  />
                ))}
              </div>

              <div className="ticket-footer visitor-footer">
                <div className="price-block">
                  <div className="price-free visitor-price-free">FREE</div>
                  <div className="vat-note visitor-vat">{ticket.price.note}</div>
                </div>
                <div className="cta-area">
                  <button
                    className="buy-button visitor-buy"
                    onClick={() => onBuy?.(ticket)}
                  >
                    {ticket.button}
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
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
                  <button className="buy-button" onClick={() => onBuy?.(ticket)}>
                    {ticket.button}
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TicketCard;
