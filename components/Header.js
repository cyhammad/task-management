import Image from "next/image";
import {
  MagnifyingGlassIcon,
  BellIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline"
import {
  ChevronDownIcon,
} from "@heroicons/react/20/solid"
import Dropdown from "./Dropdown";
import Link from "next/link";

function Header(props) {
  return (
    <div>
        <div className="h-16 flex xl:mx-auto border-b-2 border-gray-100 px-4 sm:px-6 md:px-8 lg:px-10 shadow-sm">
          {/* Left */}
          <div className="relative w-24 cursor-pointer">
            <Image src="/LOGO.png" layout="fill" alt="Profile" objectFit="contain" />
          </div>

          <div className="justify-between grow hidden lg:inline-flex">
            {/* Middle */}
            <div className="flex items-center space-x-10 text-gray-400 font-medium">
              <div className="ml-10"></div>
              <div className={props.selectedTab == "work"? "nav-item nav-selected": "nav-item"}>
                <div className="text-center">
                  <Link href="/">
                    <a>
                      Work
                    </a>
                  </Link>
                </div>
              </div>
              <div className={props.selectedTab == "settings"? "nav-item nav-selected": "nav-item"}>
                <div className="text-center">
                  <Link href="/settings">
                    <a>
                      Settings
                    </a>
                  </Link>
                </div>
              </div>
              
            </div>

            {/* Right */}
            <div className="flex items-center justify-end space-x-4">
              <MagnifyingGlassIcon className="navBtn" />
              <div className="relative navBtn">
                <div className="absolute h-2 w-2 bg-yellow-400 rounded-full right-1"></div>
                <BellIcon className="navBtn" />
              </div>
              <div className="flex items-center space-x-1 navBtn">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://links.papareact.com/3ke" alt="profile" className="h-10 cursor-pointer rounded-full" />
                <ChevronDownIcon className="h-4" />
              </div>
            </div>
          </div>

          <div className="flex justify-end grow items-center lg:hidden">
            <Dropdown toggleBtn={<Bars3Icon className="w-6 h-6 cursor-pointer" />} />
          </div>
        </div>
        <div className="flex lg:hidden  pt-4 px-4 sm:px-6 md:px-8 space-x-4">
          <div  className="rounded-md text-sm px-1">
            <Link href="/">
              Work
            </Link>
          </div>
          <div  className="rounded-md text-sm px-1 text-gray-400">
            <Link href="/settings">
              Settings
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Header
