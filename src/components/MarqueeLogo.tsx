import Image from "next/image";
import Marquee from "@/components/magicui/marquee";
import { SPONSORS } from "@/constants";
import MaxWidthWrapper from "./MaxWidthWrapper";

function MarqueeLogo() {
  return (
    <MaxWidthWrapper>
      <Marquee
        reverse
        pauseOnHover
        vertical={false}
        className="[--duration:20s]"
      >
        {SPONSORS.map((sponsor, idx) => (
          <div key={idx} className="relative h-40 w-40">
            <Image
              className="object-contain"
              src={sponsor.imageUrl}
              alt=""
              fill
            />
          </div>
        ))}
      </Marquee>
    </MaxWidthWrapper>
  );
}

export default MarqueeLogo;
