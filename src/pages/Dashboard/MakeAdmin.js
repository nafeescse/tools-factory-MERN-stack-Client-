import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                // console.log(data);
            })
    }, []);
    const handleAdmin = email => {
        const proceed = window.confirm('Are you sure to make him Admin? ');
        if (proceed) {
            const url = `http://localhost:5000/users/admin/${email}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => console.log(data));
            // const rest = users.filter(user => user._id !== id);
            // setUsers(rest);


        }
    }
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? ');
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data));
            const rest = users.filter(user => user._id !== id);
            setUsers(rest);


        }
    }

    return (
        <div>
            <p className='text-3xl text-error font-bold mt-10 pb-3'>All Users({users.length})</p>
            <div class="w-full shadow-2xl ">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {users.reverse().map((user, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>

                                <td className=' justify-center'>
                                    {user.role === 'admin' && <button onClick={() => { handleAdmin(user.email) }} class="btn btn-accent btn-xs">Make Admin </button>}
                                </td>
                                <td>
                                    <button onClick={() => {
                                        handleDelete(user._id)
                                    }} class="btn btn-error btn-xs">Remove </button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;