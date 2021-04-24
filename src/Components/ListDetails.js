import { useParams } from "react-router";

const ListDetails = () => {
    const {id}=useParams();
    return ( 
        <div className="list-details">
            <h2>List Details of {id}</h2>
        </div>
     );
}
 
export default ListDetails;