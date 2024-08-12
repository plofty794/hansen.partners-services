import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

function Networks() {
  return (
    <section className="mx-auto pb-10 lg:pb-16">
      <MaxWidthWrapper>
        <div className="mt-24">
          <h2 className="text-center text-4xl font-semibold -tracking-tighter max-w-prose text-stone-800">
            Our Exclusive Networks
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="relative mx-auto size-40">
            <Image
              className="object-contain"
              fill
              src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/p4rjc7oqvxtccrdqejbt/image-060"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="relative mx-auto size-40">
            <Image
              className="object-contain"
              fill
              src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ichuh7qj1rsu7mqxpl5p/image-069"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="relative size-40 md:size-32 mx-auto md:w-full md:col-span-full">
            <Image
              className="object-contain"
              fill
              src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/t3i3guvh1dnpwu8mrvuf/image-070"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <div className="w-full md:w-max md:mx-auto mt-8">
          <p className="text-stone-600 text-center -tracking-tighter max-w-prose text-pretty">
            Leading Real Estate Companies of The World® & Luxury Portfolio
            International
          </p>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="max-w-screen-2xl my-16 md:26 lg:my-32">
        <div className="flex-col md:flex-row mt-12 md:mt-24 flex items-center justify-center gap-4">
          <div className="relative w-full aspect-[4/3]">
            <Image
              className="object-cover"
              src={
                "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/og3ockhby4gghmrdfseo/edited-p-19"
              }
              alt=""
              fill
            />
          </div>
          <div className="relative mt-8 space-y-8 md:space-y-10 px-4 md:px-6">
            <p className="max-w-prose mt-0 lg:mb-8 font-semibold  text-stone-800 -tracking-tighter">
              JRockcliff is a founding member of Luxury Portfolio
              International®, the luxury division of Leading Real Estate
              Companies of the World®. With more than 500 member firms around
              the world, Our luxury listings are exposed to a vast global
              audience and reach potential buyers and investors in over 50
              countries.
            </p>
            <div className="space-y-4 w-full">
              <p className="text-center text-sm lg:text-base max-w-prose text-pretty -tracking-tighter text-stone-600">
                Who&apos;s Who in Luxury Real Estate
              </p>
              <p className="text-center text-sm lg:text-base max-w-prose text-balance -tracking-tighter text-stone-600">
                Who’s Who in Luxury Real Estate is a global collection of luxury
                real estate brokers.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col md:flex-row mt-8 md:mt-12 flex items-center justify-center gap-4">
          <div className="mt-8 space-y-4 px-4 md:px-8">
            <p className="max-w-prose md:text-left text-center text-stone-800 -tracking-tighter">
              Through our international affiliations, we have a strong presence
              in over 50 countries. Our luxury listings are sent to prominent
              international real estate sites, reaching over 70 million
              potential buyers and investors worldwide through our relationships
              with{" "}
              <span className="font-semibold underline">
                Leading Real Estate Companies of The World® & Luxury Portfolio
                International
              </span>
            </p>
            <div className="w-full">
              <p className="text-sm lg:text-base max-w-prose text-pretty -tracking-tighter text-stone-600">
                We also have several well-positioned affiliate offices in China,
                providing our clients with access to buyers in Hong Kong,
                Shanghai, and Beijing.
              </p>
            </div>
          </div>
          <div className="relative w-full aspect-[4/3]">
            <Image
              className="object-cover"
              src={
                "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ebvif7iqcx0lcjlvwyuz/edited-page-20"
              }
              alt=""
              fill
            />
          </div>
        </div>
        <div className="w-full mt-12 md:mt-16 space-y-4 md:space-y-6">
          <div className="mx-auto max-w-screen-lg aspect-video relative">
            <Image
              className="rotate-90 object-contain"
              src={
                "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/vxnwvueubpgtfzn1k3cs/edited-p25"
              }
              alt=""
              fill
            />
          </div>
          <div className="lg:mt-24 mt-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
            <div className="xl:shadow-xl mx-auto max-w-lg flex items-center justify-center flex-col md:flex-row xl:flex-col xl:items-start bg-white rounded-lg pt-0 p-2 pb-6 w-full">
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
            <div className="xl:shadow-xl mx-auto max-w-lg flex items-center justify-center flex-col md:flex-row xl:flex-col xl:items-start bg-white rounded-lg pt-0 p-2 pb-6 w-full">
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
            <div className="xl:shadow-xl mx-auto max-w-lg flex items-center justify-center flex-col md:flex-row xl:flex-col xl:items-start bg-white rounded-lg pt-0 p-2 pb-6 w-full">
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
            <div className="xl:shadow-xl mx-auto max-w-lg flex items-center justify-center flex-col md:flex-row xl:flex-col xl:items-start bg-white rounded-lg pt-0 p-2 pb-6 w-full">
              <div className="relative aspect-square size-32 md:size-28 lg:size-24 overflow-hidden">
                <Image
                  fill
                  className="object-cover"
                  src={
                    "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qljffx423kswkhh1oyc3/image-081"
                  }
                  alt=""
                />
              </div>
              <div className="px-5 space-y-2">
                <p className="text-center md:text-left text-stone-800 font-semibold lg:text-lg">
                  Drone Photography
                </p>
                <p className="text-center md:text-left text-balance -tracking-tighter text-stone-600 max-w-[40ch]">
                  Beautiful photography is a central part of our marketing plan
                  for your property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default Networks;
