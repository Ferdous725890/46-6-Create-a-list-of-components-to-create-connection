import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div className="border border-teal-500 m-5 p-8">
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin></Cousin>
                <Cousin></Cousin>

            </section>
        </div>
    );
};

export default Uncle;