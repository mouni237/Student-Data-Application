import EmployeeSkills from "./EmployeeSkills"; 
import Paper from '@mui/material/Paper'; 
import Badge from "@mui/material/Badge";
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';

function EmployeeCard({ employee }) { 
  return ( 
    <div style={{ textAlign: "center", margin: "10%", border: "1px solid grey", borderRadius: "50px", width: "18%", marginLeft: "33%", backgroundColor: "grey", color: "whitesmoke" }}> 
      {/* <Paper elevation={7} style={{ width: '50%', textAlign: 'center', padding: '7%', height: '48%', margin: 'auto' }} >  */}
        <h2 style={{ color: "AccentColorText" }}>Employee Details</h2> 
        <p>Name: {employee.name}</p> 
        <p>Role: {employee.role}</p> 
        <p>Salary: ₹{employee.salary}</p> 
        
        
        <IconButton aria-label={employee.label || "Mails"}>
          <Badge
            badgeContent={employee.unreadNotificationsCount || 0}
            color="secondary"
            max={employee.maxVisibleNotifications || 99}
          >
            <MailIcon />
          </Badge>
        </IconButton>

        {/* <EmployeeSkills skills={employee.skills} /> */} 
      {/* </Paper> */}
    </div> 
  ); 
} 

export default EmployeeCard;
