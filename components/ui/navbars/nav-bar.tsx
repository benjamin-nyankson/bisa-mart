import Image from "next/image";
import React from "react";
import { Dropdown } from "../dropdown-trigger";
import { TextInput } from "../text-input";
import { Button } from "../button";
import { ChevronDown, Heart, MapPin, Search, UserRound } from "lucide-react";
import { colors } from "@/lib/colors";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="w-full h-20 bg-secondary border-t border-gray-200 flex items-center px-5 gap-2 justify-start lg:justify-between">
      <Link href="/">
        <Image src="/bisame.png" alt="bisame-icon" width={100} height={500} />
      </Link>
      <div className="flex items-center gap-3">
        <Dropdown
          trigger={
            <button className="flex items-center gap-2 group justify-between w-full">
              <MapPin size={15} /> All Ghana
              <ChevronDown />
            </button>
          }
          className=" border border-secondary hover:bg-amber-50 bg-white"
        >
          <div className="text-amber-300 ">hello</div>
        </Dropdown>
        <div className="block lg:hidden bg-white p-2 rounded-full cursor-pointer">
          <Search size={20} />
        </div>
        <TextInput
          placeholder="I am looking for..."
          className="bg-white hidden  lg:block xl:block"
        />
      </div>

      <div className="hidden  lg:block xl:block">
        <div className="flex items-center gap-3 ">
          <Button size="lg" className="px-5">
            SELL
          </Button>
          <Heart color="white" />
          <UserRound size={32} color={colors.secondary.DEFAULT} />
        </div>
      </div>
    </div>
  );
}
