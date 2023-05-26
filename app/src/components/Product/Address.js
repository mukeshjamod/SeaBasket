import React, { useState } from 'react';
import './Address.css';
import {MdShoppingCartCheckout} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
 

function Address() {

  const navigate = useNavigate();
    const [name, setName] = useState();
    const [mobile, setMobile] = useState();
    const [pinCode, setPinCode] = useState();
    const [address, setAddress] = useState();
    const [place, setPlace] = useState();
    const [landmark, setLandmark] = useState();
    const [city, setCity] = useState();
    const [addressType, setAddressType] = useState();
    const [country, setCountry] = useState('India');
    const [state, setState] = useState();

const SubmitHandler = (e) =>{
e.preventDefault();
navigate('/payment');
}
   



    return (
        <div className='card m-2 addressSection'>
            <div className="addressContainer">
              <MdShoppingCartCheckout size={50}/>
                {/* <div className="addressImageDiv">
                    <img src={checkout} alt="" className='addressImage' />
                </div> */}
                <div className="addressTitleTextDiv">
                    <p className='SelectDeliveryAddressText'>Select a delivery address</p>
                </div>
                <hr />
              
                    {/* <div className="existingShippingAddressSection">
                        <p className="existingShippingAddressName">name</p>
                        <p className="existingShippingAddressAddress">{address}</p>
                        <p className="existingShippingAddressPlace">{place}</p>
                        <p className="existingShippingAddress"><span className="existingShippingAddressCity">{city}, </span><span className="existingShippingAddressState">{state} </span><span className="existingShippingAddressPinCode">{pinCode}</span></p>
                        <p className="existingShippingAddressCountry">{country}</p>
                        <p className="existingShippingAddInstructions">Add delivery instructions</p>
                        <div className="existingShippingBtnDiv">
                            <button className='existingShippingBtn' onClick={submitHandler}>Deliver to this address</button>
                        </div>
                        <hr />
                    </div> */}
                
                <form onSubmit={SubmitHandler}>
                    <div className="newAddressDiv">
                        <div className="newAddressFormContainer">
                            <p className='addNewAddressText'>Add a new address</p>

                            <div className="formDivTop">
                                <label htmlFor="country" className='newAddressLabel labelCountry'>Country/Region</label>
                                <select name="country" id="" className='selectCountry' value={country} onChange={(e) => setCountry(e.target.value)}>
                                    <option value="India" className='countryOption'>India</option>
                                </select>
                            </div>
                            <div className="formDiv">
                                <label htmlFor="name" className='newAddressLabel labelName'>Full name</label>
                                <input required type="text" className='inputSpace inputName' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="formDiv">
                                <label htmlFor="number" className='newAddressLabel labelNumber'>Mobile number</label>
                                <input required type="tel" pattern="^\d{10}$" className='inputSpace inputNumber' name='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                            </div>
                            <div className="formDiv">
                                <label htmlFor="pincode" className='newAddressLabel labelPincode'>Pincode</label>
                                <input required type="num" className='inputSpace inputPincode' name='pincode' value={pinCode} placeholder="6 digits [0-9] PIN code" onChange={(e) => setPinCode(e.target.value)} />
                            </div>
                            <div className="formDiv">
                                <label htmlFor="flat" className='newAddressLabel labelFlat'>Flat, House no., Building, Company, Apartment</label>
                                <input required type="text" className='inputSpace inputFlat' name='address' value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className="formDiv">
                                <label htmlFor="area" className='newAddressLabel labelArea'>Area, Street, Sector, Village</label>
                                <input required type="text" className='inputSpace inputArea' name='place' value={place} onChange={(e) => setPlace(e.target.value)} />
                            </div>


                        </div>
                    </div>

                    <div className="newAddressLocationDiv">
                        <div className="newAddressFormContainerRight">
                            <div className="formDiv">
                                <label htmlFor="landmark" className='newAddressLabel labelLandmark'>Landmark</label>
                                <input required type="text" className='inputSpace inputLandmark' value={landmark} placeholder='E.g. near Apollo hospital' name='landmark' onChange={(e) => setLandmark(e.target.value)} />
                            </div>
                            <div className="formDiv inputCityDiv">
                                <label htmlFor="city" className='newAddressLabel labelCity'>Town/City</label>
                                <br />
                                <input required type="text" className='inputCity' name='city' value={city} onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <div className='selectStateDiv'>
                                <label htmlFor="state" className='newAddressLabel labelState'>State</label>
                                <br />
                                <select name="state" id="" className='selectState' value={state} onChange={(e) => setState(e.target.value)}>
                                    <option value="">Choose a state</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Kerala">Gujrat</option>
                                    <option value="Kerala">rajsthan</option>
                                    <option value="Kerala">karnataka</option>
                                </select>
                            </div>
                            <br />
                            <div className='formDivTop'>
                                <input type="checkbox" className='addressCheckbox' name='defaultAddress' />
                                <label htmlFor="addressDefault" className='newAddressLabel labelDefaultAddress'>Make this my default address</label>
                            </div>

                            <div className="deliveryInstructionDiv">
                                <p className='deliveryInstructionText'>Add delivery instructions</p>
                            </div>
                            <div className='deliveryInstructionContentDiv'>
                                <p className='deliveryInstructionContentText'>Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned.</p>
                            </div>
                            <div className='formDiv'>
                                <label htmlFor="type" className='newAddressLabel labelType'>Address Type</label>
                                <select name="addressType" id="selectAddress" className='selectAddressType' value={addressType} onChange={(e) => setAddressType(e.target.value)}>
                                    <option value="">Select an Address Type</option>
                                    <option value="Home (7 am - 9 pm delivery)">Home (7 am - 9 pm delivery)</option>
                                    <option value="Office/Commercial (10 am - 6 pm delivery)">Office/Commercial (10 am - 6 pm delivery)</option>
                                </select>
                            </div>
                            <div className='useAddressBtnDiv'>
                                <button className='useAddressBtn' type='submit'>Use this address</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Address;
