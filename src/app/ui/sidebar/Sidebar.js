import Link from "next/link";
import NavLinks from "./NavLinks";
import Logo from "./Logo";


const Sidebar = () => {
    return (
        <div>
           <Link href='/store'>
           <div>
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