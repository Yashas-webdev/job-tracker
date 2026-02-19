function JobCard({ job, handleEdit, handleDelete }) {
  return (
    <div className="job-card">
      {/* Job Header */}
      <div className="job-header">
        <h3 className="job-title">{job.position}</h3>
        <div className="job-company">{job.company}</div>
      </div>

    
    </div>
  );
}

export default JobCard;