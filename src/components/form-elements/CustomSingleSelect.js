import React from 'react';
import {
    FormControl,
    Select,
    MenuItem,
    List,
    ListItem,
    ListItemText,
    Box,
} from '@mui/material';

export default function CustomSingleSelect({ value, onChange }) {
    const options = Array.from({ length: 12 }, (_, i) => i + 1);

    const handleChange = (event) => {
        console.log('event,event,event', event);

        // onChange(event.target.value);
        onChange(event);
    };

    return (
        <FormControl sx={{ width: '100%', height: '45px' }}>
            <Select
                value={value}
                // onChange={handleChange}
                displayEmpty
                sx={{ maxHeight: '45px',color:value?"#000":"#888888",textAlign:'start'  }}
                renderValue={(selected) => (selected ? selected : 'Select Duration')}
                MenuProps={{
                    PaperProps: {
                        style: {
                            // boxShadow:0,
                            borderRadius: '6px',
                            maxHeight: '300px',
                            marginTop: '2px',
                            boxShadow: 'none',
                            padding: '1px',
                            backgroundColor: "transparent"
                        },
                    },
                }}
            >
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                    //  p: 1,
                    backgroundColor: "transparent"
                }}>
                    <List  sx={{
                        backgroundColor: "white",
                        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
                        width: "48%", borderRadius: '10px',
                    }}>
                        {options.slice(0, 6).map((num, i) => (
                            <MenuItem
                                 onClick={()=>{
                                handleChange(num);
                            }}
                                sx={{
                                    textAlign: "center", height: "40px",
                                    borderBottom: num !== 6 ? '1px solid #ddd' : 'none',
                                }}
                                key={num} value={num}>
                                <ListItemText primary={num} />
                            </MenuItem>
                        ))}
                    </List>
                    <List sx={{
                        backgroundColor: "white", width: "48%", borderRadius: "10px",
                        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)'

                    }}>
                        {options.slice(6, 12).map((num, index) => (
                            <MenuItem
                            onClick={()=>{
                                handleChange(num);
                            }}
                                sx={{
                                    textAlign: "center", height: "40px",
                                    borderBottom: num !== 12 ? '1px solid #ddd' : 'none',
                                }}
                                key={num} value={num}>
                                <ListItemText primary={num} />
                            </MenuItem>
                        ))}
                    </List>
                </Box>
            </Select>
        </FormControl>
    );
}
