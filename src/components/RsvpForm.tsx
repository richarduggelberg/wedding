const RsvpForm = () => {
    return (
        <>
            <div style={{ margin: "20px 5%", maxWidth: "900px" }}>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            placeholder="1234 Main St"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Sign in
                    </button>
                </form>
            </div>
        </>
    );
};

export default RsvpForm;
