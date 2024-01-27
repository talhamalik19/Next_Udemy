import { useRef, useState } from "react";
import fs from 'fs/promises'
import path from "path";

function HomePage(props) {
  const [response, setResponse] = useState(props.items);
  const emailRef = useRef()
  const feedbackRef = useRef()

  const handleSubmitForm = (event) =>{
    event.preventDefault();

    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;

    const feedbackData = {
      id: new Date().toLocaleDateString(),
      email: email,
      feedback: feedback
    }

    fetch('/api/feedback',{
      method:'POST',
      body: JSON.stringify(feedbackData),
      headers:{
        "Content-Type": 'application/json'
      }
    }).then(res=>(res.json()).then(data=>console.log(data))
    )
  }

  const handleFetchData = () =>{
    fetch('api/feedback', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res=>res.json()).then(data=>setResponse(data.data))
  }

  const fetchedFeedback = (id) =>{
    fetch(`api/${id}`, {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json'
      }
    }).then(res=>res.json()).then(data=>console.log(data))
  }
  return (
    <div>
      <h1>The Home Page</h1>

      <form onSubmit={handleSubmitForm}>
        <label htmlFor="email">Enter Email</label>
        <input id="email" type="email" required ref={emailRef}/>

        <label htmlFor="feedback">Enter Feedback</label>
        <textarea id="feedback" rows={5} ref={feedbackRef} />

        <button>Submit Feedback</button>
        </form>

        <button onClick={handleFetchData}>Fetch Data From DB</button>

        <div>
            {response.map(res=>(
              <>
              <h2 key={res.id}>{res.feedback}</h2>
              <button onClick={()=>fetchedFeedback(res.id)}>Fetch Feedback</button>
              </>
            ))}
        </div>
    </div>
  );
}

export async function getStaticProps(){
  const pathFile =  path.join(process.cwd(), "data", "data.json");
  const data = JSON.parse(await fs.readFile(pathFile));

  return{
    props:{
      items: data
    }
  }
}

export default HomePage;
