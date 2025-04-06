import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { IconButton, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export const NavLinks = [
  { title: "Home", to: "/", subMenu: null },
  { title: "About me", to: "/about-me", subMenu: null },
  {
    title: "Courses",
    to: "/courses-page",
    subMenu: [
      {
        title: "Complete Music Theory Live Courses",
        // to: "/courses/music-theory",
        to: `/course-details/Complete Music Theory Live Courses`,
        toId: 1,
      },
      {
        title: "Music Production Live Courses",
        to: "/course-details/Music Production Live Courses",
        toId: 2,
      },
      {
        title: "One-on-One Music Production Mentorship",
        to: "/course-details/One-on-One Music Production Mentorship",
        toId: 3,
      },
    ],
  },
  { title: "Contact Us", subMenu: null, to: "/contact-page" },
];

const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: "16px",
  fontFamily: '"Public Sans", sans-serif',
  fontWeight: "500",
  lineHeight: "19px",
  padding: "8px 16px",
  color: "#333333",
  border: "none",
  transition: "background-color 0.3s, color 0.3s",
  borderColor: "#fff",
  "&:hover": {
    backgroundColor: "#FEECE8",
    color: theme.palette.primary.main,
    borderColor: "#fff",
  },
  "&.active": {
    borderRadius: "6px",
    color: theme.palette.primary.main,
    borderColor: "#fff",
  },
  "&:focus, &:active": {
    outline: "none", // Removes default focus outline
    boxShadow: "none", // Removes the MUI focus shadow
  },
}));

const Navigations = ({ isTransparent }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuAnchor, setMenuAnchor] = useState(null);

  // Open menu
  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  // Close menu
  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <>
      {NavLinks.map((navlink, i) => {
        const isActive =
          location.pathname === navlink.to ||
          (navlink.subMenu &&
            navlink.subMenu.some((sub) =>
              location.pathname.startsWith(sub.to)
            ));

        return (
          <React.Fragment key={i}>
            {navlink.subMenu ? (
              <>
                <StyledButton
                  sx={{ color: isTransparent ? "#fff" : "#333333", pr: "10" }}
                  className={isActive ? "active" : ""}
                  variant="text"
                  to={navlink.to}
                  component={NavLink}
                  endIcon={
                    <IconButton
                      // onClick={handleMenuOpen}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMenuOpen(e);
                      }}
                      sx={{
                        height: "20px",
                        width: "20px",
                        color: isTransparent ? "#fff" : "#333333",
                        "&:focus, &:active": {
                          outline: "none", // Removes default focus outline
                          boxShadow: "none", // Removes MUI focus shadow
                        },
                      }}
                    >
                      <ArrowDropDownIcon />
                    </IconButton>
                  }
                >
                  {navlink.title}
                </StyledButton>

                <Menu
                  anchorEl={menuAnchor}
                  open={Boolean(menuAnchor)}
                  onClose={handleMenuClose}
                  MenuListProps={{ "aria-labelledby": "courses-button" }}
                >
                  {navlink.subMenu.map((sub, j) => (
                    <MenuItem
                      key={j}
                      // component={NavLink}
                      // to={sub.to}
                      sx={{
                        // color: 'primary.main',
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "primary.main",
                        },
                      }}
                      onClick={() => {
                        navigate(sub.to, { state: { num: sub.toId } });
                        handleMenuClose();
                      }}
                      className={location.pathname === sub.to ? "active" : ""}
                    >
                      {sub.title}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <>

                <StyledButton
                  sx={{ color: isTransparent ? "#fff" : "#333333" }}
                  className={isActive ? "active" : ""}
                  variant="text"
                  onClick={(e) => {
                    if (navlink.title === "Contact Us") {
                      // e.preventDefault(); 
                      window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: "smooth",
                      });
                    } else {
                      navigate(navlink.to);
                    }
                  }}
                >
                  {navlink.title}
                </StyledButton>

                {/* <StyledButton
                  sx={{ color: isTransparent ? "#fff" : "#333333" }}
                  className={isActive ? "active" : ""}
                  component={NavLink}
                  to={navlink.to}
                  variant="text"
                >
                  {navlink.title}
                </StyledButton> */}

              </>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Navigations;
