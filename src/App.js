import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './app.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './Components/Footer/Footer'

import Homepage from './Components/Homepage/Homepage'
import ISA_Page from './Components/ISA_Page/ISA_Page'
import ContactUs from './Components/ContactUs/ContactUs'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
import TermsOfUse from './Components/TermsOfUse/TermsOfUse'

function App() {
    return (
        <BrowserRouter>
        <div className="AppContainer">
            <Switch>
                <Route path='/' exact component={Homepage}/>
                <Route path='/isa' component={ISA_Page}/>
                <Route path='/contact-us' component={ContactUs}/>
                <Route path='/terms-of-use' component={TermsOfUse}/>
                <Route path='/privacy-policy' component={PrivacyPolicy}/>
                <Route path='/preetham' component={() => { 
                        window.location.href = 'https://www.linkedin.com/in/preethammendon/'; 
                        return null;
                    }}/>
            </Switch>
            <Footer/>
        </div>
        </BrowserRouter>
    )
}

export default App;
