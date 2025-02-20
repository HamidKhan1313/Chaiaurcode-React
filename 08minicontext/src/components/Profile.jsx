import React, {useContext} from 'react'
import userContext from '../context/usercontext'
function Profile() {
    const {user} = useContext(userContext)
    if(!user) return <div>Plese login</div>
       
    return <div>Welcome {user.username}</div>

    
}

export default Profile; 
