import Courses from "@/components/course";
import Hero from "@/components/hero";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Courses />
    </div>
  );
}
