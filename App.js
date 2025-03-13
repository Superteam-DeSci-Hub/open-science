import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Link } from "react-router-dom";

const NewsSection = () => (
  <Card className="mt-6 p-4">
    <h2 className="text-xl font-bold">Latest News</h2>
    <ul className="mt-2">
      <li>📰 New research paper published on DeSci</li>
      <li>🚀 Upcoming blockchain webinar</li>
      <li>📢 Call for contributors to open research projects</li>
    </ul>
  </Card>
);

const EventsCalendar = () => (
  <Card className="mt-6 p-4">
    <h2 className="text-xl font-bold">Event Calendar</h2>
    <Calendar className="mt-4" />
  </Card>
);

const Navbar = () => (
  <nav className="flex justify-center space-x-6 p-4 border-b">
    <Link to="/" className="text-lg font-semibold">Home</Link>
    <Link to="/news" className="text-lg font-semibold">News</Link>
    <Link to="/events" className="text-lg font-semibold">Events</Link>
    <Link to="/about" className="text-lg font-semibold">About</Link>
  </nav>
);

const Header = () => (
  <header className="flex items-center p-4 border-b">
    <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
    <div className="flex-grow"></div>
    <Navbar />
  </header>
);

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <NewsSection />
      <EventsCalendar />
    </div>
  );
};

export default App;