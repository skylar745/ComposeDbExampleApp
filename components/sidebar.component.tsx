import Image from 'next/image'
import Link from 'next/link'
import ceramicLogo from "../public/ceramicLogo.png"

import { FaHome, FaUser, FaHashtag } from "react-icons/fa";
import { SidebarProps } from '../types';



export const Sidebar = ({name, username, id}: SidebarProps) => {

  return (
    <div className="sidebar">
      <div className="top">
        <div className="logoContainer">
          <Image
            src={ceramicLogo}
            alt=""
            fill
            objectFit='contain'
          />
        </div>
        <Link href = "/">
          <FaHome /> Home
        </Link>
        <Link href = {`/profile`}>
          <FaUser /> Profile
        </Link>
        <Link href = "/explore">
          <FaHashtag /> Explore
        </Link>
      </div>
      <div className="bottom">
        {name !== undefined ? (
          <div className="you">
            <b>{name}</b> <br />
            <Link href = {`user/${id}`}>
              @{username}
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
