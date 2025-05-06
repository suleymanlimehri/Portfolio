import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function ProductModal({ open, handleClose, handleSubmit, handleChange, data, editMode }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <h2 style={{ textAlign: "center" }}>{editMode ? "Edit Product" : "Create Product"}</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input type="url" name="image" value={data.image} onChange={handleChange} placeholder="Image URL" required />
          <input type="text" name="title" value={data.title} onChange={handleChange} placeholder="Title" required />
          <input type="number" name="price" value={data.price} onChange={handleChange} placeholder="Price" required />
          <input type="text" name="category" value={data.category} onChange={handleChange} placeholder="Category" required />
          <textarea name="description" value={data.description} onChange={handleChange} placeholder="Description" required />
          <button type="submit" style={{ backgroundColor: "purple", color: "white", border: "none", height: "40px" }}>
            {editMode ? "Update" : "Add"}
          </button>
        </form>
      </Box>
    </Modal>
  );
}
