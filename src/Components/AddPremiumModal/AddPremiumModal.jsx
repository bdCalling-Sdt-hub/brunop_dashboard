import { Form, Input, Modal } from 'antd'
import React from 'react'
import { TbCopyCheck } from 'react-icons/tb'

const AddPremiumModal = ({setOpenAddModal ,openAddModal , modalName}) => {
    const [form] = Form.useForm()
    const onFinish=()=>{
        
    }

  return (
    <Modal
            open={openAddModal}
            centered
            footer={false}
            onCancel={() => setOpenAddModal(false)}
        >
            <div>
                <p className='text-xl  py-2 font-semibold'>{modalName}</p>
                <Form className=''
                form={form}
                    layout='vertical'
                    onFinish={onFinish}
                >
                    <Form.Item
                        name={`name`}
                        label={`User Name`}
                        rules={[
                            {
                                message: 'User Name is required',

                            }
                        ]}
                    >
                        <Input className=' border outline-none' placeholder='' />
                    </Form.Item>
                    <Form.Item
                        name={`email`}
                        label={`Email`}
                        rules={[
                            {
                                message: 'Email is required',

                            }
                        ]}
                    >
                        <Input className=' border outline-none' placeholder='' />
                    </Form.Item>
                    <Form.Item
                        name={`email`}
                        label={`Password`}
                        rules={[
                            {
                                message: 'Email is required',

                            }
                        ]}
                    >
                        <Input.Password className=' border outline-none' placeholder='' />
                    </Form.Item>
                   


                    <div className='flex justify-center items-center gap-2'>
                        <button onClick={()=>{
                        }} className='flex items-center gap-1 py-2 px-4 bg-black rounded-sm text-white font-semibold '>
                            <TbCopyCheck /> save
                        </button>
                       
                    </div>

                </Form>
            </div>
        </Modal>
  )
}

export default AddPremiumModal