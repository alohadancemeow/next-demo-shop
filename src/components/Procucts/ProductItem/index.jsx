import React, { useState } from 'react'
import Image from 'next/image'

// import { Modal } from 'antd'
import { AiOutlineLock, AiOutlineShopping, AiOutlineCloseCircle, AiFillPushpin } from 'react-icons/ai'
import { Button } from '../../Styled-elememts'
import { Card, ImageBox, TextBox, Title, EnterBox, BoxWrapper, BoxDetails, ButtonWrapper, Description } from './styles'

import Modal from '@mui/material/Modal';

const ProductItem = ({ item }) => {
    // console.log(item);

    // states
    const [enter, setEnter] = useState(false)
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
        setEnter(false)
    };
    const handleClose = () => setOpen(false);


    const ProductModal = () => (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <BoxDetails>
                <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={600}
                    // layout='fill'
                    priority={true}
                />
                <Description>
                    <span>
                        A good book is available now!
                        A good book is available now!
                        A good book is available now!
                    </span>
                </Description>

                <ButtonWrapper>
                    <Button onClick={handleClose}>
                        <AiOutlineCloseCircle size={20} />
                        <span>Close</span>
                    </Button>
                    {item.inventory
                        ? <Button type='primary'>
                            <AiOutlineShopping size={20} />
                            <span>Add to Cart</span>
                        </Button>
                        : <Button type='secondary'>
                            <AiOutlineLock size={20} />
                            <span>Sold Out</span>
                        </Button>
                    }
                </ButtonWrapper>
            </BoxDetails>
        </Modal>
    )

    return (
        <Card
            onMouseEnter={() => setEnter(true)}
            onMouseLeave={() => setEnter(false)}
        >
            <ImageBox>
                {enter &&
                    <EnterBox>
                        <BoxWrapper>
                            <Button onClick={handleOpen}>
                                Product Details
                            </Button>
                            {item.inventory
                                ? <Button type='primary'>
                                    <AiOutlineShopping size={20} />
                                    <span>Add to Cart</span>
                                </Button>
                                : <Button type='secondary'>
                                    <AiOutlineLock size={20} />
                                    <span>Sold Out</span>
                                </Button>
                            }
                        </BoxWrapper>
                    </EnterBox>
                }
                <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={200}
                    // layout='fill'
                    priority={true}
                />
            </ImageBox>

            <ProductModal />

            <TextBox>
                <Title>{item.name}</Title>
                <Title>
                    {item.inventory
                        ? `(qty: ${item.inventory})`
                        : `(Sold Out)`
                    }
                </Title>
                <Title>{item.price}</Title>
            </TextBox>




        </Card>
    )
}

export default ProductItem