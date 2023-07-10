import { useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { useMouseExpandLine } from "../hooks/useMouseExpandLine";
import style from './Header.module.scss'
import styled from 'styled-components'


const CHeader = styled.header<{ color: string, backgroundColor: string }>`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    z-index: 50;
    color:${(props) => props.color};
    height: 90px;
    background-color: ${(props) => props.color}
    transition: ${(props) => props.color}  0.5s;

    &:hover {
    background-color: ${(props) => props.color};
    color: ${(props) => props.backgroundColor};
    }
`


export const Header = () => {
    const [useScroll, setUseScroll] = useState<boolean>(false);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { capture: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);

        }
    }, []);

    const handleScroll = () => {
        setUseScroll(window.scrollY >= 100);
    }

    return (
        <CHeader color={!!useScroll ? 'black' : '#fff'} backgroundColor={!!useScroll ? '#fff' : 'black'}>
            <nav className={style.nav}>
                <div className={style.container}>
                    {/* <FiAlignJustify /> */}
                    <ul>
                        <li><a {...useMouseExpandLine()}>회사소개</a></li>
                        <li><a {...useMouseExpandLine()}>서비스소개</a></li>
                        <li><a {...useMouseExpandLine()}>특화서비스</a></li>
                        <li><a {...useMouseExpandLine()}>시스템</a></li>
                        <li><a {...useMouseExpandLine()}>고객지원</a></li>
                    </ul>
                </div>
            </nav>
        </CHeader >
    );
};
