import Link from "next/link";
import NavLinks from "./NavLinks";
import Logo from "./Logo";


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
           <div>
            <NavLinks></NavLinks>
            <form>
                <button>Sign Out</button>
            </form>
           </div>
        </div>
    );
};

export default Sidebar;