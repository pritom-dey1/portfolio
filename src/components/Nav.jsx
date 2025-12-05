import { FaGithub } from "react-icons/fa"
import Logo from '../assets/logo.png'

export default function Nav({ onAboutClick }) {
  return (
    <header className='fixed top-4 rounded-[10px] left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-white/20 text-white shadow-md w-full max-w-6xl'>
      <div className='flex justify-between items-center px-6 py-4'>
        <div className='flex w-[20%] justify-start items-center'>
          <img className='w-11' src={Logo} alt="logo" />
        </div>

        <div className='w-[60%] flex justify-center'>
          <nav className='flex gap-6 text-lg uppercase'>
            <button className='hover:text-gray-300 transition'>Home</button>
            <button onClick={onAboutClick} className='hover:text-gray-300 transition'>About</button>
            <button className='hover:text-gray-300 transition'>Project</button>
            <button className='hover:text-gray-300 transition'>Contact</button>
          </nav>
        </div>

        <div className='text-2xl w-[20%] flex justify-end hover:text-gray-300 transition'>
          <FaGithub size={30} />
        </div>
      </div>
    </header>
  )
}
