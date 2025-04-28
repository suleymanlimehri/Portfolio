import React from 'react'
import Product from '../../components/product/Product'
import Table from 'react-bootstrap/Table';

const Products = ({ product ,Delete,Edit}) => {
    return (
        <>
         <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Setting</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((item) => (
                            <Product  key={item.id}  title={item.title} price={item.price} ondelete={()=>Delete(item.id)} onedit={()=>Edit(item)} />
                        )
                        )
                    }
                </tbody>
         </Table>
        
        </>

    )
}

export default Products
