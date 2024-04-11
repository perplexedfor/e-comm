

import { ReactNode } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Prisma } from "@prisma/client"
import prisma from "@/db"

import { createReview } from "../../app/lib/action"

const InputBox = (): ReactNode => {
    
    return (
<div className="mx-auto w-full max-w-sm space-y-2">
<form className="grid gap-4" action={createReview}>
    <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Enter your name" required  />
    </div>
    <div className="grid gap-2">
        <Label htmlFor="rating">Rating</Label>
        <Input id="rating" name="rating" type="number" placeholder="Enter your rating" required  />
    </div>
    <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Enter your message" required />
    </div>
    <Button type="submit">Submit</Button>
</form>
</div>)
}

// data = await req.json()
//     //create the review and link it to existing category
//     const review = await prisma.reviews.create({
//         data: {
//             ...data,
//         }
// });
// let data: Prisma.reviewsCreateInput;
export default InputBox;
