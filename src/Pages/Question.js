import axios from 'axios';
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Question.css';

export default function Question() {
    const [question, setQuestion] = useState([]);
    const [active, setActive] = useState(1);

    useEffect(() => {
        axios.get("https://the-trivia-api.com/v2/questions").then((response) => {
            setQuestion(response.data);
        })
    }, [])
    return (
        <div className='container'>
            Questions Data
            <div className="row">
                <div className="col-md-9">
                    <ul>
                        {question.map((value, key) => {
                            return (
                                <Card className={(active===key+1)?"m-4 p-2":"m-4 p-2 d-none"}>
                                    <div key={key + 1}>
                                        {value?.question?.text}
                                    </div>
                                    {
                                        value.incorrectAnswers.map((value2, key2) => {
                                            return (
                                                <div key={key2}>
                                                    <input type="checkbox"></input>
                                                    <label className='px-3'>{value2}</label>
                                                </div>
                                            )
                                        })
                                    }
                                    <div>
                                        <input type="checkbox"></input>
                                        <label className='px-3'>{value.correctAnswer}</label>
                                    </div>
                                </Card>
                            )
                        })}
                    </ul>
                </div>
                <div className="col-md-3">
                    <div className='border-no text-center py-2'>
                        Question No
                        <Row>
                            {question.map((value, key) => {
                                return (
                                    <Col sm={4} className='py-3 px-3' key={key}>
                                        <div className={(active === key + 1) ? "question_colot getquestion text-center py-4" : "getquestion text-center py-4"} onClick={() => { setActive(key + 1) }}>
                                            {key + 1}
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    )
}