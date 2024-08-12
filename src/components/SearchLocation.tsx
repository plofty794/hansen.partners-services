"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "./ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { LOCATIONS } from "@/constants";
import { useDebounceCallback } from "usehooks-ts";

function SearchLocation() {
  const [location, setLocation] = useState<
    (typeof LOCATIONS)[number] | undefined
  >(undefined);

  const debounced = useDebounceCallback(setLocation, 500);

  return (
    <Dialog
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setLocation(undefined);
        }
      }}
    >
      <DialogTrigger className="w-full" asChild>
        <Button
          size="sm"
          className="ml-auto max-w-md gap-2"
          variant={"secondary"}
        >
          <MagnifyingGlassIcon className="size-5 md:size-6" /> Search by Address
          or Area...
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 rounded-md">
        <Command>
          <CommandInput
            onValueChange={(v) => {
              if (!v) {
                debounced(undefined);
              } else {
                const searchResults = LOCATIONS.find((name) =>
                  name.name.toLowerCase().includes(v.toLowerCase())
                );

                debounced(searchResults);
              }
            }}
            placeholder="Search by address or area..."
          />

          <CommandList>
            {!location && <CommandEmpty>No results found.</CommandEmpty>}
            {location && (
              <>
                <CommandGroup heading="Locations">
                  {location.areas.map((area) => (
                    <CommandItem key={area}>{area}</CommandItem>
                  ))}
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Listings">
                  {location.listings.map((listing) => (
                    <CommandItem key={listing}>{listing}</CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

export default SearchLocation;
