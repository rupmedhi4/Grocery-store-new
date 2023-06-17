import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text
  } from '@chakra-ui/react'

export default function CartModal() {
    const OverlayTwo = () => (
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
      )

      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = React.useState()

  return (
    <>
    <Button
      ml='4'
      onClick={() => {
        setOverlay(<OverlayTwo />)
        onOpen()
      }}
    >
      Use Overlay two
    </Button>
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Custom backdrop filters!</Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}
