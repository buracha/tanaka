import { IoMdHeart } from 'react-icons/io'

export const Footer = () => {
    return (
        <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
            <span className='flex items-centergap-1.5 text-xs sm:text-sm font-mono text-gray-400'>
              Made by
              <IoMdHeart size={20} className="text-sky-500" />
              by
              <strong className="font-medium">Tanaka</strong>
            </span>
        </footer>
    )
}