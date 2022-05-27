import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

const HomePage = () => {
  return (
    // props.children으로 들어간다.
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  );
};

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://cdn.pixabay.com/photo/2022/05/17/15/59/cat-7203072_960_720.jpg",
    address: "우리집",
    description: "this is a first meetup!",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://cdn.pixabay.com/photo/2022/05/17/15/59/cat-7203072_960_720.jpg",
    address: "우리집",
    description: "this is a second meetup!",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://cdn.pixabay.com/photo/2022/05/17/15/59/cat-7203072_960_720.jpg",
    address: "우리집",
    description: "this is a third meetup!",
  },
];

export default HomePage;