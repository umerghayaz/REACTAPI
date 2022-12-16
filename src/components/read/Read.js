import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

export default function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`https://639b1ae531877e43d682709d.mockapi.io/crud`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])

    const setData = (id, firstName, lastName) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
    }

    const getData = () => {
        axios.get(`https://639b1ae531877e43d682709d.mockapi.io/crud`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }
    const [myData, setMyData] = useState([]);
    const[isError,setIserror]=useState("");
    const getMyPostData = async () => {
      try {
        // const res = await axios.get("https://639b1ae531877e43d682709d.mockapi.io/crud");
        const res = await axios.get("http://127.0.0.1:5000/getdata");
        setMyData(res.data);
        // getMyPostData()
      } catch (error) {
        setIserror(error.message);
      }
      
    };
    const getMyDeleteData = async (_id) => {
      try {
        const res = await axios.delete(`http://127.0.0.1:5000/delete/${_id}`)
        getMyPostData();
      } catch (error) {
        setIserror(error.message);
      }
      
    };
    useEffect(() => {
      getMyPostData();
    }, [])
    const onDelete = (id) => {
        axios.delete(`http://127.0.0.1:5000/delete/${id}`)
        .then(() => {
            getData();
        })
    }
 
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>id Name</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {isError !== "" && <h2>{isError}</h2>}
                    {myData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.message}</Table.Cell>
                                <Table.Cell>{data.type}</Table.Cell>
                                <Table.Cell>{data._id}</Table.Cell>
                                <Table.Cell>
                                    {/* <Link to='/update'> */}
                                        <Button
                                            color="green"
                                            onClick={() => setData(data._id, data.firstName, data.lastName)}>
                                            Update
                                        </Button>
                                    {/* </Link> */}
                                </Table.Cell>
                                <Table.Cell>
                                    <Button color="red" onClick={() => getMyDeleteData(data._id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}