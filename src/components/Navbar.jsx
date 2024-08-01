import {useState} from 'react'
import Frame9 from '../assets/Frame 9.png'
function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
    
  return (
    
    <header className="bg-white text-zinc-950 shadow-lg sticky top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center ">
        {/* <h1 className="text-2xl font-bold">szs.shop</h1> */}
        <img src={Frame9} alt="" className='w-[9rem]'/>

        <nav className={`hidden lg:flex space-x-4 items-center`}>
          <a href="#home" className="text-zinc-950 px-3 py-2 text-lg">About Us</a>
          <a href="#services" className="text-zinc-950 px-3 py-2 text-lg">Services</a>
          <a href="#blog" className="text-zinc-950 px-3 py-2 text-lg">Use Cases</a>
          <a href="#contact" className="text-zinc-950 px-3 py-2 text-lg">Pricing</a>
          <a href="#contact" className="text-zinc-950 px-3 py-2 text-lg">Blog</a>
          <a href="#contact" className="text-zinc-950 px-3 py-2 text-lg"><button type="button" className='border p-3 rounded-xl'>Request a Quote</button></a>
        </nav>

        <button
          id="menuBtn"
          className="lg:hidden focus:outline-none text-zinc-950"
          onClick={toggleMobileMenu}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <nav className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-800 w-full py-2 text-center`}>
        <a href="#home" className="block text-white px-4 py-2 rounded text-lg">About Us</a>
        <a href="#services" className="block text-white px-4 py-2 rounded text-lg">Services</a>
        <a href="#blog" className="block text-white px-4 py-2 rounded text-lg">Use Cases</a>
        <a href="#contact" className="block text-white px-4 py-2 rounded text-lg">Pricing</a>
        <a href="#contact" className="block text-white px-4 py-2 rounded text-lg">Blog</a>
        <a href="#contact" className="block text-white px-4 py-2 rounded text-lg"><button type="button" className='border p-3 rounded-xl'>Request a Quote</button></a>
      </nav>
    </header>
  )
}

export default Navbar
