# Demo Video Upload Page

A React application featuring a video upload grid with module selection, styled to match the Lrnsy website design.

## Features

- **Header**: Navigation menu matching the staging.lrnsy.com design
- **Main Content**: "Demo" page header
- **Video Upload Grid**: 4-grid layout for video uploads with:
  - Video thumbnail preview
  - Video title input
  - Module selection dropdown (Super Admin, School Admin, Guide, Student, Parent)
- **Footer**: Comprehensive footer with company information and links

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header component
│   ├── Header.css         # Header styles
│   ├── VideoUploadGrid.js # Video upload grid component
│   ├── VideoUploadGrid.css # Video grid styles
│   ├── Footer.js          # Footer component
│   └── Footer.css         # Footer styles
├── App.js                 # Main application component
├── App.css               # App-specific styles
├── index.js              # Application entry point
└── index.css             # Global styles
```

## Usage

1. **Upload Videos**: Click on any upload area to select a video file
2. **Add Titles**: Enter a title for each video in the input field
3. **Select Modules**: Choose a module from the dropdown for each video
4. **Remove Videos**: Click the X button on uploaded videos to remove them

## Technologies Used

- React 18
- Lucide React (icons)
- CSS3 with Flexbox/Grid
- Modern JavaScript (ES6+)

## Responsive Design

The application is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)
