import React from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

// const useStyles = makeStyles({
//     table: {
//         minWidth: 650,
//     },
// });

const UserTable = (props) => (
    <TableContainer component={Paper}>
        <Table  aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Name </TableCell>
                    <TableCell align="right">Username</TableCell>
                   
                    <TableCell align="right">edit&nbsp;</TableCell>
                    <TableCell align="right">delete&nbsp;</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.filtered.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell component="th" scope="row">
                            {user.name}
                        </TableCell>
                        <TableCell align="right">{user.username}</TableCell>
                        <TableCell align="right"><EditIcon onClick={() => props.editRow(user)}></EditIcon></TableCell>
                        <TableCell  align="right"><DeleteIcon color="secondary" cursor="pointer" onClick={() => props.deleteUser(user.id)}></DeleteIcon></TableCell>
                     
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>

    // <table>
    //     <thead>
    //         <tr>
    //             <th>Name</th>
    //             <th>Username</th>
    //             <th>Actions</th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //         {props.filtered.length > 0 ? (
    //             props.filtered.map(user => (
    //                 <tr key={user.id}>
    //                     <td>{user.name}</td>
    //                     <td>{user.username}</td>
    //                     <td>
    //                         <button onClick={() => props.editRow(user)} className="button muted-button">Edit</button>
    //                         <button onClick={() => props.deleteUser(user.id)} className="button muted-button" >Delete</button>
    //                     </td>
    //                 </tr>
    //             ))
                
    //         ):(
    //                 <tr>
    //                     <td colSpan={3}>No users</td>
    //                 </tr>
    //         )}
           
           
    //     </tbody>
    // </table>
)

export default UserTable