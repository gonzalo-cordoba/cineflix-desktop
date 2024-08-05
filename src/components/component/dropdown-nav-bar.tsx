import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LocationIcon from "../../../public/LocationIcon";

export function DropdownNavBar() {
  return (
    <div className="w-full max-w-md mx-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            <div className="flex items-center">
              <LocationIcon className="w-4 h-4 mr-2" />
              <span className="font-extrabold">Elige un cine</span>
            </div>
            <ChevronDownIcon className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full p-4 space-y-2">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar cine..."
              className="pl-10 w-full"
            />
          </div>
          <div className="text-center text-muted-foreground hover:bg-muted/5 rounded-md px-2 py-1 cursor-pointer">
            Mostrar más
          </div>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <div className="flex items-center justify-between">
                <span>Cine 1</span>
                <CheckIcon className="w-4 h-4 text-primary" />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center justify-between">
                <span>Cine 2</span>
                <CheckIcon className="w-4 h-4 text-primary" />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center justify-between">
                <span>Cine 3</span>
                <CheckIcon className="w-4 h-4 text-primary" />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center justify-between">
                <span>Cine 4</span>
                <CheckIcon className="w-4 h-4 text-primary" />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex items-center justify-between">
                <span>Cine 5</span>
                <CheckIcon className="w-4 h-4 text-primary" />
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <div className="text-center text-muted-foreground hover:bg-muted/5 rounded-md px-2 py-1 cursor-pointer">
            Mostrar menos
          </div>
          <div className="flex justify-end">
            <Button>Aplicar</Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function LocateIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
