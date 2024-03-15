import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({value, handleChange}) {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
/*when tab is seected or new tab is selected it will generate new index for the selected tab or
 active tab and then onchange event happen and value is updated with new values (active tab value )
  from app.js
  
  here we commented tabpanel bcz here we are not passing children attribute to it so it will return empty div every time so 
  our target to trigger tab change so that we can update  value of attribute value and get the data respectivly
  
  */
          
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value}
         TabIndicatorProps={{
          style:{
              backgroundColor:"var(--color-primary)"
                 }
      }}
          onChange={handleChange} 
          aria-label="basic tabs example" textColor=""> 
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Rock" {...a11yProps(1)} />
          <Tab label="Pop" {...a11yProps(2)} />
          <Tab label="Jazz" {...a11yProps(3)} />
          <Tab label="Blues" {...a11yProps(4)} />
        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={0}>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        
      </TabPanel> */}
    </Box>
  );
}