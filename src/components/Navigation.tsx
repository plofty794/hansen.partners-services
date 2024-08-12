import BookNowDialog from "./BookNowDialog";
import DynamicNavigation from "./DynamicNavigation";
import MaxWidthWrapper from "./MaxWidthWrapper";

export function Navigation() {
  return (
    <MaxWidthWrapper className="sticky z-40 top-0 h-14 md:h-16 max-w-full px-0 md:px-0 backdrop-blur-lg inset-x-0 border-b bg-white/80">
      <div className="max-w-screen-2xl mx-auto px-4 flex items-center justify-center md:justify-between gap-4 w-full h-full">
        <DynamicNavigation />
        <BookNowDialog />
      </div>
    </MaxWidthWrapper>
  );
}
