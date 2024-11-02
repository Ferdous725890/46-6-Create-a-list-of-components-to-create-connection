import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";


const Dat = () => {
    return (
        <div className="border border-teal-500 m-5 p-8">
            <h2>Dad </h2>
            <section className="flex">
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>

            </section>
        </div>
    );
};

export default Dat;