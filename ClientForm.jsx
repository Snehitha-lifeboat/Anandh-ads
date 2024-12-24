import React, { useState } from "react";

function ClientForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [logo, setLogo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, logo });
    };

    const styles = {
      pageContainer: {
        backgroundColor: "green", // Red background for the entire page
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
      
        formContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            width: "400px",
            margin: "50px auto",
            backgroundColor: "#fff",
            // backgroundColor: 'red',
        },
        heading: { 
          marginBottom: "20px", 
          fontSize: "24px", color: "#333" },
        input: {
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "16px",
        },
        button: {
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        },
    };

    return (
        <form onSubmit={handleSubmit} style={styles.formContainer}>
            <h2 style={styles.heading}>Client Form</h2>
            <input
                type="text"
                placeholder="Enter Client Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
                required
            />
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setLogo(e.target.files[0]?.name || "")}
                style={styles.input}
                required
            />
            <button type="submit" style={styles.button}>
                Submit
            </button>
        </form>
    );
}

export default ClientForm;
