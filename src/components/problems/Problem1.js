import {useState} from "react";


// As seen in the example, the submit button should only be
// available once 8+ characters have been typed!
// 
// We'll see that we can do it with only one state, even 
// though there is more than one moving part.
const Problem1 = () => {

  return (
    <>
      <label>
        Input a cool name
        <input
          type='text'
        />
      </label>
      <p><small>Cool name must be at least 8 characters long</small></p>
      <div>
        <button className='btn btn-primary'>A button that would let you submit this BUT HIDDEN UNTIL 8+ CHARS</button>
      </div>
  </>
  )
}

export default Problem1;
