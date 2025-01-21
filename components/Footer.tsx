import Link from "next/link"
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
          <Image
            src="https://utfs.io/f/cQKwx0ZpHag13i1X9PcUTOh92ABgKFbk4ctY1ZyE7JMeXwL5"
            alt="logo"
            width={80}
            height={80}
            className="mb-4"
          />
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
                <Link href="/" className="hover:text-orange-300 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-orange-300 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#events" className="hover:text-orange-300 transition-colors duration-300">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-orange-300 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/qN7jqPqYuvpSNXsM/?mibextid=LQQJ4d" target='_blank' rel="noopener noreferrer" className="hover:text-orange-300 transition-colors duration-300">
                <IoLogoFacebook className="w-6 h-6" />
              </Link>
              <Link href="https://x.com/globalgini/status/1841450547108250014?s=46" target='_blank' rel="noopener noreferrer" className="hover:text-orange-300 transition-colors duration-300">
                <IoLogoTwitter className="w-6 h-6" />
              </Link>
              <Link href="https://www.instagram.com/global_inclusion_network_intl?igsh=YXo2MnFkdG9zdXJr&utm_source=qr" target='_blank' rel="noopener noreferrer" className="hover:text-orange-300 transition-colors duration-300">
                <IoLogoInstagram className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/global-inclusion-network-international-gini-a1211830a" target='_blank'  rel="noopener noreferrer" className="hover:text-orange-300 transition-colors duration-300">
                <IoLogoLinkedin className="w-6 h-6" />
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

