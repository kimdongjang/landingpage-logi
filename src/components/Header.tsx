import { useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { useMouseExpandLine } from "../hooks/useMouseExpandLine";
import style from './Header.module.scss'
import styled from 'styled-components'


const CHeader = styled.header<{ hoverBg: string, hoverColor: string, backgroundColor: string }>`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    z-index: 50;
    color: #fff;
    height: 90px;
    transition: background-color 0.5s;
    background-color: ${props => props.backgroundColor};
  
    &:hover {
        transition: background-color 0.5s;
      background-color: ${props => props.hoverBg};
      color: ${props => props.hoverColor};
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
        <CHeader hoverBg={!!useScroll ? '#222' : '#fff'} hoverColor={!!useScroll ? '#fff' : 'black'} backgroundColor={!!useScroll ? '#222' : 'null'}>
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
