import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import style from './useMouseExpandLine.module.scss'

// const lineStyle = {
//     display: "block",
//     "&::after": {
//         content: "#ffffff",
//         position: "relative",
//         left: "50%",
//         transform: "translate(-50%, 0)",
//         height: "2px",
//         width: "0%",
//         backgroundColor: "#1947ba",
//         transition: "0.5s ease-in-out",
//         backgroundPositionY: "bottom"
//     },
//     "&::hover": {
//         "&::after": {
//             width: "100%"
//         }
//     }
// };

export const useMouseExpandLine = (delay = 1) => {
    const dom = useRef();
    const color = "black";
    // const onMouseEnter = useCallback(
    //     (e) => {
    //         const { current } = dom as any;
    //         if (!!current) current.style.width = "100%";
    //     },
    //     [dom]
    // );

    // const onMouseLeave = useCallback(
    //     (e) => {
    //         const { current } = dom as any;
    //         if (!!current) current.style.width = "0%";
    //     },
    //     [dom]
    // );

    return {
        ref: dom,
        // onMouseEnter,
        // onMouseLeave,
        // style: lineStyle
        className: style.element

        // style: {
        //   position: "relative",
        //   transform: "translate(-50%, 0)",
        //   height: "2px",
        //   width: "0%",
        //   display: "block",
        //   backgroundColor: "#1947ba",
        //   transition: "0.5s ease-in-out",
        //   backgroundPositionY: "bottom"
        // }
    };
};
