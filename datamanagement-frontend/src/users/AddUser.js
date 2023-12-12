import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddUser() {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    })
    const {name, username, email} = user

    const onInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:8080/user', user);
        navigate('/');
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 shadow rounded border mt-2 mx-auto p-5'>
                    <h3 className='text-center m-4'>Add a user </h3>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="name"><strong>Name</strong></label>
                            <input type="text" className="form-control" name="name" placeholder="Enter Name" value={name} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="username"><strong>Username</strong></label>
                            <input type="text" className="form-control" name="username" placeholder="Enter Username" value={username} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="email"><strong>Email address</strong></label>
                            <input type="email" className="form-control" name="email" placeholder="Enter email" value={email} onChange={(e) => onInputChange(e)} />
                        </div>
                        <button type="submit" className="btn btn-outline-teal rounded mt-3 mx-2">
                            <h5 className='text-center pt-1'>Submit</h5>
                        </button>
                        <button type="button" className="btn btn-outline-danger rounded mt-3" onClick={() => navigate('/')}>
                            <h5 className='text-center pt-1'>Cancel</h5>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
