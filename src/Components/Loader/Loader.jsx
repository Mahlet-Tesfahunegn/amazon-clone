import react from "react";
import { FadeLoader } from "react-spinners";

const Loader = () => {
    return (
        <div style = {{
            display: "flex",
            justifyContent: "Center",
            alignItems: "Center",
            height: "50vh",
        }}>
           <FadeLoader color="#36d7b7" />
        </div>
    );
}

export default Loader;