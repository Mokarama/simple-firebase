

import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
//2nd step
  const [user, setUser]=useState(null);

//1st step
  const provider = new GoogleAuthProvider();
  //step 5
  const githubProvider =new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User Info:", result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.error("Error:", error.message);
        setUser(null)
      });
  };

  //step 5
const handleGithubLogin =()=>{
  console.log('github button added');
  signInWithPopup(auth, githubProvider)
  .then((result)=>{
    console.log(result.user);
    setUser(result.user);

  })
  .catch((error) =>{
    console.log('ERROR',error.message)
  })

}

   //3rd step
  const handleSignOut =()=>{
    console.log('Sign out button added');
    const auth =getAuth();
    signOut(auth)
    .then(()=>{
      console.log('signout successFully',auth)
      setUser(null)
    })
  
    .catch((error)=>{
      console.log('ERROR:',error)
    })
  }

  //IF user exists ? signout : sign in
  return (
    <div>
      {/* <button onClick={handleGoogleSignIn} style={{ border: "2px solid green" }}>
        Log In With Google
      </button>
      <button onClick={handleSignOut}>Sign Out</button> */}


    {/* //step 04--------------- */}
    {
      user ?
      <button onClick={handleSignOut}>Sign Out</button>
      :
    <div>
        <button onClick={handleGoogleSignIn} style={{ border: "2px solid green" }}>
      Log In With Google
    </button>
    <button onClick={handleGithubLogin}>Log In With Github</button>
    </div>
    }


      {
        user && <div>
          <h4>{user.displayName
          }</h4>
          <p>Email:{user.email}</p>
        </div>
      }

    
    </div>
  );
};

export default Login;

//practice er jonno

/*{
  user && <div>
    <h4>{user.displayName}</h4>
    <p>Email{user.email }</p>
    <p>{user.photoURL }</p>
    <p>{user.reloadUserInfo.email}</p>
    <p>{user.reloadUserInfo.displayName}</p>
  </div>
}*/