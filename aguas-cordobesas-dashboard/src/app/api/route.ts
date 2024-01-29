import dbConnect from '@/lib/mongodb';
import { ClientModel } from '@/schemas/Client.schema';
import { NextResponse } from 'next/server'

export async function route(req: any, res: any) {
    await dbConnect()
}
 
// export async function POST() {

//     const clientToUpload = new ClientModel({
//         agId: 1
//     })

//     await clientToUpload.save()

//     return NextResponse.json({ message: 'User Created' }) 
// }

// export async function GET() {
//     const getResult = await ClientModel.find({})
//     return NextResponse.json({ clients: getResult})
// }