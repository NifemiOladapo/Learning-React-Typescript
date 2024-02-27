import { ElementRef, useEffect, useRef } from "react";

const DomElement = () => {
    const inputRef = useRef<ElementRef<"input">>(null!);

    useEffect(()=>{
        inputRef.current.focus()
    },[])

  return (
    <div>
      <input ref={inputRef}/>
    </div>
  );
};

export default DomElement;
