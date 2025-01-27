import { google } from "googleapis";
import { NextResponse } from "next/server";
import path from "path";
import Gini from "@/gini.json"

// Replace with your downloaded JSON key file
const keyFile = path.join(process.cwd(), `${Gini}`);

const auth = new google.auth.GoogleAuth({
  keyFile,
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

const sheets = google.sheets({ version: "v4", auth });

const spreadsheetId = "1vBJ6IIypg5ffu2Iw7mugNvtHhq-lfXhDSTVKtFYa7Yo"; // Replace with your spreadsheet ID
const range = "Sheet1!A1:F"; // Adjust range based on your sheet

export async function GET() {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      return NextResponse.json({ message: "No data found" }, { status: 404 });
    }

    const data = rows.slice(1).map((row) => ({
      title: row[0] || "",
      slug: row[1] || "",
      author: row[2] || "",
      date: row[3] || "",
      content: row[4] || "",
      ImageUrl: row[5] || ""
    }));

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
