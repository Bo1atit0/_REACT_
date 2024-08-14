import profilePic from './assets/mama.jpg'

function ClickPic() {

    const styles = {
        width: "150px"
    }
    const handleClick = (e) => console.log(e)

    return (
        <img onClick={(e) => handleClick(e)} style={styles} alt='My pic' src={profilePic}></img>
    )

}
export default ClickPic