import { Form, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { IoMdAdd } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Facts = () => {
    const [openModal, setOpenModal] = useState(false)
    const data = [
        {
            question: 'What is an affiliate e-commerce website? What is an affiliate e-commerce website?',
            answer: 'convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt ullamcorper elit diam turpis placerat vitae Nunc vehicula, ex faucibus venenatis at, maximus commodo urna. Nam ex quis sit non vehicula, massa urna at '
        },
        {
            question: 'What is an affiliate e-commerce website?',
            answer: 'convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt ullamcorper elit diam turpis placerat vitae Nunc vehicula, ex faucibus venenatis at, maximus commodo urna. Nam ex quis sit non vehicula, massa urna at '
        },
        {
            question: 'What is an affiliate e-commerce website?',
            answer: 'convallis. Praesent felis, placerat Ut ac quis dui volutpat vitae elementum quis adipiscing malesuada tempor non ipsum non, nec vitae amet, Donec tincidunt efficitur. in In ipsum Cras turpis viverra laoreet ullamcorper placerat diam sed leo. faucibus vitae eget vitae vehicula, luctus id Lorem fringilla tempor faucibus ipsum Vestibulum tincidunt ullamcorper elit diam turpis placerat vitae Nunc vehicula, ex faucibus venenatis at, maximus commodo urna. Nam ex quis sit non vehicula, massa urna at '
        }
    ]

    return (
        <div className="bg-white p-5 rounded-md">
            <div className=' flex items-center justify-between'>
                <div className="flex items-center">
                    <Link to={-1} className='py-1 px-2 rounded-md start-center gap-1 '><IoArrowBackSharp /></Link> <p>FAQ</p>
                </div>
                <button onClick={() => setOpenModal(true)} className="bg-black  text-white  px-8 py-2 rounded-md flex items-center gap-2"> <IoMdAdd /> Add FAQ</button>
            </div>


            <div>
                {
                    data?.map(faq => (
                        <div className="mt-8">
                            <div className="flex  items-center gap-5 w-full">
                                <p className="bg-black text-white py-3 rounded-md px-5 min-w-[95%]">{faq?.question}</p>
                                <ImCancelCircle size={25} className="cursor-pointer hover:text-red-600" />
                            </div>
                            <p className="bg-[#BCBABA26] p-4 rounded-md mt-5">{faq?.answer}</p>
                        </div>
                    ))
                }
            </div>
            <Modal open={openModal} onCancel={() => setOpenModal(false)} centered footer={false} >
                <p className='text-xl text-center py-2 font-semibold'>Add FAQ</p>
                <Form className=''
                    layout='vertical'
                // onFinish={onFinish}
                // form={form}
                >
                    <Form.Item name={`question`}
                        label={`Question`}
                        rules={[
                            {
                                message: 'view Order is required',

                            }
                        ]}>
                        <Input />

                    </Form.Item>
                    <Form.Item name={`Answer`}
                        label={`Answer`}
                        rules={[
                            {
                                message: 'view Order is required',

                            }
                        ]}>
                        <TextArea />

                    </Form.Item>
                    <Form.Item className="flex items-center justify-center">
                        <button className="bg-black text-white px-8 py-4 rounded-md  ">Publish</button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Facts;