"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

function BookNowDialog({
  size = "sm",
  text = "Book now",
  className,
}: {
  text?: string;
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={size} className={cn(className)}>
          {text}
        </Button>
      </DialogTrigger>
      <DialogContent className="md:grid md:grid-cols-2 max-w-lg md:max-w-screen-lg rounded-md bg-white md:bg-stone-50">
        <div className="md:h-[65vh] max-h-[70vh] rounded-md w-full h-full hidden md:grid md:grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="bg-white flex flex-col items-center justify-center gap-1 p-2 rounded-lg border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-stone-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <p className="text-stone-600 text-sm">Give us a call</p>

            <p className="text-[#B6A751] underline text-sm">(925) 553-6707</p>
          </div>
          <div className="bg-white flex flex-col gap-1 p-2 rounded-lg items-center justify-center border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-stone-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
              />
            </svg>

            <p className="text-stone-600 text-sm">Send us an email</p>

            <p className="text-[#B6A751] underline  text-sm">
              luxuryhomesinwc@icloud.com
            </p>
          </div>
          <div className="bg-white flex flex-col gap-1 p-2 rounded-lg col-span-full items-center justify-center border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-stone-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p className="text-stone-600 text-sm">Or visit our office</p>
            <p className="text-[#B6A751] underline text-sm max-w-[40ch] text-center text-balance">
              4337 Chabot Drive, Pleasanton, CA 94588Julie Hansen-Orvis | CA
              DRE# 00934447
            </p>
          </div>
        </div>

        {isChecked ? (
          <motion.div
            transition={{ type: "spring", bounce: 0.25 }}
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            className="h-full md:px-4"
          >
            <DialogHeader className="flex flex-row gap-4">
              <div className="px-3 py-2 rounded-lg border shadow-lg w-max h-max bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div className="!m-0">
                <DialogDescription className="text-left text-sm text-stone-600">
                  Write a letter
                </DialogDescription>
                <DialogTitle className="text-left text-lg text-stone-800">
                  Send us direct message
                </DialogTitle>
              </div>
            </DialogHeader>
            <form className="mt-8 h-full flex flex-col gap-2">
              <div>
                <Label className="text-stone-600">Email*</Label>
                <Input autoFocus />
              </div>
              <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <Label className="text-stone-600">Phone*</Label>
                  <Input />
                </div>
                <div className="w-full">
                  <Label className="text-stone-600">Name*</Label>
                  <Input />
                </div>
              </div>
              <div className="mt-4">
                <Label className="text-stone-600">Your message*</Label>
                <Textarea className="max-h-60" />
              </div>

              <Button size={"lg"} className="mt-4 md:mt-8 gap-2">
                Send <PaperPlaneIcon className="size-5" />
              </Button>
            </form>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{
                opacity: 0,
              }}
              transition={{
                delay: 0.25,
              }}
              animate={{
                opacity: 1,
              }}
              className="h-full flex flex-col justify-center gap-4 px-2"
            >
              <div className="flex flex-col justify-between gap-4">
                <DialogHeader>
                  <DialogTitle className="text-lg text-stone-800">
                    Terms and Agreements
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-sm -tracking-tighter text-pretty max-w-prose  text-stone-600">
                    By providing your contact information, you agree to our{" "}
                    <span className="underline text-black">Privacy Policy</span>{" "}
                    and consent to receive marketing communications via calls,
                    texts, and emails, including automated messages.
                  </p>
                  <p className="text-sm -tracking-tighter text-pretty max-w-prose  text-stone-600">
                    Consent isn’t required for purchases, and you can opt out
                    anytime. Reply &lsquo;stop&rsquo; to texts or use the
                    unsubscribe link in emails. Message and data rates may
                    apply.
                  </p>
                </div>
              </div>
              <Button
                onClick={() => {
                  setIsChecked(true);
                }}
                size={"lg"}
                className="mt-4 w-max ml-auto"
              >
                I agree
              </Button>
            </motion.div>
          </AnimatePresence>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default BookNowDialog;
