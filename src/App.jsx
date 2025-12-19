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
    gradient: 'linear-gradient(135deg, #6d1bc6 0%, #d43f7a 100%)',
    badge: null,
    title: 'Visitor 3 Day Access Ticket',
    sub: 'VIEW DETAILS +',
    price: { currency: 'USD', amount: '32.5', note: 'Incl. 20% VAT' },
    button: 'Buy Now',
    accent: '#b15ff4',
    logoText: ['GITEX', 'Africa Ai'],
    featureStatus: {
      lounge: 'active',
      network: 'warning',
      masterclasses: 'muted',
      conference: 'muted',
      access: 'muted',
      dubai: 'muted',
    },
    toggles: ['USD', 'EUR', 'AED'],
  },
  {
    id: 'orange',
    gradient: 'linear-gradient(135deg, #f26b1f 0%, #f9b054 100%)',
    badge: null,
    title: 'Visitor 3 Day Access Ticket',
    sub: 'VIEW DETAILS +',
    price: { currency: 'FREE', amount: '', note: 'Incl. 15% VAT' },
    button: 'BUY NOW',
    accent: '#f9ae5a',
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
    id: 'teal',
    gradient: 'linear-gradient(135deg, #1c9f81 0%, #4fd3b2 100%)',
    badge: { text: 'EXCLUSIVE', color: 'orange' },
    title: 'Visitor 3 Day Access Ticket',
    sub: 'VIEW DETAILS +',
    price: { currency: 'FREE', amount: '', note: 'Incl. 15% VAT' },
    button: 'BUY NOW',
    accent: '#2bd3b2',
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
    gradient: 'linear-gradient(135deg, #d22c2c 0%, #f08140 100%)',
    badge: { text: 'Best Seller', color: 'green' },
    title: 'Visitor 3 Day Access Ticket',
    sub: 'VIEW DETAILS +',
    price: { currency: 'FREE', amount: '', note: 'Incl. 15% VAT' },
    button: 'BUY NOW',
    accent: '#ff9863',
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
    gradient: 'linear-gradient(135deg, #1c9f81 0%, #61d36d 100%)',
    badge: null,
    title: 'Visitor 3 Day Access Ticket',
    sub: 'VIEW DETAILS +',
    price: { currency: 'FREE', amount: '', note: 'Incl. 15% VAT' },
    button: 'BUY NOW',
    accent: '#63d17d',
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
    gradient: 'linear-gradient(135deg, #1b4aa9 0%, #2f8adb 100%)',
    badge: null,
    title: 'Visitor 3 Day Access Ticket',
    sub: 'VIEW DETAILS +',
    price: { currency: 'FREE', amount: '', note: 'Incl. 15% VAT' },
    button: 'BUY NOW',
    accent: '#3a9cf5',
    featureStatus: {
      lounge: 'active',
      network: 'active',
      masterclasses: 'active',
      conference: 'active',
      access: 'active',
      dubai: 'muted',
    },
  },
];

const pillStyles = {
  active: 'border border-[#35d46a] bg-[#35d46a]/15 text-white',
  warning: 'border border-[#ff4d67] bg-[#ff4d67]/20 text-white',
  muted: 'border border-white/10 bg-black/25 text-white/70',
};

const dotStyles = {
  active: 'bg-[#35d46a]',
  warning: 'bg-[#ff4d67]',
  muted: 'bg-white/40',
};

const glowLayers =
  'radial-gradient(circle at 18% 18%, rgba(255,255,255,0.18), transparent 32%), radial-gradient(circle at 80% 12%, rgba(255,255,255,0.14), transparent 28%), radial-gradient(circle at 60% 80%, rgba(0,0,0,0.25), transparent 45%)';

function FeaturePill({ label, status }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-full px-3 py-2 text-sm ${pillStyles[status]}`}
    >
      <span className={`h-2.5 w-2.5 rounded-full ${dotStyles[status]}`} />
      <span className="leading-tight">{label}</span>
    </div>
  );
}

function TicketCard({ ticket }) {
  const features = baseFeatures.map((item) => ({
    ...item,
    status: ticket.featureStatus[item.key] || 'muted',
  }));

  return (
    <div className="relative card-border overflow-hidden rounded-[22px] shadow-card min-h-[320px]">
      <div
        className="absolute inset-0 card-shine"
        style={{ backgroundImage: `${glowLayers}, ${ticket.gradient}` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/15 to-black/45" />
      {ticket.badge && (
        <div
          className={`ribbon ${
            ticket.badge.color === 'orange' ? 'orange' : ''
          }`}
        >
          {ticket.badge.text}
        </div>
      )}
      <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-white shadow-md">
        <div className="absolute inset-1 rounded-full bg-gray-100" />
      </div>
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-white shadow-md">
        <div className="absolute inset-1 rounded-full bg-gray-100" />
      </div>
      <div className="relative flex h-full flex-col gap-4 px-5 py-5 sm:px-6 sm:py-6">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-white/90">
            Visitor 3 Day Access Ticket
          </p>
          <p className="text-[12px] font-semibold uppercase tracking-[0.04em] text-white/70">
            {ticket.sub}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs text-white/70 leading-relaxed">
            Visitor Passes provide{' '}
            <span className="font-semibold text-[#39d86c]">3 DAYS ACCESS</span>{' '}
            to GITEX NIGERIA exhibition and all free conference
          </p>
          {ticket.logoText && (
            <div className="flex items-center gap-3 text-lg font-semibold text-white">
              <span className="tracking-wide">{ticket.logoText[0]}</span>
              <span className="text-xl italic">{ticket.logoText[1]}</span>
            </div>
          )}
          <div className="grid grid-cols-1 gap-2">
            {features.map((item) => (
              <FeaturePill
                key={item.key}
                label={item.label}
                status={item.status}
              />
            ))}
          </div>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3">
          <div className="flex items-end gap-2 text-white">
            {ticket.price.currency !== 'FREE' ? (
              <>
                <span className="rounded-md bg-black/35 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide">
                  {ticket.price.currency}
                </span>
                <span className="text-3xl font-bold leading-none drop-shadow-sm">
                  {ticket.price.amount}
                </span>
                <div className="text-[11px] uppercase leading-3 text-white/80">
                  <div>{ticket.price.note}</div>
                </div>
              </>
            ) : (
              <div>
                <div className="text-lg font-bold leading-tight">
                  {ticket.price.currency}
                </div>
                <div className="text-[11px] uppercase text-white/80">
                  {ticket.price.note}
                </div>
              </div>
            )}
          </div>
          {ticket.toggles ? (
            <div className="flex items-center gap-2 rounded-full bg-black/25 px-2 py-1 text-[11px] uppercase text-white/80">
              {ticket.toggles.map((toggle) => (
                <span
                  key={toggle}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 font-semibold text-white shadow-inner"
                >
                  {toggle}
                </span>
              ))}
            </div>
          ) : (
            <button className="rounded-lg bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gray-900 shadow-md transition hover:-translate-y-[1px] hover:shadow-lg">
              {ticket.button}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex min-h-screen justify-center bg-white">
      <div className="page-shell">
        <header className="header-strip text-white">
          <div className="strip-overlay" />
          <div className="strip-frame" />
        </header>

        <main className="content-frame relative z-10 w-full">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
}

export default App;
