import { NextRequest, NextResponse } from 'next/server';
import  prisma from '@/db';
import { Prisma } from '@prisma/client';


let data: Prisma.reviewsCreateInput;

export async function GET(req: NextRequest) {
    const reviews = await prisma.reviews.findMany();
    return NextResponse.json(reviews);
}

export async function POST(req: NextRequest) {

    // should add zod validation here
    data = await req.json()

    //create the review and link it to existing category
    const review = await prisma.reviews.create({
        data: {
            ...data,
        }
    });

    console.log(review.id);

    return NextResponse.json({ message: "Review Created" });
}
// export async function POST(req: NextRequest,context: {params: Params}) {
//     const category = context.params.category;
//     // should add zod validation here
//     data = await req.json();
//     //find the existing category
//     categoryobj = await client.category.findUnique({
//         where: {
//             name: category
//         }
//     })
//     if(!categoryobj){
//         throw new Error('Category not found');
//     }

//     //create the review and link it to existing category
//     const review = await client.reviews.create({
//         data: {
//             ...data,
//         }
//     });

//     console.log(review.id);

//     return NextResponse.json({ message: "Review Created" });
// }