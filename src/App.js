
import './App.css';
import MuiTypography from './components/MuiTypography';
import MuiButtons from './components/MuiButtons';
import MuiButtonGroup from './components/MuiButtonGroup';
import ToggleButtonGroup from './components/ToggleButtonGroup';
import MuiTextfield from './components/MuiTextfield';
import MuiSelect from './components/MuiSelect';
import MuiRadio from './components/MuiRadio';
import MuiCheckbox from './components/MuiCheckbox';
import MuiSwitch from './components/MuiSwitch';
import MuiRating from './components/MuiRating';
import MuiAutocomplete from './components/MuiAutocomplete';
import MuiBox from './components/MuiBox';
import MuiGrid from './components/MuiGrid';
import MuiCard from './components/MuiCard';
import MuiAccordion from './components/MuiAccordion';
import MuiImageList from './components/MuiImageList';
import MuiNavBar from './components/MuiNavBar';
import MuiLink from './components/MuiLink';
import MuiBreadcrumbs from './components/MuiBreadcrumbs';
import MuiDrawer from './components/MuiDrawer';
import MuiSpeedDial from './components/MuiSpeedDial';
import MuiBottomNavigation from './components/MuiBottomNavigation';
import MuiAvatar from './components/MuiAvatar';
import MuiBatch from './components/MuiBatch';
import MuiList from './components/MuiList';

function App() {
  return (
    <div className="App">
      <MuiNavBar/>
      <MuiBreadcrumbs />
      <MuiSpeedDial />
      <MuiDrawer />
     <MuiTypography/>
     <MuiButtons/>
     <MuiButtonGroup />
     <ToggleButtonGroup />
     <MuiTextfield />
     <MuiSelect />
     <MuiAutocomplete />
     <MuiRadio />
     <MuiCheckbox />
     <MuiSwitch/>
     <MuiRating/>
    <MuiBox />
    <MuiGrid />
    <MuiCard/>
    <MuiAccordion/>
    <MuiImageList />
    <MuiLink />
   <MuiAvatar/>
  <MuiBatch />
  <MuiList/>
    <MuiBottomNavigation />
    </div>
  );
}

export default App;
