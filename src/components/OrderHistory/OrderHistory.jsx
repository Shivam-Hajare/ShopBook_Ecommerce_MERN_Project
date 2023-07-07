import React, { useEffect, useState } from 'react'
import { useCookies } from "react-cookie"
import { useNavigate } from 'react-router-dom';
import "./OrderHistory.css"

const OrderHistory = () => {
    const navigate = useNavigate();
    const [cookies, setCookies] = useCookies(["access_token"]);
    const [cart_items, setCart_items] = useState();


    const handleproducthistory = async () => {

        var userid = localStorage.getItem('userID')
        const res = await fetch(`/orderHistory/${userid}`);
        const data = await res.json();
        console.log(data);

        await setCart_items(data.cartItems[0]);

       // console.log(cart_items);
    }


    useEffect(() => {
        if (!cookies.access_token)
            navigate("/signin?redirect=/orderHistory")
        else {
            handleproducthistory();
        }
    }, [])
    return (
        <>
        <h1>{
            console.log("data",cart_items)}</h1>
            <h1 className='orderTitle'>Order History</h1>
            <table className='orderhisTable'>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Total Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12345</td>
                        <td>2023-03-10</td>
                        <td>$120.00</td>
                        <td>Processing</td>
                        <td><button className='remove_btn'>Details</button></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default OrderHistory