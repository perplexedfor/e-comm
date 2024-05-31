
import { getproductDetails } from "@/app/lib/action";

import { Prisma } from "@prisma/client";
import { Label } from "../ui/label";
import { Images } from "./mainProductsImages/image";
export type product = {
    id: number;
    type: string;
    size: number;
    description: Prisma.JsonValue;
}   

export const Mainproducts = async ({name : name}:{name:string}) => {
    const products:product[] | undefined = await getproductDetails(name);
    const clean = name.replace(/_/g,' ');
    return (
       <div>
        <Label className="text-xl px-2">{clean}</Label>
        <Images products={products} name={name}/>
       </div>
    )
}