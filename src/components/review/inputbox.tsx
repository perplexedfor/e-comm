"use client"

import { ReactNode } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { createReview } from "../../app/lib/action"

    let categories = [
      { id: 1, name: 'MCB_DB_BOX' },
      { id: 2, name: 'AC_BOX'  },
      { id: 6, name: 'MCCB'  },
      { id: 4, name: 'MAIN_SWITCH_CHANGEOVER'  },
      { id: 3, name: 'GI_MODULAR_BOX'},
      { id: 5, name: 'BUS_BAR' },
      { id: 7, name: 'MCB' },
      { id: 8, name: 'ELCB' }
    ]


const InputBox = (): ReactNode => {
    return (
<div className="mx-auto w-full max-w-sm space-y-2">
<form className="grid gap-4" action={createReview}>
    <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Enter your name" required  />
    </div>
    
    <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Enter your message" required />
    </div>
    <div className="flex flex-row justify-between">
        <Select name="rating">
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Rating" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="1">1</SelectItem>
        </SelectContent>
        </Select>
        <Select name="id">
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Product" />
            </SelectTrigger>
            <SelectContent className="max-h-[200px]">
                <SelectItem key="0" value="0">General</SelectItem>
                {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id.toString()}>{category.name}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    </div>
    <Button type="submit">Submit</Button>
</form>
</div>)
}

export default InputBox;
