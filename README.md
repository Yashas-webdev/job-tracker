# 🎯 Job Tracker

A modern, full-featured job application tracking system built with React. Keep track of all your job applications, interviews, offers, and rejections in one beautiful interface.

![Job Tracker](https://img.shields.io/badge/React-18.0+-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- **📊 Real-time Statistics Dashboard**: View total applications, applied, interviews, offers, and rejections at a glance
- **➕ Easy Application Management**: Add, edit, and delete job applications with a simple form
- **🔍 Advanced Filtering**: Filter applications by status and search by company or position
- **💾 Persistent Storage**: All data is saved locally using localStorage
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Modern UI**: Clean, professional interface with smooth animations
- **📝 Detailed Notes**: Add custom notes for each application
- **💰 Salary Tracking**: Keep track of salary ranges for each position

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/job-tracker.git
cd job-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📖 Usage

### Adding a Job Application

1. Fill in the application form at the top of the page
2. Required fields: Company Name, Position, Status
3. Optional fields: Location, Applied Date, Salary Range, Notes
4. Click "Add Application" or "Update Application" (when editing)

### Editing an Application

1. Click the "EDIT" button on any job card
2. The form will populate with the application data
3. Make your changes and click "Update Application"

### Deleting an Application

1. Click the "DELETE" button on any job card
2. Confirm the deletion in the popup dialog

### Filtering Applications

- Use the filter buttons to view applications by status: All, Applied, Interview, Offer, Rejected
- Use the search bar to find applications by company name or position

## 🏗️ Project Structure
```
job-tracker/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # App header with logo and title
│   │   ├── StatsGrid.jsx       # Statistics dashboard
│   │   ├── JobForm.jsx         # Add/Edit application form
│   │   ├── Filters.jsx         # Filter and search controls
│   │   └── JobCard.jsx         # Individual job application card
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Global styles
│   └── main.jsx                # Application entry point
├── public/
├── package.json
└── README.md
```

## 🎨 Application Statuses

- **Applied**: Initial application submitted
- **Interview**: Interview scheduled or completed
- **Offer**: Job offer received
- **Rejected**: Application rejected

## 💾 Data Storage

All job applications are stored in the browser's localStorage. Data persists across browser sessions but is local to your device and browser.

## 🛠️ Built With

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **CSS3** - Styling
- **localStorage** - Data persistence

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Icons and emojis for visual elements
- Inspiration from modern job tracking tools
- React community for excellent documentation

## 📧 Contact

Yashas A R  -  yashasaryshu@gmail.com

Project Link: [https://github.com/yourusername/job-tracker](https://github.com/yourusername/job-tracker)

## 🔮 Future Enhancements

- [ ] Export data to CSV/PDF
- [ ] Calendar view for application deadlines
- [ ] Email reminders for follow-ups
- [ ] Integration with job boards
- [ ] Dark/Light theme toggle
- [ ] Cloud sync across devices
- [ ] Analytics and insights dashboard
- [ ] Application templates

---

Made with ❤️ by [Yashas A R]