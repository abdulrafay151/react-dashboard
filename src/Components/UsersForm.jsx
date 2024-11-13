import React, { useState } from 'react';
import apiInstance from '../Config/Apisconfig';

const UsersForm = () => {
    const [model, setModel] = useState({});

    const fetchData = () => {
        apiInstance.get("post")
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log("Error fetching data:", err);
            });
    };

    const handleSave = () => {
        console.log(model);
        apiInstance.post("users", {
            name: model.name,
            email: model.email,
            phone: model.phone,
            website: model.website
        }).then((res) => {
            console.log("User data saved successfully:", res.data);
            setModel(...model)
        })
        .catch((err) => {
            console.log("Error saving user data:", err);
        });
    };

    return (
        <>
            <form onSubmit={handleSave}>
                <input
                    type="text"
                    placeholder="User Name"
                    value={model.name}
                    onChange={(e) => setModel(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={model.email}
                    onChange={(e) => setModel(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Phone"
                    value={model.phone}
                    onChange={(e) => setModel(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Website"
                    value={model.website}
                    onChange={(e) => setModel(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
            </form>
        </>
        );
};

export default UsersForm;
