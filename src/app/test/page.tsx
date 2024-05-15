
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import cherry from "../../public/cherry.jpg"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { TextareaForm } from "@/components/enquire/enquiry"
import InputBox  from "@/components/review/inputbox"
export default function Component() {
  return (
    <div className="px-4 py-6 md:py-12 lg:py-16">
      <div className=" max-w-6xl mx-auto items-start">
        <div className="grid gap-4 md:col-span-2">
          <div className="grid gap-4">
            <div className="flex flex-row justify-between">
              <h1 className="font-semibold text-3xl lg:text-4xl" id="overview">
              Acme Prism T-Shirt: The Cozy Chromatic Blend
              </h1> 
              <div>
                <Popover>
                  <PopoverTrigger><Button variant="secondary">Contact Us!!</Button></PopoverTrigger>
                  <PopoverContent><TextareaForm/></PopoverContent>
                </Popover>
              </div>
          </div>
            
            <Carousel className="max-w-sm md:max-w-md lg:max-w-lg">
              <CarouselContent className="">
                <CarouselItem className="max-w-md flex justify-center"><Image src="/cherry.jpg" alt="cherry" width={350} height={400} ></Image></CarouselItem>
                <CarouselItem className="max-w-md flex justify-center"><Image src="/cherry.jpg" alt="cherry" width={350} height={400} ></Image></CarouselItem>
                <CarouselItem className="max-w-md flex justify-center"><Image src="/cherry.jpg" alt="cherry" width={350} height={400} ></Image></CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="ml-12" />
              <CarouselNext className="mr-12" />
            </Carousel>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="size">
                Size
              </Label>
              <RadioGroup className="flex items-center gap-2" defaultValue="m" id="size">
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-xs"
                >
                  <RadioGroupItem id="size-xs" value="xs" />
                  XS
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-s"
                >
                  <RadioGroupItem id="size-s" value="s" />
                  S{"\n                              "}
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-m"
                >
                  <RadioGroupItem id="size-m" value="m" />
                  M{"\n                              "}
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-l"
                >
                  <RadioGroupItem id="size-l" value="l" />
                  L{"\n                              "}
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="size-xl"
                >
                  <RadioGroupItem id="size-xl" value="xl" />
                  XL
                </Label>
              </RadioGroup>
            </div>
          </div>
          <Separator className="border-t" />
          <div className="grid gap-4" id="specifications">
            <h2 className="font-semibold text-2xl lg:text-3xl">Specifications</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="grid gap-1">
                <p className="text-sm font-medium">SKU</p>
                <p>ACME-12345</p>
              </div>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Material</p>
                <p>60% combed ringspun cotton/40% polyester jersey</p>
              </div>
              <div className="grid gap-1">
                <p className="text-sm font-medium">Care Instructions</p>
                <p>Machine wash cold. Tumble dry low.</p>
              </div>
            </div>
          </div>
          <Separator className="border-t" />
          
          <div className="grid gap-4" id="reviews">
            <h2 className="font-semibold text-2xl lg:text-3xl">Reviews</h2>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <h3 className="font-semibold text-lg">Great quality</h3>
                <div className="flex items-center gap-2 text-sm">
                  <div className="font-semibold">Posted by: User123</div>
                  <div className="text-muted-foreground">September 20, 2023</div>
                </div>
                <p>
                  I absolutely love the design of this t-shirt. The prism-inspired pattern is so unique and adds a
                  stylish element to the tee. The quality of the fabric is also excellent - it feels soft and
                  comfortable against my skin. Overall, I'm very happy with my purchase and would definitely recommend
                  this t-shirt to others.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="font-semibold text-lg">Perfect fit</h3>
                <div className="flex items-center gap-2 text-sm">
                  <div className="font-semibold">Posted by: FashionFanatic</div>
                  <div className="text-muted-foreground">October 5, 2023</div>
                </div>
                <p>
                  The Acme Prism T-Shirt is incredibly versatile and can be styled in various ways to suit different
                  occasions. For a casual and laid-back look, pair the tee with your favorite jeans and sneakers. The
                  soft and comfortable fabric makes it perfect for all-day wear.
                </p>
                <Separator className="border-t" />
                <div>Write a review!! </div>
                <InputBox/>

              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}


