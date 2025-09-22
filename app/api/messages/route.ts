import { NextResponse } from 'next/server'

type Message = { email: string; message: string; date: string; seen: boolean }

// Attach messages to globalThis for dev HMR safety
declare global {
  var __messages__: Message[] | undefined
}
const messages: Message[] =
  globalThis.__messages__ ?? (globalThis.__messages__ = [])

export async function GET() {
  return NextResponse.json(messages)
}

export async function POST(req: Request) {
  const { email, message } = await req.json()
  if (!email || !message) {
    return NextResponse.json(
      { error: 'Email and message required' },
      { status: 400 }
    )
  }

  const newMsg: Message = {
    email,
    message,
    date: new Date().toISOString(),
    seen: false,
  }
  messages.push(newMsg)
  return NextResponse.json({ success: true, message: newMsg })
}

// PATCH /api/messages to mark as read
export async function PATCH(req: Request) {
  const { index } = await req.json() // message index for now
  if (index === undefined || index < 0 || index >= messages.length) {
    return NextResponse.json({ error: 'Invalid index' }, { status: 400 })
  }

  messages[index].seen = true
  return NextResponse.json({ success: true, message: messages[index] })
}
