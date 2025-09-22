import { NextResponse } from 'next/server'

type Message = { email: string; message: string; date: string }

// Make a single global storage (safe for dev/HMR). TS augmentation to avoid errors.
declare global {
  // eslint-disable-next-line no-var
  var __messages__: Message[] | undefined
}

// Ensure messages exists exactly once on globalThis
const messages: Message[] =
  globalThis.__messages__ ?? (globalThis.__messages__ = [])

export async function GET() {
  return NextResponse.json(messages)
}

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json()
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message required' },
        { status: 400 }
      )
    }

    const newMsg: Message = { email, message, date: new Date().toISOString() }
    messages.push(newMsg)
    return NextResponse.json({ success: true, message: newMsg })
  } catch (e) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }
}
