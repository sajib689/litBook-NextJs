import Link from "next/link";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";


const Sidebar = () => {
    return (
        <div>
           <Link
           className='bg-purple-500 flex h-20 items-end justify-start rounded-md p-4'
            href='/store'>
           <div className='w-32 md:w-40'>
            <Logo/>
           </div>
           </Link>
           <div className='flex flex-wrap gap-2 justify-center md:grow flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
            <NavLinks></NavLinks>
            <form>
            <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:px-3">
            <ArrowLeftEndOnRectangleIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
            </form>
           </div>
        </div>
    );
};

export default Sidebar;