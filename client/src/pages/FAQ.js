import { Link } from "react-router-dom";

function QA(props) {
    return(
        <div className="qa">
            <h4 className="question">{props.q}</h4>
            <p className="answer">{props.a}</p>
        </div>
    )
}

function FAQ() {
    return (
        <>
            <h2 className="page-title">FAQs</h2>
            <div className="qas">
                <QA 
                    q="Question Here! It could be short or go on for a while" 
                    a="The answer to the question would go here!"
                />
                <QA 
                    q="Question 2" 
                    a="The answer to the question would go here! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi perferendis nesciunt quas provident repellat explicabo commodi fugiat expedita, iste harum suscipit ipsum accusamus alias fuga enim mollitia sunt dignissimos."
                />
                <QA 
                    q="Question 3" 
                    a="The answer to the question would go here! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi perferendis nesciunt quas provident repellat explicabo commodi fugiat expedita, iste harum suscipit ipsum accusamus alias fuga enim mollitia sunt dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi perferendis nesciunt quas provident repellat explicabo commodi fugiat expedita, iste harum suscipit ipsum accusamus alias fuga enim mollitia sunt dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eligendi perferendis nesciunt quas provident repellat explicabo commodi fugiat expedita, iste harum suscipit ipsum accusamus alias fuga enim mollitia sunt dignissimos."
                />
            </div>
            <div className="qa_helpLink">
                <p>Couldn't find your question?</p>
                <Link to="/Help">Send us an email!</Link>
            </div>
        </>
    )
};

export default FAQ;