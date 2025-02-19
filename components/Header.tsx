"use client"
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto max-w-6xl px-4">
        {/* Logo Section */}
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl text-secondary font-bold">
            GINI
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex-none lg:hidden">
          <button
            className="btn btn-ghost"
            onClick={() => setIsSheetOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Sheet */}
        <div
          className={`fixed inset-0 bg-base-100 shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
            isSheetOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col justify-center items-center h-full w-full">
            {/* Close Button */}
            <div className="p-4 absolute top-4 right-4">
              <button
                className="btn btn-ghost btn-circle"
                onClick={() => setIsSheetOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="text-center w-full px-4">
              <ul className="menu menu-lg gap-2">
                <li>
                  <Link
                    href="/"
                    className="text-primary hover:text-secondary"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programs"
                    className="text-primary hover:text-secondary"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-primary hover:text-secondary"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-primary hover:text-secondary"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-primary hover:text-secondary"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                
              </ul>
              <div className="text-secondary w-full my-4 h-6"/>
              {/* Donate Button */}
              <div className="p-4">
                <Link
                  href="/contact"
                  className="btn btn-secondary w-full text-white"
                  onClick={() => setIsSheetOpen(false)}
                >
                  Donate
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal px-4">
            <li>
              <Link href="/" className="text-primary hover:text-secondary font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/programs" className="text-primary hover:text-secondary font-medium">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/team" className="text-primary hover:text-secondary font-medium">
                Team
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-primary hover:text-secondary font-medium">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-primary hover:text-secondary font-medium">
                Blog
              </Link>
            </li>
          </ul>
          <Link href="/contact" className="btn btn-secondary btn-md text-white ml-4">
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}
