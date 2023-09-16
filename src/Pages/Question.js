import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Question() {
    const [question, setQuestion] = useState([]);
    const getQuestion = (responseData) => {
        var temp = [];
        responseData.map((value, index) => {
            console.log(value);
            temp.push(value);
        })
        setQuestion([...question, ...temp]);
    }
    useEffect(() => {
        axios.get("https://the-trivia-api.com/v2/questions").then((response) => {
            getQuestion(response.data);
        })
    }, [])
    return (
        <div className="container">
            Questions
            <div className="row">
                <div className="col-md-9">
                    <ul>
                        {question.map((value, key) => {
                            return (
                                <div>
                                    <li key={key}>
                                        {value?.question?.text}
                                    </li>
                                    {
                                        value.incorrectAnswers.map((value2, key2) => {
                                            return (
                                                <div>
                                                    <input type="checkbox"></input>
                                                    <label>{value2}</label>
                                                </div>
                                            )
                                        })
                                    }
                                     <div>
                                        <input type="checkbox"></input>
                                        <label>{value.correctAnswer}</label>
                                    </div>
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <div className="col-md-3">
                    {question.map((value, key) => {
                        return (
                            <span key={key}>
                                {key}
                            </span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}