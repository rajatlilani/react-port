import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navigation">
            <Link to="/">
                <AiOutlineHome className="icon active-nav" />
            </Link>
            <Link to="/test">
                <AiOutlineUser className="icon" />
            </Link>
            <Link to="/try">
                <TiGroupOutline className="icon" />
            </Link>
            <Link to="/about">
                <BiMessageRoundedDots className="icon" />
            </Link>
            <Link to="/try">
                <BsArrowDownCircle className="icon" />
            </Link>
        </div>
    )
}