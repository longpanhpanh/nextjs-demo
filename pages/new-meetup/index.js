import Head from 'next/head'
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(enteredMeetupData),
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  return (
      <>
          <Head>
              <title>Add a new meetup</title>
              <meta name='desciption' content='Add an opportunity to meetup with your crush, 100% works' />
          </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
