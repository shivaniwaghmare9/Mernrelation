



//======================================================MIDDALEWARE(error handling)=====-=======================================================
import img1 from "../images/midware.webp"

const Home=()=>{
  
  
  return(
     <>    <h3 className='h33'>Our page!!</h3>
          <div className="container">
    
    <div className="text">
      <h1>Welcome to Our Website</h1>
      <p>
        We provide creative digital solutions to grow your business online.
        Let’s build something amazing together. Check out our services and portfolio to learn more.
      </p>
      <button>Get Started</button>
    </div>

    
    <div className="image">
      <img src={img1} alt="Home page illustration"/>
    </div>
  </div>



  
    </>
    )
}
export default Home