import React, { useState } from 'react'
import Header from './Header'
import './Content.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Home() {
    const [password, setPassword] = useState('');
    const [givenstring, setGivenString] = useState('');
    const [length, setLength] = useState(8);
    var [character] = useState("");
    const [number, setNumber] = useState(true);
    const [alpha, setAlpha] = useState(false);
    const [smallalpha, setSmallAlpha] = useState(false);

    const generatePassword = () => {
        if (number == false && alpha == false && smallalpha == false) {
            setPassword("Unable to create a password with 1 or fewer available characters");
        } else {
            if (number === true) {
                character += '12345678900987654321';
            }
            if (alpha == true) {
                character += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            }

            if (smallalpha == true) {
                character += "abcdefghijklmnopqrstuvwxyz";
            }

            if (givenstring !== '') {
                character += givenstring;
            }

            setPassword(character.split('').sort(function () {
                return 0.5 - Math.random()
            }).join('').substring(0, length));
        }


    }

    return (
        <div>
            <Header />
            <div className="justify-content-center">
                <div className="content">
                    Generate a Strong Password!
                </div>
                <div className="input_field">
                    <div className="row col-md-6">
                        <InputGroup size="lg">
                            <Form.Control
                                aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                                value={password}
                            />
                        </InputGroup>
                    </div>
                    <Button className="generate_button" variant="primary" onClick={() => generatePassword()}>Generate Password</Button>
                    <div className="col-md-6 mt-4">
                        <Card>
                            <Card.Body>
                                <div>
                                    <label>Length</label>
                                    <select name="cars" className="checkbox" onChange={(e) => setLength(e.target.value)}>
                                        {[...Array(16)].map((e, i) => (
                                            <option value={i + 1} selected={i + 1 == 8}>{i + 1}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label>Number</label>
                                    <input type="checkbox" onChange={(e) => setNumber(e.target.checked)} checked={number} className="checkbox" />
                                </div>
                                <div>
                                    <label>Alphabetical Characters</label>
                                    <input type="checkbox" onChange={(e) => setAlpha(e.target.checked)} className="checkbox" />
                                </div>
                                <div>
                                    <label>Small Alphabetical Characters</label>
                                    <input type="checkbox" onChange={(e) => setSmallAlpha(e.target.checked)} className="checkbox" />
                                </div>
                                <div>
                                    <label>Given Special Character (~`[];?,)</label>
                                    <input type="text" onChange={(e) => setGivenString(e.target.value)} className="checkbox" />
                                </div>

                            </Card.Body>
                        </Card>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home