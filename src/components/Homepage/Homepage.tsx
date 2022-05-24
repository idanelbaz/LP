import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { usersSelector } from '../../store/users/users.selectors';
import { Pages } from '../../store/core/core.interface';
import "./Homepage.scss";


const Homepage: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isUserConnected: boolean = useSelector(usersSelector.getIsUserConnected);

    useEffect(()=> {
        if (!isUserConnected) {
            history.push(Pages.LandingPage) 
        }
    }, [history, isUserConnected])


    return (
        <div className='homepage-container'>
            Homepage
        </div>
    )
}

export default Homepage