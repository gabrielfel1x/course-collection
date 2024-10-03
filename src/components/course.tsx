import { getCourses } from "@/services/get-courses";
import CoursesRow from "./courses-row";

export default async function Courses() {
  const courses = await getCourses();

  return (
    <div className="bg-slate-100 py-6 rounded-3xl w-full border-t">
      <div className="container">
        <h2 className="font-bold text-xl pb-2">Cursos</h2>
        <div className="flex flex-col gap-4">
          {courses.map((course) => (
            <CoursesRow key={course.title} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
