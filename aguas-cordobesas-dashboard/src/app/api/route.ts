import { ClientModel } from '@/schemas/Client.schema';
import { initMongo } from '@/util/mongoUtil'
import { NextResponse } from 'next/server'

(initMongo())()
 
export async function POST() {

    const clientToUpload = new ClientModel({
        agId: 1
    })

    await clientToUpload.save()

    return NextResponse.json({ message: 'User Created' }) 
}

export async function GET() {
    const getResult = await ClientModel.find({})
    return NextResponse.json({ clients: getResult})
}