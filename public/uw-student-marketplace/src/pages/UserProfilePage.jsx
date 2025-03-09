import MiddleSection from '../components/MiddleSection';

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