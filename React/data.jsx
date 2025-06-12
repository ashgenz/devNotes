//at tech stack funding trends


import { useState } from "react";

function ScoreCounter() {
  const [score, setScore] = useState(0); // Initial value = 0

  return (
    <div>
      <p>Score: {score}</p>
      <button onClick={() => setScore(score + 1)}>Increase Score</button>
    </div>
  );
}



const [count, setCount] = useState(0);
const [name, setName] = useState("John");





const [user, setUser] = useState({ name: "Alice", age: 25 });

// Updating just the age
setUser({ ...user, age: 26 });



const [items, setItems] = useState([]);

setItems([...items, "New Item"]); // Adding an item



count = count + 1;  // ❌ React won't detect this change



setCount(count + 1);  // ✅ Works correctly


setCount(prevCount => prevCount + 1);



setCount(count + 1);  // ❌ Might not get the latest count if there are multiple updates
setCount(count + 1);  // ❌ May not increment twice



setCount(prevCount => prevCount + 1);
setCount(prevCount => prevCount + 1); // ✅ Now it increments twice correctly



setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);


setCount(5); // If count is already 5, React won't re-render



import { useState } from "react";

function ControlledForm() {
  // State to manage form fields
  const [form, setForm] = useState({ name: "", email: "" });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert(`Submitted: Name - ${form.name}, Email - ${form.email}`);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Controlled Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>
        <strong>Live Preview:</strong> {form.name} | {form.email}
      </p>
    </div>
  );
}

export default ControlledForm;




 import './App.css'
  import viteLogo from '/vite.svg'
  import reactLogo from './assets/react.svg'
  import { useState } from 'react'

  function App(){
    let [count,setCount]=useState(0);
    let [name,setString]=useState("john");
    let [data,setArray]=useState([1,2,3,4])
    let [school,setObject]=useState({name:"gao ",age:30})
    let [part,setObject2]=useState({name:"",email:""})
    function Count (event){
      console.log(event)
      setCount(count+1)
      setCount((Curr)=>{
        return Curr+1;
      })
      console.log("hi") 
    }
    let stringChange=()=>{
      setString("Gao");
    }
    let araryChange=()=>{
      setArray(data.map(number => number*2))
    }
    let objectChange=(e)=>{
      e.preventDefault()
      setObject({...school,age:25});
    }
    let handleChange=(e)=>{
      setObject2({...part,[e.target.name]:e.target.value  })
    }
    return (
      <>
        <div className='imgouter' >
        <div className='viteimg'>
        <img  src={viteLogo} alt="" />
        </div>
        <div className='reactimg'>
        <img  src={reactLogo} alt="" /> 
        </div>
      </div>
      <button onClick={Count}>click me babby!  {count}</button> <br />
      <button onClick={stringChange}>change string:  {name}</button> <br />
      <button onClick={araryChange}>change array to even:  {data}</button> <br />
      <button onClick={objectChange}>change object ki age:  {[school.name,school.age]}</button> <br />
      <div className='formDiv'>
      <form >
        <label>Name:</label>
        <input  type="text" onChange={handleChange} name="name" value={part.name}/>
        <label >Email:</label>
        <input  type="email" onChange={handleChange} name="email" value={part.email}/>
        <button type='submit'>submit</button>
        <p>live preview: {part.name} | {part.email}  </p>
      </form>
      </div>

      </>
    )
  }


  export default App;






  import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component Mounted!");
  }, []); // Runs only once when the component mounts

  return <h1>Check the console!</h1>;
}

export default App;







import { useEffect, useState } from "react";
import './App.css'
// import { StrictMode } from "react";
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'

function App(){
  let [count,setCount]=useState(0);
  let [count2,setCount2]=useState(0);
  let incCount=()=>{
    setCount(count+1);
  }
  let incCount2=()=>{
    setCount2(count2+1);
  }
  useEffect(()=>{
    console.log("it runned on every render")
  })
  useEffect(()=>{
    console.log("it runned on first render")
  },[])
  useEffect(()=>{
    console.log("it runned on count change")
  },[count])
  return (
    <>
    <h1 onClick={incCount}>hi{count}</h1>
    <h1 onClick={incCount2}>hi{count2}</h1>
    </>
  )
}
export default App










import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch data from an API
    async function fetchData() {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array = Runs only once

  return (
    <div>
      <h1>Random User Data</h1>
      {user.name ? (
        <p>{user.name.first} {user.name.last}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;










import { useEffect, useState } from "react";
import './App.css'
// import { StrictMode } from "react";
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'

function App(){
  let [count,setCount]=useState(0);
  let [count2,setCount2]=useState(0);
  let [users,setCount3]=useState([]);
  let [count3,setCount4]=useState(0);
  let [count4,setCount5]=useState({});
  let incCount=()=>{
    setCount(count+1);
  }
  let incCount2=()=>{
    setCount2(count2+1);
  }
  useEffect(()=>{
    console.log("it runned on every render")
  })
  useEffect(()=>{
    console.log("it runned on first render")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setCount3(data))
    .catch((err)=>console.log(err))
  },[])
  useEffect(()=>{
    console.log("it runned on first render")
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res)=>res.json())
    .then((data)=>setCount5(data))
    .catch((err)=>console.log(err))
  },[])
  useEffect(()=>{
    console.log("it runned on count change")
  },[count])
  useEffect(()=>{
    const interval=setInterval(()=>{
      setCount4(count3+1)
    },1000)
    return ()=>{
      clearInterval(interval)
      console.log("interval cleared,no unneeded useeffect processes will run now")
    }
  },[])

  return (
    <>
    <h1 onClick={incCount}>hi{count}</h1>
    <h1 onClick={incCount2}>hi{count2}</h1>
    <h1 >hi{count3}</h1>
    <ul>
      {users.map((user)=>(
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
    <h1>joke-type:{count4?.type} | {count4?.setup} | {count4?.punchline}</h1>
    </>
  )
}
export default App














