import { useState } from "react";

 
const SingleForm = () => {
    const [email, setEmail] = useState(null)
    const handelSbumite = e =>{
        e.preventDefault()
        console.log(email);
        

    }
    const emailchange =e =>{
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    return (
        <div className="bg-red-500">
             <div className="m-10">
            <form onSubmit={handelSbumite} >
             <input  type="text" name="name"/>
            <br />
             <input
             onChange={emailchange}
              type="text" name="email" />
             <br />
             <input type="password" name="password" />
             <br />
             <button>Submit </button>
           </form> 
         </div>
        </div>
    );
};

export default SingleForm;