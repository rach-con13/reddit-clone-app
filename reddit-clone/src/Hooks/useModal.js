import { useEffect, useState } from "react";

export default function useModal() {
    const [isOpen,setOpen] = useState(false);

 

    const open = () => { setOpen(true)};
    const close = () => {setOpen(false)};

    return {open,isOpen,close}
}