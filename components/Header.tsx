import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-base-100">
      <div className="navbar container mx-auto max-w-6xl">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl text-secondary">
            GINI
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-4">
            <li>
              <Link href="#" className="text-primary hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-primary hover:text-secondary">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-primary hover:text-secondary">
                Programs
              </Link>
            </li>
            <li>
              <Link href="#" className="text-primary hover:text-secondary">
                Contact
              </Link>
            </li>
          </ul>
          <button className="btn btn-outline ml-4">Donate</button>
        </div>
      </div>
    </header>
  )
}

