import React from "react";
import BookIcon from "../../../assets/svg/BookIcon";
import GuitarIcon from "../../../assets/svg/GuitarIcon";
import GlobeIcon from "../../../assets/svg/GlobeIcon";
import ClockIcon from "../../../assets/svg/Clock";
import BoxIcon from "../../../assets/svg/BoxIcon";
import CircleIcon from "../../../assets/svg/CircleIcon";
import ArmIcon from "../../../assets/svg/ArmIcon";
import LoopIcon from "../../../assets/svg/LoopIcon";
import TeacherIcon from "../../../assets/svg/TeacherIcon";
import CourseBannerImg from "../../../assets/images/CourseThreeBannerImg.png";

const courseThree = {
  courseLearning: [
    {
      title: "Personal lesson",
      description:
        "Learn at your own speed with a live 1-on-1 mentorship program designed just for you.",
      icon: <BookIcon />,
    },
    {
      title: "Hands-on learning",
      description:
        "Make real music from day one—learn recording, mixing, mastering, and finishing songs",
      icon: <GuitarIcon />,
    },
    {
      title: "Industry knowledge",
      description:
        "Learn how to work in the music world and collaborate effectively with other musicians and get the best from them.",
      icon: <GlobeIcon />,
    },
    {
      title: "Personal insights",
      description:
        "You’ll also get personal insights and lot of present updates and trends in global music.",
      icon: <BoxIcon />,
    },
    {
      title: "Direct support",
      description:
        "Get helpful feedback and guidance from me anytime you need it.",
      icon: <CircleIcon />,
    },
  ],
  courseHighLight: [
    {
      title: "Course Highlights",
      description:
        "Hands-on Training, Expert Mentorship, and Real-World Experience!",
    },
    {
      icon: <TeacherIcon />,
      title: "EXPERT MENTOR",
      description:
        "Learn from a friendly, experienced mentor who makes learning engaging and fun.",
    },
    {
      icon: <ClockIcon />,
      title: "FLEXIBLE TIMES",
      description: " Schedule classes when they work best for you.(T&C apply)",
    },
    {
      icon: <ArmIcon />,
      title: "COMPLETE SUPPORT",
      description:
        "Connect with other music makers and get personal help from Vijay.",
    },
    {
      icon: <LoopIcon />,
      title: "LIFETIME ACCESS",
      description: "Get support and guidance from me whenever you need it.",
    },
  ],
  bannerImage: CourseBannerImg,

  sub_title: "One-on-One Music Production Mentorship",
  duration: "(FLAGSHIP COURSES)",
  duration_two: "(Master the complete journey of music production)",
  description_one:
    "Ready to take your music production journey to the next level? Whether you aspire to make it a career or simply want to create meaningful music, this program is for you!",
  description_two:
    "  Through personalized 1-on-1 sessions, you'll explore diverse musical styles while I guide you step by step in producing professional-quality tracks. Plus, you'll gain exclusive behind-the-scenes insights from my film projects to enhance your skills and creativity.",
};

export default courseThree;
