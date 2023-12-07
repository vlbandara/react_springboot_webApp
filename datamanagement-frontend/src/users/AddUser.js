import React from 'react'
import { useState } from 'react'

export default function AddUser() {
    const [user, setName] = useState({
        name: '',
        username: '',
        email: ''
    })
    const {name, username, email} = user;
  return (
    
    

    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 shadow rounded border mt-2 mx-auto p-5'>
            <h3 className='text-center m-4'>Add a user </h3>
            <form>
                <div className="form-group">
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input type="text" className="form-control"  placeholder="Enter Name" value={name} />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="username"><strong>Username</strong></label>
                    <input type="text" className="form-control"  placeholder="Enter Username" value={username}/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="email"><strong>Email address</strong></label>
                    <input type="email" className="form-control"  placeholder="Enter email" value={email}/>
                </div>
                <button type="submit" className="btn btn-outline-teal rounded mt-3 mx-2">
                    <h5 className='text-center pt-1'>Submit</h5>
                </button><button type="submit" className="btn btn-outline-danger rounded mt-3">
                    <h5 className='text-center pt-1'>Submit</h5>
                </button>

            </form>
        </div>
        

      </div>
    </div>
  )
}
