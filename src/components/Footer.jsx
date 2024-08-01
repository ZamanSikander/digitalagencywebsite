
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 container mx-auto mt-10 rounded-tl-[4rem] rounded-tr-[4rem]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-xl font-bold mb-2">Contact us:</h2>
            <p>Email: <a href="mailto:info@positivus.com" className="text-green-400">info@positivus.com</a></p>
            <p>Phone: <a href="tel:555-567-8901" className="text-green-400">555-567-8901</a></p>
            <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-xl font-bold mb-2">Subscribe to news</h2>
            <form className="flex">
              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded-l bg-gray-800 text-white border border-gray-700 focus:outline-none"
              />
              <button
                type="submit"
                className="p-2 rounded-r bg-green-500 text-black hover:bg-green-600 focus:outline-none"
              >
                Subscribe to news
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="flex justify-between items-center">
            <p className='text-[0.6rem] sm:text-basis'>© 2023 Positivus. All Rights Reserved.</p>
            <a href="/privacy-policy" className="text-gray-400 hover:text-white text-[0.6rem] sm:text-basis">
              Privacy Policy
            </a>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin></FaLinkedin>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaFacebook></FaFacebook>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
               <FaTwitter></FaTwitter>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
