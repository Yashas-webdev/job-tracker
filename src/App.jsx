import { useState, useEffect } from 'react';
import { useAuth } from './context/AuthContext'; 
import AuthManager from './components/auth/AuthManager';
import Header from './components/Header';
import StatsGrid from './components/StatsGrid';
import JobForm from './components/JobForm';
import Filters from './components/Filters';
import JobCard from './components/JobCard';
import toast from 'react-hot-toast'
import ConfirmModal from './components/common/ConfirmModal';
import './App.css';

function App(){
  const { user, loading, isAuthenticated } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    location: '',
    status: 'applied',
    appliedDate: new Date().toISOString().split('T')[0],
    salary: '',
    notes: ''
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);

  
  useEffect(()=>{
    if (user) {  // ✅ Only load jobs if user is logged in
      const savedJobs = localStorage.getItem(`jobTrackerJobs_${user.id}`);  // ✅ User-specific key
      if(savedJobs){
        setJobs(JSON.parse(savedJobs));
      }
    } else {
      setJobs([]);  // ✅ Clear jobs if no user
    }
  },[user])  // ✅ Re-run when user changes
  
  useEffect(()=>{
    if (user) {
      localStorage.setItem(`jobTrackerJobs_${user.id}`,JSON.stringify(jobs));
    }
  },[jobs,user]);
  

  const handleInputChange = (e) => {
    const {name,value} = e.target;
    setFormData(prev => ({
      ...prev,[name]:value
    }));
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(editingId){
      setJobs(jobs.map(job=>
        job.id === editingId? {...formData, id:editingId} : job
      ));
      setEditingId(null);

      toast.success('Job application updated successfully!',{
        duration: 3000,
        icon:'✏️'
      })
    }else{
      const newJob = {
        ...formData,
        id: Date.now()
      };
    
   
    setJobs([newJob, ...jobs]);

    toast.success(`Added ${formData.company} - ${formData.position}!`,{
      duration: 3000,
      icon:'🎉',
    } );
  }

  setFormData({
    company: '',
    position:'',
    location:'',
    status:'applied',
    appliedDate: new Date().toISOString().split('T')[0],
    salary:'',
    notes:''
  });
 };

 const handleEdit = (job) => {
  setFormData(job);
  setEditingId(job.id);
  window.scrollTo({top:0,behavior:'smooth'});
 };

 const handleDelete = (id) => {
  const job = jobs.find(j => j.id === id);
  setJobToDelete(job);
  setShowDeleteModal(true);
};

const confirmDelete = () => {
  if (jobToDelete) {
    setJobs(jobs.filter(job => job.id !== jobToDelete.id));
    toast.success(`Deleted ${jobToDelete.company} application`, {
      duration: 3000,
      icon: '🗑️',
    });
    setJobToDelete(null);
  }
};


 const stats = {
  total: jobs.length,
  applied: jobs.filter(j=>j.status === 'applied').length,
  interview: jobs.filter(j => j.status === 'interview').length,
  offer: jobs.filter(j =>j.status === 'offer').length,
  rejected:jobs.filter(j => j.status === 'rejected').length
 };

 const filteredJobs = jobs.filter(job => {
  const matchesFilter = filter === 'all' || job.status === filter;
  const matchesSearch = searchQuery === ''|| job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
  job.position.toLowerCase().includes(searchQuery.toLowerCase());
return matchesFilter && matchesSearch;
 });

 
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">⏳</div>
        <p>Loading...</p>
      </div>
    );
  }

  
  if (!isAuthenticated) {
    return <AuthManager/>;
  }

  return (
    <div className='container'>
      <Header/>
      <StatsGrid stats={stats}/>
      <JobForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        editingId={editingId}
        setEditingId={setEditingId}
      />
      
      <Filters
        filter={filter}
        setFilter={setFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        stats={stats}
      />

      {filteredJobs.length === 0 ? (
        <div className='empty-state'>
          <div className='empty-state-icon'>📪</div>
          <h3>No applications found</h3>
          <p>
            {jobs.length === 0 
            ? "Start tracking your job applications by adding one above!"
          : "Try adjusting your filters or search query"}
          </p>
          </div>
          ) : (
            <div className = 'jobs-grid'>
              {filteredJobs.map(job => (
                <JobCard
                  key = {job.id}
                  job = {job}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  />
              ))}
              </div>
          )}

          <ConfirmModal
          isOpen={showDeleteModal}
          onClose={()=>{
            setShowDeleteModal(false);
            setJobToDelete(null);
          }}

          onConfirm={confirmDelete}
          title = 'Delete Application'
          message = {`Are you sure you want to delete the application for ${jobToDelete?.company || 'this company'}? This action cannot be undone.`}
          confirmText='Delete'
          cancelText='Cancel'
          type='danger'
          />
    </div>
  )
}

export default App;

