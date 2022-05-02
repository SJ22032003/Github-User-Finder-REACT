import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
// import UserSearchResult from '../components/users/UserSearchResult'
function Home() {
  return (
    <div className='flex flex-col justify-evenly'>
        <UserSearch /> 
        {/* <UserSearchResult /> */}
        <UserResults />
    </div>
  )
}

export default Home