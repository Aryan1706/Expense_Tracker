import React from "react"
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { menuItems } from "../../Utils/menuItems";
import { signout } from "../../Utils/Icons";
import { useState } from "react";
import { useGlobalContext } from "../../context/globalContext";

function Navigation({active, setActive}){
    const {totalBalance} = useGlobalContext()

    if (totalBalance === undefined) {
        return <p>Loading...</p>;
      }

    return(
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt =""/>
                <div className="text">
                    <h2>Mike</h2>
                    <p>Your Money</p>
                    <p>Rs. {totalBalance()}</p>
                </div>
            </div>       
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={()=> setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
                </ul>  
                <div className="bottom-nav">
                    <ul>
                        {signout} Sign Out
                    </ul>
                </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 0.5rem 1.5rem;
    width:250px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 0.7rem;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .1rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }
    .menu-items{
        flex: 1;
        font-size: 0.8rem ;
        display: flex;
        flex-direction: column;
        li,ul{
            display: grid;
            grid-template-columns: 20px auto;
            align-items: center;
            margin: .3rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 0.5rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 0.7rem;
                transition: all .4s ease-in-out;
            }
        }
    }
    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation