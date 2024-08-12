import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Separator } from "./ui/separator";
import BookNowDialog from "./BookNowDialog";

function StagingAndPreparation() {
  return (
    <section className="bg-white mt-16 lg:mt-24 py-14 lg:py-20">
      <MaxWidthWrapper>
        <div className="mt-8 md:mt-12 py-6 px-4 sm:p-6 md:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-6xl lg:gap-x-16 lg:grid-cols-2">
            <div className="z-20 sm:mt-0 relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg sm:row-start-2 sm:p-0 lg:row-start-1 bg-gradient-to-t from-black/75 via-black/0 sm:bg-none">
              <h2 className="text-stone-100 sm:text-stone-800 font-bold -tracking-tighter text-2xl lg:text-4xl">
                My Staging Expertise
              </h2>
            </div>
            <div className=" grid gap-2 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-4 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
              <div className="relative w-full h-44 rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/axx0whb7xfmlwhvcckrr/image-023"
                  alt=""
                  className="w-full h-full md:h-full object-cover"
                  loading="lazy"
                  fill
                />
              </div>
              <div className="relative hidden w-full h-52 rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/tvntwvzwsjyi3ndwtpux/image-022"
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                  fill
                />
              </div>
              <div className="relative overflow-hidden hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32">
                <Image
                  src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/lpaq7euqjebackcuwsdu/image-024"
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                  fill
                />
              </div>
            </div>
            <div className="mt-4 flex gap-2 items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-4 lg:row-start-2">
              <p className="text-stone-600 text-sm md:text-base -tracking-tighter">
                Decor Guidance
              </p>
              <Separator orientation="vertical" />
              <p className="text-stone-600 text-sm md:text-base -tracking-tighter">
                Intentional ​​​​​​​Layout
              </p>
            </div>
            <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
              <BookNowDialog size="lg" />
            </div>
            <ul className="-tracking-tighter text-sm md:text-base pl-4 list-disc mt-4 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 text-stone-800">
              <li>Unclutter and organize your home</li>
              <li>Neatly arrange drawers and cabinets</li>
              <li>Keep pets outdoors or off the premises</li>
              <li>Play soft music</li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default StagingAndPreparation;
