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

     
    </div>
  );
}

export default Filters;