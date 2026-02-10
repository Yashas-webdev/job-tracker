function StatsGrid({ stats }) {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-label">Total Applications</div>
        <div className="stat-value">{stats.total}</div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Applied</div>
        <div className="stat-value">{stats.applied}</div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Interviews</div>
        <div className="stat-value">{stats.interview}</div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Offers</div>
        <div className="stat-value">{stats.offer}</div>
      </div>
      <div className="stat-card">
        <div className="stat-label">Rejected</div>
        <div className="stat-value">{stats.rejected}</div>
      </div>
    </div>
  );
}

export default StatsGrid;