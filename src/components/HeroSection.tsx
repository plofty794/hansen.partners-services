import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import BlurFade from "./magicui/blur-fade";

function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="flex items-center justify-center w-full h-screen">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            className="object-cover brightness-50 select-none hover:scale-105 transition-transform"
            fill
            src={"/hero.png"}
            alt="hero image"
          />
        </div>
        <div className="absolute z-20">
          <BlurFade delay={0.5} inView>
            <h1 className="font-semibold -tracking-tighter text-6xl md:text-7xl text-white">
              Services
            </h1>
          </BlurFade>
        </div>
      </div>
      <MaxWidthWrapper className="flex items-center justify-center h-full md:h-[140vh] lg:h-[120vh] w-full bg-stone-100 max-w-screen-2xl px-8 md:px-16 py-12 md:py-14 lg:py-16">
        <div className="w-full">
          <div className="mx-auto relative max-w-prose text-balance">
            <h2 className="text-center text-4xl md:text-6xl text-stone-800">
              Comprehensive Marketing Plan
            </h2>
            <div className="mx-auto hidden lg:block absolute -bottom-2 md:-bottom-4 inset-x-0 w-3/4 h-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1418 125"
                fill="#B6A751"
              >
                <path d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"></path>
              </svg>
            </div>
          </div>
          <div className="lg:mt-28 mt-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 items-stretch gap-4 w-full">
            <BlurFade delay={0.25} inView>
              <div className="h-full xl:shadow-xl mx-auto max-w-lg flex items-center justify-center flex-col md:flex-row xl:flex-col xl:items-start bg-white rounded-lg pt-0 p-2 pb-6 w-full">
                <div className="relative aspect-square size-32 md:size-28 lg:size-24 overflow-hidden">
                  <Image
                    fill
                    className="object-cover"
                    src={
                      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/rmtn3r5zpsljdsncbwa4/image-007"
                    }
                    alt=""
                  />
                </div>
                <div className="px-5 space-y-2">
                  <p className="text-center md:text-left text-stone-800 font-semibold lg:text-lg">
                    Responsive
                  </p>
                  <p className="text-center md:text-left text-balance -tracking-tighter text-stone-600">
                    I am always available via phone, text, or email.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <div className="h-full xl:shadow-xl mx-auto max-w-lg flex items-center justify-center flex-col md:flex-row xl:flex-col xl:items-start bg-white rounded-lg pt-0 p-2 pb-6 w-full">
                <div className="relative aspect-square size-32 md:size-28 lg:size-24 overflow-hidden">
                  <Image
                    fill
                    className="object-cover"
                    src={
                      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ks8ztlvw2b35q5qgs6xn/image-011"
                    }
                    alt=""
                  />
                </div>
                <div className="px-5 space-y-2">
                  <p className="text-center md:text-left text-stone-800 font-semibold lg:text-lg">
                    Syndication
                  </p>
                  <p className="text-center md:text-left text-balance -tracking-tighter text-stone-600">
                    I market your property locally, nationally, and
                    internationally.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade className="h-full" delay={0.75} inView>
              <div className="h-full xl:shadow-xl mx-auto max-w-lg flex items-center justify-center flex-col md:flex-row xl:flex-col xl:items-start bg-white rounded-lg pt-0 p-2 pb-6 w-full">
                <div className="relative aspect-square size-32 md:size-28 lg:size-24 overflow-hidden">
                  <Image
                    fill
                    className="object-cover"
                    src={
                      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zr3bugldblvebixagfs1/image-009"
                    }
                    alt=""
                  />
                </div>
                <div className="px-5 space-y-2">
                  <p className="text-center md:text-left text-stone-800 font-semibold lg:text-lg">
                    Virtual Tour
                  </p>
                  <p className="text-center md:text-left text-balance -tracking-tighter text-stone-600">
                    Let&apos;s make your home stand out with a high quality
                    virtual tour.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade className="h-full" delay={1} inView>
              <div className="h-full xl:shadow-xl mx-auto max-w-lg flex items-center justify-center flex-col md:flex-row xl:flex-col xl:items-start bg-white rounded-lg pt-0 p-2 pb-6 w-full">
                <div className="relative aspect-square size-32 md:size-28 lg:size-24 overflow-hidden">
                  <Image
                    fill
                    className="object-cover"
                    src={
                      "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/dywgmsgzddtcsqxagbwh/image-013"
                    }
                    alt=""
                  />
                </div>
                <div className="px-5 space-y-2">
                  <p className="text-center md:text-left text-stone-800 font-semibold lg:text-lg">
                    Photography
                  </p>
                  <p className="text-center md:text-left text-balance -tracking-tighter text-stone-600 max-w-[40ch]">
                    Beatiful, high-end photography is a central part of our
                    marketing plan for your property.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="absolute inset-x-0 w-full bg-gradient-to-t from-white bottom-0 h-2" />
    </section>
  );
}

export default HeroSection;
