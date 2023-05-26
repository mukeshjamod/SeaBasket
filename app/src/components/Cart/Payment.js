import { useStateValue } from '../../store/CartProvider';
import'./PaymentMethod.css';
import {SiAmazonpay} from 'react-icons/si';

function PaymentMethods({price}) {
  const [{cart}, dispatch] = useStateValue();

  // const [paymentMethod, setPaymentMethod] = useState('');

  // const handlePaymentChange = (event) => {
  //   setPaymentMethod(event.target.value);
  // };
  const totalPrice = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.qty;
  }, 53.15);
  return (

  
<div className="card paymentSection ">
  
      <div className="paymentContainer ">
        <div className="paymentImageDiv bg bg-danger d-flex justify-content-center ">
        <SiAmazonpay size={70} />
        
        </div>
        <div className="paymentTitleDiv">
          <p className="paymentTitle">Select a payment method</p>
        </div>
        <div className="paymentContentContainer">
          <div className="paymentMethodContainerDiv">
            <div className="paymentMethodTitleDiv">
              <p className="paymentMethodTitle">Payment method</p>
            </div>
            <div className="paymentMethodContentDiv">
              <p className="paymentMethodContent">PayPal</p>
            </div>
          </div>
          <div className="paymentContentContainerDivSection scroll scrollbar">
            {cart.map((product) => (
              <div key={product.product} className="paymentContentDiv">
                <div className="paymentContentImageDiv">
                  <img
                    src={product.image}
                    alt=""
                    className="paymentContentImage"
                  />
                </div>
                <div className="paymentContentContainerDiv">
                  <div className="paymentContentProductTitleDiv">
                    <p className="paymentContentProductTitle">{product.name}</p>
                  </div>

                  <div className="paymentContentProductPriceDiv">
                    <p className="paymentContentProductPrice">
                      ${product.price}
                    </p>
                  </div>
                  <div className="paymentContentProductQtyDiv">
                    <p className="paymentContentProductQtyTitle">
                      Quantity:{" "}
                      <span className="paymentContentProductQty">
                        {product.qty}{" "}
                      </span>{" "}
                      <span
                        className="paymentContentProductQtyChange"
                        onClick={(e) => {
                          e.preventDefault();
                          // navigate("/cart/:id");
                        }}
                      >
                        {" "}
                        Change
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="paymentPlaceSection mb-3 d-flex justify-content-center">
        <div className="paymentPlaceContainer">
          <div className="paymentPlaceContinueBtnDiv">
            <button
              className="paymentPlaceContinueBtn"
              onClick={(e) => {
                e.preventDefault();
                // placeOrderHandler();
              }}
            >
              Place your order
            </button>
          </div>
          <div className="paymentPlaceOrderTitleDiv">
            <p className="paymentPlaceOrderTitle">Order Summary</p>
          </div>
          <div className="paymentPlaceItemsTextDiv">
            <p className="paymentPlaceItemsText">Items : </p>
            <p className="paymentPlaceItemsPrice">$ {cart.length}</p>
          </div>
          <div className="paymentPlaceDeliveryTextDiv">
            <p className="paymentPlaceDeliveryText">Delivery : </p>
            <p className="paymentPlaceDeliveryPrice">$ {price} </p>
          </div>
          <div className="paymentPlaceTotalTextDiv">
            <p className="paymentPlaceTotalText">Total : </p>
            <p className="paymentPlaceTotalPrice">${totalPrice} </p>
          </div>
          <div className="paymentPlacePromotionTextDiv">
            <p className="paymentPlacePromotionText">Promotion Applied :</p>
            <p className="paymentPlacePromotionPrice">‒ $</p>
          </div>
          <hr />
          <div className="paymentPlaceOrderTotalDiv">
            <p className="paymentPlaceOrderTotal">Order Total :</p>
            <p className="paymentPlaceOrderTotalPrice">$ 4</p>
          </div>
          <hr />
          <div className="paymentPlaceSavingsTextDiv">
            <p className="paymentPlaceSavingsText">Your Savings :</p>
            <p className="paymentPlaceSavingPrice">$ 10%</p>
            <ul className="ulSection">
              <li>
                <span className="liText">Free Delivery</span>
              </li>
              <li>
                <span className="liText">Item discount</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}



export default PaymentMethods;
