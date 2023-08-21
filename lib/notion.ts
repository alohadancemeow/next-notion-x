'use server'

import { cache } from "react";
import { notion } from "./notion-client";
import api from "./notion-api";

export const getDatabase = cache(async () => {
  const response = await notion.databases.query({
    database_id: process.env.DATABASE_ID as string,
    filter: {
      property: "Status",
      status: {
        equals: "Completed",
      },
    },
  });
  return response.results;
});

export const getUser = cache(async (userId: string) => {
  const response = await notion.users.retrieve({ user_id: userId });
  return response;
});

export const getPage = cache(async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
});

// # Using unoffial api
export const getPageContent = cache(async (slug: string) => {
  const recordMap = await api.getPage(slug);
  return recordMap;
});
