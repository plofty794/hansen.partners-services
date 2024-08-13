"use client";

import MaxWidthWrapper from "./MaxWidthWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buttonVariants } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { BUYING_PROCESS, SELLING_PROCESS } from "@/constants";
import { useMediaQuery } from "usehooks-ts";
import Image from "next/image";
import { motion } from "framer-motion";

function HowItWorks() {
  const matches = useMediaQuery("(min-width: 768px)");
  const [selectedTab, setSelectedTab] = useState<string>("selling");

  return (
    <section className="my-12 md:20 lg:mt-28">
      <MaxWidthWrapper className="max-w-screen-2xl">
        <div className="space-y-2 md:space-y-4">
          <h2 className="text-center font-bold text-[#B6A751] -tracking-tighter text-3xl md:text-5xl">
            How it works?
          </h2>
          <div className="w-full sm:w-max sm:mx-auto">
            <p className="text-stone-600 text-sm sm:text-base -tracking-tighter max-w-prose text-pretty text-center">
              Learn the essentials of buying or selling a property. Our
              step-by-step guides will walk you through each process.
            </p>
          </div>
        </div>
        <div className="w-full mt-8 md:mt-12">
          <Tabs onValueChange={(v) => setSelectedTab(v)} defaultValue="selling">
            <TabsList className="mt-4 px-4 md:px-0 w-full items-center gap-2 md:gap-4 bg-white p-0">
              <TabsTrigger
                className={buttonVariants({
                  variant: "secondary",
                  size: "lg",
                  className: cn(
                    "-tracking-tighter text-stone-800 w-full md:w-max",
                    selectedTab === "selling"
                      ? "ring-2 ring-offset-1 ring-stone-600 font-bold opacity-1"
                      : "ring-0 text-stone-600 opacity-70"
                  ),
                })}
                value="selling"
              >
                {matches ? "The" : ""} Selling Process
              </TabsTrigger>
              <TabsTrigger
                className={buttonVariants({
                  variant: "secondary",
                  size: "lg",
                  className: cn(
                    "-tracking-tighter text-stone-800 w-full md:w-max",
                    selectedTab === "buying"
                      ? "ring-2 ring-offset-1 ring-stone-600 font-bold opacity-1"
                      : "ring-0 text-stone-600 opacity-70"
                  ),
                })}
                value="buying"
              >
                {matches ? "The" : ""} Buying Process
              </TabsTrigger>
            </TabsList>
            <div className="mt-6">
              <TabsContent
                className="rounded-xl shadow-2xl space-y-4 md:space-y-8 w-full border p-4 sm:p-6 md:p-12"
                value="selling"
              >
                {SELLING_PROCESS.map((process, idx) => (
                  <motion.div
                    initial={{
                      x: -100,
                      opacity: 0,
                    }}
                    transition={{
                      delay: 0.25,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    key={process.title}
                    className="w-full grid grid-cols-[50px_auto] items-center justify-center md:items-start md:grid-cols-[100px_auto_1fr]"
                  >
                    <div className="w-full md:w-max md:mr-auto px-2 py-1.5 md:px-3 md:py-2 rounded-md bg-[#B6A751]">
                      <p className="text-white text-2xl md:text-3xl font-bold -tracking-tighter text-center">
                        #{idx + 1}
                      </p>
                    </div>
                    <div className="ml-4 md:ml-0 max-w-[30ch] lg:max-w-[40ch]">
                      <p className="text-stone-800 lg:text-xl -tracking-tighter text-balance font-semibold">
                        {process.title}
                      </p>
                    </div>
                    <div className="mt-6 md:mt-0 grid-cols-1 grid md:grid-cols-2 sm:gap-4 col-span-full md:col-start-2 w-full">
                      <p className="text-sm lg:text-base max-w-prose text-pretty text-stone-600 -tracking-tighter">
                        {process.description}
                      </p>
                      <div className="rounded-md overflow-hidden mx-auto lg:w-3/4 w-full aspect-[4/3] md:flex items-center justify-center hidden">
                        <div className="relative w-full h-full rounded-md">
                          <Image
                            className="object-cover"
                            src={process.imageUrl}
                            alt=""
                            fill
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </TabsContent>
              <TabsContent
                className="space-y-4 md:space-y-8 w-full border rounded-md shadow-lg p-4 sm:p-6 md:p-12"
                value="buying"
              >
                {BUYING_PROCESS.map((process, idx) => (
                  <motion.div
                    initial={{
                      x: -100,
                      opacity: 0,
                    }}
                    transition={{
                      delay: 0.25,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    key={process.title}
                    className="w-full grid grid-cols-[50px_auto] items-center justify-center md:items-start md:grid-cols-[100px_auto_1fr]"
                  >
                    <div className="w-full md:w-max md:mr-auto px-2 py-1.5 md:px-3 md:py-2 rounded-md bg-[#B6A751]">
                      <p className="text-white text-2xl md:text-3xl font-bold -tracking-tighter text-center">
                        #{idx + 1}
                      </p>
                    </div>
                    <div className="ml-4 md:ml-0 max-w-[30ch] lg:max-w-[40ch]">
                      <p className="text-stone-800 lg:text-xl -tracking-tighter text-balance font-semibold">
                        {process.title}
                      </p>
                    </div>
                    <div className="mt-6 md:mt-0 grid-cols-1 grid md:grid-cols-2 sm:gap-4 col-span-full md:col-start-2 w-full">
                      <p className="text-sm lg:text-base max-w-prose text-pretty text-stone-600 -tracking-tighter">
                        {process.description}
                      </p>
                      <div className="rounded-md overflow-hidden mx-auto lg:w-3/4 w-full aspect-[4/3] md:flex items-center justify-center hidden">
                        <div className="relative w-full h-full rounded-md">
                          <Image
                            className="object-cover"
                            src={process.imageUrl}
                            alt=""
                            fill
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="  my-16 md:26 lg:my-32">
        <h2 className="capitalize text-center text-white font-bold -tracking-tighter text-3xl md:text-4xl">
          <span className="bg-[#B6A751] px-1.5 py-0.5 md:px-2 md:py-1">
            Experience you can trust
          </span>
        </h2>
        <div className="mt-12 md:mt-24 flex items-center justify-center gap-4">
          <div className="relative mt-8 space-y-4 px-4 md:px-8">
            <p className="mt-0 lg:mb-8 md:text-left font-semibold text-center text-lg md:text-xl text-stone-800 -tracking-tighter">
              <span className="relative">
                Over 33 Years
                <span className="hidden lg:block absolute -bottom-2 inset-x-0 w-full h-1.5">
                  <svg
                    className="h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1418 125"
                    fill="#B6A751"
                  >
                    <path d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"></path>
                  </svg>
                </span>
              </span>{" "}
              of Real Estate Success
            </p>
            <div className="w-full">
              <p className="text-sm lg:text-base max-w-prose text-pretty -tracking-tighter text-stone-600">
                We provide every one of our clients with a level of service they
                won’t find anywhere else. We give them what they need, often
                before they know they need it. ​​​​​​​In real estate, almost
                everything can be negotiated. When you choose Hansen Partners It
                is experience is 100% nonnegotiable. ​​​​​​​ ​​​​​​​And it’s an
                experience like no other.
              </p>
            </div>
          </div>
          <div className="relative hidden md:block w-3/4 aspect-[4/3]">
            <Image
              className="object-contain"
              src={
                "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/azjfmtzx6evxpubynfci/edit-page-11r2"
              }
              alt=""
              fill
            />
          </div>
        </div>
        <div className="mt-8 md:mt-12 flex items-center justify-center gap-4">
          <div className="relative hidden md:block w-3/4 aspect-[4/3]">
            <Image
              className="object-contain"
              src={
                "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/m5ea1kpipv5tiflnfx8t/edited-p-12"
              }
              alt=""
              fill
            />
          </div>
          <div className="mt-8 space-y-4 px-4 md:px-8">
            <p className="md:text-left font-semibold text-center text-lg md:text-xl text-stone-800 -tracking-tighter">
              We Want To Create An Unforgettable Experience For You...
            </p>
            <div className="w-full">
              <p className="text-sm lg:text-base max-w-prose text-pretty -tracking-tighter text-stone-600">
                We combine data gained from your home’s Comparative Market
                Analysis with local market research to create a marketing plan
                designed to help you meet your selling goals. Your home’s
                carefully designed plan will include a range of online, print,
                and other marketing tools targeted to the best-qualified pool of
                buyers. ​​​​​​​ Successfully marketing a home in today’s real
                estate environment requires a firm with experience and
                flexibility. Hansen Partners provides both.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full mt-12 md:mt-16 space-y-4 md:space-y-6">
          <p className="font-semibold text-center text-lg md:text-xl text-stone-800 -tracking-tighter">
            The Hansen Partners Communications Tablet
          </p>
          <div className="mx-auto max-w-screen-md aspect-[2/1] relative">
            <Image
              src={
                "https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/fuammgjubhjfvgcqleef/edit-image-056"
              }
              alt=""
              fill
            />
          </div>
          <div className="w-full md:w-max md:mx-auto">
            <div className="w-full px-4 md:px-8">
              <p className="text-sm md:text-base max-w-prose text-pretty -tracking-tighter text-stone-600">
                We have created this as a wonderful tool so that we can
                communicate with you daily, provide you with updates on what is
                happening with your home. We are available at the with a click
                of your tablet.
              </p>
            </div>
            <div className="mt-6 md:mt-8 px-4 md:px-8">
              <ul className="-tracking-tighter text-balance text-sm lg:text-base text-stone-800 list-disc space-y-4 lg:space-y-6 max-w-prose px-8">
                <li>
                  Review all documents and sign in the comfort of your home or
                  anywhere.
                </li>
                <li>
                  Stay up to date on all marketing activities, review materials,
                  photos, etc. in real time.
                </li>
                <li>
                  Meet with us face to face on our Gotomeeting.com platform to
                  go over and discuss the events of the week.
                </li>
                <li>
                  You have your own email assigned just for you and your common
                  space to quickly write a note, or quickly send a video message
                  to us for fast communication using our Bomb bomb video
                  messaging system.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 lg:mt-20 lg:w-max lg:mx-auto">
          <p className="text-sm md:text-base max-w-screen-lg text-pretty -tracking-tighter text-stone-800">
            We believe that transparency and guiding you and your family through
            the process is key to having the best experience. During these
            uncertain times. It is a good feeling to know you have some one with
            a proven track record you can count on. We will be here to handle
            your needs during the Real Estate process. We think of it before a
            need even arises. Because, that is just what we do. Who you work
            with does matter!
          </p>
        </div>
        <div className="mt-20 lg:mt-28">
          <div className="space-y-6">
            <p className="text-center text-xl md:text-2xl text-pretty -tracking-tighter text-stone-800">
              We Market Your Home to The World
            </p>
            <p className="text-center text-base md:text-xl text-pretty -tracking-tighter text-stone-600">
              Our Online Marketing Strategy
            </p>
            <div className="w-full md:mx-auto md:w-max">
              <p className="max-w-prose text-center text-base md:text-lg text-balance -tracking-tighter text-stone-800">
                ​​​​​​​The Bay Area remains one of the world&apos;s most
                sought-after regions to live in, and when looking to sell, it is
                vital that your home be marketed online to audiences locally,
                nationally, and internationally.
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
            <div className="w-full flex flex-col space-y-4">
              <p className="text-stone-800 font-bold text-center">
                Local Exposure
              </p>

              <p className="mx-auto text-stone-600 -tracking-tighter text-balance sm:text-pretty max-w-prose">
                Through our partnership with Nextdoor, the private online social
                network now used in over 80% of U.S. neighborhoods and virtually
                all Bay Area neighborhoods, we make sure your home receives
                targeted local exposure. When you list your home with Hansen
                Partners it will automatically appear on Nextdoor in your
                neighborhood.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="text-stone-800 font-bold text-center">
                National Exposure
              </p>
              <p className="mx-auto text-stone-600 -tracking-tighter text-balance sm:text-pretty max-w-prose">
                We secure strategic positioning and enhancement on Realtor.com,
                Trulia, and Zillow, driving more consumers to your home and
                increasing exposure. We will receive every inquiry about your
                property directly.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="text-stone-800 font-bold text-center">
                International Exposure
              </p>
              <p className="mx-auto text-stone-600 -tracking-tighter text-balance sm:text-pretty max-w-prose">
                To expose your luxury listing to millions of potential
                homebuyers worldwide, we promote on prominent international real
                estate portals, including: Wall Street Journal,
                LuxuryPortfolio.com, LuxuryRealEstate.com, LeadingRE.com,
                UniqueHomes.com, China.apr.com, Caimeiju, Juwai, Country Life UK
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default HowItWorks;
