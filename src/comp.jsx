import React, { useState, useEffect} from 'react';
import './comp.css';

function Comp() {
    const [name, setName] = useState('');
    const [selectedButton, setSelectedButton] = useState(null);

    useEffect(() => {
        // Set "Carryout" button as selected by default
        const carryoutButton = document.getElementById('carryout');
        setSelectedButton(carryoutButton);
        carryoutButton.classList.add('selectedbtn');
        orderMethod(carryoutButton.id);
    }, []);

    const selectBtn = (event) => {
        const clickedButton = event.target;

        
        if (selectedButton === clickedButton) return;

        
        if (selectedButton) {
            selectedButton.classList.remove('selectedbtn');
        }

        
        clickedButton.classList.add('selectedbtn');

        
        setSelectedButton(clickedButton);

        
        orderMethod(clickedButton.id);
    };

    const changeName = (event) => {
        setName(event.target.value);
    };

    const orderMethod = (selectedId) => {
        const addressInfo = document.getElementById('Addressinfo');
        const carryoutInfo = document.getElementById('Carryoutinfo')
        
        if (selectedId === 'carryout') {
            addressInfo.style.display = 'none';
            carryoutInfo.style.display = 'block';
            addressInfo.style.visibility = 'hidden';
            carryoutInfo.style.visibility = 'visible';
        } else if (selectedId === 'delivery') {
            addressInfo.style.display = 'block';
            carryoutInfo.style.display = 'non';
            addressInfo.style.visibility = 'visible';
            carryoutInfo.style.visibility = 'hidden';
        }
    };

    return (
        <>
            <button onClick={selectBtn} className='selectbtn' id='carryout'>Carryout</button>
            <button onClick={selectBtn} className='selectbtn' id='delivery'>Delivery</button>
            <h2>Name for order: {name}</h2>
            <input 
                className="inputbox" 
                value={name} 
                onChange={changeName} 
                type="text" 
                maxLength={15}
                placeholder='Name'
            />
            <br />
            <h2><label htmlFor="pizza">Choose a pizza:</label></h2>
            <select id="pizza" name="pizza">
                <option value="normalpep">Pepperoni Pizza</option>
                <option value="nopep">Cheese Pizza</option>
                <option value="combo">Combo Pizza</option>
            </select><br></br><br></br>
            <input className="inputbox" type="number" placeholder="Quantity" max={50}/>
            <br /><br />
            <div id="Addressinfo">
                <h1>Address</h1>
                <input className="inputbox" type="text" maxLength={30} placeholder="Street Address" />
                <input className="inputbox" type="text" maxLength={5} placeholder="Apt/Suite" /><br></br>
                <select id="stateDropdown1" className="inputbox">
                    <option value="" disabled selected>Select your state</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
                <input className="inputbox" type="text" maxLength={20} placeholder="City" />
                <input className="inputbox" type="text" maxLength={5} placeholder="Zip/Postal code" />
            </div>
            <div id='Carryoutinfo'>
                <h1>Carryout</h1>
                <h2>Find a location near you!</h2>
                <select id="stateDropdown2" className="inputbox">
                    <option value="" disabled selected>Select your state</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
                <input className="inputbox" type="text" maxLength={20} placeholder="City" />
            </div>
            <br></br><br></br>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><button className='orderbtn'>Place order</button></a>
            <p>This site is a joke and just a ReactJS project</p>
        </>
    );
}

export default Comp;
