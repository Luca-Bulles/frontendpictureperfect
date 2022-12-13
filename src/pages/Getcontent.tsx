import axios from "axios";
import KeyCloakService from "../security/KeycloakService";

const Getcontent = () => {

    const config = {
        headers: { Authorization: `Bearer ${KeyCloakService.GetToken()}` }
    };

    const getHandler = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const resultGet = await axios.get("https://localhost:5003/ocelot/content", config);
        console.log("Axios.Get: ", resultGet);
    };

    return (
        <div>
            <h1>Find all content here below:</h1>
        </div>
    )

}



export default Getcontent;