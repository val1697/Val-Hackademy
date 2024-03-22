import styles  from '../styles';
import { Navbar} from '../components';
import { Outlet } from 'react-router-dom';  

export default function Root() {
    return (
      <>
     <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={styles.boxWidth}>
                    <Navbar />
                </div>
            </div>

        </div>
    <div id="detail">
        <Outlet />
    </div>
      </>
    );
  }