import { signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "../ui/button";

interface CommandMenuProps {
  isCommandOpen: boolean;
  toggleCommand: () => void;
  session: any;
  userImage: any;
  userName: string;
  signOut: typeof signOut;
}

export default function CommandMenu({
  isCommandOpen,
  toggleCommand,
  session,
  userImage,
  userName,
  signOut,
}: CommandMenuProps) {
  return (
    <div className="relative">
      <Button variant="outline" className="text-white" onClick={toggleCommand}>
        <Image
          src={userImage}
          alt={userName}
          width={30}
          height={30}
          className="rounded-full"
        />
      </Button>
      {isCommandOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <div className="p-2">
            <p className="text-gray-700 text-sm">{userName}</p>
            <Button
              variant="ghost"
              size="sm"
              className="w-full mt-2"
              onClick={() => signOut()}
            >
              Sign out
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
