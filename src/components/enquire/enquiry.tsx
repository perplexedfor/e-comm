"use client"

import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"


export const FormSchema = z.object({
  from: z.string().email(),
  subject: z.string().min(10),
  text: z
    .string()
    .min(10, {  
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
})

export function TextareaForm() {
  return (
  <div className="mx-auto w-full max-w-sm space-y-2">
  <form className="grid gap-4" action={onSubmit}>
      <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Enter your name" required  />
      </div>
      <div className="grid gap-2">
          <Label htmlFor="from">From</Label>
          <Input id="from" name="from" type="email" placeholder="email" required  />
      </div>
      <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" placeholder="Enter your message" required />
      </div>
      <Button type="submit">Submit</Button>
  </form>
  </div>)
}
function onSubmit(data: FormData) {
  // const { toast } = useToast();
  // toast({
  //   title: "You submitted the following values:",
  //   description: (
  //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //     </pre>
  //   ),
  //   action: (
  //     <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
  //   ),
  // // })
  // sendMail(data.from, data.subject, data.text);
  console.log(data)
}

    