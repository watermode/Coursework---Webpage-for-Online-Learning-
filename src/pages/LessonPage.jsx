import { useParams, Link } from "react-router-dom";
import coursesData from "../data/coursesData";

export default function LessonPage() {
  const { id, lessonId } = useParams();
  const course = coursesData[id];

  if (!course) return <h1>Курс не знайдено 😢</h1>;

  const lesson = course.lessons.find((l) => l.id === Number(lessonId));

  if (!lesson) return <h1>Урок не знайдено 😢</h1>;

  const next = course.lessons.find((l) => l.id === Number(lessonId) + 1);

  return (
    <div style={{ maxWidth: "900px", margin: "20px auto", textAlign: "center" }}>
      <Link to={`/courses/${id}`}>&larr; Назад до курсу</Link>

      <h1>{lesson.title}</h1>

      {lesson.video && (
        <iframe
          width="800"
          height="450"
          src={lesson.video}
          title="Video lesson"
        ></iframe>
      )}

      <p style={{ textAlign: "left", marginTop: "20px" }}>{lesson.content}</p>

      {next && (
        <Link to={`/courses/${id}/lesson/${next.id}`}>
          <button style={{ marginTop: "20px" }}>➡ Наступний урок</button>
        </Link>
      )}
    </div>
  );
}
