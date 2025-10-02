import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET incidents
export async function GET() {
  const incidents = await prisma.sIEMIncident.findMany()
  return NextResponse.json(incidents)
}

// POST new incident
export async function POST(req: Request) {
  const body = await req.json()
  const incident = await prisma.sIEMIncident.create({
    data: {
      type: body.type,
      count: body.count ?? 0,
    },
  })
  return NextResponse.json(incident)
}

// PUT update count
export async function PUT(req: Request) {
  const body = await req.json()
  const updated = await prisma.sIEMIncident.update({
    where: { id: body.id },
    data: { count: body.count },
  })
  return NextResponse.json(updated)
}
