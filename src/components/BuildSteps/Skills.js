import { Box, Button, FormControl, FormLabel, HStack, Input, Tag, TagCloseButton, TagLabel, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useResume } from '../../Context';
import { useToast } from '@chakra-ui/react';

const Skills = () => {

    const toast = useToast();
    const [skill, setSkill] = useState("");
    const [softSkill, setSoftSkill] = useState("");
    const [interest, setInterest] = useState("");
    const { skills, setSkills, softSkills, setSoftSkills, interests, setInterests } = useResume();

    const handleSubmit = (e, type) => {
        e.preventDefault();
        if (type === 'skill') {
            if (!skill.trim()) {
                showErrorToast();
                return;
            }
            const newSkill = { id: uuidv4(), name: skill };
            setSkills([...skills, newSkill]);
            setSkill("");
        } else if (type === 'softSkill') {
            if (!softSkill.trim()) {
                showErrorToast();
                return;
            }
            const newSoftSkill = { id: uuidv4(), name: softSkill };
            setSoftSkills([...softSkills, newSoftSkill]);
            setSoftSkill("");
        } else if (type === 'interest') {
            if (!interest.trim()) {
                showErrorToast();
                return;
            }
            const newInterest = { id: uuidv4(), name: interest };
            setInterests([...interests, newInterest]);
            setInterest("");
        }
    }

    const showErrorToast = () => {
        toast({
            title: 'Empty Input',
            status: 'error',
            isClosable: true,
        })
    }

    const deleteItem = (id, type) => {
        if (type === 'skill') {
            setSkills(skills.filter((elem) => elem.id !== id))
        } else if (type === 'softSkill') {
            setSoftSkills(softSkills.filter((elem) => elem.id !== id))
        } else if (type === 'interest') {
            setInterests(interests.filter((elem) => elem.id !== id))
        }
    }

    return (
        <VStack spacing={8} align="flex-start" w="full">
            {/* Skills Section */}
            <HStack spacing={4} alignItems={'flex-end'} as='form' onSubmit={(e) => handleSubmit(e, 'skill')}>
                <FormControl>
                    <FormLabel htmlFor='skill'>Add Skills</FormLabel>
                    <Input onChange={(e) => setSkill(e.target.value)} value={skill} name='skill' id='skill' type='text' variant='filled' placeholder='Skill' />
                </FormControl>
                <Button type='submit' colorScheme={'purple'}>Add</Button>
            </HStack>
            <Box borderWidth={'1px'} rounded={'sm'} my={4} p={2}>
                {skills.length > 0 ? skills.map((skill) => (
                    <Tag
                        size={'lg'}
                        key={skill.id}
                        borderRadius='full'
                        variant='solid'
                        colorScheme='purple'
                        m={0.5}
                    >
                        <TagLabel>{skill.name}</TagLabel>
                        <TagCloseButton onClick={() => deleteItem(skill.id, 'skill')} />
                    </Tag>
                )) : "No Skills Added"}
            </Box>

            {/* Soft Skills Section */}
            <HStack spacing={4} alignItems={'flex-end'} as='form' onSubmit={(e) => handleSubmit(e, 'softSkill')}>
                <FormControl>
                    <FormLabel htmlFor='softSkill'>Add Soft Skills</FormLabel>
                    <Input onChange={(e) => setSoftSkill(e.target.value)} value={softSkill} name='softSkill' id='softSkill' type='text' variant='filled' placeholder='Soft Skill' />
                </FormControl>
                <Button type='submit' colorScheme={'purple'}>Add</Button>
            </HStack>
            <Box borderWidth={'1px'} rounded={'sm'} my={4} p={2}>
                {softSkills.length > 0 ? softSkills.map((softSkill) => (
                    <Tag
                        size={'lg'}
                        key={softSkill.id}
                        borderRadius='full'
                        variant='solid'
                        colorScheme='purple'
                        m={0.5}
                    >
                        <TagLabel>{softSkill.name}</TagLabel>
                        <TagCloseButton onClick={() => deleteItem(softSkill.id, 'softSkill')} />
                    </Tag>
                )) : "No Soft Skills Added"}
            </Box>

            {/* Interests Section */}
            <HStack spacing={4} alignItems={'flex-end'} as='form' onSubmit={(e) => handleSubmit(e, 'interest')}>
                <FormControl>
                    <FormLabel htmlFor='interest'>Add Interests</FormLabel>
                    <Input onChange={(e) => setInterest(e.target.value)} value={interest} name='interest' id='interest' type='text' variant='filled' placeholder='Interest' />
                </FormControl>
                <Button type='submit' colorScheme={'purple'}>Add</Button>
            </HStack>
            <Box borderWidth={'1px'} rounded={'sm'} my={4} p={2}>
                {interests.length > 0 ? interests.map((interest) => (
                    <Tag
                        size={'lg'}
                        key={interest.id}
                        borderRadius='full'
                        variant='solid'
                        colorScheme='purple'
                        m={0.5}
                    >
                        <TagLabel>{interest.name}</TagLabel>
                        <TagCloseButton onClick={() => deleteItem(interest.id, 'interest')} />
                    </Tag>
                )) : "No Interests Added"}
            </Box>
        </VStack>
    )
}

export default Skills;
