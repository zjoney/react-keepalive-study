import {useState} from 'react';
const Home = props=>{
    let [number,setNumber] = useState(0);
    return (
        <div>
            用户名:<input/>
            <button onClick={()=>setNumber(number=>number+1)}>{number}</button>
        </div>
    )
}
export default Home;