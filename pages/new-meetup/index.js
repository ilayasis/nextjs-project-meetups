import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetUpData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: { "Content-Type": "application/json" },
    });

    const data = response.json();
    console.log(data);

    // router.replace();
    router.push("/");
  }
  return (
    <Fragment>
      <head>
        <title>Add a New Meetup</title>
        <meta name="description" content="Add your one Meetups ;)" />
      </head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}

export default NewMeetUpPage;
