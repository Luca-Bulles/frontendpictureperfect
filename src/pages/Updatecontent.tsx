import axios from "axios";
import KeyCloakService from "../security/KeycloakService";

const Updatecontent = () => {

    const config = {
        headers: { Authorization: `Bearer ${KeyCloakService.GetToken()}` }
    };

    const updateHandler = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const result = await axios.put("https://localhost:5003/ocelot/content", data, config);
        console.log(result.data)

    };

    return (
        <div>
            <br></br>
            <h1>Update existing content here below: </h1>
            <form onSubmit={updateHandler}>
                <label>
                    Id:
                    <br></br>
                    <input type="number" name="contentId" />
                </label>
                <br></br>
                <label>
                    Category:
                    <br></br>
                    <input type="text" name="category" />
                </label>
                <br></br>
                <label>
                    Name:
                    <br></br>
                    <input type="text" name="name" />
                </label>
                <br></br>
                <label>
                    Subject:
                    <br></br>
                    <input type="text" name="subject" />
                </label>
                <br></br>
                <label>
                    Description:
                    <br></br>
                    <input type="text" name="description" />
                </label>
                <br></br>
                <label>
                    Cast:
                    <br></br>
                    <input type="text" name="cast" />
                </label>
                <br></br>
                <label>
                    Duration:
                    <br></br>
                    <input type="text" name="duration" />
                </label>
                <br></br>
                <label>
                    Year:
                    <br></br>
                    <input type="number" name="year" />
                </label>
                <br></br>
                <input type="submit" value="submit" />
            </form>
        </div>
    )

}



export default Updatecontent;