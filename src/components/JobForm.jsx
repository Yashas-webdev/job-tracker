function JobForm({ formData, handleInputChange, handleSubmit, editingId, setEditingId, setFormData }) {
  return (
    <div className="controls">
      <h2>{editingId ? '✏️ Edit Application' : '➕ Add New Application'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          {/* Company Input */}
          <div className="form-group">
            <label>Company Name *</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
              placeholder="e.g., Google"
            />
          </div>

          {/* Position Input */}
          <div className="form-group">
            <label>Position *</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              required
              placeholder="e.g., Software Engineer"
            />
          </div>

          {/* Location Input */}
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="e.g., Remote / New York"
            />
          </div>

          {/* Status Dropdown */}
          <div className="form-group">
            <label>Status *</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              required
            >
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          {/* Applied Date Input */}
          <div className="form-group">
            <label>Applied Date</label>
            <input
              type="date"
              name="appliedDate"
              value={formData.appliedDate}
              onChange={handleInputChange}
            />
          </div>

          {/* Salary Input */}
          <div className="form-group">
            <label>Salary Range</label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              placeholder="e.g., $80k - $120k"
            />
          </div>
        </div>

        {/* Notes Textarea */}
        <div className="form-group" style={{marginTop: '1rem'}}>
          <label>Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Add any additional details..."
            rows="3"
          />
        </div>

        {/* Submit Buttons */}
        <div className="button-group" style={{marginTop: '1.5rem'}}>
          <button type="submit" className="btn-primary">
            {editingId ? '💾 Update Application' : '➕ Add Application'}
          </button>
          {editingId && (
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                setEditingId(null);
                setFormData({
                  company: '',
                  position: '',
                  location: '',
                  status: 'applied',
                  appliedDate: new Date().toISOString().split('T')[0],
                  salary: '',
                  notes: ''
                });
              }}
            >
              ✖️ Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default JobForm;