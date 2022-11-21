import React,{useState} from "react";

function Contant() {
        const [email ,setEmail]=useState('')
        const [phone ,setPhone]=useState('')
        const [pass ,setPass]=useState('')
        const [error,setError]=useState(false)
        const [test1,setTest]=useState('')
        
        
        const emailRegex = /\S+@\S+\.\S+/;
        const handleSubmit=(e)=>{
            e.preventDefault();
            if (!emailRegex.test(email)) {
                setError(true)
              return  email.length=0
              } 

            if(email.length===0){
                setError(true)}
            if(phone.length<10){
                setError(true)
            }
            if(pass.length<8 && pass.length>16){
                setError(true)
            } 
            let data = JSON.parse(localStorage.getItem("data") || "[]");
            // let formdata = JSON.parse(localStorage.getItem("data") || "[]");
            let test ="false";
            var inputmail="";
            var   obj={};
            for(var i=0;i<data.length;i++){
              obj=data[i];
              inputmail=obj.email;
              
        
              if( email ===inputmail){
                test="true";
                setTest(false)
                const elem = document.getElementById("para1");
                elem.innerHTML ='email is already exist';
              }
           
            }
            if(test==="false"){
              data.push({
                  email: email,
                  phone: phone,
                  password: pass,
                  
                });
                localStorage.setItem("data", JSON.stringify(data));
                if(email&&phone&&pass){
                  console.log("Email :",email,"Phone :",phone,"Password :",pass)
                  const elem = document.getElementById("para");
                  elem.innerHTML ='successful';
                  setTest(true)
                  // localStorage.setItem("Email :", email, "Phone :",phone ,"Password :",pass );
                  // localStorage.setItem( "Phone :",phone );
              
              }
          }else{
              console.log("email is already exist");
          }
            // if(localStorage.getItem('email')===email ){
            //   setError(true)
            

       
        // let data = JSON.parse(localStorage.getItem("data") || "[]");
        // if(data.indexOf(email) == -1){
        // data.push({
        //   email : email,
        //   phone : phone,
        //   password : pass

        // })
        // localStorage.setItem("data", JSON.stringify(data));
        // }
      }
  return (
    <div>
      {" "}
      <div className="row">
        <div className="container w-50">
          <h1 className="h1"style={{textAlign:"center"}}>Create an account</h1>
 {test1===false ?         <h1 id="para" style={{color:"red",textAlign:"center"}}>{''}</h1>
         : <h1 id="para1" style={{color:"green",textAlign:"center"}}>{''}</h1>}
          <form action="" className="mt-5" id="sign-up" onSubmit={handleSubmit}>
            <div>
              <label for="email" className="form-label">
                <b>Email address</b>
                <span className="star"> *</span>
              </label>
              <input name="email" id="email" className="form-control mb-3" onChange={e=>setEmail(e.target.value)} />
            </div>
            {error&&!emailRegex.test(email) ?
            <small id="email-error" className="md-4" style={{color:"red"}}>Must be email</small>:""}
            <br />
            <label for="phone" className="form-label">
              <b>Phone</b>
              <span className="star"> *</span>
            </label>
            <input  onChange={e=>setPhone(e.target.value)}
              type="tel"
              name="phone"
              id="phone"
              className="form-control mb-3"
            />
            {error&&phone.length!==10 ?
            <small id="email-error" className="md-4" style={{color:"red"}}>Phone must be 10</small>:""}
            <br />
            <label for="pass" className="form-label">
              <b>Create Password</b>
              <span className="star"> *</span>
            </label>
            <div className="input-group col-12">
              <input onChange={e=>setPass(e.target.value)}
                type="password"
                className="form-control"
                aria-describedby="button-addon2"
                id="pass"
              />

              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <img
                  src={require("./icons8-hide-48.png")}
                  alt=""
                  className="hide"
                />
              </button>
            </div>
            <small id="pass-error" className="md-4">
              {" "}
            </small>
            <br />
            <div className="mb-3">
            {(error&&pass.length<6) || (error&&pass.length>18) ?
            <small id="email-error" className="md-4" style={{color:"red"}}>The Password should be between 6-18 characters.</small>:""}
              <span></span>
            </div>
            <div className="form-check mb-3">
              <input required
                className="form-check-input"
                type="checkbox"
                value="agree"
                id="agree"
              />
              <label className="form-check-label" for="agree">
                I agree to the terms & conditions Orange.
              </label>
            </div>
            <div className="form-check mb-5">
              <input
                className="form-check-input"
                type="checkbox"
                value="news"
                id="news"
                checked
              />
              <label className="form-check-label" for="news">
                Recieve Coding Academy Newsletter
              </label>
            </div>
            <div className="d-grid gap-2">
              <input
                className="btn btn-primary sign-up btn-lg"
                id="signup"
                type="submit"
              />

              <a href="./sign-in.html">
                <input
                  className="btn btn-outline-secondary btn-lg container-fluid g-0"
                  type="button"
                  value="Already have an account?login"
                />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contant;



