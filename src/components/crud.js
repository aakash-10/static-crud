import React, { useState} from 'react'
import Table from './table.js'
import AddUser from './Adduser.js'
import EditUser from './Edituser.js'

const Crud = () => {
    const usersData = [
        { id: 1, name: 'aakash', username: 'aakash10' },
        { id: 2, name: 'srikanth', username: 'srikanth1' },
        { id: 3, name: 'pramod', username: 'pramod9' },
    ]

    const [users, setUsers] = useState(usersData)
    const [editing, setEditing] = useState(false)
    const initialFormState = { id: null, name: '', username: '' }
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const editRow = user => {
        setEditing(true)

        setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }

    const addUser = user => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    const deleteUser = id => {
        setUsers(users.filter(user => user.id !== id))
    }

    const updateUser = (id, updatedUser) => {
        setEditing(false)

        setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }
    
    return (
        <div className="container">
            <h1>CRUD App</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {editing ? (
                        <div>
                            <h2>Edit user</h2>
                            <EditUser
                                setEditing={setEditing}
                                currentUser={currentUser}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                            <div>
                                <h2>Add user</h2>
                                <AddUser addUser={addUser}></AddUser>
                            </div>
                        )}
                    
                </div>
                <div className="flex-large">
                    <h2>View users</h2>
                    <Table users={users} deleteUser={deleteUser} editRow={editRow}></Table>
                </div>
            </div>
        </div>
    )
}

export default Crud
