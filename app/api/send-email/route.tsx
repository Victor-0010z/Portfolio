import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json()

        // Validação básica
        if (!name || !email || !subject || !message) {
        return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
        }

        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
        return NextResponse.json({ error: "Email inválido" }, { status: 400 })
        }

        // Enviar email usando Resend
        const data = await resend.emails.send({
        from: "Portfolio Victor <onboarding@resend.dev>", // Email verificado no Resend
        to: "victorpereirafernandes20070101@gmail.com",
        replyTo: email, // Email de quem enviou o formulário
        subject: `[Portfolio] ${subject}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6366f1;">Nova mensagem do Portfolio</h2>
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Assunto:</strong> ${subject}</p>
            </div>
            <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                <h3 style="margin-top: 0;">Mensagem:</h3>
                <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
                Esta mensagem foi enviada através do formulário de contato do seu portfolio.
            </p>
            </div>
        `,
        })

        return NextResponse.json({ success: true, data })
    } catch (error) {
        console.error("[v0] Erro ao enviar email:", error)
        return NextResponse.json({ error: "Erro ao enviar mensagem. Tente novamente." }, { status: 500 })
    }
}
