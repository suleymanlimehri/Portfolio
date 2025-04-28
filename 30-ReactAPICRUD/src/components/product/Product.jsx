import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Product = ({  title, price ,ondelete,onedit}) => {
    return (
                    <tr>
                        <td>{title}</td>
                        <td>{price}</td>
                        <td><MdDelete  size={25} color="rgb(13, 204, 115)"  onClick={()=>ondelete()}/>  <FaEdit size={25}  color='green' onClick={()=>onedit()}/></td>
                    </tr>
    )
}

export default Product
