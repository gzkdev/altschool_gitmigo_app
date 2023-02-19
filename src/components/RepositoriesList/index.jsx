import { Link } from "react-router-dom";
import { useRepositoriesContext } from "../../providers/RepositoriesProvider";
import Loader from "../Loader";
import styles from "./RepositoriesList.module.css";

const RepositoriesList = () => {
  const { data, error, isLoading } = useRepositoriesContext();

  return (
    <div className={styles.container}>
      {isLoading && <Loader />}
      {data && (
        <div className={styles.wrapper}>
          <div className={styles.header}>Public Repos</div>
          <ul className={styles.list}>
            {data.map((repo, _) => (
              <li className={styles.item} key={repo.id}>
                <Link to="#">
                  <div data-name>{repo.name}</div>
                  <div data-description></div>
                  <div className={styles.table}>
                    <div className={styles.col}>
                      Stars {repo.stargazers_count}
                    </div>
                    <div className={styles.col}>Forks {repo.forks_count}</div>
                    <div className={styles.col}>
                      Watchers {repo.watchers_count}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RepositoriesList;
