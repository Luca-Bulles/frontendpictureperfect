const Postcontent = () => {
    return (
        <div>
            <br></br>
            <h1>Add content here below: </h1>
            <form>
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
                    <input type="text" name="year" />
                </label>
                <br></br>
                <input type="submit" value="submit" />
            </form>
        </div>
    )

}



export default Postcontent;