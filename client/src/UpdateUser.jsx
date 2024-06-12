import React , {useState , useEffect} from 'react';
import {useParams , useNavigate} from 'react-router-dom';
import axios from 'axios';



function UpdateUser (){
    const {id} = useParams()
    const[name, setName] = useState()
    const[email, setemail] = useState()
    const[age, setage] = useState()
    const navigate = useNavigate()

    // const [users , setUsers]=useState([])



    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result=> {console.log(result)
        setName(result.data.name)
        setemail(result.data.email)
        setage(result.data.age)
        
        })
        .catch(err => console.log(err))
   } , [id]);


// useEffect(() => {
//     axios.get(`http://localhost:3001/getUser/${id}`)
//         .then(result => {
//             console.log(result.data); 
//         })
//         .catch(err => {
//             console.log('Error fetching user:', err);
//         });
// }, [id]); 
    const Update = (e) =>{
        e.preventDefault();
       
        axios.put("http://localhost:3001/updateUser/" +id, {name , email , age})
        .then(result => { 
            console.log(result)
            navigate('/')
        
        })
    .catch(err => console.log(err))
    }
    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Update}>
            <h2>Update User</h2>
            <div className='mb-2'>
                <label htmlfor="">Name</label>
                <input type="text" placeholder='Enter Name' className='form-control'
                value={name}
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter Email' c className='form-control'
                 value={email}
                 onChange={(e) => setemail(e.target.value)}/>
            </div>


            <div className='mb-2'>
                <label htmlFor="">Age</label>
                <input type="text" placeholder='Enter Age' c className='form-control'
                 value={age}
                 onChange={(e) => setage(e.target.value)}/>
            </div>
            <button className='btn btn-success'>Update</button>
        </form>
        </div>
    </div>
    )
}

export default UpdateUser;