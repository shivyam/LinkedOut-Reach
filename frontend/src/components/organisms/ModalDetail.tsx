import { Modal, Grid, Text, Flex, Box } from "@mantine/core";
import TextEditor from "@molecules/TextEditor";
import { useState, useEffect } from "react";
import { useMessages } from "@context/messageContext"; 
import ModalTabs from "@organisms/ModalTabs";
import { messages} from "@constants/text";
import useLoading from "@context/loadingContext";
import api from "../../api/axiosInstance";


interface ModalDetailProps {
    open: boolean;
    setClose: () => void;
    data: any;
  }


const ModalDetail = ({ open, setClose, data }: ModalDetailProps) => {
    const { setLoading } = useLoading();
    const [name, setName] = useState<string>("");
    const [about, setAbout] = useState<string>("");
    const [experiences, setExperiences] = useState<string[]>([]);
    const nameParts = name.split(' ');

    const receiveUserData= async () => {
      setLoading(true);

      try {
      const response = await api.get("/api/getLinkedInData");
      setName(response.data.name)
      setAbout(response.data.about);
      setExperiences(response.data.experiences);
      setLoading(false);

      } catch (error) {
      console.error('Error logging in', error);
      }
    };

    useEffect(() => {
      setLoading(true);
      receiveUserData();
      setLoading(false);
  }, []); 

    const { addMessage } = useMessages(); 

    const handleSaveMessage = (content: string) => {
      addMessage(content);
    };

    return (
        <Modal
            title="USER DETAILS"
            padding="xl"
            size="lg"
            opened={open}
            // position="right"
            onClose={setClose}
            overlayProps={{ opacity: 0.4, blur: 1 }}
            >
              <Flex direction="column" sx={{ marginBottom: "10px" }}>
                <Text size="xl" c="#343A40" fw={700}>
                  {data?.name}, and you
                </Text>
              </Flex>
              <Flex direction="column" >
                <Text c="#495057">
                  We've taken the liberty of starting a customized message for you to send to {data?.name}––now all that's left
                  is to edit it to your liking.
                </Text>
                <Box
                  sx={{
                    border: '2px solid #E0E0E0',
                    borderRadius: '10px',
                    padding: '10px 20px 10px 20px',
                    marginTop:'5px',
                  }}>              
                <TextEditor message={messages} onSave={handleSaveMessage} />
              </Box>
                <Text c="#868E96" size="xs" sx={{marginTop:'5px', marginBottom:'30px'}}>
                  Save this template message to your dashboard if it's to your liking! We'd be honoured.
                </Text>
                <ModalTabs newData={data}/> 
              </Flex>
        </Modal>
    )
};

export default ModalDetail;