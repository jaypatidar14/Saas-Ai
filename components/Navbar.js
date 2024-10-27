import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Site Title */}
        <div className="flex items-center space-x-4">
          {/* Replace with your own logo */}
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <span className="text-white text-2xl font-bold">Everything Talent</span>
        </div>

        {/* Navbar Links */}
        <div className="space-x-4 text-white text-lg">
          <Link href="/about" className="hover:text-gray-400">Home</Link>
          <Link href="/" className="hover:text-gray-400">About</Link>
          <Link href="/services" className="hover:text-gray-400">Services</Link>
          <Link href="/blog" className="hover:text-gray-400">Blog</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </div>

        {/* Login Button */}
        <div>
          <button className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-md flex items-center">
            Login
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
