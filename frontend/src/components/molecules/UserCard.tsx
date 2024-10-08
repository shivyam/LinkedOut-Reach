import { Box, Flex, Text, Badge, Button } from "@mantine/core";
import { Avatar } from '@mantine/core';
import { useNavigate } from "react-router-dom";

interface UserCardProps {
    user: any,
};

const UserCard = ({user}: UserCardProps) => {
    const navigate = useNavigate();
    return (
    <Box>
      <Box
        sx={{
          border: '2px solid #E0E0E0',
          borderRadius: '10px',
          padding: '10px 20px 20px 20px',
        }}>
        <Flex direction="row"
          gap="8px"
          sx={{
          height: "240px",
          width: "100%",
          overflowY: "auto",
          marginTop: "10px",
          alignItems: "center",
          border: "1px #E0E0E0",
          padding: "30px",
          paddingLeft: "60px",
          borderRadius: "15px",
          flexGrow: 1,
          backgroundColor: "#F3F4F8",
          transition: 'box-shadow 0.3s, opacity 0.3s',
          '&:hover': {
            boxShadow: '0 2px 2px rgba(0, 0, 0, 0.2)',
            opacity: 0.95,
          },
        }}>
            <Avatar size="125px" radius="xl" name={user?.name} color="cyan"/>
            <Flex direction="column" sx={{ marginLeft: "20px", width:"50%"}}>
                <Flex >
                    <Text size="md" sx={{ 
                    alignItems:"flex-end", 
                    marginRight: "10px", 
                    transition: 'color 0.3s',
                    '&:hover': {
                        c: '#0C8599',
                    },
                    }}>
                    {user?.name}
                    </Text>
                    <Text size="sm" c="gray" sx={{ marginTop:"3px"}}>
                    {user?.email}
                    </Text>
                </Flex>
                <Text size="sm" c="gray" sx={{marginBottom:"12px"}}>
                    {user?.desc}
                </Text>
                <Flex direction="row" gap="8px" wrap="wrap">
                    <Text size="sm" c="gray">
                        my interests:{' '}
                    </Text>
                    <Flex direction="row" gap="8px" wrap="wrap">
                        {user.likes.map((item: any, i: number) => {
                            return Array.isArray(item) ? (
                                item.map((t: any, j: number) => (
                                    <Badge key={`${i}-${j}`} color="cyan" sx={{ gap: "10px", marginRight: "100px" }}>
                                        {t}
                                    </Badge>
                                ))
                            ) : (
                                <Badge key={i} color="cyan" sx={{ marginLeft: "3px", marginBottom: "2px" }}>
                                    {item}
                                </Badge>
                            );
                        })}
                    </Flex>
                </Flex>
                </Flex>
                <Flex sx={{ justifyContent: 'flex-end', flex: 1 }}>
                <Button 
                  variant="light" 
                  sx={{ marginRight:"10px" }}
                  onClick={() => navigate('/')}
                >
                    Swap User
                </Button>
                <Button >
                    Edit Me
                </Button>
                </Flex>
            </Flex>
        </Box>
    </Box>
    );
};

export default UserCard;