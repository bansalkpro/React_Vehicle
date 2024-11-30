import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function VehicleList() {
    const [vehicles, setVehicles] = useState([]);
    const navigate=useNavigate();

    const fetchVehicles = () => {
        axios.get('http://localhost:5000/vehicles')
            .then(response => {
                setVehicles(response.data);
            })
            .catch(error => {
                console.log('There was an error fetching the vehicle data !', error);
            }
            )
    }
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/vehicles/${id}`)
            .then(() => {
                fetchVehicles();
            })
            .catch(error => {
                console.log('There was an error deleting the vehicle data !', error);
            }
            )
    }
    useEffect(() => {
        fetchVehicles();
    }, []);


    return (
        <>
            <h3 className="text-center text-success">Vehicle List</h3>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {vehicles.map(vehicle=>(
                <div class="col">
                    <div class="card shadow-sm">
                        <img src={vehicle.image} alt={vehicle.name} className="img-thumbnail"/>
                        <div class="card-body">
                            <h5 className="card-title"> {vehicle.name}</h5>
                            <p class="card-text">{vehicle.description}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button className="btn btn-warning me-2" onClick={() => navigate(`/updatevehicle/${vehicle.id}`)}>Update</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>handleDelete(vehicle.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                
            </div>



        </>
    )
}

export default VehicleList;