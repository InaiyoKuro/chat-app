import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import '../styles/Auth.css'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const Auth = (props) => {
  const { setIsAuth } = props;

  const signInWithGoogle = async () => {
    try{
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken)
      setIsAuth(true)
    }catch(err){
      console.error(err);
    }
  }

  return (
      <div className="auth">
        <p>Đăng nhập</p>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      </div>
  )
}