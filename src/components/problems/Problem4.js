import {useState} from "react";
import FormCheckbox from "../p4/FormCheckbox";

const checkboxItems = ['Buffalo Ranch', 'Tamari Chile', 'Honey Mustard', 'Sweet & Sour'];



const Problem4 = () => {
  // @todo
  // The basic form is here, you need to add the interactivity.
  // Anything checkmarked should appear in a list in the right column.
  // The textfield should not be visible unless "other" is checkmarked.
  // If "other" is checkmarked and there's text in the field, it should be the
  //   last item in the sauces list in the right column.
  // You will probably need to change <FormCheckbox> a bit (including new props) to get this working.

  return (
    <div className='row'>
      <div className='col col-md-6'>
        <h2>Choose your dipping sauce</h2>
        {checkboxItems.map((item, index) => <FormCheckbox key={index} item={item} />)}
        <FormCheckbox item='Other' />
        <input type='text' />
      </div>
      <div className='col col-md-6'>
        <h2>Dipping Choices</h2>
        <ul>
          @todo THE SAUCES YOU CHOSE GO HERE!
        </ul>
      </div>
    </div>
  )

}

export default Problem4;
