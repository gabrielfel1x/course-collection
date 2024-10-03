"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface Course {
  title: string;
  description: string;
  platform: string;
  imageUrl: any;
}

interface CoursesRowProps {
  course: Course;
}

export default function CoursesRow({ course }: CoursesRowProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm relative">
      <div className="absolute top-6 right-6 cursor-pointer">
        <FontAwesomeIcon icon={faBookmark} className="size-6 text-gray-300" />
      </div>
      <div className="flex grow gap-4">
        <div className="content-center">
          <Image
            className="size-16"
            src={`/${course.imageUrl}`}
            alt={course.title}
            width={500}
            height={500}
          />
        </div>

        <div className="grow sm:flex">
          <div className="grow">
            <div className="text-gray-500 cursor-pointer">
              {course.platform}
            </div>
            <div className="font-bold text-lg">{course.title}</div>
            <div className="text-gray-400 text-sm">{course.description}</div>
          </div>
          <div className="content-end text-gray-400 text-sm">Em alta</div>
        </div>
      </div>
    </div>
  );
}
