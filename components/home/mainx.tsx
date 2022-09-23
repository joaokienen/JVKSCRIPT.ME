import globalStyles from '../all/stylehome';
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";

export default function MainX () {
    return (
        <>
            <style jsx global> {globalStyles} </style>

            <div className={'grid'}>
                <a href="https://www.linkedin.com/in/user/" rel="noreferrer" target="_blank" className={'card'}>
                    <FaLinkedin />
                </a>
                <a href="https://github.com/user" rel="noreferrer" target="_blank" className={'card'}>
                    <FaGithub />
                </a>
                <a href="https://t.me/user" rel="noreferrer" target="_blank" className={'card'}>
                    <FaTelegram />
                </a>
            </div> 
        </>
    )
}
