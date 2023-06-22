import './Register.css';
import { RegisterApi } from '../Authentication/Auth';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../Action/index';

export default function Register() {
    const counterVariable = useSelector(state => state.counter);
    const dispatch = useDispatch();  //when onclick={()=>useDispatch(increment())}
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState({
        email: "",
        password: "",
    });

    const RegisterSubmit = async () => {
        if (!email) {
            setError((prevState) => ({
                ...prevState,
                email: 'Please Enter the Email',
            }));
        }
        console.log(password);
        if (!password) {
            setError((prevState) => ({
                ...prevState,
                password: 'Please Enter the Password',
            }));
        }

        const formData = new FormData()
        formData.append("email", email)
        formData.append("password", password)
        const getRegisterresponse = await RegisterApi(formData);
        setResponse(getRegisterresponse.message);
        console.log(response)
    }
    return (
        <div>
            <div className="row registerCard align-item-center justify-content-center">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 style={{ color: 'red', fontWeight: 400 }}>{response}</h4>
                            <h4>Register {counterVariable}</h4>
                            <div className="input-group mb-3 mt-4">
                                <span className="input-group-text" id="basic-addon1">Email</span>
                                <input type="text" className="form-control" placeholder="Username" onChange={(e) => { setEmail(e.target.value) }} aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            {error.email ? <span style={{ color: 'red', fontWeight: 400 }}>{error.email}</span> : null}
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Password</span>
                                <input type="password" className="form-control" placeholder="Password" aria-label="Password" onChange={(e) => { setPassword(e.target.value) }} aria-describedby="basic-addon1" />
                            </div>
                            {error.password ? <span style={{ color: 'red', fontWeight: 400 }}>{error.password}</span> : null}
                            <button className="btn btn-primary align-item-right justify-content-right" type="submit" onClick={(e) => {
                                RegisterSubmit(e)
                            }}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}