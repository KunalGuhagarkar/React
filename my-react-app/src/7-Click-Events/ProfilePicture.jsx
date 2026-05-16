
function ProfilePicture() {

  const img_src = './src/assets/spidey.jpg';

  const handleClick = (e) => e.target.hidden = true;

  return <img src={img_src} alt="Spidey Baby" onClick={handleClick} width={300} height={300}/>

}

export default ProfilePicture;