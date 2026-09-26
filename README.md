# 💪 FitLog – Workout Web APP

FitLog is a workout library track your fitness log for daily built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and **DaisyUI**. Users can explore exercises, view detailed workout information, create today's workout plan, save workouts for later, and track live workout statistics.

## Live Demo

- **Live Site:** _Add your Vercel link here_
- **GitHub Repository:** _Add your GitHub repository link here_

## Technologies Used

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify

## Key Features

1. **Workout Library** – Browse all exercises from the FitLog API in a grid layout 3\*4 style. Each Card Show image,category,workout name, list of equipment, gym Stats.
2. **Detailed Workout Pages** – You can browse individual Workout Details Page. where equipment, difficulty, sets, reps, duration, calories, rating, and step-by-step instructions. their are two button name "Today's Plan" or 'Save' you can add the workout for today's plan also you can save for future. when you add a counter is show in navbar.
3. **Today's Plan** – Add workouts to today's plan with live counters and statistics for exercises, minutes, and calories. Their are also button for View Details Page, Mark as Done and Delete Items from Save Plan. Mark as Done just delete the item form save.
4. **Save for Later** – Save favorite workouts and sort them by Duration, Calories, or Rating. same as Today's plan just mark as done button not here. 5.**Sort by** - Their are a Sort by Functionality for sort the current save items using: Duration, Calories, Rating
5. **Modern User Experience** – Responsive design, loading screens, toast notifications, and a custom 404 page for invalid routes.

## Responsive Design

The application is fully responsive and works smoothly on:

- 📱 Mobile
- 📱 Tablet
- 💻 Desktop

## Backend API Used

- **All Workouts:** `https://api.abcz.workers.dev/api/fitlog`
- **Workout Details:** `https://api.abcz.workers.dev/api/fitlog/:id`

## ⚙️ Run Locally

```bash
git clone https://github.com/Sagorhowlader/b14-a6-fitlog.git
cd b14-a6-fitlog
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.
