import Image from "next/image";

function Footer() {
  return (
    <footer className="border-t bg-stone-100 w-full px-10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-stone-800 text-xl font-bold -tracking-tighter">
              Julie Hansen Partnership
            </h2>
            <p className="mt-4 -tracking-tighter text-sm text-balance max-w-prose text-stone-600">
              An elite group of the East Bay’s most talented and visionary real
              estate professionals believed buyers and sellers deserved more
              from their real estate company. More service. More resources. More
              integrity. More global reach. In a word, more of everything people
              should expect when they buy or sell their homes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold -tracking-tighter text-stone-80">
              Contact Information
            </h2>
            <p className="mt-4 -tracking-tighter text-sm text-balance max-w-prose text-stone-800">
              <strong>Address:</strong> 4733 Chabot Drive #100, Pleasanton, CA
              94588 <br />
              <strong>Julie Hansen-Orvis</strong> | CA DRE# 00934447
              <br />
              <strong>Phone:</strong> (925) 553-6707
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:luxuryhomesinwc@icloud.com" className="underline">
                luxuryhomesinwc@icloud.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-stone-800 text-xl font-bold -tracking-tighter">
              Miscellaneous
            </h2>
            <p className="mt-4 -tracking-tighter text-sm text-balance max-w-prose text-stone-600">
              Website Designed & Developed by{" "}
              <a href="#" className="underline">
                Luxury Presence
              </a>
              &copy; 2024 |{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <div className="w-full rounded-md flex flex-col md:flex-row md:justify-between items-center justify-center gap-4 p-4">
          <div className="flex items-center justify-center md:justify-start gap-4 w-full">
            <div className="relative size-16">
              <Image
                className="object-contain"
                src={
                  "https://1000logos.net/wp-content/uploads/2016/11/fb-logo-500x281.jpg"
                }
                alt=""
                fill
              />
            </div>
            <div className="relative size-10">
              <Image
                className="object-contain"
                src={
                  "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                }
                alt=""
                fill
              />
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end w-full gap-4">
            <div className="relative size-10">
              <Image
                className="object-contain"
                src={
                  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zbesma34ygwklawiysod/dark-realtor-logo_x1vczu"
                }
                alt=""
                fill
              />
            </div>
            <div className="relative size-10">
              <Image
                className="object-contain"
                src={
                  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/siun2nwoji9w7v0mssvy/dark-equal-logo_gahxpa"
                }
                alt=""
                fill
              />
            </div>
            <div className="relative size-10">
              <Image
                className="object-contain"
                src={
                  "https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/qje0mcix0r0qeoiikumu/sereno-logo"
                }
                alt=""
                fill
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-12 flex flex-col items-center justify-center gap-4">
          <div className="text-center">
            <p className="text-sm md:text-base -tracking-tighter text-stone-800 text-pretty">
              Website Designed & Developed by{" "}
              <a
                className="text-stone-800 underline"
                href="https://www.luxurypresence.com/"
                target="_blank"
              >
                Luxury Presence
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 text-center">
            <p className="text-sm md:text-base -tracking-tighter text-stone-800 text-pretty">
              Copyright {new Date().getFullYear()}
            </p>
            |
            <p className="text-sm md:text-base -tracking-tighter text-stone-800 text-pretty">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
