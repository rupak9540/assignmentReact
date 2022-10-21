import React, { useEffect, useState } from 'react'


const Api = () => {
    const [data, setData] = useState([]);
    const [searchUser, setSearchUser] = useState("");
    // const [isChecked, setisChecked] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts`
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setData(actualData);
                console.log(actualData)
                // setError(null);
            } catch (err) {
                // setError(err.message);
                setData(null);
            }
        }
        getData()
    }, [])
    return (
        <div className='container'>
            
                <div className="container-fluid mt-4">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearchUser(e.target.value)} checked={data}/>
                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                </div>
            
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>

                    </tr>
                </thead>
                <tbody>
                    {
                         data
                            .filter((dat) => {
                                {/* const {id,title,body} = dat; */}

                                if (searchUser === "") return data;
                                else if (
                                    searchUser === "" ||
                                   
                                    dat.title.includes(searchUser) ||
                                    dat.body.includes(searchUser)
                                )
                                    return data;


                            })

                            .map(({ id, title, body }) => (

                                <tr key={id}>
                                    <th scope="row">{id}</th>
                                    <td>{title}</td>
                                    <td>{body}</td>

                                </tr>
                            ))

                    }

                </tbody>
            </table>
        </div>
    )
}

export default Api;