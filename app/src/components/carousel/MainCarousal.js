import React,{useState,useRef,useEffect} from 'react';
import './MainCarousal.css';

const MainCarousal = () => {
    const carousal = ["https://m.media-amazon.com/images/I/41FBwjCnS2L._SX1500_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/HMDApril/3000x1200unrec._CB592361612_.png",
    "https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61+Om+g+8SL._SX3000_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/20-April/Back-to-school-GW-hero_3000X1200--BAU._CB592296080_.jpg"
    
    ];
    const delay = 5000;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === carousal.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);



  return (
    <div className="slideshow">
    <div
      className="slideshowSlider"
      style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
    >
      {carousal.map((imageUrl, index) => (
        <div
          className="slide"
          key={index} ><a href='/'>

              <img src={imageUrl} alt={`Slide ${index}`} />
          </a>
          </div>
      ))}
    </div>

  </div>


  )
}

export default MainCarousal;


    // <div className="slideshowDots">
    //   {carousal.map((_, idx) => (
    //     <div
    //       key={idx}
    //       className={`slideshowDot${index === idx ? " active" : ""}`}
    //       onClick={() => {
    //         setIndex(idx);
    //       }}
    //     ></div>
    //   ))}
    // </div>
    // <div id='desktop-banner' className='celWidget' >
    //   <div id="gw-desktop-herotator" data-autorotation-delay="200" className="a-section a-spacing-none aok-relative tall gw-desktop-herotator-ready">
    //     <input autocomplete="on" type="hidden" className="a-carousel-firstvisibleitem" value="7" />
    //     <div className="a-row a-carousel-controls a-carousel-row a-carousel-has-buttons a-carousel-overlay-buttons a-carousel-rounded-buttons">
    //       <div className="a-carousel-row-inner">
    //           <a className="a-carousel-goto-prevpage" tabindex="0" href="/" aria-disabled="false">
    //             <i className="a-icon a-icon-previous-rounded">
    //               <span className="a-icon-alt">Previous slide</span>
    //             </i>
    //           </a>
    //         </div>
    //         <div className="a-carousel-col ">
    //           <div className="a-carousel-viewport" id="anonCarousel1" style={{ height: 1200 }}>
               
    //             <ol className="a-carousel" style={{ width: 12000, transform: `translateX(-4500px) translateZ(1px)` }} aria-busy="false">
    //               <li className="a-carousel-card" style={{ visibility: 'hidden', width: 1500, margin: 0 }} aria-setsize="8" aria-posinset="6" aria-hidden="true">
    //                 <div id="gw-ftGr-desktop-hero-1" >
    //                   <img alt="Amazon fashion" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/Mar/Apay/Rev1/Deals-PC-3000-Unrec._CB592487741_.jpg" width="1500px" height="100%" />
    //                 </div>
    //               </li>
    //               <li className="a-carousel-card" style={{ visibility: 'hidden', width: 1500, margin: 0 }} aria-setsize="8" aria-posinset="7" aria-hidden="true">
    //                 <div id="gw-ftGr-desktop-hero-2" >
    //                   <img alt="MA TB" src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/GWUnrec_BOB/MA3000._CB592961919_.jpg" width="1500px" height="100%" />\
    //                 </div>
    //              </li>
    //               <li className="a-carousel-card" style={{ visibility: 'hidden', width: 1500, margin: 0 }} aria-setsize="8" aria-posinset="8" aria-hidden="true">
    //                 <div id="gw-ftGr-desktop-hero-3" >
    //                   <img alt="Home makeover days" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/GW/HMDApril/3000x1200unrec._CB592361612_.png" width="1500px" height="100%" />
    //                 </div>
    //               </li>
    //               <li className="a-carousel-card" style={{ visibility: 'visible', width: 1500, margin: 0 }} aria-setsize="8" aria-posinset="1" aria-hidden="true">
    //                 <div id="gw-ftGr-desktop-hero-4">
    //                   <img alt="2 percent cashback" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/MARCHGTM/IPL2023/1percentCB/Recharge_PC_Hero_3000x1200_2._CB593370740_.jpg" width="1500px" height="100%" />
    //                 </div>
    //               </li>
    //               <li className="a-carousel-card" style={{ visibility: 'visible', width: 1500, margin: 0 }} aria-setsize="8" aria-posinset="2" aria-hidden="true">
    //                 <div id="gw-ftGr-desktop-hero-5" >
    //                   <img alt="Daily Essentials" src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/Vernac/2021/Gw-Hero/Mobile_tall_Hero_revision_3000x1200._CB604857279_.jpg" width="1500px" height="100%" />
    //                 </div>
    //               </li>
    //               <li className="a-carousel-card" style={{ visibility: 'hidden', width: 1500, margin: 0 }} aria-setsize="8" aria-posinset="3" aria-hidden="true">
    //                 <div id="gw-ftGr-desktop-hero-6" ><MainCarousal/>
     
    //                   <img alt="Join Prime" src="https://m.media-amazon.com/images/I/61+Om+g+8SL._SX3000_.jpg" />
    //                 </div>
    //               </li>
    //               <li className="a-carousel-card" style={{visibility: 'hidden', width: 1500, margin: 0}}  aria-setsize="8" aria-posinset="4" >
    //                 <div id="gw-ftGr-desktop-hero-7" >
    //                   <div id="jIwXcEXv5DVJLdE3ImFsyw" className="a-section a-spacing-none a-text-center scalable-image-link scalable-image-map card-lite ameyal-scalable-image-link">
    //                   </div>
    //                 </div>
    //               </li>
    //               <li className="a-carousel-card" style={{ visibility: 'hidden', width: 1500, margin: 0 }} aria-setsize="8" aria-posinset="5" aria-hidden="true">
    //                 <div id="gw-ftGr-desktop-hero-8" >
    //                     <img alt="One Plus Pre Pre Tease" src="https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg"  />
    //                 </div>
    //               </li>
    //             </ol>
    //           </div>
    //         </div>
          
    //       </div>
    //     </div>
    //   </div>
  
