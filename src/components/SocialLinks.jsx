import React from 'react';
import { FaMailBulk, FaVoicemail, FaGithub, FaLinkedin, FaInstagramSquare, FaTiktok } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/fa';

const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
        LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https:// linkedin.comm/inggain272',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
        GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/inGGAIN',
    },
    {
      id: 3,
      child: (
        <>
        Mail <FaVoicemail size={30} />
        </>
      ),
      href: 'mailto:m.indraali272@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
        Resume <FaMailBulk size={30} />
        </>
      ),
      href: '/src/assets/files/resume.pdf',
      style: 'rounded-br-md',
      download: true
    },
  ]

  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
        <ul>

        {links.map(({id, child, style, href, download}) => (

            <li
             key={id}
             className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-indigo-500" + " " + style}
             >
                <a href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_blank">
                    {child}
                </a>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default SocialLinks;