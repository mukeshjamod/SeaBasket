import FooterPage from "../../modal/Footer";
import FooterEndPage from '../../modal/FooterEndPage';
import classes from './Footer.module.css';
const MainFooterPage = () =>{
return(
  <div className={classes.page}>
    <FooterPage/>
    
    <FooterEndPage/>
    
    </div>
)
}


export default MainFooterPage;