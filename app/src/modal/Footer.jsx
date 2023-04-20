import classes from './Footer.module.css';


const  FooterPage = ()=>{
    return (<footer>
        <div className={classes.footer}>
          
          <div>
            <h3>Get To Know US</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Release</li>
              <li>Seaflux Science</li>
            </ul>
          </div>
         <div>
            <h3>Connect with Us</h3>
            <ul>
              <li><a href="https://www.instagram.com/seaflux.tech/?hl=en">Instagram</a></li>
              <li><a href="https://twitter.com/SeafluxTech">Twitter</a></li>
              <li><a href="/">Facebook</a></li>
            </ul>
          </div>
          <div>
            <h3>Make Money with Us</h3>
            <ul>
              <li>Sell on Seaflux</li>
              <li>Sell under Seaflux Accelerator</li>
              <li>Protect and Build Your Brand</li>
              <li>Seaflux Global Selling</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by Seaflux</li>
              <li>Advertise Your Products</li>
              <li>Seaflux Pay on Merchants</li>
            </ul>
          </div>
          <div><h3>
            Let Us Help You
          </h3>
            <ul>
              <li>COVID-19 and Seaflux</li>
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>100% Purchase Protection</li>
              <li>Seaflux App Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
    </footer>)
}

export default FooterPage;