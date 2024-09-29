import { NextResponse, NextRequest } from "next/server";
import { exec } from "child_process";

export const POST = async (request) => {
  try {
    const { numSimulations } = await request.json();

    return new Promise((resolve, reject) => {
      exec(`python simulate.py ${numSimulations}`, (error, stdout, stderr) => {
        if (error) {
          return reject(
            NextResponse.json({ error: error.message }, { status: 500 })
          );
        }

        resolve(NextResponse.json({ result: stdout }, { status: 200 }));
      });
    });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
};

export const GET = async () => {
  return NextResponse.json(
    { message: "Use POST method to run simulations" },
    { status: 200 }
  );
};
