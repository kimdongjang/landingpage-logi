import { FiAlignJustify } from "react-icons/fi";
import './Header.module.scss'


export const Header = () => {
    return (
        <header className="flex w-100">
            <FiAlignJustify />
            <ul className="flex w-100 ">
                <li>회사소개</li>
                <li>서비스소개</li>
                <li>특화서비스</li>
                <li>시스템</li>
                <li>고객지원</li>
            </ul>

        </header>
    );
};
