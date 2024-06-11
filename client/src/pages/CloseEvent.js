import { useState } from 'react';
import { Link } from "react-router-dom";
  
function MyForm() {
    const [isClosed, setIsClosed] = useState(false)
    const [rating, setRating] = useState('')
    const [image, setImage] = useState('')
    const [reflection, setReflection] = useState('')
    const [expenses, setExpenses] = useState('')
    const [split, setSplit] = useState('')
    const [error, setError] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(
            isClosed, rating, image, reflection, expenses, split
        )
        const newEvent = {
            isClosed, rating, image, reflection, expenses, split
        }
        const response = await fetch('http://localhost:5000/api/events', {
            method: 'PATCH', ////////////////////////////// ???????????????????? update event to include closed event items
            body: JSON.stringify(newEvent),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok) {
            setError(json.error)
        }
        if(response.ook) {
            setIsClosed(false)
            setRating('')
            setImage('')
            setReflection('')
            setExpenses('')
            setSplit('')
        }
    }
  
    return (
        // <form onSubmit={handleSubmit} action="/close_event_form" method="POST" className="close-event-form">
        <form>
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
                            onChange = {(e) => setRating(e.target.value)}
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
                            onChange = {(e) => setRating(e.target.value)}
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
                            onChange = {(e) => setRating(e.target.value)}
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
                            onChange = {(e) => setRating(e.target.value)}
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
                            onChange = {(e) => setRating(e.target.value)}
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
                            onChange = {(e) => setRating(e.target.value)}
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
                            onChange = {(e) => setRating(e.target.value)}
                        />
                    </span>
                </div>
            </fieldset>
            <div className='close-bottom'>
                <div className='close-left'>
                    <span className="close_reflection">
                        <label className='close_label'>Reflection:</label><br />
                        <textarea 
                            id="reflection" 
                            name="reflection" 
                            className='close-text-input' 
                            rows="20" 
                            cols="90" 
                            onChange = {(e) => setReflection(e.target.value)}
                            value={reflection} 
                        /><br />
                    </span>
                    <span className='close_pics'>
                        <label className="close_label">Pictures:</label><br />
                        <input 
                            type="file" 
                            id = "pictures" 
                            name = "pictures" 
                            className='close_input' 
                            accept="image/png, images/jpeg" 
                            // mutiple 
                            onChange = {(e) => setImage(e.target.value)}
                            value={image} 
                        /><br />
                    </span>
                </div>
                <div className='close-right'>
                    <span className='close_expenses'>
                        <div className='close_expense'>
                            <label className='close_label'>Expenses:</label><br />
                            <textarea 
                                id = "expenses" 
                                name ="expenses" 
                                class="close-text-input" 
                                rows="12" 
                                cols="90"
                                onChange = {(e) => setExpenses(e.target.value)}
                                value={expenses} 
                            ></textarea><br />
                        </div>
                        <div className='close_split'>
                            <label className='close_label'>Split:</label><br />
                            <textarea 
                                id = "split" 
                                name ="split" 
                                class="close-text-input" 
                                rows="10" 
                                cols="90"
                                onChange = {(e) => setSplit(e.target.value)}
                                value={split} 
                            ></textarea><br />
                        </div>
                    </span>    
                </div>
            </div>
            {/* <input type="submit" id="close-button"/> */}
            <input type="submit" id="close-button" onClick={handleSubmit}/>
            {error && <div className='error'>{error}</div>}
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