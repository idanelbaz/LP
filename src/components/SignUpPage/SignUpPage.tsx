import React from 'react';
import { useDispatch } from 'react-redux';
import "./SignUpPage.scss";


const SignUpPage: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();


    return (
        <div className='sign-up-page-container'>
            SignUpPage
        </div>
    )
}

export default SignUpPage