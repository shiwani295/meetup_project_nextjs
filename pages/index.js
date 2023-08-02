import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "first meetup",
    image: "https://www.pexels.com/photo/photo-of-clouds-during-dawn-3227984/",
    address: "banglore",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
    address: "pune",
  },
  {
    id: "m3",
    title: "Thired meetup",
    image:
      "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
    address: "Delhi",
  },
  {
    id: "m4",
    title: "fourth meetup",
    image:
      "https://en.wikipedia.org/wiki/Image#/media/File:Image_created_with_a_mobile_phone.png",
    address: "Indore",
  },
];

const Homepage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default Homepage;
