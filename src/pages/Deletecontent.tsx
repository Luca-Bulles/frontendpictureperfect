import axios from "axios";
import KeyCloakService from "../security/KeycloakService";

const Deletecontent = () => {
    const config = {
        headers: { Authorization: `Bearer ${KeyCloakService.GetToken()}` }
    };

    const deleteHandler = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const result = await axios.delete(`https://localhost:5003/ocelot/content/${data.id}`, config);
        console.log(result.data)
    };

    return (
        <div>
            <br></br>
            <h1>Delete Content here below:</h1>
            <form onSubmit={deleteHandler}>
                <label>
                    Id:
                    <br></br>
                    <input type="number" name="id" />
                </label>
                <br></br>
                <input type="submit" value="submit" />
            </form>
        </div>
    )

}


export default Deletecontent;