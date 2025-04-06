import React from "react";
import ClockIcon from "../../assets/svg/Clock";
import DSupportIcon from "../../assets/svg/DSupportIcon";
import LoopIcon from "../../assets/svg/LoopIcon";
const courseDetails = () => {
  const courseOne = {
    courseHighLight: [
      {
        title: "Course Highlights",
        description:
          "Understand the fundamental building blocks of music notes, chords, progressions, and more.",
      },
      {
        icon: <BarChart />,
        title: "EASY TO LEARN",
        description:
          "Learn music theory in a more practical and easy way that anyone can understand.",
      },
      {
        icon: <TeacherIcon />,
        title: "EXPERT MENTOR",
        description:
          "Learn from a friendly, experienced mentor who makes learning engaging and fun.",
      },
      {
        icon: <LearnIcon />,
        title: "LEARN BY DOING",
        description:
          "Practice with real music and exercises that help you remember what you learn.",
      },
      {
        icon: <SupportIcon />,
        title: "SUPPORT WHEN YOU NEED IT",
        description:
          "Get help from other students and personal guidance from me.",
      },
      {
        icon: <LoopIcon />,
        title: "LIFETIME ACCESS",
        description: "Get support and guidance from me whenever you need it.",
      },
    ],
    title: "",
    bannerImage: CourseBannerImg,
  };
  const courseTwo = {
    courseHighLight: [
      {
        title: "Course Highlights",
        description:
          "Understand the fundamental building blocks of music notes, chords, progressions, and more.",
      },
      {
        icon: <ClockIcon />,
        title: "REAL PROJECTS",
        description: "Make actual songs and build your music portfolio.",
      },
      {
        icon: <TeacherIcon />,
        title: "PROFESSIONAL TEACHING",
        description:
          " Learn from experienced producers who work in the industry.",
      },
      {
        icon: <DSupportIcon />,
        title: "DIRECT SUPPORT",
        description:
          "Join other music makers to share ideas and get personal help from Vijay.",
      },
      {
        icon: <LoopIcon />,
        title: "ALWAYS AVAILABLE",
        description:
          "Access your course materials forever and get all future updates and access to paid webinars completely free.",
      },
    ],

    bannerImage: CourseBannerImg,
  };
  return <div></div>;
};

export default courseDetails;
