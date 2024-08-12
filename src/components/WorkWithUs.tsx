"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useMediaQuery } from "usehooks-ts";
import { Separator } from "./ui/separator";
import BookNowDialog from "./BookNowDialog";
import Lottie from "lottie-react";
import newsletter from "../../public/newsletter.json";

function WorkWithUs() {
  const matches = useMediaQuery("(min-width: 1024px)");

  return (
    <section className="px-6 py-10 lg:pb-20">
      <MaxWidthWrapper>
        <div className="w-full flex flex-col items-center justify-center lg:justify-between lg:flex-row-reverse gap-4">
          <div className="w-full relative aspect-square max-w-xl rounded-md overflow-hidden">
            <Image
              className="object-cover"
              style={{
                clipPath: matches
                  ? "polygon(14% 0, 100% 1%, 100% 100%, 0 100%)"
                  : "polygon(0 0, 100% 1%, 100% 100%, 0 100%)",
              }}
              src={
                "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/skkve0aqzhkkyiytn92d/work-with-us"
              }
              alt=""
              fill
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-center text-lg md:text-xl -tracking-tighter text-stone-800 font-bold capitalize">
              Work with Us
            </p>
            <Separator className="mx-auto w-2/4" />
            <p className="text-center text-sm md:text-base -tracking-tighter text-stone-600">
              With decades of experience in luxurious Tri Valley real estate,
              our team is here to ensure that your dreams are a reality. Let us
              guide you through your home buying journey, contact us today!
            </p>
            <BookNowDialog
              text="Contact us"
              size={"lg"}
              className="mt-8 w-max mx-auto lg:py-8 lg:px-10 lg:uppercase"
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <SubscribeToNewsLetter />
    </section>
  );
}

function SubscribeToNewsLetter() {
  return (
    <Card className="grid grid-cols-1 md:grid-cols-[200px_1fr] mx-auto mt-8 md:mt-12 lg:mt-24 max-w-2xl shadow-xl">
      <div className="flex items-center justify-center w-full h-full p-4">
        <Lottie animationData={newsletter} />;
      </div>
      <div>
        <CardHeader>
          <CardTitle className="max-w-prose text-balance text-stone-800 text-2xl font-bold -tracking-tighter">
            Subscribe to our Newsletter!
          </CardTitle>
          <CardDescription className="text-stone-600 font-semibold -tracking-tighter text-balance max-w-prose">
            Subscribe to our Newsletter for latest news and updates. Stay tuned!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <Input id="name" placeholder="Your email" />
          </form>
        </CardContent>
        <CardFooter>
          <Button size={"lg"} className="w-full">
            Subscribe
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default WorkWithUs;
