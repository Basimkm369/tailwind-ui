import { useMemo, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
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

const trimString = (message) => Yup.string().transform((val) => (typeof val === 'string' ? val.trim() : val)).required(message);

const validationSchema = Yup.object({
  firstName: trimString('First name is required'),
  lastName: trimString('Last name is required'),
  residence: trimString('Country of residence is required'),
  email: Yup.string()
    .transform((val) => (typeof val === 'string' ? val.trim() : val))
    .email('Enter a valid email')
    .required('Email is required'),
  confirmEmail: Yup.string()
    .transform((val) => (typeof val === 'string' ? val.trim() : val))
    .oneOf([Yup.ref('email'), null], 'Emails must match')
    .required('Confirm your email'),
  nationality: Yup.string().transform((val) => (typeof val === 'string' ? val.trim() : val)).nullable(),
  mobile: trimString('Mobile number is required'),
  company: trimString('Company name is required'),
  jobTitle: trimString('Job title is required'),
  companyType: trimString('Company type is required'),
  industry: trimString('Industry is required'),
});

function FormsPage({ selectedTicket, onBack }) {
  const [showSolutions, setShowSolutions] = useState(false);
  const [search, setSearch] = useState('');

  const ticketLabel = useMemo(() => {
    if (!selectedTicket) return 'PREMIUM TICKET - FREE | Incl. 19% VAT';
    const vat = selectedTicket.price?.note || 'Incl. 19% VAT';
    const price =
      selectedTicket.price?.currency === 'FREE'
        ? 'FREE'
        : `${selectedTicket.price?.currency || ''} ${selectedTicket.price?.amount || ''}`;
    return `${selectedTicket.id.toUpperCase()} TICKET - ${price} | ${vat}`;
  }, [selectedTicket]);

  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema,
    onSubmit: (values) => {
      alert(`Form submitted for ${values.firstName || 'user'}!`);
    },
  });

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

            <form className="form-grid" onSubmit={formik.handleSubmit}>
              <FormField label="First name *" name="firstName" formik={formik} />
              <FormField label="Last name *" name="lastName" formik={formik} />

              <SelectField label="Country of residence *" name="residence" options={countries} formik={formik} />
              <SelectField label="Region" name="region" options={selectOptions} formik={formik} />

              <FormField label="Email address *" name="email" type="email" formik={formik} />
              <FormField label="Confirm Email address" name="confirmEmail" type="email" formik={formik} />

              <FormField label="Nationality" name="nationality" formik={formik} />

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
                      value={formik.values.mobile}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="000 0000 000"
                    />
                  </div>
                  {formik.touched.mobile && formik.errors.mobile && (
                    <div className="field-error">{formik.errors.mobile}</div>
                  )}
                </label>
              </div>

              <FormField label="Company name *" name="company" formik={formik} />
              <FormField label="Job title *" name="jobTitle" formik={formik} />

              <SelectField label="Company type *" name="companyType" options={selectOptions} formik={formik} />
              <SelectField label="Industry *" name="industry" options={industries} formik={formik} />

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
                    {(formik.values.firstName && `${formik.values.firstName} ${formik.values.lastName}`) || 'FULL NAME'}
                  </span>
                  <span className="summary-muted">{formik.values.jobTitle || 'JOB TITLE'}</span>
                  <span className="summary-muted">{formik.values.company || 'COMPANY NAME'}</span>
                  <span className="summary-muted">{formik.values.residence || 'COUNTRY OF RESIDENCE'}</span>
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

function FormField({ label, name, formik, type = 'text' }) {
  const { getFieldProps, touched, errors } = formik;
  return (
    <label className="form-field">
      <span>{label}</span>
      <input type={type} {...getFieldProps(name)} />
      {touched[name] && errors[name] && <div className="field-error">{errors[name]}</div>}
    </label>
  );
}

function SelectField({ label, name, options, formik }) {
  const { values, handleChange, handleBlur, touched, errors } = formik;
  return (
    <label className="form-field">
      <span>{label}</span>
      <div className="select-wrapper">
        <select name={name} value={values[name]} onChange={handleChange} onBlur={handleBlur}>
          {options.map((opt) => (
            <option key={opt} value={opt === 'Please Select' ? '' : opt}>
              {opt}
            </option>
          ))}
        </select>
        <span className="select-arrow">v</span>
      </div>
      {touched[name] && errors[name] && <div className="field-error">{errors[name]}</div>}
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
