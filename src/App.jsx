import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('all');
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

  // Load jobs from localStorage when app starts
  useEffect(() => {
    const savedJobs = localStorage.getItem('jobTrackerJobs');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
  }, []);

  // Save jobs to localStorage whenever jobs change
  useEffect(() => {
    localStorage.setItem('jobTrackerJobs', JSON.stringify(jobs));
  }, [jobs]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission (add or update job)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      // Update existing job
      setJobs(jobs.map(job =>
        job.id === editingId
          ? { ...formData, id: editingId }
          : job
      ));
      setEditingId(null);
    } else {
      // Add new job
      const newJob = {
        ...formData,
        id: Date.now()
      };
      setJobs([newJob, ...jobs]);
    }
}

// Reset form to initial values
    setFormData({
      company: '',
      position: '',
      location: '',
      status: 'applied',
      appliedDate: new Date().toISOString().split('T')[0],
      salary: '',
      notes: ''
    });

    // Handle editing a job
  const handleEdit = (job) => {
    setFormData(job);
    setEditingId(job.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle deleting a job
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this job application?')) {
      setJobs(jobs.filter(job => job.id !== id));
    }
  };

  // Calculate statistics
  const stats = {
    total: jobs.length,
    applied: jobs.filter(j => j.status === 'applied').length,
    interview: jobs.filter(j => j.status === 'interview').length,
    offer: jobs.filter(j => j.status === 'offer').length,
    rejected: jobs.filter(j => j.status === 'rejected').length
  };

  // Filter jobs based on status and search query
  const filteredJobs = jobs.filter(job => {
    // Check if job matches selected filter
    const matchesFilter = filter === 'all' || job.status === filter;

    // Check if job matches search query
    const matchesSearch = searchQuery === '' ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.position.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  
  };
export default App
