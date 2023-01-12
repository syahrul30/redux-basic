import { useSelector } from "react-redux";

const Result = () => {
    const {total} = useSelector((state) => state)

    return (
        <div>
            <h1>result</h1>
            <h2>{total}</h2>
        </div>
    );
}

export default Result
