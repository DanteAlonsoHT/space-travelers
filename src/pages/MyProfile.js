import ReservedRockets from '../components/rockets/ReservedRocketsList';
import MyProfileStyles from './MyProfile.module.css';

const MyProfile = () => (
  <div>
    <div className={MyProfileStyles.pageContainer}>
      <div className={MyProfileStyles.missionsContainer}>
        <h2 className={MyProfileStyles.title}>My Missions</h2>
      </div>
      <div className={MyProfileStyles.rocketsContainer}>
        <h2 className={MyProfileStyles.title}>My Rockets</h2>
        <ReservedRockets />
      </div>
    </div>
  </div>
);

export default MyProfile;
