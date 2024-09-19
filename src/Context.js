import { createContext, useContext, useRef, useState } from "react";
import { useToast } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {

    const printElem = useRef();
    const toast = useToast();

    const [theme, setTheme] = useState('purple.400');

    const [about, setAbout] = useState({
        name: "",
        role: "",
        email: "",
        phone: "",
        address: "",
        linkedin: "",
        picture: "",
        description: "",
    });

    const [educationList, setEducationList] = useState([
        {
            id: uuidv4(),
            degree: "",
            school: "",
            startYr: 0,
            endYr: 0,
            grade: "",
        },
    ]);

    const [skills, setSkills] = useState([
        { id: uuidv4(), name: "JavaScript" },
        { id: uuidv4(), name: "ReactJS" },
        { id: uuidv4(), name: "NodeJS" },
        { id: uuidv4(), name: "MongoDB" },
        { id: uuidv4(), name: "ExpressJS" },
        { id: uuidv4(), name: "PHP" },
        { id: uuidv4(), name: ".Net" },
        { id: uuidv4(), name: "Java" },
        { id: uuidv4(), name: "RestAPI" },
        { id: uuidv4(), name: "jQuery" },
        { id: uuidv4(), name: "MySQL" },
        { id: uuidv4(), name: "Ajax" },
        { id: uuidv4(), name: "GitHub" },
        { id: uuidv4(), name: "HTML" },
        { id: uuidv4(), name: "CSS" },
        { id: uuidv4(), name: "TailwindCSS" },
        { id: uuidv4(), name: "Bootstrap" },
    ]);

    const [softSkills, setSoftSkills] = useState([
        { id: uuidv4(), name: "Communication" },
        { id: uuidv4(), name: "Problem-solving" },
        { id: uuidv4(), name: "Teamwork" },
        { id: uuidv4(), name: "Leadership" },
    ]);

    const [interests, setInterests] = useState([
        { id: uuidv4(), name: "Web Development" },
        { id: uuidv4(), name: "Machine Learning" },
        { id: uuidv4(), name: "Open Source Projects" },
        { id: uuidv4(), name: "Tech Blogging" },
    ]);

    const [workList, setWorkList] = useState([
        {
            id: uuidv4(),
            position: "",
            company: "",
            type: "",
            startDate: "",
            endDate: "",
            description: "",
        },
    ]);

    const [projects, setProjects] = useState([
        {
            id: uuidv4(),
            name: "",
            description: "",
            url: "",
            github: "", // Added GitHub link
        },
    ]);

    // Optional: useEffect for theme change notification
    // useEffect(() => {
    //     toast({
    //         title: `${theme.split(".", 1)} selected`,
    //         status: 'success',
    //         isClosable: true,
    //       })
    // }, [theme]);

    const value = { 
        about, 
        setAbout, 
        educationList, 
        setEducationList, 
        skills, 
        setSkills, 
        softSkills, 
        setSoftSkills, 
        interests, 
        setInterests, 
        workList, 
        setWorkList, 
        projects, 
        setProjects, 
        printElem, 
        theme, 
        setTheme 
    };

    return (
        <ResumeContext.Provider value={value}>
            {children}
        </ResumeContext.Provider>
    );
}
