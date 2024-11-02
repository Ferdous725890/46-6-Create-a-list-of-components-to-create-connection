
const ReuseAbleFrom = ({formTitle,handelSbumite,handelUpdate, submiteButtonText="Submite"}) => {
  const handelLoadSubmite = e =>{
    e.preventDefault()
    const data = {
        name:e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value

    }
    handelSbumite(data)
  }
    return (
        <div>
           <h2>formTitle</h2>
            <div className="m-10">
           <form className="bg-gray-400" onSubmit={handelLoadSubmite} >
            <input className="bg-gray-400"  type="text" name="name"/>
            <br />
            <input className="bg-gray-400" type="text" name="email" />
            <br />
            <input className="bg-gray-400" type="password" name="password" />
            <br />
            <input type="submit" value={submiteButtonText} />
           </form>
        </div>
        </div>
    );
};

export default ReuseAbleFrom;