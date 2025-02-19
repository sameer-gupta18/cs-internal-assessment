import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Text,
} from "@react-email/components";

const Email = ({ webinar, participantName }) => {
  let convertDate = (date) => {
    let day = date[0] + date[1];
    let day_suffix;
    if (date[0] !== "1") {
      if (date[1] === "1") {
        day_suffix = "st";
      } else if (date[1] === "2") {
        day_suffix = "nd";
      } else if (date[1] === "3") {
        day_suffix = "rd";
      } else {
        day_suffix = "th";
      }
    } else {
      day_suffix = "th";
    }
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = months[parseInt(date[3] + date[4]) - 1];
    let year = date[6] + date[7] + date[8] + date[9];
    return `${date[0] === "0" ? date[1] : day}${day_suffix} ${month}, ${year}`;
  };
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Body>
        <Container>
          <Heading as="h1">Thanks for Joining </Heading>
          <Heading as="h2" style={{ color: "var(--alert)" }}>
            {webinar.name}
          </Heading>
          <Text>Dear {participantName}</Text>
          <Text>Session Description: {webinar.description}</Text>
          <Text>Please find the webinar details below</Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Date: </Text>
            {convertDate(webinar.date)}
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Time: </Text>
            {webinar.time}
          </Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>Location: </Text>
            {webinar.location}
          </Text>
          {webinar.tags.offline ? null : (
            <Button
              href={webinar.link}
              style={{ background: "blue", color: "white", padding: "1.5vw" }}
            >
              Join Now!
            </Button>
          )}
          <Text>
            Please join the webinar 5-10 minutes before the scheduled start time
          </Text>
          <Text>See You There!</Text>
          <Text>-Rama</Text>
          <Text>
            *DO NOT REPLY TO THIS EMAIL. THIS IS AN AUTOGENERATED MESSAGE*
          </Text>
        </Container>
      </Body>
    </Html>
  );
};
export default Email;
