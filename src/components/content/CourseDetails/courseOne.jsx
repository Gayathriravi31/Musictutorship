import React from "react";
import MusicIcon from "../../../assets/svg/MusicIcon";
import GuitarIcon from "../../../assets/svg/GuitarIcon";
import NotationIcon from "../../../assets/svg/Notation";
import SoundIcon from "../../../assets/svg/SoundIcon";
import WriteIcon from "../../../assets/svg/WriteIcon";
import BarChart from "../../../assets/svg/BarChart";
import LearnIcon from "../../../assets/svg/LearnIcon";
import SupportIcon from "../../../assets/svg/SupportIcon";
import LoopIcon from "../../../assets/svg/LoopIcon";
import TeacherIcon from "../../../assets/svg/TeacherIcon";
import CourseBannerImg from "../../../assets/images/courses_banner_img.png";

const courseOne = {
  courseLearning: [
    {
      title: "Music Basics",
      description:
        "Understand the fundamental building blocks of music notes, chords, progressions, and more.",
      icon: <MusicIcon />,
    },
    {
      title: "Music Making",
      description:
        "Learn to put chords together to create songs that move people.",
      icon: <GuitarIcon />,
    },
    {
      title: "Music Notation",
      description:
        "Learn to read and write musical notation—simplified and straightforward!",
      icon: <NotationIcon />,
    },
    {
      title: "Sound composing",
      description:
        "Learn to start composing your own songs like a professional.",
      icon: <SoundIcon />,
    },
    {
      title: "Song Writing",
      description: "Create simple tunes and combine different parts of music.",
      icon: <WriteIcon />,
    },
  ],
  courseHighLight: [
    {
      title: "Course Highlights",
      description:
        "Hands-on Training, Expert Mentorship, and Real-World Experience!",
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
  bannerImage: CourseBannerImg,

  sub_title: "Complete Music Theory  Live Course",
  duration: "(From Beginner to Advanced Level)",
  duration_two: "(12 Months Duration - 7 Students Per Batch)",
  description_one:
    "This course simplifies music theory, guiding you from basics to advanced concepts. Whether you re a beginner or have some knowledge,you'll learn notes, chords, scales, rhythm, harmony, and composition through clear explanations and practical exercises.",
  description_two:
    "  By the end of this course, you'll not only understand the structure behind great music but also have the skills to create your own songs with confidence. You'll be able to compose melodies, arrange harmonies, and experiment with different musical styles, making you a more skilled and creative musician.",
};

export default courseOne;
