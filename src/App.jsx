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
}

