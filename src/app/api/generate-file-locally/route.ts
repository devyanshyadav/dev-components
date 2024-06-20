import { NextRequest, NextResponse } from "next/server";
import { copyFile } from "copy-file";

export async function POST(req: NextRequest) {
  const { component, category, variants } = await req.json();
  const { tsx, jsx } = variants;
  try {
    await copyFile(
      `public/usage-components/${category}/${component}-usage.tsx`,
      `src/txt-data/usage-txt/${category}/${component}-usage.txt`
    );
    if (tsx) {
      await copyFile(
        `public/preview-components/${category}/${component}.tsx`,
        `src/txt-data/tsx-txt/${category}/${component}.txt`
      );
    }

    if (jsx) {
      await copyFile(
        `public/preview-components/${category}/${component}.jsx`,
        `src/txt-data/jsx-txt/${category}/${component}.txt`
      );
    }

    if (!tsx && !jsx) {
      return NextResponse.json({ message: "Invalid variants", status: 500 });
    }

    return NextResponse.json({ message: "data", status: 200 });
  } catch (error: any) {
    console.error(`Error reading file: ${error.message}`);
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
