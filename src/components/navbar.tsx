import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-dark-blue text-white px-4 py-3 pt-6">
            <div className="container mx-auto flex items-center justify-between">

                {/* Brand Name */}
                <div className="text-2xl font-bold mr-14">
                    <Link href="/">BrandName</Link>
                </div>

                {/* Links */}
                <div className="hidden md:flex space-x-6 flex-grow">
                    <Link href="/" className="link-style hover:text-blue-500">Home</Link>
                    <Link href="/product" className="link-style hover:text-blue-500">Product</Link>
                    <Link href="/pricing" className="link-style hover:text-blue-500">Pricing</Link>
                    <Link href="/contact" className="link-style hover:text-blue-500">Contact</Link>
                </div>

                {/* Buttons */}
                <div className="space-x-4 flex">
                    <Link href="/login" className="link-style bg-transparent px-4 py-2 rounded hover:bg-blue-500">Login</Link>
                    <Link href="/join" className="link-style bg-blue-500 px-6 py-2 rounded-tl-md opacity-100 hover:bg-blue-400">Join Us</Link>
                </div>
            </div>
        </nav>
    );
}
