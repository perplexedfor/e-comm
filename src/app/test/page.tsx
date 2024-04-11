/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IHRVdmcYO2H
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
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
// import cherry from "../../public/cherry.jpg"

export default function Component() {
  return (
    <div className="px-4 py-6 md:py-12 lg:py-16">
      <div className=" max-w-6xl mx-auto items-start">
        {/* <div className="hidden md:flex md:col-span-1">
          <nav className="flex-1 border rounded-lg overflow-hidden dark:border-gray-800">
            <div className="flex flex-col gap-0.5">
              <Link
                className="flex-1 flex items-center gap-4 border-t first:mt-0 [&:has(:hover)]:bg-gray-100
                dark:[&:has(:hover)]:bg-gray-800"
                href="#"
              >
                <HomeIcon className="w-4 h-4 mr-2.5" />
                <span className="font-semibold text-sm py-3">Overview</span>
              </Link>
              <Link
                className="flex-1 flex items-center gap-4 border-t first:mt-0 [&:has(:hover)]:bg-gray-100
                dark:[&:has(:hover)]:bg-gray-800"
                href="#"
              >
                <SlidersHorizontalIcon className="w-4 h-4 mr-2.5" />
                <span className="font-semibold text-sm py-3">Specifications</span>
              </Link>
              <Link
                className="flex-1 flex items-center gap-4 border-t first:mt-0 [&:has(:hover)]:bg-gray-100
                dark:[&:has(:hover)]:bg-gray-800"
                href="#"
              >
                <GiftIcon className="w-4 h-4 mr-2.5" />
                <span className="font-semibold text-sm py-3">Benefits</span>
              </Link>
              <Link
                className="flex-1 flex items-center gap-4 border-t first:mt-0 [&:has(:hover)]:bg-gray-100
                dark:[&:has(:hover)]:bg-gray-800"
                href="#"
              >
                <ClipboardCheckIcon className="w-4 h-4 mr-2.5" />
                <span className="font-semibold text-sm py-3">Usage</span>
              </Link>
              <Link
                className="flex-1 flex items-center gap-4 border-t first:mt-0 [&:has(:hover)]:bg-gray-100
                dark:[&:has(:hover)]:bg-gray-800"
                href="#"
              >
                <MessageSquareIcon className="w-4 h-4 mr-2.5" />
                <span className="font-semibold text-sm py-3">Reviews</span>
              </Link>
            </div>
          </nav>
        </div> */}
        <div className="grid gap-4 md:col-span-2">
          <div className="grid gap-4">
            <h1 className="font-semibold text-3xl lg:text-4xl" id="overview">
              Acme Prism T-Shirt: The Cozy Chromatic Blend
            </h1>
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
              <Label className="text-base" htmlFor="color">
                Color
              </Label>
              <RadioGroup className="flex items-center gap-2" defaultValue="black" id="color">
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="color-black"
                >
                  <RadioGroupItem id="color-black" value="black" />
                  Black
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="color-white"
                >
                  <RadioGroupItem id="color-white" value="white" />
                  White
                </Label>
                <Label
                  className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                  htmlFor="color-blue"
                >
                  <RadioGroupItem id="color-blue" value="blue" />
                  Blue
                </Label>
              </RadioGroup>
            </div>
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
          <div className="grid gap-4" id="benefits">
            <h2 className="font-semibold text-2xl lg:text-3xl">Benefits</h2>
            <div className="grid gap-4 text-sm leading-loose">
              <p>
                The Acme Prism T-Shirt is designed to offer both style and comfort, making it the perfect addition to
                your wardrobe.
              </p>
              <p>
                The unique prism-inspired pattern adds a modern and eye-catching touch to the tee, ensuring that you
                stand out from the crowd.
              </p>
            </div>
          </div>
          <Separator className="border-t" />
          <div className="grid gap-4" id="usage">
            <h2 className="font-semibold text-2xl lg:text-3xl">Usage</h2>
            <div className="grid gap-4 text-sm leading-loose">
              <p>
                The Acme Prism T-Shirt is incredibly versatile and can be styled in various ways to suit different
                occasions.
              </p>
              <p>
                For a casual and laid-back look, pair the tee with your favorite jeans and sneakers. The soft and
                comfortable fabric makes it perfect for all-day wear.
              </p>
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
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

function ClipboardCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  )
}


function GiftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect width="20" height="5" x="2" y="7" />
      <line x1="12" x2="12" y1="22" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function MessageSquareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}


function SlidersHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="21" x2="14" y1="4" y2="4" />
      <line x1="10" x2="3" y1="4" y2="4" />
      <line x1="21" x2="12" y1="12" y2="12" />
      <line x1="8" x2="3" y1="12" y2="12" />
      <line x1="21" x2="16" y1="20" y2="20" />
      <line x1="12" x2="3" y1="20" y2="20" />
      <line x1="14" x2="14" y1="2" y2="6" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="16" x2="16" y1="18" y2="22" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
