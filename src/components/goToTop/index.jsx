import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { Styled } from "./styled";

const GoToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 220) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Styled.Button
            type="button"
            onClick={handleClick}
            className={visible ? "show" : ""}
            aria-label="Go to top"
            title="Go to top"
        >
            <FiArrowUp />
        </Styled.Button>
    );
};

export default GoToTop;
