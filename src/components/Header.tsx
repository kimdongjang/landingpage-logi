import { FiAlignJustify } from "react-icons/fi";
import { useMouseExpandLine } from "../hooks/useMouseExpandLine";
import style from './Header.module.scss'


export const Header = () => {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <div className={style.container}>
                    <FiAlignJustify />
                    <ul>
                        <li><a {...useMouseExpandLine()}>회사소개</a></li>
                        <li><a {...useMouseExpandLine()}>서비스소개</a></li>
                        <li><a {...useMouseExpandLine()}>특화서비스</a></li>
                        <li><a {...useMouseExpandLine()}>시스템</a></li>
                        <li><a {...useMouseExpandLine()}>고객지원</a></li>
                    </ul>
                </div>


            </nav>
        </header >
    );
};
