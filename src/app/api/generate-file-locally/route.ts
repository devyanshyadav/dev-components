import { NextRequest, NextResponse } from "next/server";
import { copyFile } from "copy-file";

export async function POST(req: NextRequest) {
  const { component, category, variants } = await req.json();
  const { tsx, jsx } = variants;
  try {
    await copyFile(
      `public/react-components/${category}/(${component})/${component}-usage.tsx`,
      `src/react-components-txt/${category}/(${component})/${component}-usage.txt`
    );
    if (tsx) {
      await copyFile(
        `public/react-components/${category}/(${component})/${component}.tsx`,
        `src/react-components-txt/${category}/(${component})/${component}-tsx.txt`
      );
    }

    if (jsx) {
      await copyFile(
        `public/react-components/${category}/(${component})/${component}.jsx`,
        `src/react-components-txt/${category}/(${component})/${component}-jsx.txt`
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
