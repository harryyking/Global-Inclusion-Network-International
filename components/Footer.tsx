import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Global Inclusion Network International</h3>
            <p className="text-sm leading-relaxed">
              Empowering every child, regardless of ability, to reach their full potential and contribute meaningfully
              to society.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-orange-300 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-300 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-300 transition-colors duration-300">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-300 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-orange-300 transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-orange-300 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-orange-300 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-orange-300 transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Global Inclusion Network International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

