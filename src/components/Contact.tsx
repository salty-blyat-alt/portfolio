import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [openSuccessSnackbar, setOpenSuccessSnackbar] =
    useState<boolean>(false);
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState<boolean>(false);

  const form = useRef(null);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form fields
    const isNameValid = name.trim() !== "";
    const isEmailValid = validateEmail(email);
    const isMessageValid = message.trim() !== "";

    setNameError(!isNameValid);
    setEmailError(!isEmailValid);
    setMessageError(!isMessageValid);

    // Only send if the form is valid
    if (isNameValid && isEmailValid && isMessageValid && form.current) {
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(
          "service_912qp5b",
          "template_33aumki",
          templateParams,
          "1y7BNkwSD8aMcXx8Z"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);

            // Clear fields and show success snackbar
            setName("");
            setEmail("");
            setMessage("");
            setOpenSuccessSnackbar(true);
          },
          (error) => {
            console.error("FAILED...", error);
            setOpenErrorSnackbar(true);
          }
        );
    }
  };
 

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it
            happen!
          </p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                id="name-input"
                sx={{
                  backgroundColor: "white", // Set background to white
                }}
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                fullWidth
                margin="normal"
              />
              <TextField
                sx={{ backgroundColor: "white" }}
                required
                id="email-input"
                label="Email"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={
                  emailError ? "Please enter a valid email address" : ""
                }
                fullWidth
                margin="normal"
              />
            </div>
            <TextField
              sx={{ backgroundColor: "white" }}
              required
              id="message-input"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              fullWidth
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              fullWidth
              size="large"
            >
              Send
            </Button>
          </Box>

          {/* Success Snackbar */}
          <Snackbar
            open={openSuccessSnackbar}
            autoHideDuration={6000} 
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Alert 
              severity="success"
              sx={{ width: "100%" }}
            >
              Message sent successfully!
            </Alert>
          </Snackbar>

          {/* Error Snackbar */}
          <Snackbar
            open={openErrorSnackbar}
            autoHideDuration={6000} 
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Alert 
              severity="error"
              sx={{ width: "100%" }}
            >
              Failed to send message. Please try again.
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
}

export default Contact;
