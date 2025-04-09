import * as React from "react";
import { Box, Typography, Grid, Container, Link } from "@mui/material";

import { styled } from "@mui/material/styles";
// import { IconMinus, IconPlus } from '@tabler/icons';
import { Add as IconPlus, Remove as IconMinus } from "@mui/icons-material";

import { useTheme } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";

const AccordianFaq = () => {
  const theme = useTheme();

  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);
  const [expanded6, setExpanded6] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const handleChange2 = () => {
    setExpanded2(!expanded2);
  };

  const handleChange3 = () => {
    setExpanded3(!expanded3);
  };

  const handleChange4 = () => {
    setExpanded4(!expanded4);
  };

  const handleChange5 = () => {
    setExpanded5(!expanded5);
  };

  const handleChange6 = () => {
    setExpanded6(!expanded6);
  };

  const StyledAccordian = styled(Accordion)(() => ({
    borderRadius: "8px",
    marginBottom: "16px !important",
    boxShadow:
      theme.palette.mode == "light"
        ? "0px 3px 0px rgba(235, 241, 246, 0.25)"
        : null,
    border: `1px solid ${theme.palette.divider}`,
    "&:before": {
      display: "none",
    },
    "&.Mui-expanded": {
      margin: "0",
    },
    "& .MuiAccordionSummary-root": {
      padding: "8px 24px",
      minHeight: "60px",
      fontSize: "18px",
      fontWeight: 500,
    },
    "& .MuiAccordionDetails-root": {
      padding: "0 24px 24px",
    },
  }));

  return (
    <Container
      maxWidth="lg"
      sx={{
        pb: {
          xs: "30px",
          lg: "60px",
        },
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={10} md={10} sx={{ width: { md: "90%" } }}>
          <Box mt={7}>
            <StyledAccordian
              sx={{
                borderLeft: 4,
                borderLeftColor: "primary.main",
                borderRadius: "10px",
              }}
              expanded={expanded}
              onChange={handleChange}
            >
              <AccordionSummary
                sx={{ color: "primary.main" }}
                expandIcon={
                  expanded ? (
                    <IconMinus size="21" stroke="1.5" />
                  ) : (
                    <IconPlus size="21" stroke="1.5" />
                  )
                }
                aria-controls="panel1-content"
                id="panel1-header"
              >
                What is the age range for your music classes?
              </AccordionSummary>
              <AccordionDetails>
                My classes cater to learners of all ages, from young childern to
                adults.
              </AccordionDetails>
            </StyledAccordian>
            <StyledAccordian
              sx={{
                borderLeft: 4,
                borderLeftColor: "primary.main",
                borderRadius: "10px",
              }}
              expanded={expanded2}
              onChange={handleChange2}
            >
              <AccordionSummary
                sx={{ color: "primary.main" }}
                expandIcon={
                  expanded2 ? (
                    <IconMinus size="21" stroke="1.5" />
                  ) : (
                    <IconPlus size="21" stroke="1.5" />
                  )
                }
                aria-controls="panel2-content"
                id="panel2-header"
              >
                What courses do you offer?
              </AccordionSummary>
              <AccordionDetails>
                I offer comprehensive courses in Music Theory and Music
                Production, as well as one-on-one mentorship covering all
                aspects of music and song production.
              </AccordionDetails>
            </StyledAccordian>
            <StyledAccordian
              sx={{
                borderLeft: 4,
                borderLeftColor: "primary.main",
                borderRadius: "10px",
              }}
              expanded={expanded3}
              onChange={handleChange3}
            >
              <AccordionSummary
                sx={{ color: "primary.main" }}
                expandIcon={
                  expanded3 ? (
                    <IconMinus size="21" stroke="1.5" />
                  ) : (
                    <IconPlus size="21" stroke="1.5" />
                  )
                }
                aria-controls="panel3-content"
                id="panel3-header"
              >
                What is the class structure like?
              </AccordionSummary>
              <AccordionDetails>
                My classes balance theory and practical application. Each
                session combines individual instruction,group activities , and
                performance opportunities.
              </AccordionDetails>
            </StyledAccordian>
            <StyledAccordian
              sx={{
                borderLeft: 4,
                borderLeftColor: "primary.main",
                borderRadius: "10px",
              }}
              expanded={expanded4}
              onChange={handleChange4}
            >
              <AccordionSummary
                sx={{ color: "primary.main" }}
                expandIcon={
                  expanded4 ? (
                    <IconMinus size="21" stroke="1.5" />
                  ) : (
                    <IconPlus size="21" stroke="1.5" />
                  )
                }
                aria-controls="panel2-content"
                id="panel2-header"
              >
                What is the class size?
              </AccordionSummary>
              <AccordionDetails>
                Classes are kept small with 7-10 students per batch(varies by
                course) to ensure individual attention. we also offer One-on-one
                personal mentorship that covers all aspects of music making.
              </AccordionDetails>
            </StyledAccordian>
            <StyledAccordian
              sx={{
                borderLeft: 4,
                borderLeftColor: "primary.main",
                borderRadius: "10px",
              }}
              expanded={expanded5}
              onChange={handleChange5}
            >
              <AccordionSummary
                sx={{ color: "primary.main" }}
                expandIcon={
                  expanded5 ? (
                    <IconMinus size="21" stroke="1.5" />
                  ) : (
                    <IconPlus size="21" stroke="1.5" />
                  )
                }
                aria-controls="panel2-content"
                id="panel2-header"
              >
                What is the duration of each class?
              </AccordionSummary>
              <AccordionDetails>
                Classes run for 60 minutes weekly, with options to extend to 90
                or 120 minutes per week.
              </AccordionDetails>
            </StyledAccordian>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default AccordianFaq;
