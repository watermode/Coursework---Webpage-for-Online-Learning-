import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CoursePage from "./pages/CoursePage";
import CourseLessons from "./pages/CourseLessons";
import Quiz from "./pages/Quiz";
import LessonPage from "./pages/LessonPage";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:id/quiz" element={<Quiz />} />
      <Route path="/courses/:id/lessons" element={<CourseLessons />} />
      <Route path="/courses/:id" element={<CoursePage />} />
      <Route path="/courses/:id/test" element={<TestPage />} />
      <Route path="/courses/:id/lesson/:lessonId" element={<LessonPage />} />
    </Routes>
  );
}

export default App;
