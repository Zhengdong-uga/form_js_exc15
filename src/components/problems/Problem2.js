import {useState} from "react";


const initialFormValues = {
  firstName: '',
  lastName: '',
  startDate: '',
  endDate: '',
};

// React with a multi input form.
// @see https://beta.reactjs.org/apis/react/useState#examples-objects
// @see https://daveceddia.com/react-forms/
const Problem2 = () => {
  // @todo 
  // Get this working like the example!
  // - we need to keep track of form inputs,
  // - the submit button should be disabled until every field has a value
  // - there should be a success message when we submit
  // - the fields should be empty after we submit

  return (
    <form className='col col-sm-12 col-lg-5'>
      <div className='alert alert-success'>FORM MESSAGE??</div>
      WE NEED FIRST AND LAST NAME INPUTS + START AND END DATE INPUTS
      <div className="mb-3">
        <button type='submit'>Submit Vacation Request DISABLE UNLESS ALL FIELDS ENTERED AND START BEFORE END</button>
      </div>
    </form>
  )
}

export default Problem2;
