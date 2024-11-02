import Aunty from "../Aunty/Aunty";
import Dat from "../Dat/Dat";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

const Grandpa = () => {
    return (
        <div className="garnpa">
            <h2>Grandpa</h2>
            <section className="flex">
                <Dat></Dat>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;