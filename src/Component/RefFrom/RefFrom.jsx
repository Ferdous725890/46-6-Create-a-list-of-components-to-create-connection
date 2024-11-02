import { useEffect, useRef } from "react";

const RefFrom = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)


    const handelSbumite =(e)=>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    
    useEffect(()=>{
        nameRef.current.focus();
    }
    , [])

    return (
        <div>
            <h3>Hello Re Submite</h3>
            <div className="m-10 bg-blue-400">
           <form onSubmit={handelSbumite} >
            <input
            ref={nameRef} 
            
            className="bg-yellow-600 cursor-pointer" type="text" name="name"/>
            <br />
            <input 
            ref={emailRef}
            type="text" name="email" />
            <br />
            <input
            ref={passwordRef}
            name="password"
            type="password" />
            <button>Submit </button>
           </form>
        </div>
        </div>
    );
};

export default RefFrom;