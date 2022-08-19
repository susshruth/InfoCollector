import React, { useState } from 'react';
import './FormLauncherFunction.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';

export default function FormxFL(initValue){
    const [name, setName] = useState("");
    const [country, setCountry] = useState("Canada");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState();

    const [food, setFood] = useState("");
    const [color, setColor] = useState("");
    const [movie, setMovie] = useState("");
    const [sport, setSport] = useState("");

    const handleName = event => setName(event.target.value);
    const handleAge = event => setAge(event.target.value);
    const handleCountry = event => setCountry(event.target.value);
    const handleMale = event => setGender("Male");
    const handleFemale = event => setGender("Female");

    const handleFood = event => setFood(event.target.value);
    const handleColor = event => setColor(event.target.value);
    const handleMovie = event => setMovie(event.target.value);
    const handleSport = event => setSport(event.target.value);
    const space = " ";

    const alteredinfo = () => {
        return(
            <table>
                <tr><td>Name: </td><td>{name}</td></tr>
                <tr><td>Age: </td><td>{age}</td></tr>
                <tr><td>Country: </td><td>{country}</td></tr>
                <tr><td>Gender: </td><td>{gender}</td></tr>
                <tr><td>Favorite Food: </td><td>{food}</td></tr>
                <tr><td>Favorite Color: </td><td>{color}</td></tr>
                <tr><td>Favorite Movie: </td><td>{movie}</td></tr>
                <tr><td>Favorite Sport: </td><td>{sport}</td></tr>
            </table>
        )
    }
    const alter = () => {
        let html = `<h1>InfoCollectorProfile</p></h1><table><tr><td>Name: </td><td>${name}</td></tr><tr><td>Age: </td><td>${age}</td></tr><tr><td>Country: </td><td>${country}</td></tr><tr><td>Gender: </td><td>${gender}</td></tr><tr><td>Favorite Food: </td><td>${food}</td></tr><tr><td>Favorite Color: </td><td>${color}</td></tr><tr><td>Favorite Movie: </td><td>${movie}</td></tr><tr><td>Favorite Sport: </td><td>${sport}</td></tr></table>`;
        document.getElementById('form-page').innerHTML=""
        let list = document.querySelector('#form-page');
        list.insertAdjacentHTML("beforeend", html)

    }
    return(
        <div>
            <form id="form-page">
                <h1>InfoCollector</h1><br/>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="home" title="User Info">
                        <label>Name: {space}</label><br/><input type="letter" value={name} onChange={handleName}/><br/>
                        <label>Age: {space}</label><br/><input type="number" value={age} onChange={handleAge}/><br/>
                        <label>Country: {space}</label><br/>
                        <select value={country} onChange={handleCountry}>
                            <option value="India">India</option>
                            <option value="Canada">Canada</option>
                            <option value="USA">USA</option>
                        </select><br/>

                        <label>Gender: {space}</label><br/>
                        <input type="radio" name="Gender" value={gender} onChange={handleMale}/>Male {space}
                        <input type="radio" name="Gender" value={gender} onChange={handleFemale}/>Female<br/>
                    </Tab>
                    <Tab eventKey="favorite" title="Favorite">
                        <label>Favorite Food: {space}</label><br/><input type="letter" value={food} onChange={handleFood}/><br/>
                        <label>Favorite Color: {space}</label><br/><input type="letter" value={color} onChange={handleColor}/><br/>
                        <label>Favorite Movie: {space}</label><br/><input type="letter" value={movie} onChange={handleMovie}/><br/>
                        <label>Favorite Sport: {space}</label><br/><input type="letter" value={sport} onChange={handleSport}/><br/>
                        <Button variant="primary" onClick={alter}>Done</Button>
                    </Tab>
                </Tabs>
            </form>
        </div>
    );
}
