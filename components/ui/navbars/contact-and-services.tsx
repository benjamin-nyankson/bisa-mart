import React from "react";
import { Dropdown } from "../dropdown-trigger";
import {
  ChevronDown,
  Headphones,
  Info,
  MessageCircleMore,
  Phone,
} from "lucide-react";

export function ContactAndServices() {
  return (
    <div className="w-full container border-b text-gray-600 text-sm border-gray-200 h-20 px-5 flex items-center justify-between ">
      <div className="flex items-center gap-2">
        <Dropdown
          trigger={
            <div className="flex items-center justify-between">
              <button className="group-hover:text-white">Services</button>{" "}
              <ChevronDown className=" group-hover:text-white" />
            </div>
          }
          className="bg-gray-50 hover:bg-primary group "
        >
          <p> Content here</p>
        </Dropdown>

        <Dropdown
          trigger={
            <div className="flex items-center justify-between">
              <button className="group-hover:text-white">Buy / Sell</button>{" "}
              <ChevronDown className=" group-hover:text-white" />
            </div>
          }
          className="bg-gray-50 hover:bg-primary group"
        >
          <p> Content here</p>
        </Dropdown>

        <div className="ml-4 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Headphones size={iconSize} />
            <p>Customer Support</p>
          </div>
          <div className="flex items-center gap-2">
            <Info size={iconSize} />
            <p>Need Help</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Phone size={iconSize} />
          +233 55 214 1752
        </div>
        <div className="border rounded-md border-gray-200 w-fit p-2">
          <MessageCircleMore className="text-black" />
        </div>
      </div>
    </div>
  );
}

const iconSize = 15;
