import MiddleSection from '../components/MiddleSection';
import UserProfile from '../components/UserProfile';
function UserProfilePage() {
    return(
        <div>
            <div className='app-container'>
                <MiddleSection>
                    <UserProfile />
                </MiddleSection>
            </div>
        </div>
    )
}
export default UserProfilePage;