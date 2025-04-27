import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export default function Homepage() {

    const navigate = useNavigate()

	return (
		<div className={styles.container}>
            <button
                onClick={() => (navigate("/dashboard"))}
                >DASHBOARD
            </button>
		</div>
	)
}
