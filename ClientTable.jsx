import React, { useState } from "react";
import ClientForm from "./ClientForm";

function ClientTable() {
    const [clients, setClients] = useState([
        { id: 1, name: "ABC Corporation", logo: "logo1.png" },
        { id: 2, name: "XYZ Pvt Ltd", logo: "logo2.png" },
    ]);

    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editingClient, setEditingClient] = useState(null);

    const handleEdit = (id) => {
        const client = clients.find((client) => client.id === id);
        setEditingClient(client);
        setIsFormVisible(true);
    };

    const handleDelete = (id) => {
        setClients((prevClients) => prevClients.filter((client) => client.id !== id));
    };

    const handleSubmit = (clientData) => {
        if (editingClient) {
            setClients((prevClients) =>
                prevClients.map((client) =>
                    client.id === editingClient.id ? { ...client, ...clientData } : client
                )
            );
        } else {
            setClients((prevClients) => [
                ...prevClients,
                { id: prevClients.length + 1, ...clientData },
            ]);
        }
        setEditingClient(null);
        setIsFormVisible(false);
    };

    const handleCreateClick = () => {
        setEditingClient(null);
        setIsFormVisible(true);
    };

    const styles = {
        container: { 
          padding: "20px",
           fontFamily: "Arial, sans-serif" },
        topButtonContainer: { 
          display: "flex",
           justifyContent: "flex-end",
            marginBottom: "10px" },
        tableContainer: {
           overflowX: "auto", 
           marginTop: "10px" },
        table: { 
          width: "100%",
           margin: "0 auto",
            borderCollapse: "collapse" },
        headerRow: { 
          backgroundColor: "#4CAF50",
        // backgroundColor:'black',
           color: "white" },
        headerCell: {
           padding: "8px",
            border: "1px solid #ddd" },
        cell: { 
          padding: "8px",
           textAlign: "center", 
           border: "1px solid #ddd" },
        oddRow: {
           backgroundColor: "" }, 
        evenRow: {
           backgroundColor: "" }, 
        button: {
            padding: "10px 20px",
           
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
        },
        editButton: {
            padding: "5px 10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "5px",
        },
        deleteButton: {
            padding: "5px 10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        },
    };

    return isFormVisible ? (
        <ClientForm onSubmit={handleSubmit} />
    ) : (
        <div style={styles.container}>
            <h1>Client Table</h1>

            <div style={styles.topButtonContainer}>
                <button style={styles.button} onClick={handleCreateClick}>
                    Create
                </button>
            </div>

            <div style={styles.tableContainer}>
                <table style={styles.table}>
                    <thead>
                        <tr style={styles.headerRow}>
                            <th style={styles.headerCell}>S.No</th>
                            <th style={styles.headerCell}>Name</th>
                            <th style={styles.headerCell}>Logo</th>
                            <th style={styles.headerCell}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client, index) => (
                            <tr
                                key={client.id}
                                style={index % 2 === 0 ? styles.evenRow : styles.oddRow}
                            >
                                <td style={styles.cell}>{index + 1}</td>
                                <td style={styles.cell}>{client.name}</td>
                                <td style={styles.cell}>
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        style={{ width: "50px", height: "50px" }}
                                    />
                                </td>
                                <td style={styles.cell}>
                                    <button
                                        onClick={() => handleEdit(client.id)}
                                        style={styles.editButton}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(client.id)}
                                        style={styles.deleteButton}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ClientTable;
