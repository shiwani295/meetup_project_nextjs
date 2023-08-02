//domain/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm.js";
const NewmeetupPage = () => {
  function addMeetupHandler(entermeetupdata) {
    console.log(entermeetupdata);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewmeetupPage;
