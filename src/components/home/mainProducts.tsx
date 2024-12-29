
import { getproductDetails } from "@/app/lib/action";
import { useRef } from "react";
import { Prisma } from "@prisma/client";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image  from "next/image";
import Link from "next/link";
import { Images } from "./mainProductsImages/image";
export type product = {
    id: number;
    type: string;
    size: number;
    description: Prisma.JsonValue;
}   

export const Mainproducts = async ({name : name}:{name:string}) => {
    const products:product[] | undefined = await getproductDetails(name);
    return <Images products={products} name={name}/>
}