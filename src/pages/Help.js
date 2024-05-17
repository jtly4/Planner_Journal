import { useState } from 'react';
import { Link } from "react-router-dom";
  
function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(inputs);
        alert("Submitted!")
    }
  
    return (
        <form onSubmit={handleSubmit} action="/help_form" method="POST">
        <label className='help_label'>Email Adress:
        <input 
            className='help_input'
            type="email" 
            name="email" 
            placeholder = "Email"
            required
            value={inputs.email || ""} 
            onChange={handleChange}
        /><br/>
        </label>
        <label className='help_label'> Subject:
        <input 
            className='help_input'
            type="text" 
            name="subject" 
            placeholder = "Subject"
            minLength={1}
            required
            value={inputs.subject || ""} 
            onChange={handleChange}
        /><br />
        </label>
        <label className='help_label'>Message:
        <input 
            className='help_input'
            type="text" 
            name="message" 
            placeholder = "Your concern here..."
            minLength={1}
            required
            value={inputs.message || ""} 
            onChange={handleChange}
        /><br />
        </label>
            <input type="submit" />
        </form>
    )
}

function HelpBox() {
    return (
        <>
            <p className='helpBox_txt'>Have a question or concern? Check our <Link to="/FAQ">FAQs</Link> </p>
            <p className='helpBox_txt'>Have a question that you do not see answered? Fill out this form with your concern and we will get back to you as soon as we can!</p>
            <p className='helpBox_txt'>Response times may vary between 3 - 12 business days.</p>
        </>
    )
}
function Help() {
    return(
        <>
            <h2>Help / Contact</h2>
            <MyForm/>
        </>
    )
};

export default Help;