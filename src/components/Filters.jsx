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

    </div>
  );
}

export default Filters;