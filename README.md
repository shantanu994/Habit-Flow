# HabitFlow

HabitFlow is a full-stack habit tracking web app built with Flask + React.
It helps you stay consistent through streaks, analytics, visual feedback, and simple daily workflow tools.

## What You Get

- Daily habit dashboard with one-click complete/uncomplete toggle
- Habit streak tracking and daily progress summary
- Habit categories with category-based filtering
- Daily quick notes for each habit
- Weekly target system with on-track/off-track analytics
- Reminder time per habit
- GitHub-style yearly contribution heatmap
- Analytics charts (bar, pie, weekly momentum trend)
- Habit CRUD (create, edit, delete)
- Demo data seeding for fast testing
- CSV analytics export API

## Tech Stack

### Backend

- Python 3.x
- Flask
- Flask-CORS
- SQLAlchemy
- SQLite

### Frontend

- React 19
- Axios
- Recharts
- CSS3 (custom responsive UI)

## Project Structure

```text
Habit-Flow/
|-- Backend/
|   |-- app.py
|   |-- models.py
|   |-- requirements.txt
|   `-- instance/
|-- frontend/
|   |-- package.json
|   |-- public/
|   `-- src/
|       |-- App.js
|       |-- index.css
|       |-- api/habits.js
|       |-- components/
|       `-- pages/
|-- instance/
|-- package.json
`-- README.md
```

## Setup

## 1. Backend Setup

```bash
cd Backend
python -m venv venv
```

Activate venv:

- Windows (PowerShell):

```powershell
venv\Scripts\Activate.ps1
```

- Windows (cmd):

```cmd
venv\Scripts\activate
```

- macOS/Linux:

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
python app.py
```

Backend runs at: `http://localhost:5000`

## 2. Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs at: `http://localhost:3000`

## API Endpoints

### Habits

- `GET /api/today`
  - Returns all habits with today's completion status, streak, and today's note
- `POST /api/habits`
  - Create habit (name, icon, color, category, weekly_target, reminder_time)
- `PUT /api/habits/<habit_id>`
  - Update habit details
- `DELETE /api/habits/<habit_id>`
  - Delete habit
- `POST /api/habits/<habit_id>/complete`
  - Toggle today's completion
- `PUT /api/habits/<habit_id>/note`
  - Save today's note (max 280 chars)

### Analytics

- `GET /api/analytics`
  - Habit-level totals, streak, weekly progress, on-track status
- `GET /api/analytics/weekly-trend`
  - 8-week trend data
- `GET /api/habits/<habit_id>/heatmap`
  - Habit completion dates
- `GET /api/heatmap/year`
  - Aggregated daily counts for past year
- `GET /api/export/csv`
  - Download analytics as CSV

### Utility

- `POST /api/demo/seed`
  - Adds/syncs demo habits and historical logs

## Data Model

### Habit

- `id` (PK)
- `name` (required)
- `icon`
- `color`
- `category` (default: `General`)
- `weekly_target` (1 to 7)
- `reminder_time` (`HH:MM` or null)
- `created_at`

### HabitLog

- `id` (PK)
- `habit_id` (FK -> Habit)
- `date`
- `completed` (bool)
- `note` (optional, max 280 chars)

## Key Product Flows

- Add habit with icon, color, category, weekly target, reminder time
- Mark complete from dashboard
- Add/edit today's note directly on dashboard cards
- Filter by completion status and category
- View performance and trends in analytics

## Frontend Scripts

From `frontend/`:

```bash
npm start
npm run build
npm test
```

## Backend Notes

- Database is SQLite and auto-migrates basic added columns at app startup
- CORS is enabled for local frontend development

## Troubleshooting

- If frontend cannot reach backend, verify backend is running on port 5000
- If database schema is out of sync, stop server and restart backend to run startup column checks
- If port is busy, change app run port in backend and update API base URL in frontend

## License

MIT License. See `LICENSE`.
