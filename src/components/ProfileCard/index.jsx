import React from "react";
import { Link } from "react-router-dom";
import { useProfileContext } from "../../providers/ProfileProvider";
import styles from "./ProfileCard.module.css";

const ProfileCard = () => {
  const { data, isLoading } = useProfileContext();
  //   console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Link to="/" data-back-link>
          Back
        </Link>
        <div className={styles.cardThumbnail}>
          <img src={data.avatar_url} alt={`${data.name}'s profile photo`} />
        </div>
        <div data-name>{data.name}</div>
        <div data-username>{data.login}</div>
        {/* <div>{data.location}</div> */}
        {/* <div data-bio>{data.bio}</div> */}
        <div className={styles.table}>
          <div className={styles.row}>
            Followers<div>{data.followers}</div>
          </div>
          <div className={styles.row}>
            Following<div>{data.following}</div>
          </div>
          <div className={styles.row}>
            Public Repos<div>{data.public_repos}</div>
          </div>
        </div>
        <Link to={`/${data.login}/repos`} className={styles.cardLink}>
          Repositories
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
