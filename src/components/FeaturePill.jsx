function FeaturePill({ label, status }) {
  return (
    <div className={`feature-pill ${status}`}>
      <span className="pill-dot" />
      <span className="pill-text">{label}</span>
    </div>
  );
}

export default FeaturePill;
