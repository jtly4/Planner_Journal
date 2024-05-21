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
        alert("Submitted!")
    }
  
    return (
        <form onSubmit={handleSubmit} action="/close_event_form" method="POST" className="close-event-form">
            <label for="ratings" class="close_label">How did it go?</label><br />
            <fieldset className="ratings">
                <div className='rating_group'>
                    <span className="angry_group">
                        <img src="/images/angry_icon.png" height = "50" alt ="this is an angry icon" className="closing_img" />
                        <input 
                            className='closeInput'
                            type="radio" 
                            name="rating" 
                            value = "angry"
                            id = "angry"
                            onChange={handleChange}
                        />
                    </span>
                </div>
                <div className='rating_group'>
                    <span className="disappointed_group">
                        <img src="/images/disappointed_icon.png" height = "50" alt ="this is an angry icon" className="closing_img" />
                        <input 
                            className='closeInput'
                            type="radio" 
                            name="rating" 
                            value = "disappointed"
                            id = "disappointed"
                            onChange={handleChange}
                        />
                    </span>
                </div>
                <div className='rating_group'>
                    <span className="sad_group">
                        <img src="/images/sad_icon.png" height = "50" alt ="this is an angry icon" className="closing_img" />
                        <input 
                            className='closeInput'
                            type="radio" 
                            name="rating" 
                            value = "sad"
                            id = "sad"
                            onChange={handleChange}
                        />
                    </span>
                </div>
                <div className='rating_group'>
                    <span className="nuetral_group">
                        <img src="/images/nuetral_icon.png" height = "50" alt ="this is an angry icon" className="closing_img" />
                        <input 
                            className='closeInput'
                            type="radio" 
                            name="rating" 
                            value = "nuetral"
                            id = "nuetral"
                            onChange={handleChange}
                        />
                    </span>
                </div>
                <div className='rating_group'>
                    <span className="surprised_group">
                        <img src="/images/surprised_icon.png" height = "50" alt ="this is an angry icon" className="closing_img" />
                        <input 
                            className='closeInput'
                            type="radio" 
                            name="rating" 
                            value = "surprised"
                            id = "surprised"
                            onChange={handleChange}
                        />
                    </span>
                </div>
                <div className='rating_group'>
                    <span className="happy_group">
                        <img src="/images/happy_icon.png" height = "50" alt ="this is an angry icon" className="closing_img" />
                        <input 
                            className='closeInput'
                            type="radio" 
                            name="rating" 
                            value = "happy"
                            id = "happy"
                            onChange={handleChange}
                        />
                    </span>
                </div>
                <div className='rating_group'>
                    <span className="joy_group">
                        <img src="/images/joy_icon.png" height = "50" alt ="this is an angry icon" className="closing_img" />
                        <input 
                            className='closeInput'
                            type="radio" 
                            name="rating" 
                            value = "joy"
                            id = "joy"
                            onChange={handleChange}
                        />
                    </span>
                </div>
            </fieldset>
            <div className='close-bottom'>
                <div className='close-left'>
                    <span className="close_reflection">
                        <label className='close_label'>Reflection:</label><br />
                        <textarea id="reflection" name="reflection" className='close-text-input' rows="20" cols="90" onChange={handleChange}/><br />
                    </span>
                    <span className='close_pics'>
                        <label className="close_label">Pictures:</label><br />
                        <input type="file" id = "pictures" name = "pictures" className='close_input' accept="image/png, images/jpeg" mutiple /><br />
                    </span>
                </div>
                <div className='close-right'>
                    <span className='close_expenses'>
                        <div className='close_expense'>
                            <label className='close_label'>Expenses:</label><br />
                            <textarea id = "expenses" name ="expenses" class="close-text-input" rows="12" cols="90"></textarea><br />
                        </div>
                        <div className='close_split'>
                            <label className='close_label'>Split:</label><br />
                            <textarea id = "split" name ="split" class="close-text-input" rows="10" cols="90"></textarea><br />
                        </div>
                    </span>    
                </div>
            </div>
            <input type="submit" id="close-button"/>
        </form>
    )
  }
  
  
function CloseEvent() {
    return (
        <>
            <h2 className="page-title">Close Event</h2>
            <MyForm/>
        </>
    )
};

export default CloseEvent;