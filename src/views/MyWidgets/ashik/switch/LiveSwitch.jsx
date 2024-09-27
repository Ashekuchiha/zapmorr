import { useState } from "react";

const { default: CustomSwitch } = require("src/components/forms/theme-elements/CustomSwitch");

const LiveSwitch = ({ onSwitchChange }) => {
    const [checked, setChecked] = useState(false);
  
    const handleChange = (event) => {
      const isChecked = event.target.checked;
      setChecked(isChecked);
      onSwitchChange(isChecked); // Pass the value (true/false) to the parent
    };
  
    return (
      <div>
        <CustomSwitch checked={checked} onChange={handleChange} />
      </div>
    );
  };

  export default LiveSwitch;
