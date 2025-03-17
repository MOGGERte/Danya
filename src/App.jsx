import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import s from "./styles.module.css";
import { Sidebar } from "./components/Sidebar";
export const App = () => {
    return (
        <div>
            <Header />
            <div className={s.container}>
                <Sidebar />
                {/* <Dashboard /> */}
            </div>
        </div>
    );
};
