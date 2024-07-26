import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

resend.emails.send({
  from: "Jared <onboarding@resend.dev>",
  to: "jaredneilhortaleza11@gmail.com",
  subject: "Hello World",
  react: (
    <>
      <p> Email Body </p>
    </>
  ),
});
