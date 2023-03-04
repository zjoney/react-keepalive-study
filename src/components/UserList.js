import {Link} from 'react-router-dom';
const UserList = props=>{
    let users = new Array(100).fill(0);
    return (
        <ul style={{height:'200px',overflow:'scroll'}}>
            {
                users.map((user,index)=>(
                    <li key={index}>
                        {index}
                    </li>
                ))
            }
        </ul>
    )
}
export default UserList;