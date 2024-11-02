
import './App.css'
import Grandpa from './Component/GrandPa/Grandpa'
// import ReuseAbleFrom from './Component/ReuseAbleFrom/ReuseAbleFrom'
// import HookFrom from './Component/RefFrom/HookFrom'
// import RefFrom from './Component/RefFrom/RefFrom'
// import SingleForm from './Component/SingleFrom/SingleForm'



// const handelSbumite = (data) =>{
//  console.log('sin up data', data);
// }
// const handelUpdate = (data) =>{
//   console.log('update now ', data);
// }



function App() {

  return (
    <>
    <h2 className='text-4xl'>From Master</h2>
    <h3>hello</h3>
    <Grandpa></Grandpa>































    {/* <h3>Hello </h3>
   {/* <SingleForm></SingleForm>

    
    <RefFrom></RefFrom> */}
    {/* <HookFrom></HookFrom> */}
    {/* <ReuseAbleFrom formTitle={'Sign Up'} handelSbumite={handelSbumite} > */}
      {/* <div>
        <h2>Pleace Sign Up </h2>
      </div>
    </ReuseAbleFrom> */}
    {/* // <ReuseAbleFrom formTitle={'Update Now'} submiteButtonText={'Update'} handelUpdate={handelUpdate} >
      <div>
        <h1>Update Profile</h1>
        <p>Alawys keep up your profile update </p>
      </div>
    </ReuseAbleFrom> */}
    </>
  )
}

export default App
