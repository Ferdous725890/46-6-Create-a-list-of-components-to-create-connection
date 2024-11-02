import useInputState from "../../Hooks/useInputState";

const HookFrom = () => {
    const [name, setNameChange] = useInputState('rojoni')
    const handelSbumite = (e) =>{
        console.log(name);

        e.preventDefault()
    }
    return (
        <div>
            <div className="m-10">
           <form onSubmit={handelSbumite} >
            <input 
            value={name} 
            onChange={setNameChange}
            type="text" name="name"/>
            <br />
            <input type="text" name="email" />
            <br />
            <input type="password" name="password" />
            <br />
            <button>Submit </button>
           </form>
        </div>
        </div>
    );
};

export default HookFrom;