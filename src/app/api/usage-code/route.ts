import fs from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(req: NextRequest) {
  const { component, category } = await req.json();
  try {
    const filePath = path.join(
      process.cwd(),
     `src/react-components-txt/usage-txt/${category}/${component}-usage.txt`
    );
    console.log(`Reading file from path: ${filePath}`);
    const data = await fs.readFile(filePath, "utf-8");
    return NextResponse.json({ message: data, status: 200 });
  } catch (error: any) {
    console.error(`Error reading file: ${error.message}`);
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
