"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { Button } from "./ui/button";

function SideMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <svg
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
        >
          <path
            d="M3 5H11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M3 12H16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M3 19H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </SheetTrigger>
      <SheetContent className="bg-[#525252] px-0" side="left">
        <SheetHeader className="pb-6 pt-8 pl-0 pr-8">
          <div className="relative w-2/4 h-10">
            <Image
              className="object-contain"
              src={
                "https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/tprhoiglqzbp9mbu8x8s/jhsereno-light"
              }
              alt="logo image"
              fill
            />
          </div>
        </SheetHeader>
        <ScrollArea className="h-screen">
          <div className="px-6 sm:px-8 flex flex-col justify-between w-full h-[80vh] pb-8">
            <div>
              <div className="space-y-2">
                <p className="text-white uppercase text-lg -tracking-tighter">
                  About Us
                </p>
                <ul className="text-slate-200 font-light -tracking-tighter space-y-1">
                  <li>
                    <Link href="#">Meet the Team</Link>
                  </li>
                  <li>
                    <Link href="#">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="#">Our Communities</Link>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <ul className="text-slate-200 font-light -tracking-tighter space-y-1">
                  <li>
                    <Link href="#">Services</Link>
                  </li>
                  <li>
                    <Link href="#">Home Valuation</Link>
                  </li>
                  <li>
                    <Link href="#">Homes Across America</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col w-full space-y-2">
              <Button className="bg-zinc-100" size={"lg"} variant={"secondary"}>
                Search for homes
              </Button>

              <Button className="bg-zinc-100" size={"lg"} variant={"secondary"}>
                Contact us
              </Button>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

export default SideMenu;
