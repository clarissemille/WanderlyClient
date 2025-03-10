import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/user.actions';
import { isEmpty } from '../Utils';

import check from "../../assets/icons/check.svg"
import checked from "../../assets/icons/check.svg"

const FollowHandler = ({ idToFollow, type }) => {
    const userData = useSelector((state) => state.userReducer)
    const [isFollowed, setIsFollowed] = useState(false)
    const dispatch = useDispatch()

    const handleFollow = () => {
        dispatch(followUser(userData._id, idToFollow))
        setIsFollowed(true)
    }

    const handleUnfollow = () => {
        dispatch(unfollowUser(userData._id, idToFollow))
        setIsFollowed(false)
    }

    useEffect(() => {
        if (!isEmpty(userData.following)) {
            if(userData.following.includes(idToFollow)) {
                setIsFollowed(true)
            } else setIsFollowed(false)
        }

    }, [userData, idToFollow])

    return (
       <>
        {isFollowed && !isEmpty(userData) && (
                <span onClick={handleUnfollow}>
                    { type === "suggestion" && <button className='unfollow-btn'>Abonné</button> }
                    { type === "card" && <img src={checked} alt="checked" /> }
                </span>
        )}
        {isFollowed === false && !isEmpty(userData) &&  (
            <span onClick={handleFollow}>
                { type === "suggestion" &&<button className='follow-btn'>Suivre</button> }
                { type === "card" && <img src={check} alt="check" /> }

            </span>
        )}
       </>
    );
};

export default FollowHandler;