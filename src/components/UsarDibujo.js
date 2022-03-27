
import { useState } from "react"
export const UsarDibujo = () => {
    const [click, setClick] = useState(false);
    const handleClick =()=> setClick(!click);
    const closeMobileMenu =()=>setClick(false);
    const [dropdown, setDropdown] = useState(false);
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };
    return {
        click,
        handleClick,
        closeMobileMenu,
        dropdown,
        onMouseEnter,
        onMouseLeave,
    }
}