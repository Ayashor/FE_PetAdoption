import React from 'react'
import { Flex, Heading, Tab, TabList, TabPanels, TabPanel, Tabs, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { AuthContext } from '../../Contexts/authContext'
import AccountSettings from './Forms/AccountSettings'
import DetailSettings from './Forms/DetailSettings'

const ProfilePage = () => {

  const { signupData } = useContext(AuthContext)


  

  return (
    <Flex align={'center'} justify='center' direction='column'>
      <Heading fontSize='6xl' m={4}>Welcome {signupData.firstName}</Heading>
      <Text mb={4}>Update your personal info or your account info</Text>
      <Flex align={'center'} justify='center'>
        <Tabs align='center'>
          <TabList mb='1em'>
            <Tab>My Details</Tab>
            <Tab>Change Password</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <DetailSettings/>
            </TabPanel>
            <TabPanel>
              <AccountSettings/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  )
}

export default ProfilePage