import Cousin from "../Cousin/Cousin";

const Aunty = () => {
    return (
        <div className="border border-teal-500 m-5 p-8">
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'ferdous'} ></Cousin>
                <Cousin name={'ferdous two'} ></Cousin>
               
            

            </section>
        </div>
    );
};

export default Aunty;