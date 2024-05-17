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
        <form onSubmit={handleSubmit} action="/close_event_form" method="POST">
            <fieldset className="ratings">
                <label for="ratings" class="close_label">How did it go?</label><br />
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
            <div className='close_bottom'>
                <div className='close_left'>
                    <span className="close_reflection">
                        <label className='close_label'>Reflection:</label><br />
                        <textarea id="reflection" name="reflection" className='close_input' onChange={handleChange}/><br />
                    </span>
                    <span className='close_pics'>
                        <label className="close_label">Pictures:</label><br />
                        <input type="file" id = "pictures" name = "pictures" className='close_input' accept="image/png, image/jpeg" /><br />
                    </span>
                </div>
                <div className='close_right'>
                    <span className='close_expenses'>
                        <div className='close_expense'>
                            <textarea id = "expenses" name ="expenses" class="close_input"></textarea><br />
                        </div>
                        <div className='close_split'>
                            <textarea id = "split" name ="split" class="close_input"></textarea><br />
                        </div>
                    </span>    
                </div>
            </div>
            <input type="submit" />
        </form>
    )
  }
  
  
function CloseEvent() {
    return (
        <>
            <h2>Close Event</h2>
            <MyForm/>
        </>
    )
};

export default CloseEvent;