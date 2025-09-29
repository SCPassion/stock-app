"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserDropDown() {
  const router = useRouter();

  async function handleSignOut() {
    router.push("/sign-in");
  }

  const user = {
    name: "John",
    email: "john@example.com",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-400 hover:text-yellow-500"
        >
          <Avatar className="size-8">
            <AvatarImage src="/pythenian.jpg" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400">
        <div className="flex relative items-center gap-3 py-2">
          <Avatar className="size-10">
            <AvatarImage src="/pythenian.jpg" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
            <span className="text-sm text-gray-500">{user.email}</span>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
