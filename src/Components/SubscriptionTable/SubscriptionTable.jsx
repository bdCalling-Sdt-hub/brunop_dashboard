import { Table } from 'antd';
import './subscription.css';
import { useState } from 'react';
import SubscriptionModal from '../SubscriptionModal/SubscriptionModal';


const specificPageHeaderStyle = {
    backgroundColor: '#EAEAEA',
};





// Columns data
const data = [
    {
        key: '1',
        subscriptionPlan: 'Gold',
        membershipFee: '$19.99',
        pointsRange: '0-24,999',
        pointsPerSwap: '20% of product value',
        pointsPerPositiveComment: '5',
        pointsPerNegativeComment: '10',
    },
    {
        key: '2',
        subscriptionPlan: 'Platinum',
        membershipFee: '$19.99',
        pointsRange: '25,000-99,999',
        pointsPerSwap: '20% of product value',
        pointsPerPositiveComment: '25',
        pointsPerNegativeComment: '25',
    },
    {
        key: '3',
        subscriptionPlan: 'Diamond',
        membershipFee: '$19.99',
        pointsRange: '100,000+',
        pointsPerSwap: '20% of product value',
        pointsPerPositiveComment: '50',
        pointsPerNegativeComment: '50',
    },
];

const SubscriptionTable = () => {
    const [openAddModal, setOpenAddModal] = useState(false)

    // Columns items
    const columns = [
        {
            title: 'SL No.',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Subscription Plan',
            dataIndex: 'subscriptionPlan',
            key: 'subscriptionPlan',
        },
        {
            title: 'Membership Fee Per Month',
            dataIndex: 'membershipFee',
            key: 'membershipFee',
        },
        {
            title: 'Points Range',
            dataIndex: 'pointsRange',
            key: 'pointsRange',
        },
        {
            title: 'Point Earn Per Swap',
            dataIndex: 'pointsPerSwap',
            key: 'pointsPerSwap',
        },
        {
            title: 'Point Earn Per Positive Comment',
            dataIndex: 'pointsPerPositiveComment',
            key: 'pointsPerPositiveComment',
        },
        {
            title: 'Point Lose Per Negative Comment',
            dataIndex: 'pointsPerNegativeComment',
            key: 'pointsPerNegativeComment',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <a href="#edit" onClick={() => handleSubscriptionEdit()} className='text-[#3475F1]'>Edit</a>
            ),
        },
    ];



    // Show even number row gray background color




    const rowClassName = (record, index) => {
        return index % 2 === 0 ? 'even-row' : '';
    };

    const handleSubscriptionEdit = () => {
        setOpenAddModal(!openAddModal)
    }
    return (<div className="specific-page-table">
        <Table columns={columns} dataSource={data} pagination={false} components={{
            header: {
                cell: (props) => (
                    <th {...props} style={specificPageHeaderStyle} />
                ),
            },

        }}
            rowClassName={rowClassName}
        />

        <SubscriptionModal openAddModal={openAddModal} setOpenAddModal={setOpenAddModal} />
    </div>)
};

export default SubscriptionTable;
