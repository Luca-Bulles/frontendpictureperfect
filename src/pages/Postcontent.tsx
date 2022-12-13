import axios from "axios";
import KeyCloakService from "../security/KeycloakService";

const Postcontent = () => {

    const config = {
        headers: { Authorization: `Bearer ${KeyCloakService.GetToken()}` }
    };

    const postHandler = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const resultGet = await axios.get("https://localhost:5003/ocelot/content", config);
        console.log(resultGet);
        const result = await axios.post("https://localhost:5003/ocelot/content", data, config);
        console.log(result.data)

    };

    return (
        <div>
            <br></br>
            <h1>Add content here below: </h1>
            <form onSubmit={postHandler}>
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



export default Postcontent;