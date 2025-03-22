// components/Footer.js
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <section className="flex flex-row items-center p-15 bg-[#f4f4f4]">
            <div className="grid grid-cols-5 gap-4 w-full text-sm">
                <ul>
                    <li className="font-bold mb-4">Buy</li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">Registration</a></li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">Bidding & buying help</a></li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">Stores</a></li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">Creator Collections</a></li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">eBay for Charity</a></li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">Charity Shop</a></li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">Seasonal Sales and events</a></li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">eBay Gift Cards</a></li>
                </ul>
                <ul>
                    <li className="font-bold mb-4">Sell</li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">Start selling</a></li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">How to sell</a></li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">Business sellers</a></li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">Affiliates</a></li>
                </ul>
                <ul>
                    <li className="font-bold mb-4">Stay connected</li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline flex items-center"><FaFacebook className="mr-2 text-lg" />Facebook</a></li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline flex items-center"><FaSquareXTwitter className="mr-2 text-lg" />X (Twitter)</a></li>
                </ul>
                <ul>
                    <li className="font-bold mb-4">Column 4</li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">Item 1</a></li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">Item 2</a></li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">Item 3</a></li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">Item 4</a></li>
                </ul>
                <ul>
                    <li className="font-bold mb-4">Column 5</li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">Item 1</a></li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">Item 2</a></li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">Item 3</a></li>
                    <li className="text-gray-500 mb-2"><a href="#" className="hover:underline">Item 4</a></li>
                </ul>
            </div>
        </section>
    );
}
