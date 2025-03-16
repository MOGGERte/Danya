import { Info } from "../Info";
import { Payment } from "../Payment";
import { Plan } from "../Plan";
import { Sidebar } from "../Sidebar";

import s from "./styles.module.css"

export const Dashboard = () => {
    return (
        <div>
            <Info />
            <Payment/>
            <Plan/>
        </div>
    );
};
