import {
  Box,
  Heading,
  HStack,
  Tag,
  TagLabel,
  Text,
  VStack,
  Wrap,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { useResume } from "../Context";
import { MdMail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { RiLinkedinBoxFill, RiGithubFill, RiGlobalLine } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";

const ResumePreview = () => {
  const { theme, about, educationList, skills, softSkills, interests, workList, projects, printElem } =
    useResume();

  const imgStyle = {
    width: "120px",
    height: "120px",
    margin: "15px",
    borderRadius: "50%",
    border: `4px solid ${theme}`,
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  };

  const sectionTitleStyle = {
    color: theme.replace("400", "600"),
    fontSize: "1.25rem",
  };

  const hoverLinkStyle = {
    color: theme.replace("400", "500"),
    transition: "color 0.2s ease",
    _hover: { color: theme.replace("400", "700"), textDecoration: "underline" },
  };

  return (
    <Box
      bg={"white"}
      w={"full"}
      rounded={"md"}
      shadow={"lg"}
      overflow={"hidden"}
      minH={"100vh"}
      p={6}
    >
      <div ref={printElem}>
        {/* Header with picture */}
        <HStack spacing={6} p={6} borderBottom={`2px solid ${theme}`}>
          <VStack alignItems={"flex-start"} spacing={1}>
            <Heading as="h4" size="lg">
              {about.name ? about.name : "Mihir Das"}
            </Heading>
            <Text color={"gray.600"} fontSize="lg">
              {about.role ? about.role : "Full Stack Developer"}
            </Text>
          </VStack>

          {about.picture && (
            <img
              style={{
                width: "110px",
                height: "auto",
                borderRadius: "30%",
                objectFit: "cover",
                marginLeft: "auto",
              }}
              src={about.picture}
              alt="avatar"
            />
          )}
        </HStack>


        {/* Contact Info */}
        <HStack
          bg={theme.replace("400", "600")}
          color={"white"}
          p={4}
          justifyContent={"space-between"}
          spacing={4}
          alignItems={"flex-start"}
        >
          {/* Left Side: Email, Phone, Location */}
          <VStack alignItems={"flex-start"} spacing={2}>
            <Tooltip label="Email" fontSize="md">
              <HStack spacing={1}>
                <MdMail />
                <Text>{about.email ? about.email : "mihirdas7707@gmail.com"}</Text>
              </HStack>
            </Tooltip>
            <Tooltip label="Phone" fontSize="md">
              <HStack spacing={1}>
                <MdLocalPhone />
                <Text>{about.phone ? about.phone : "+916202000066"}</Text>
              </HStack>
            </Tooltip>
            <Tooltip label="Location" fontSize="md">
              <HStack spacing={1}>
                <MdLocationPin />
                <Text>{about.address ? about.address : "Jamhsedpur, JH"}</Text>
              </HStack>
            </Tooltip>
          </VStack>

          {/* Right Side: LinkedIn, GitHub, Portfolio */}
          <VStack alignItems={"flex-start"} spacing={4}>
            <Tooltip label="LinkedIn" fontSize="md">
              <HStack spacing={1}>
                <RiLinkedinBoxFill color="white" />
                <Link
                  href={about.linkedin}
                  isExternal
                  {...hoverLinkStyle}
                  color="white" // Set color to white
                >
                  LinkedIn
                </Link>
              </HStack>
            </Tooltip>
            <Tooltip label="GitHub" fontSize="md">
              <HStack spacing={1}>
                <RiGithubFill color="white" />
                <Link
                  href={about.github ? about.github : "https://github.com/mihirdas77"}
                  isExternal
                  {...hoverLinkStyle}
                  color="white" // Set color to white
                >
                  GitHub
                </Link>
              </HStack>
            </Tooltip>
            <Tooltip label="Portfolio" fontSize="md">
              <HStack spacing={1}>
                <RiGlobalLine color="white" />
                <Link
                  href={about.portfolio ? about.portfolio : "https://mihirdasportfolio.com"}
                  isExternal
                  {...hoverLinkStyle}
                  color="white" // Set color to white
                >
                  Portfolio
                </Link>
              </HStack>
            </Tooltip>
          </VStack>

        </HStack>

        {/* Professional Summary */}
        <VStack alignItems={"flex-start"} spacing={5} p={5}>
          <VStack alignItems={"flex-start"} spacing={3}>
            <Heading as="h4" size="md" {...sectionTitleStyle}>
              PROFESSIONAL SUMMARY
            </Heading>
            <Text>
              {about.summary
                ? about.summary
                : "Full Stack Web Developer with 2+ years of experience in JavaScript, React.js, and Node.js. Skilled in creating responsive web apps and enhancing user experiences. Committed to teamwork and continuous learning."}
            </Text>
          </VStack>

          {/* Education and Work Experience Section */}
          <HStack w={"full"} spacing={2} > {/* border={"solid, red, 2px"}*/}
            {/* Education */}
            <VStack alignItems={"flex-start"} spacing={3} w={"full"}>
              <Heading as="h4" size="md" {...sectionTitleStyle}>
                EDUCATION
              </Heading>
              {educationList.map((education) => {
                const { degree, school, startYr, endYr, grade } = education;
                return (
                  <VStack
                    key={school + startYr}
                    spacing={1}
                    alignItems={"flex-start"}
                    w={"full"}
                    pb={51}
                  >
                    <Text fontWeight={"bold"}>
                      {degree ? degree : "Bachelor of Science in Information Technology"}
                    </Text>
                    <Text fontSize={"sm"}>
                      {school ? school : "Kolhan University Chaibasa"}
                    </Text>
                    <HStack
                      fontSize={"xs"}
                      fontStyle={"italic"}
                      justifyContent={"space-between"}
                      w={"70%"}
                    >
                      <Text>
                        {startYr ? startYr : 2020} - {endYr ? endYr : 2023}
                      </Text>
                      <Text>{grade ? grade : "8.8 CGPA"}</Text>
                    </HStack>
                  </VStack>
                );
              })}
            </VStack>

            {/* Work Experience */}
            <VStack alignItems={"flex-start"} spacing={3} w={"full"}>
              <Heading as="h4" size="md" {...sectionTitleStyle}>
                WORK EXPERIENCE
              </Heading>
              {workList.map((work) => {
                const {
                  position,
                  type,
                  company,
                  startDate,
                  endDate,
                  description: desc,
                } = work;

                return (
                  <VStack
                    spacing={0.5}
                    alignItems={"flex-start"}
                    lineHeight={1.3}
                    pb={3}
                    key={company + startDate}
                  >
                    <Text fontWeight={"bold"}>
                      {position ? position : "Full Stack Developer"}
                    </Text>
                    <Text fontSize={"sm"}>
                      {company ? company : "XYZ Company"} -{" "}
                      {type ? type : "Full-time"}
                    </Text>
                    <Text fontSize={"xs"} fontStyle={"italic"}>
                      {startDate ? startDate : "2023-03"} -{" "}
                      {endDate ? endDate : "Present"}
                    </Text>
                    <Text fontSize={"sm"} as="p">
                      {desc
                        ? desc
                        : "Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed."}
                    </Text>
                  </VStack>
                );
              })}
            </VStack>
          </HStack>

          {/* Skills and Projects Section */}
          <HStack w={"full"} spacing={2}>
            {/* Projects */}
            <VStack alignItems={"flex-start"} spacing={3} w={"full"}>
              <Heading as="h4" size="md" {...sectionTitleStyle}>
                PROJECTS
              </Heading>
              {projects.map((project) => {
                const { name, url, github, description: desc } = project;
                return (
                  <VStack spacing={1} alignItems={"flex-start"} lineHeight={1.3} key={name} pb={55}>
                    {/* Project Name and URLs (Live and GitHub) */}
                    <HStack spacing={3}>
                      {/* Live Project Link */}
                      <HStack as="a" href={url} target="_blank" {...hoverLinkStyle}>
                        <Text fontWeight={"bold"}>Live</Text>
                        <BiLinkExternal />
                      </HStack>
                      {/* GitHub Repository Link */}
                      <HStack as="a" href={github} target="_blank" {...hoverLinkStyle}>
                        <Text fontWeight={"bold"}>Code</Text>
                        <BiLinkExternal />
                      </HStack>
                    </HStack>
                    {/* Project Description */}
                    <Text fontSize={"sm"}>
                      {desc
                        ? desc
                        : "A full-stack e-commerce web application with user authentication, cart management, and order processing features."}
                    </Text>
                  </VStack>
                );
              })}
            </VStack>

            {/* Skills */}
            <VStack alignItems={"flex-start"} spacing={3} w={"full"}>
              <Heading as="h4" size="md" {...sectionTitleStyle}>
                SKILLS
              </Heading>
              <Wrap>
                {skills.map((skill, index) => (
                  <Tag
                    size={"md"}
                    borderRadius="md"
                    variant="solid"
                    bg={theme.replace("400", "500")}
                    key={index}
                    m={1}
                  >
                    <TagLabel>{skill.name}</TagLabel>
                  </Tag>
                ))}
              </Wrap>
            </VStack>
          </HStack>


          <HStack w={"full"} spacing={3}>
            {/* Soft Skills */}
            <VStack alignItems={"flex-start"} spacing={3} w={"full"}>
              <Heading as="h4" size="md" {...sectionTitleStyle}>
                SOFT SKILLS
              </Heading>
              <Wrap>
                {softSkills.map((softSkill, index) => (
                  <Tag
                    size={"md"}
                    borderRadius="md"
                    variant="solid"
                    bg={theme.replace("400", "500")}
                    key={index}
                    m={1}
                  >
                    <TagLabel>{softSkill.name}</TagLabel>
                  </Tag>
                ))}
              </Wrap>
            </VStack>

            {/* Interests */}
            <VStack alignItems={"flex-start"} spacing={3} w={"full"}>
              <Heading as="h4" size="md" {...sectionTitleStyle}>
                INTERESTS
              </Heading>
              <Wrap>
                {interests.map((interest, index) => (
                  <Tag
                    size={"md"}
                    borderRadius="md"
                    variant="solid"
                    bg={theme.replace("400", "500")}
                    key={index}
                    m={1}
                  >
                    <TagLabel>{interest.name}</TagLabel>
                  </Tag>
                ))}
              </Wrap>
            </VStack>
          </HStack>

        </VStack>
      </div>
    </Box>
  );
};

export default ResumePreview;
