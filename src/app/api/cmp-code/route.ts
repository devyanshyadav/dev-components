import fs from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(req: NextRequest) {
  const { component, category, variants } = await req.json();
  const { tsx, jsx } = variants;

  try {
    let tsxData = null;
    let jsxData = null;

    if (tsx) {
      const tsxFilePath = path.join(
        process.cwd(),
        `src/react-components-txt/tsx-txt/${category}/${component}.txt`
      );
      tsxData = await fs.readFile(tsxFilePath, "utf-8");
    }

    if (jsx) {
      const jsxFilePath = path.join(
        process.cwd(),
      `src/react-components-txt/jsx-txt/${category}/${component}.txt`
      );
      jsxData = await fs.readFile(jsxFilePath, "utf-8");
    }

    if (!tsx && !jsx) {
      return NextResponse.json({ message: "Invalid variants", status: 500 });
    }

    return NextResponse.json({
      message: { tsxCode: tsxData, jsxCode: jsxData },
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
