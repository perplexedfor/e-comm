"use client"
import { ReactNode } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { ChangeEventHandler, useState } from "react";
// import { router } from "next/client";

import { createReview } from "../../app/lib/action"

let categories = [
      { id: 1, name: 'MCB_DB_BOX' },
      { id: 2, name: 'AC_BOX'  },
      { id: 6, name: 'MCCB'  },
      { id: 4, name: 'MAIN_SWITCH_CHANGEOVER'},
      { id: 3, name: 'GI_MODULAR_BOX'},
      { id: 5, name: 'BUS_BAR' },
      { id: 7, name: 'MCB' },
      { id: 8, name: 'ELCB' }
    ]

const InputBox = (): ReactNode => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState("");
    const [id, setId] = useState("");
    return (
<div className="mx-auto w-full max-w-sm space-y-2">
{/* action={createReview} */}
<form className="grid gap-4" >
    <div className="grid gap-2">
        <LabelledInput onChange={(e) => {
                            setName(e.target.value);
                        }} label="Username" placeholder="Name" />
    </div>
    
    <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Enter your message" onChange={(e) => {
                            setMessage(e.target.value);
                        }} required />
    </div>
    <div className="flex flex-row justify-between">
        <Select name="rating" value={rating} onValueChange={setRating} >
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Rating"/>
        </SelectTrigger>
        <SelectContent className="bg-gray-200">
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="1">1</SelectItem>
        </SelectContent>
        </Select>
        <Select name="id" value={id} onValueChange={setId}>
            <SelectTrigger className="w-[180px] ">
                <SelectValue placeholder="Product" />
            </SelectTrigger>
            <SelectContent className="max-h-[200px] bg-gray-200">
                <SelectItem key="0" value="0">General</SelectItem>
                {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id.toString()}>{category.name}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    </div>
    <Button type="submit" onClick={async () => {
    let res = await createReview({name:name, message:message, rating:rating, id:id});
    if(res){
        toast.error(res);
    }
    else{
        toast.success("Review Created");
    }}}>Submit</Button>
</form>
</div>)
}

function LabelledInput({ label, placeholder, type, onChange }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <Input onChange={onChange} type={type || "text"} id="first_name" placeholder={placeholder} required />
    </div>
}
interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    onChange: ChangeEventHandler<HTMLInputElement>
}

export default InputBox;
