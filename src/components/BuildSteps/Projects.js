import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, VStack, Input, Textarea, Text } from '@chakra-ui/react';
import { useResume } from '../../Context';
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from 'react-icons/md';

const Projects = () => {

    const { projects, setProjects } = useResume();

    const addMore = () => {
        setProjects([...projects, { id: uuidv4(), name: '', url: '', github: '', description: '' }]);
    }

    const handleChange = (e, id) => {
        const { name, value } = e.target;
        const updatedProject = projects.map((project) => (
            project.id === id ? { ...project, [name]: value } : project
        ));
        setProjects(updatedProject);
    }

    const deleteProject = (id) => {
        setProjects(projects.filter((elem) => elem.id !== id))
    }

    return (
        <>
            <Accordion allowToggle defaultIndex={[0]}>
                {
                    projects.map((project, index) => (
                        <AccordionItem key={index}>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontWeight={'medium'}>{project.name ? project.name : "Project Name"}</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <VStack spacing={3} alignItems={'flex-end'}>
                                    {/* Project Name */}
                                    <Input value={project.name} onChange={(e) => handleChange(e, project.id)} name='name' id='name' type='text' variant='filled' placeholder='Project Name' />

                                    {/* Project URL */}
                                    <Input value={project.url} onChange={(e) => handleChange(e, project.id)} name='url' id='url' type='url' variant='filled' placeholder='Project URL' />

                                    {/* GitHub Repository URL */}
                                    <Input value={project.github} onChange={(e) => handleChange(e, project.id)} name='github' id='github' type='url' variant='filled' placeholder='Repository URL' />

                                    {/* Project Description */}
                                    <Textarea value={project.description} onChange={(e) => handleChange(e, project.id)} name='description' id='description' variant='filled' placeholder='Description...' />

                                    {/* Delete Button */}
                                    <Button rightIcon={<MdDelete />} onClick={() => deleteProject(project.id)} colorScheme={'red'}>Delete</Button>
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>

            {/* Add More Projects Button */}
            {
                projects.length < 4 && (
                    <Button colorScheme={'purple'} my={5} onClick={addMore}>Add More</Button>
                )
            }
        </>
    )
}

export default Projects;
