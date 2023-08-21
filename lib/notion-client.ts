/**
 * Official api from notion,
 * @requires `NOTION_TOKEN` and `NOTION_DATABASE_ID` for query,
 * using with server actions.
 */

import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN as string,
});
