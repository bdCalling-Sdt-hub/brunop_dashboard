import { Form, Input, Modal, Select } from "antd"
import { RxCross2 } from "react-icons/rx"
import { TbCopyCheck } from "react-icons/tb"

const SubscriptionModal = ({openAddModal, setOpenAddModal}) => {

    const onFinish =(value)=>{
        console.log(value)
    }
    return (
        <Modal
            open={openAddModal}
            centered
            footer={false}
            onCancel={() => setOpenAddModal(false)}
        >
            <div>
                <p className='text-xl text-center py-2 font-semibold'>Edit</p>
                <Form className=''
                    layout='vertical'
                    onFinish={onFinish}
                >
                    <Form.Item
                        name={`Subscription Plan`}
                        label={`Subscription Plan`}
                        rules={[
                            {
                                message: 'Subscription Plan is required',

                            }
                        ]}
                    >
                        <Input className=' border outline-none' placeholder='Gold' />
                    </Form.Item>
                    <Form.Item
                        name={`Membership Free Per Month`}
                        label={`Membership Free Per Month`}
                        rules={[
                            {
                                message: 'Membership Free Per Month is required',

                            }
                        ]}
                    >
                        <Input className=' border outline-none' placeholder='$19.99' />
                    </Form.Item>
                    <Form.Item
                        name={`Point Range`}
                        label={`Point Range`}
                        rules={[
                            {
                                message: 'Point Range required',

                            }
                        ]}
                    >
                        <Input className=' border outline-none' placeholder='0-24,999' />
                    </Form.Item>
                    <Form.Item
                        name={`Point Earn Per Swap`}
                        label={`Point Earn Per Swap`}
                        rules={[
                            {
                                message: 'Point Earn Per Swap required',

                            }
                        ]}
                    >
                        <Input className=' border outline-none' placeholder='20% of product value' />
                    </Form.Item>
                    <Form.Item
                        name={`Point Lose per positive comment`}
                        label={`Point Lose per positive comment`}
                        rules={[
                            {
                                message: 'Point Lose per positive comment required',

                            }
                        ]}
                    >
                        <Input className=' border outline-none' placeholder='5' />
                    </Form.Item>
                    <Form.Item
                        name={`Point Lose per negative comment`}
                        label={`Point Lose per negative comment`}
                        rules={[
                            {
                                message: 'Point Lose per negative comment required',

                            }
                        ]}
                    >
                        <Input className=' border outline-none' placeholder='10' />
                    </Form.Item>
                   
                 
                       
                    <div className='flex items-center gap-2'>
                        <button className='flex items-center gap-1 py-2 px-4 bg-[#3475F1]  text-white font-semibold rounded-sm'>
                            <TbCopyCheck /> save
                        </button>
                        <button className='py-2 px-4 flex items-center gap-1 bg-red-600 text-white font-semibold rounded-sm'>
                            <RxCross2 /> Cancel
                        </button>
                    </div>

                </Form>
            </div>
        </Modal>
    )
}

export default SubscriptionModal