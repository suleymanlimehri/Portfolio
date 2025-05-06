import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { getProduct, addProduct, deleteProduct, updateProduct } from '../redux/features/ProductSlice';
import Modal from "../utilits/modal/Modal";
import { useNavigate } from "react-router-dom";
import ProductModal from "../utilits/modal/Modal";

function AdminPanel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Allproduct } = useSelector(state => state.products);

  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState({
    id: null,
    image: "",
    title: "",
    price: "",
    category: "",
    description: ""
  });

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleOpen = () => {
    setEditMode(false);
    setData({ id: null, image: "", title: "", price: "", category: "", description: "" });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(updateProduct(data)).then(() => {
        toast.success("Product updated!");
        handleClose();
      });
    } else {
      dispatch(addProduct(data)).then(() => {
        toast.success("Product added!");
        handleClose();
      });
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id)).then(() => {
      toast.success("Product removed!");
    });
  };

  return (
    <div style={{ marginTop: "6rem", padding: "0 2rem" }}>
      <h2 className="text-center mb-4">Admin Panel</h2>
      <Button variant="dark" className="mb-3" onClick={handleOpen}>+ Create</Button>

      <Table striped bordered hover responsive>
        <thead className="text-center">
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price ($)</th>
            <th>Category</th>
            <th>Settings</th>
          </tr>
        </thead>
        <tbody>
          {Allproduct && Allproduct.map((item) => (
            <tr key={item.id} className="align-middle text-center">
              <td>
                <img
                  src={item.image}
                  alt={item.title}
                  width="100"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/detail/${item.id}`)}
                />
              </td>
              <td>{item.title}</td>
              <td>{parseFloat(item.price).toFixed(2)}</td>
              <td>{item.category}</td>
              <td>
                <div className="d-flex flex-column gap-2">
                  <Button variant="danger" onClick={() => dispatch(deleteProduct(item.id))}>Remove</Button>
                  <Button variant="secondary" onClick={() => handleEdit(item)}>Edit</Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal */}
      <ProductModal
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        data={data}
        editMode={editMode}
      />
    </div>
  );
}

export default AdminPanel;
