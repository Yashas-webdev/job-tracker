function Filters({ filter, setFilter, searchQuery, setSearchQuery, stats }) {
  return (
    <div className="filters">
      {/* All Button */}
      <button
        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
        onClick={() => setFilter('all')}
      >
        All ({stats.total})
      </button>

      {/* Applied Button */}
      <button
        className={`filter-btn ${filter === 'applied' ? 'active' : ''}`}
        onClick={() => setFilter('applied')}
      >
        Applied ({stats.applied})
      </button>

      {/* Interview Button */}
      <button
        className={`filter-btn ${filter === 'interview' ? 'active' : ''}`}
        onClick={() => setFilter('interview')}
      >
        Interview ({stats.interview})
      </button>

      {/* Offer Button */}
      <button
        className={`filter-btn ${filter === 'offer' ? 'active' : ''}`}
        onClick={() => setFilter('offer')}
      >
        Offer ({stats.offer})
      </button>

      {/* Rejected Button */}
      <button
        className={`filter-btn ${filter === 'rejected' ? 'active' : ''}`}
        onClick={() => setFilter('rejected')}
      >
        Rejected ({stats.rejected})
      </button>

      {/* Search Box */}
      <input
        type="text"
        className="search-box"
        placeholder="🔍 Search company or position..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default Filters;