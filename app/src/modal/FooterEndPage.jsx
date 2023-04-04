import classes from './FooterEndPage.module.css';

const FooterEndPage = () =>{
    return(
        <footer className={classes.footer}>
             <div>
            <h3>AbeBooks</h3>
            <ul>
              <li><a href="/">Books,art</a></li>
              <li><a href="/">&amp Collection</a></li>
              <li><a href="/">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h3>Seaflux Web Services</h3>
            <ul>
              <li><a href="/">Scalable Cloud</a></li>
              <li><a href="/">Computing Services</a></li>
            
            </ul>
          </div>
          <div>
            <h3>Seaflux Business</h3>
            <ul>
              <li><a href="/">Everything For</a></li>
              <li><a href="/">Your Business</a></li>
              
            </ul>
          </div>
          <div>
            <h3>Shopbop</h3>
            <ul>
              <li><a href="/">Designer</a></li>
              <li><a href="/">Fashion Brands</a></li>
              <li><a href="/">Instagram</a></li>
            </ul>
          </div>
        </footer>
       
    )
};

export default FooterEndPage;