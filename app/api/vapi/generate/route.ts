import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { getRandomInterviewCover } from "@/lib/utils";
import { db } from "@/firebase/admin";

export async function GET() {
  return Response.json(
    {
      success: true,
      data: "VAPI API is working!",
    },
    { status: 200 }
  );
}

export async function POST(request: Request) {
  const { type, role, level, techstack, amount, userid } = await request.json();

  if (!userid) {
    return Response.json(
      { success: false, error: "User ID is missing" },
      { status: 400 }
    );
  }

  try {
    const { text: questions } = await generateText({
      model: google("gemini-2.5-pro-exp-03-25"),
      prompt: `Prepare questions for a job interview...
        The job role is: ${role}.
        The job exerience level is: ${level}.
        The tech stack used in the job is: ${techstack}.
        The focus beetween behavioral and technical questions should lean towards: ${type}.
        The amount of questions required is: ${amount}.
        Please return only the questions as a raw JSON array like ["Question 1", "Question 2"]. Do not format with Markdown, do not use \`\`\`, just raw JSON.`,
    });

    const cleanText = questions.replace(/```json\s*|```/g, "").trim();
    const parsedQuestions = JSON.parse(cleanText);

    const interview = {
      role,
      type,
      level,
      techstack: techstack.split(","),
      questions: parsedQuestions,
      userId: userid,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString(),
    };

    await db.collection("interviews").add(interview);

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error in POST request:", error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}
