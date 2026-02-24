import { useState, useEffect } from 'react';
import Header from './components/Header';
import StatsGrid from './components/StatsGrid';
import JobForm from './components/JobForm';
import Filters from './components/JobCard';
import JobCard from './components/JobCard';
import './App.css';

function App(){
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('');
  const [editingID, setEditingId] = useState(null);
  const [formData, setFromData] = useState({
    company: '',
    positon: '',
    location: '',
    status: '',
    appliedDate: new Date().toISOString().split('T')[0],
    salary: '',
    notes: ''
  });

  useEffect(()=>{
    const savedJobs = localStorage.getItem('jobTracker Jobs');
    if(savedJobs){
      setJobs(JSON.parse(savedJobs));
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('jobTrackerJobs',JSON.stringify(jobs));
  },[jobs]);

  const handleInputChange = (e) => {
    const {name,value} = e.target;
    setFromData(prev => ({
      ...prev,[name]:value
    }));
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(editingID){
      setJobs(jobs.map(job=>
        job.id === editingID ? {...formData, id:editingID} : job
      ));
      setEditingId(null);
    }else{
      const newJob = {
        ...formData,
        id: Date.now()
      };
    
   
    setJobs([newJob, ...jobs]);
  }

  setFromData({
    company: '',
    positon:'',
    location:'',
    status:'applied',
    appliedDate: new Date().toISOString().split('T')[0],
    salary:'',
    notes:''
  });
 };

 const handleEdit = (job) => {
  setFromData(job);
  setEditingId(job.id);
  window.scrollTo({top:0,behavior:'smooth'});
 };

 const handleDelete = (id) =>{
  if(window.confirm('Are you sure you want to delete this job application?')){
    setJobs(jobs.filter(job => job.id != id));
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
  job.positon.toLowerCase().includes(searchQuery.toLowerCase());
return matchesFilter && matchesSearch;
 });

  return (
    <div className='container'>
      <Header/>
      <StatsGrid stats={stats}/>
      <JobForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        editingId={editingID}
        setEditingId={setEditingId}
        setFormData={setFormData}
    />
      
      <Filters
        filter={filter}
        setFilter={setFilter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        stats={stats}
      />
    </div>
  )
}

