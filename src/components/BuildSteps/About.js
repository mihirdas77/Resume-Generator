import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useResume } from "../../Context";
import ImageUpload from "../ImageUploadButton/ImageUpload.component";

const About = () => {
  const { about, setAbout } = useResume();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAbout({ ...about, [name]: value });
  };

  return (
    <Stack spacing={4} mb={2}>
      {about.picture ? (
        <Button
          onClick={() => {
            setAbout({ ...about, picture: "" });
          }}
          colorScheme="red"
          variant="outline"
        >
          Remove Image
        </Button>
      ) : (
        <ImageUpload />
      )}

      <HStack spacing={6}>
        <FormControl>
          <FormLabel htmlFor="name">Full Name</FormLabel>
          <Input
            onChange={(e) => handleChange(e)}
            name="name"
            id="name"
            type="text"
            variant="filled"
            placeholder="Full Name"
            value={about.name || ""}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="role">Role</FormLabel>
          <Input
            onChange={(e) => handleChange(e)}
            name="role"
            id="role"
            type="text"
            variant="filled"
            placeholder="Role"
            value={about.role || ""}
          />
        </FormControl>
      </HStack>

      <HStack spacing={6}>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            onChange={(e) => handleChange(e)}
            name="email"
            id="email"
            type="email"
            variant="filled"
            placeholder="Email"
            value={about.email || ""}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Input
            onChange={(e) => handleChange(e)}
            name="phone"
            id="phone"
            type="tel"
            variant="filled"
            placeholder="Phone"
            value={about.phone || ""}
          />
        </FormControl>
      </HStack>

      <HStack spacing={6}>
        <FormControl>
          <FormLabel htmlFor="address">Address</FormLabel>
          <Input
            onChange={(e) => handleChange(e)}
            name="address"
            id="address"
            type="text"
            variant="filled"
            placeholder="Address"
            value={about.address || ""}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="linkedin">LinkedIn</FormLabel>
          <Input
            onChange={(e) => handleChange(e)}
            name="linkedin"
            id="linkedin"
            type="url"
            variant="filled"
            placeholder="https://linkedin.com"
            value={about.linkedin || ""}
          />
        </FormControl>
      </HStack>
      <HStack spacing={6}>
        <FormControl>
          <FormLabel htmlFor="github">GitHub</FormLabel>
          <Input
            onChange={(e) => handleChange(e)}
            name="github"
            id="github"
            type="url"
            variant="filled"
            placeholder="https://github.com/username"
            value={about.github || ""}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="portfolio">Portfolio</FormLabel>
          <Input
            onChange={(e) => handleChange(e)}
            name="portfolio"
            id="portfolio"
            type="url"
            variant="filled"
            placeholder="https://yourportfolio.com"
            value={about.portfolio || ""}
          />
        </FormControl>
      </HStack>

      <FormControl>
        <FormLabel htmlFor="summary">Professional Summary</FormLabel>
        <Textarea
          onChange={(e) => handleChange(e)}
          name="summary"
          id="summary"
          variant="filled"
          placeholder="Write a brief professional summary"
          value={about.summary || ""}
        />
      </FormControl>
    </Stack>
  );
};

export default About;
