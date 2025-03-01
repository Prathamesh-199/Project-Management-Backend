
// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data
const projects = [
  { id: 1, name: 'Project Alpha', dueDate: '2025-05-01', status: 'In Progress', progress: 60 },
  { id: 2, name: 'Project Beta', dueDate: '2025-03-15', status: 'Completed', progress: 100 },
  { id: 3, name: 'Project Gamma', dueDate: '2025-12-20', status: 'Not Started', progress: 0 },
  { id: 4, name: 'Project Delta', dueDate: '2025-08-10', status: 'In Progress', progress: 40 },
  { id: 5, name: 'Project Epsilon', dueDate: '2025-10-01', status: 'Pending', progress: 20 },
];

const tasks = [
  { id: 1, title: 'Design Homepage', priority: 'High', assignedTo: 'Prathamesh', status: 'In Progress' },
  { id: 2, title: 'Develop API', priority: 'Medium', assignedTo: 'Krushna', status: 'Completed' },
  { id: 3, title: 'Test Application', priority: 'Low', assignedTo: 'Jonny', status: 'Pending' },
  { id: 4, title: 'Create Database Schema', priority: 'High', assignedTo: 'Mike', status: 'In Progress' },
  { id: 5, title: 'Write Documentation', priority: 'Low', assignedTo: 'Eva', status: 'Pending' },
  { id: 6, title: 'Optimize Performance', priority: 'Medium', assignedTo: 'Darshan', status: 'In Progress' },
];

const teams = [
  { id: 1, name: 'UI/UX Team', members: ['Prathamesh', 'Eva', 'Shashank'] },
  { id: 2, name: 'Backend Team', members: ['Mike', 'Darshan', 'Krushna'] },
  { id: 3, name: 'Frontend Team', members: ['Rajesh', 'Jonny', 'Pruthaviraj'] },
  { id: 4, name: 'Testing Team', members: ['Raghav', 'Alice', 'Nilesh'] },
  { id: 5, name: 'QA Team', members: ['Siddhant', 'Chetan', 'Diksha'] },
  { id: 6, name: 'DevOps Team', members: ['Sandip', 'Avinash', 'Chirag'] },
];

// Calendar Events
const calendarEvents = [
  // Project Deadlines
  { id: 1, title: 'Project Alpha Deadline', date: '2025-05-01', type: 'Project Deadline' },
  { id: 2, title: 'Project Beta Deadline', date: '2025-03-15', type: 'Project Deadline' },
  { id: 3, title: 'Project Gamma Deadline', date: '2025-12-20', type: 'Project Deadline' },
  { id: 4, title: 'Project Delta Deadline', date: '2025-08-10', type: 'Project Deadline' },
  { id: 5, title: 'Project Epsilon Deadline', date: '2025-10-01', type: 'Project Deadline' },

  // Monthly Team Meetings for Each Team (2025)
  { id: 6, title: 'UI/UX Team Meeting', date: '2025-01-10', type: 'Team Meeting', team: 'UI/UX Team' },
  { id: 7, title: 'Backend Team Meeting', date: '2025-01-15', type: 'Team Meeting', team: 'Backend Team' },
  { id: 8, title: 'Frontend Team Meeting', date: '2025-01-20', type: 'Team Meeting', team: 'Frontend Team' },
  { id: 9, title: 'Testing Team Meeting', date: '2025-01-25', type: 'Team Meeting', team: 'Testing Team' },
  { id: 10, title: 'QA Team Meeting', date: '2025-01-30', type: 'Team Meeting', team: 'QA Team' },
  { id: 11, title: 'DevOps Team Meeting', date: '2025-02-05', type: 'Team Meeting', team: 'DevOps Team' },

  // Repeat for each month in 2025-2026
  { id: 12, title: 'UI/UX Team Meeting', date: '2025-02-10', type: 'Team Meeting', team: 'UI/UX Team' },
  { id: 13, title: 'Backend Team Meeting', date: '2025-02-15', type: 'Team Meeting', team: 'Backend Team' },
  { id: 14, title: 'Frontend Team Meeting', date: '2025-02-20', type: 'Team Meeting', team: 'Frontend Team' },
  { id: 15, title: 'Testing Team Meeting', date: '2025-02-25', type: 'Team Meeting', team: 'Testing Team' },
  { id: 16, title: 'QA Team Meeting', date: '2025-03-01', type: 'Team Meeting', team: 'QA Team' },
  { id: 17, title: 'DevOps Team Meeting', date: '2025-03-05', type: 'Team Meeting', team: 'DevOps Team' },

  // Add more events as needed...
];

const reports = [
  { id: 1, title: 'Project Progress Report', completion: '75%', details: 'Project Alpha is 75% complete.' },
  { id: 2, title: 'Team Performance Report', rating: '8.5/10', details: 'Backend team performed exceptionally well.' },
  { id: 3, title: 'Task Completion Report', completedTasks: '120/150', details: '120 out of 150 tasks completed.' },
  { id: 4, title: 'Feedback Report', feedback: 'Positive feedback from clients.', details: 'Clients are satisfied with the progress.' },
  { id: 5, title: 'Project Delta Progress Report', completion: '40%', details: 'Project Delta is 40% complete.' },
  { id: 6, title: 'QA Team Performance Report', rating: '9/10', details: 'QA team performed well with minimal bugs.' },
];

// Routes
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/api/teams', (req, res) => {
  res.json(teams);
});

app.get('/api/calendar', (req, res) => {
  res.json(calendarEvents);
});

app.get('/api/reports', (req, res) => {
  res.json(reports);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});