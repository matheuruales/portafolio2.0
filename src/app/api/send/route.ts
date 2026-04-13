import { z } from "zod";

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const apiUrl = process.env.CONTACT_API_URL;
    if (!apiUrl) {
      return Response.json(
        { error: "CONTACT_API_URL is not configured" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { success, data, error: zodError } = Email.safeParse(body);
    if (!success) {
      const firstIssue = zodError?.issues?.[0];
      return Response.json(
        { error: firstIssue?.message ?? "Datos inválidos" },
        { status: 400 }
      );
    }

    const res = await fetch(`${apiUrl}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.fullName,
        email: data.email,
        subject: "Mensaje desde el portafolio",
        message: data.message,
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      return Response.json(
        { error: result.detail || "Error sending email" },
        { status: res.status }
      );
    }

    return Response.json(result);
  } catch (error) {
    return Response.json({ error: "Unexpected error" }, { status: 500 });
  }
}
