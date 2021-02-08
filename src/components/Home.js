import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

const Home = () => {

return (
<div id="home">
    <h1 id="welcome"> Welcome to Stranger's Things</h1>
    <p id="slogan">A fun place to buy a variety of items from strangers.</p>
    <div id="legal-disclaimer">
    <p>Legal Disclaimer:</p>
    <p>Items sold on Stranger's Things have not been verified. Purchase these items at your own risk. Do not give personal information out - such as bank account or routing numbers, credit card information, house address, or social security numbers. Don't fall for scams. </p>
    </div>

    <p id="if-you-accept">If you accept these terms, click "I Accept" below.</p>
    <Link id="i-accept" to="/login">I Accept</Link>



    <footer>Copyright&#169; 2021 Stranger's Things Totally Fake Company USA, Inc. 
        <br />
        All rights not reserved cause this isn't a real site.</footer>
</div>

)

}




export default Home;