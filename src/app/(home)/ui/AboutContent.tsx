"use client"

import { Container,Title,Text,Divider,Space} from "@mantine/core"

export default function AboutContent() {
  return (

   <Container size="xl" mt={35}>
            <Title order={3}>About User</Title>

            <Divider mt={5} />

            <Text fz='sm' mt={20}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veritatis illum deleniti consequuntur nesciunt expedita placeat temporibus, quo ex? Soluta officiis atque optio id asperiores! Voluptatibus sunt voluptates libero suscipit!
            </Text>
            <Space h="md"/>
    </Container>
  )
}
