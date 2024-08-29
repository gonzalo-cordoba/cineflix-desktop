import {
  DesktopContainer,
  MobileContainer,
  BackButton,
} from "@/components/user";

export default function User() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen lg:justify-start lg:items-start lg:mt-28 lg:ml-16">
      <DesktopContainer />
      <MobileContainer />
      <BackButton />
    </div>
  );
}
