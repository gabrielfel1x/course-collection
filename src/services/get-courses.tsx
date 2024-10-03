"use server";

import { notion } from "@/lib/notion";
import { NotionResponse } from "@/types";

export async function getCourses() {
  const database = (await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
  })) as unknown as NotionResponse;

  const filteredResponse = database.results.map((course) => {
    return course.properties;
  });

  console.log(filteredResponse);

  const courses = filteredResponse.map((course) => {
    return {
      title: course.title?.title?.[0].plain_text,
      description: course.description?.rich_text?.[0].plain_text,
      platform: course.platform?.rich_text?.[0].plain_text,
      imageUrl: course.imageUrl?.rich_text?.[0].plain_text,
    };
  });

  return courses;
}
