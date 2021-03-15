import React from 'react'
import { Button } from '../components'

import {useAuth} from '../context/AuthContext'

const Signup = () => {
  const { doSingUpWithGoogle, currentUser } = useAuth();

  
  return (
    <div>
      <Button handleClick={doSingUpWithGoogle}>Signup with Google</Button>
      {currentUser}
    </div>
  )
}

export default Signup
