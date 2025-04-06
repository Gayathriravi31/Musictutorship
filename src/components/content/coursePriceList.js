import course_1 from "../../assets/images/course_1.png";
import course_2 from "../../assets/images/course_2.png";
import course_3 from "../../assets/images/course_3.png";
import course_4 from "../../assets/images/spakers.png";

const coursePriceList = [
  {
    id: 1,
    title: "Complete Music Production Live Course",
    subtitles: "(From Beginner to Advance level)",
    price: { Monthly: "11999", Quarterly: "33000", Annually: "108000" },
    image: course_1,
  },
  {
    id: 2,
    title: "Complete Music Theory Live Course",
    subtitles: "(From Beginner to Advanced Level)",
    price: { Monthly: "9999", Quarterly: "28500", Annually: "99000" },
    image: course_2,
  },
  {
    id: 3,
    title: "One-on-One Music Production Mentorship 90MIN",
    subtitles: "Flagship Course - 4 Classes / Month",
    price: { Monthly: "16000", Quarterly: "96000", Annually: "192000" },
    image: course_3,
  },
  {
    id: 4,
    title: "One-on-One Music Production Mentorship 60MIN",
    subtitles: "Flagship Course - 4 Classes / Month",
    price: { Monthly: "12000", Quarterly: "72000", Annually: "144000" },
    image: course_4,
  },
];

export default coursePriceList;
