import { useMemo, useState } from 'react';
import gitexLogo from '../assets/gitex.png';

const selectOptions = ['Please Select', 'Option 1', 'Option 2', 'Option 3'];
const industries = ['Please Select', 'Technology', 'Finance', 'Healthcare'];
const countries = ['Please Select', 'Nigeria', 'Ghana', 'Kenya'];
const workshopsLeft = [
  'Global Leaders Forum (NEW) (5 Days)',
  'GITEX Main Stage',
  'Artificial Intelligence & Robotics (5 Days)',
  'Future Health (NEW) (2 Days)',
  'Cybersecurity (5 Days)',
  'Future Health (NEW) (2 Days)',
];
const workshopsRight = [
  'Digital Cities (5 Day)',
  'Edtech (5 Day)',
  'Energy Transition (5 Day)',
  'Intelligent Connectivity (5 Day)',
  'Digital Finance (5 Day)',
  'Future Mobility (1 Day)',
];

function FormsPage({ selectedTicket, onBack }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    residence: '',
    region: '',
    email: '',
    confirmEmail: '',
    nationality: '',
    mobile: '',
    company: '',
    jobTitle: '',
    companyType: '',
    industry: '',
  });
  const [showSolutions, setShowSolutions] = useState(false);
  const [search, setSearch] = useState('');
  const products = [
    'Global Leaders Forum !NEW (3 Days)',
    'GITEX Main Stage',
    'Artificial Intelligence & Robotics (15)',
    'Future Health !NEW (2 Days)',
    'Cybersecurity (4 Days)',
    'Future Health !NEW (2 Days)',
    'AI Everything (4 Days)',
    'Future Health !NEW (2 Days)',
  ];

  const ticketLabel = useMemo(() => {
    if (!selectedTicket) return 'PREMIUM TICKET - FREE | Incl. 19% VAT';
    const vat = selectedTicket.price?.note || 'Incl. 19% VAT';
    const price =
      selectedTicket.price?.currency === 'FREE'
        ? 'FREE'
        : `${selectedTicket.price?.currency || ''} ${selectedTicket.price?.amount || ''}`;
    return `${selectedTicket.id.toUpperCase()} TICKET - ${price} | ${vat}`;
  }, [selectedTicket]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="form-shell">
      <div className="form-bg-top">
        <button className="form-login">LOGIN</button>
      </div>

      <div className="form-progress">
        <div className="progress-steps">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className={`progress-step ${step === 1 ? 'active' : ''}`}>
              <span>{step}</span>
              {step < 4 && <div className="progress-line" />}
            </div>
          ))}
        </div>
      </div>

      <div className="form-page">
        <div className="form-layout">
          <div className="form-left">
            <div className="form-banner">
              <div>
                <p className="form-kicker">Registration Information 1</p>
              </div>
              <div className="form-ticket-pill">{ticketLabel}</div>
            </div>

            <form className="form-grid" onSubmit={handleSubmit}>
              <FormField label="First name *" name="firstName" value={formData.firstName} onChange={handleChange} />
              <FormField label="Last name *" name="lastName" value={formData.lastName} onChange={handleChange} />

              <SelectField
                label="Country of residence *"
                name="residence"
                value={formData.residence}
                options={countries}
                onChange={handleChange}
              />
              <SelectField
                label="Region"
                name="region"
                value={formData.region}
                options={selectOptions}
                onChange={handleChange}
              />

              <FormField label="Email address *" name="email" value={formData.email} onChange={handleChange} />
              <FormField
                label="Confirm Email address"
                name="confirmEmail"
                value={formData.confirmEmail}
                onChange={handleChange}
              />

              <FormField
                label="Nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
              />
              <div className="form-field">
                <label>
                  <span>Mobile number *</span>
                  <div className="phone-field">
                    <select className="phone-code">
                      <option>NG +234</option>
                      <option>GH +233</option>
                      <option>KE +254</option>
                    </select>
                    <input
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="000 0000 000"
                    />
                  </div>
                </label>
              </div>

              <FormField label="Company name *" name="company" value={formData.company} onChange={handleChange} />
              <FormField label="Job title *" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />

              <SelectField
                label="Company type *"
                name="companyType"
                value={formData.companyType}
                options={selectOptions}
                onChange={handleChange}
              />
              <SelectField
                label="Industry *"
                name="industry"
                value={formData.industry}
                options={industries}
                onChange={handleChange}
              />

              <div className="form-full">
                <div className="form-products-header">
                  <p>What products & services are you interested in? *</p>
                  <button type="button" className="solutions-button" onClick={() => setShowSolutions(true)}>
                    SELECT SOLUTIONS/PRODUCTS
                  </button>
                </div>
                <p className="workshop-label">Select Workshops (Maximum 6; Can Select)</p>
                <div className="workshop-grid">
                  <WorkshopList items={workshopsLeft} />
                  <WorkshopList items={workshopsRight} />
                </div>
              </div>

              <div className="form-actions">
                <button type="button" className="ghost-button" onClick={onBack}>
                  Back
                </button>
                <button type="submit" className="buy-button form-submit">
                  Next
                </button>
              </div>
            </form>
          </div>

          <div className="form-right">
            <div className="summary-card">
              <div className="summary-hero">
                <div className="summary-hero-top">
                  <img src={gitexLogo} alt="GITEX" className="summary-logo" />
                  <div className="summary-hero-text">
                    <span>AI Everything Nigeria</span>
                    <span>Abuja | Lagos</span>
                  </div>
                </div>
                <span className="summary-chip">Registration Information 1</span>
              </div>
              <div className="summary-body">
                <div className="summary-fields">
                  <span className="summary-muted">
                    {(formData.firstName && `${formData.firstName} ${formData.lastName}`) || 'FULL NAME'}
                  </span>
                  <span className="summary-muted">{formData.jobTitle || 'JOB TITLE'}</span>
                  <span className="summary-muted">{formData.company || 'COMPANY NAME'}</span>
                  <span className="summary-muted">{formData.residence || 'COUNTRY OF RESIDENCE'}</span>
                </div>
                <div className="summary-divider" />
                <div className="summary-badge-block">
                  <span className="summary-label">Badge Category</span>
                  <span className="summary-badge">Visitor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-footer-strip" />
      {showSolutions && (
        <div className="modal-overlay" onClick={() => setShowSolutions(false)}>
          <div className="solutions-modal" onClick={(e) => e.stopPropagation()}>
            <div className="solutions-header">
              <span className="solutions-title">Select Solutions/Products</span>
              <button className="solutions-close" onClick={() => setShowSolutions(false)}>
                ✕
              </button>
            </div>
            <div className="solutions-body">
              <div className="solutions-search">
                <input
                  type="text"
                  placeholder="Try Product/Service"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <p className="solutions-intro">
                I am interested in sourcing the following solutions/products? (Select Top 5) * Please ensure you have
                chosen at least one category in each section
              </p>
              <div className="solutions-list">
                {products
                  .filter((p) => p.toLowerCase().includes(search.toLowerCase()))
                  .map((item) => (
                    <label key={item} className="solutions-item">
                      <input type="checkbox" />
                      <span>{item}</span>
                    </label>
                  ))}
              </div>
            </div>
            <div className="solutions-footer">
              <button className="solutions-cancel" onClick={() => setShowSolutions(false)}>
                Cancel
              </button>
              <button className="solutions-apply" onClick={() => setShowSolutions(false)}>
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FormField({ label, name, value, onChange }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <input name={name} value={value} onChange={onChange} />
    </label>
  );
}

function SelectField({ label, name, value, options, onChange }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <div className="select-wrapper">
        <select name={name} value={value} onChange={onChange}>
          {options.map((opt) => (
            <option key={opt} value={opt === 'Please Select' ? '' : opt}>
              {opt}
            </option>
          ))}
        </select>
        <span className="select-arrow">v</span>
      </div>
    </label>
  );
}

function WorkshopList({ items }) {
  return (
    <div className="workshop-list">
      {items.map((item) => (
        <label key={item} className="workshop-item">
          <input type="checkbox" />
          <span>{item}</span>
        </label>
      ))}
    </div>
  );
}

export default FormsPage;
