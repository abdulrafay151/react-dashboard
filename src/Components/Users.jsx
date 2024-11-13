import React, { useEffect, useState } from 'react';
import apiInstance from '../Config/Apisconfig';
import Table from './Table';

const Users = () => {
    const [listData, setListData] = useState([]);

    const fetchData = () => {
        apiInstance.get("users")
            .then((res) => {
                console.log(res.data.users);
                setListData([...res.data.users]);
            })
            .catch((err) => {
                console.error(err);
            });
    };


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Table
                data={listData}
                columns={[
                    {
                        key: "firstName",
                        label: "User Name"
                    },
                    {
                        key: "phone",
                        label: "Contact Number"
                    },
                    {
                        key: "email",
                        label: "Email"
                    },
                    {
                        key: "gender",
                        label: "Gender"
                    }
                ]}
            />
        </>
    );
};

export default Users;




















// import React, { useEffect, useState } from 'react';
// import apiInstance from '../Config/Apisconfig';
// import userImage from '../assets/Rafay.jpg'

// const Users = () => {
//     const [listData, setListData] = useState([]);

//     const fetchData = () => {
//         apiInstance.get("users")
//             .then((res) => {
//                 console.log(res);
//                 setListData([...res.data]); // Set directly without spreading
//             })
//             .catch((err) => {
//                 // console.log(err);
//             });
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <>
//             {listData.map((users, index) => (
//                 <div key={index} className='bg-cyan-300 p-32'>
//                     <img className='bg-black p-32 ' src={userImage} alt="User Image" />
//                     {/* <h3>{users.firstName}</h3> */}
//                     {/* <p>jgfkjfhjgfhj</p> */}
//                     <p>{users.data.age}</p>


//                 </div>
//             ))}
//         </>
//     );
// };

// export default Users;
