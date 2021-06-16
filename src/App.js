import './App.css';
import Services from './components/Serives'
import Card from './components/CardRegistration'
import EyeClinic from './components/EyeClinic'
import IntensiveCare from './components/IntensiveCare'
import PreMarital from './components/PreMaritalTest'
import LabTest from './components/LabTest'
import UltraSound from './components/UltraSound'
import NursingUnit from './components/NursingUnit'
import Consultation from './components/Consutation'
import Admission from './components/Admission'
import Deliveries from './components/Deliveries'
import Dispensing from './components/DispensingUnit'
import End from './components/End'
import Deskofficer from './components/DeskOfficer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Deskofficer}/>
        <Route exact path='/services' component={Services}/>
        <Route exact path='/card' component={Card}/>
        <Route exact path='/eyeclinic' component={EyeClinic}/>
        <Route exact path='/intensivecare' component={IntensiveCare}/>
        <Route exact path='/premarital' component={PreMarital}/>
        <Route exact path='/labtest' component={LabTest}/>
        <Route exact path='/ultrasound' component={UltraSound}/>
        <Route exact path='/nursing' component={NursingUnit}/>
        <Route exact path='/consultation' component={Consultation}/>
        <Route exact path='/admission' component={Admission}/>
        <Route exact path='/deliveries' component={Deliveries}/>
        <Route exact path='/dispensing' component={Dispensing}/>
        <Route exact path='/end' component={End}/>
      </Switch>
    </Router>
  );
}

export default App;
