function JobCard({ job, handleEdit, handleDelete }) {
  return (
    <div className="job-card">
      {/* Job Header */}
      <div className="job-header">
        <h3 className="job-title">{job.position}</h3>
        <div className="job-company">{job.company}</div>
      </div>
    
      {/* Job Details */}
      <div className="job-details">
        {job.location && (
          <div className="job-detail">
            <span className="job-detail-icon">📍</span>
            <span>{job.location}</span>
          </div>
        )}
        {job.appliedDate && (
          <div className="job-detail">
            <span className="job-detail-icon">📅</span>
            <span>Applied: {new Date(job.appliedDate).toLocaleDateString()}</span>
          </div>
        )}
        {job.salary && (
          <div className="job-detail">
            <span className="job-detail-icon">💰</span>
            <span>{job.salary}</span>
          </div>
        )}
      </div>

      
    
    </div>
  );
}

export default JobCard;