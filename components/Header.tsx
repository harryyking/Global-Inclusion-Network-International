import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto max-w-6xl px-4">
        {/* Logo Section */}
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl text-secondary font-bold">
            GINI
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex-none lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="#" className="text-primary hover:text-secondary">Home</Link></li>
              <li><Link href="#" className="text-primary hover:text-secondary">About</Link></li>
              <li><Link href="#" className="text-primary hover:text-secondary">Programs</Link></li>
              <li><Link href="#" className="text-primary hover:text-secondary">Contact</Link></li>
              <li className="mt-2">
                <Link href="#" className="btn btn-primary text-white">Donate</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal px-4">
            <li>
              <Link href="#" className="text-primary hover:text-secondary font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-primary hover:text-secondary font-medium">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-primary hover:text-secondary font-medium">
                Programs
              </Link>
            </li>
            <li>
              <Link href="#" className="text-primary hover:text-secondary font-medium">
                Contact
              </Link>
            </li>
          </ul>
          <Link href="#" className="btn btn-secondary btn-md text-white ml-4">Donate</Link>
        </div>
      </div>
    </header>
  );
}