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
}
export default App
