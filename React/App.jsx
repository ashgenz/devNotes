//REACT NOTES




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


//learn useState for object,array and single variable

import { useState ,useEffect} from "react";
import './App.css';

  function App2(){
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
      </div>
      <button onClick={Count}>click me babby!  {count}</button> <br />
      <button onClick={stringChange}>change string:  {name}</button> <br />
      <button onClick={araryChange}>change array to even:  {data}</button> <br />
      <button onClick={objectChange}>change object ki age:  {[school.name,school.age]}</button> <br />
      <div className='formdiv'>
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




//realtime form


function App(){
  const [user1,setUser]=useState({name:"",pass:""});
  let userSet=(e)=>{
      setUser({...user1,[e.target.name]:[e.target.value]})
  }
  let handleSubmit=(e)=>{
    e.preventDefault();
  }
  return <>
  <form action="" onSubmit={handleSubmit}>
      <input type="email" placeholder="write your username" name="name" value={user1.name} onChange={userSet}/>
      <input type="password" placeholder="write your username" name="pass" value={user1.pass} onChange={userSet}/>
      <br />
      <p>{user1.name}</p>
      <p>{user1.pass}</p>
      <p>{[user1.name," ",user1.pass]}</p>
      <button type="submit" >submit</button>
  </form>
    </>
}


//useState syntax




function App3(){
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


//fetch and async with useEffect
function App4() {
  const [user,setUser]=useState({});
  useEffect(()=>{
    async function fetchData() {
    try{
      let response=await fetch("https://randomuser.me/api/");
      let data =await response.json();
      setUser(data.results[0])
    }
    catch(err){
      console.log(err);
    }
    }
    
    fetchData();
  },[])
  return <>
  {user.name?  <p>{ [user.name.first," ",user.name.last]}</p> : <p>loading..</p>  }
  </>
}


// const [count, setCount] = useState(0);

// useEffect(() => {
  //   setCount(count + 1);
  // }, [count]);  // ❌ Infinite loop (bad practice)
  

  


//Abort controller

function App5() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.example.com/data", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetching aborted");
        } else {
          console.error("Fetch error:", err);
        }
      });

    return () => {
      controller.abort(); // ✅ Cleanup on unmount
    };
  }, []);

  return (
    <>
      <button onClick={() => setShow((prev) => !prev)}>Click to toggle</button>
      {show && <p>Hi hi, I am back! :)</p>}
    </>
  );
}





//window.innerWidth



function App6() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScreenSize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  return (
    <>
      <h1>Window Width: {width}px</h1>
    </>
  );
}






//timer and cleanup without memory leak(nice)





function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Interval cleared, avoiding memory leaks!");
    };
  }, []);

  return <h2>Timer: {count}s</h2>;
}

function App7() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <>
      <button onClick={() => setShowTimer((prev) => !prev)}>
        {showTimer ? "Hide" : "Show"} Timer
      </button>
      {showTimer && <Timer />}
    </>
  );
}






// 🔥 Step 1: Why useContext?
// ✅ Problem: Prop Drilling
// Imagine you have a deeply nested component structure, and you need to pass data from a parent to a child (far below in hierarchy).
// Using props for this can be a nightmare. useContext solves this issue.

// ✅ Basic useContext Example
// 👀 Before Context API (Prop Drilling Problem):--->

// function App() {
//   return <Parent name="John" />;
// }

// function Parent({ name }) {
//   return <Child name={name} />;
// }

// function Child({ name }) {
//   return <h1>Hello, {name}</h1>;
// }



// ✅ After Using useContext (No Prop Drilling)------>

import { createContext, useContext } from "react";

// Create context
const UserContext = createContext();

function App8() {
  return (
    <UserContext.Provider value="John">
      <Parent />
    </UserContext.Provider>
  );
}

function Parent() {
  return <Level1 />;
}

function Level1() {
  return <Level2 />;
}

function Level2() {
  return <Level3 />;
}

function Level3() {
  return <Child />;
}

// Child uses context directly (no need for props from parent components)
function Child() {
  const name = useContext(UserContext);
  return <h1>Hello, {name}</h1>;
}








//  When useReducer is Better Than useState
// ✅ Problem: Complex State Logic
// When a state has multiple related values (e.g., a form or a cart system), useState can get messy.

// ✅ Example of useReducer (Counter with Multiple Actions)--->

import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

function App9() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
}








// useContext + useReducer (Global State)
// 👉 useContext shares state globally, and useReducer manages complex state.

// 🔹 Example: Theme Context + useReducer

// Reducer function
const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

// Context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { darkMode: false });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

function App10() {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
}

function ThemeButton() {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <>
      <button onClick={() => dispatch({ type: "TOGGLE" })}>
        Toggle Theme
      </button>
      <h1>{state.darkMode ? "Dark Mode" : "Light Mode"}</h1>
    </>
  );
}








// Performance Optimization (useMemo & useCallback)
// ✅ Problem: Unnecessary Re-Rendering
// Even if the state doesn’t change, components may re-render unnecessarily.

// 🔹 Fix This with useMemo and useCallback
import {useMemo } from "react";

function App11(){
  let [count, setCount] = useState(0);
  let [number, setNumber] = useState(5);

  // Expensive calculation only runs when `number` changes
  let squaredNumber = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <h1>Square of {number}: {squaredNumber}</h1>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
    </>
  );
}




// Reusable hooks
// ✅ Problem: Duplicate Code in Multiple Components
// 👉 Create a Custom Hook to reuse logic.

// 🔹 Example: Custom Hook for Window Width

function useWindowWidth() {
  let [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function App12() {
  let width = useWindowWidth();

  return <h1>Window Width: {width}px</h1>;
}







//level2:routing in react
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
function Home() {
  return <h1>🏠 Home Page</h1>;
}
function About() {
  return <h1>ℹ️ About Page</h1>;
}
function Contact() {
  return <h1>📞 Contact Page</h1>;
}  
function App13() {
  return <>
      <Router>
         <nav>
           <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>    //router connected to some keywords(like anchor tag)
         </nav>

        <Routes>
          <Route path="/" element={<Home/>}></Route>                //routes created and connected to specific component/page to load
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>   
        </Routes>
      </Router>
      </>
}



// ✅ Dynamic Routing (Passing Parameters)
// 👉 Suppose we want a profile page for different users like /profile/john and /profile/jane.

// 📌 2. Create a Dynamic Profile Route

import { useParams } from "react-router-dom";

function Profile() {
  let { username } = useParams();
  return <h1>👤 Profile of {username}</h1>;
}
function App14() {
  return <>
      <Router>
        <Routes> 
          <Route path="/profile/:username" element={<Profile />} /> 
        </Routes>
      </Router>
      </>
}

// Nested Routing (Parent-Child Layouts)
// 📌 Why it matters: Helps organize pages that share common UI (like dashboard layouts or navbars).

// "/about" → shows About
// "/about/team" → shows nested Team inside About
import {  Outlet } from "react-router-dom";
function App15() {
  return (
    <Router>
      <nav style={{ padding: "10px", borderBottom: "1px solid black" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/abbout">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/abbout" element={<About1 />}>
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Home1() {
  return <h2>🏠 Home Page</h2>;
}

function About1() {
  return (
    <div>
      <h2>📘 About Page</h2>
      <nav>
        <Link to="team">Meet the Team</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function Team() {
  return <p>👨‍💻 This is the Team Page (nested under About)</p>;
}


//private routes(routes only seen/acccessible by loggined users)
import {  Navigate} from "react-router-dom";
function App16() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Protected = ({ children }) => isLoggedIn ? children : <Navigate to="/login" />;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home (Public)</h1>} />
        <Route path="/login" element={<button onClick={() => setIsLoggedIn(true)}>Login</button>} />
        <Route path="/dashboard" element={
          <Protected>
            <h1>Dashboard (Protected)</h1>
          </Protected>
        } />
      </Routes>
    </Router>
  );
}



//redux/redux toolkit (for global state management/data(states) store)

//step1:in counterSlice.js file(we maked one global state)
//1)we use createSlice to initailize initial state ,name of the global state,and reducer functions(manupulation on states) or actions
//2)then we export our counterSlice.reducer(object of action functions) as a whole
//3)and export all the action function alag alag also ,like this----->
// const increment = counterSlice.actions.increment;
// const decrement = counterSlice.actions.decrement;
// const incrementByAmount = counterSlice.actions.incrementByAmount;
//export { increment, decrement, incrementByAmount };
//or this--->
//export const {increment,decrement,incrementByAmount} =counterSlice.actions;

//step2:in store.js(we stores all global states here)
//we use configure store to make a new store and name it like store
//then we import the complete counterSlice object here and name it as counterReducer(similarly we can do it for *n no. of global states ,by making many modules like counterSlice in different files and import them )
//and export the store 


//step3: we use store in the main.jsx and the individually exported reducer functions in the app.jsx--->
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./features/counter/counterSlice";
function App17() {
  const count = useSelector((state) => state.counter.value); // the parameter state represents the entire Redux store's state object. and the counter is the global state name
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </>
  );
}
//the counterSlice objects returns action and reducer objects by default
//actions have all the functions used to normally manupulate the state
//reducer have the state


// 🧠 Why Use createAsyncThunk?
// In real projects, you'll need to:
// Fetch data (e.g., users, products, etc.)
// Store it in Redux
// Show loading/error UI
// Redux Toolkit simplifies this with createAsyncThunk.

//same as previous counter state ,,we have maked a new state,added that in store and used it app.jsx,,and obv we already used store in main.jsx
//now see the codes in userSlice and store

//in userSlice
// reducers=For actions you define manually (e.g. increment, reset)
// extraReducers=For handling actions that are defined elsewhere — like those generated by createAsyncThunk
import { fetchUsers } from './features/users/userSlice';

function App18() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());//this fetchUser is a thunk function that imported. dispatching this function will returns action object like this:{ type: 'users/fetchUsers/fulfilled',payload: [ /* array of users */ ],meta: { ... }}. this action object have action type and payload which is used to defin extraReducers

  }, [dispatch]);
// dispatch(fetchUsers()).then((result) => {
//   console.log("result:", result);
// });

  return (
    <div>
      <h1>Users</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}


export  {App,App2,App3,App4,App6,App7,App8,App9,App10,App11,App12,App13,App14,App15,App16,App17,App18};