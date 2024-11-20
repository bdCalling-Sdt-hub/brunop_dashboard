import { Table } from "antd";
import { MdBlockFlipped } from "react-icons/md";

const TransactionHistoryTable = () => {

    const columns = [
        {
            title: 'S. No.',
            dataIndex: 'sno',
            key: 'sno',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* <img src={userImage} alt="user" style={{ width: 30, height: 30, marginRight: 8 }} /> */}
                    {text}
                </div>
            ),
        },
        {
            title: 'Member Since',
            dataIndex: 'memberSince',
            key: 'memberSince',
        },
        {
            title: 'Membership Type',
            dataIndex: 'membershipType',
            key: 'membershipType',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Contact Number',
            dataIndex: 'contactNumber',
            key: 'contactNumber',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: () => (
                <div>
                    {/* Replace the action content with what you need, for example, icons */}
                    <a href="#delete"><MdBlockFlipped /></a>
                </div>
            ),
        },
    ];


    // Columns data
    const data = [
        {
            key: '1',
            sno: '1',
            name: 'dindinrya',
            memberSince: '24/08/22',
            membershipType: 'Gold',
            email: 'bockelboy@att.com',
            contactNumber: '(201) 555-0124',
            location: 'Kent, Utah',
        },
        {
            key: '2',
            sno: '2',
            name: 'Halima',
            memberSince: '20/05/23',
            membershipType: 'Gold',
            email: 'callisver@verizon.com',
            contactNumber: '(219) 555-0140',
            location: 'Great Falls, Maryland',
        },
        {
            key: '3',
            sno: '3',
            name: 'Halima',
            memberSince: '20/05/23',
            membershipType: 'Gold',
            email: 'callisver@verizon.com',
            contactNumber: '(219) 555-0140',
            location: 'Great Falls, Maryland',
        },
        {
            key: '4',
            sno: '4',
            name: 'Halima',
            memberSince: '20/05/23',
            membershipType: 'Gold',
            email: 'callisver@verizon.com',
            contactNumber: '(219) 555-0140',
            location: 'Great Falls, Maryland',
        },
        {
            key: '5',
            sno: '5',
            name: 'Halima',
            memberSince: '20/05/23',
            membershipType: 'Gold',
            email: 'callisver@verizon.com',
            contactNumber: '(219) 555-0140',
            location: 'Great Falls, Maryland',
        },
        {
            key: '6',
            sno: '6',
            name: 'Halima',
            memberSince: '20/05/23',
            membershipType: 'Gold',
            email: 'callisver@verizon.com',
            contactNumber: '(219) 555-0140',
            location: 'Great Falls, Maryland',
        },
        {
            key: '7',
            sno: '7',
            name: 'Halima',
            memberSince: '20/05/23',
            membershipType: 'Gold',
            email: 'callisver@verizon.com',
            contactNumber: '(219) 555-0140',
            location: 'Great Falls, Maryland',
        },
        {
            key: '8',
            sno: '8',
            name: 'Halima',
            memberSince: '20/05/23',
            membershipType: 'Gold',
            email: 'callisver@verizon.com',
            contactNumber: '(219) 555-0140',
            location: 'Great Falls, Maryland',
        },
        {
            key: '9',
            sno: '9',
            name: 'Halima',
            memberSince: '20/05/23',
            membershipType: 'Gold',
            email: 'callisver@verizon.com',
            contactNumber: '(219) 555-0140',
            location: 'Great Falls, Maryland',
        },
        {
            key: '10',
            sno: '10',
            name: 'Halima',
            memberSince: '20/05/23',
            membershipType: 'Gold',
            email: 'callisver@verizon.com',
            contactNumber: '(219) 555-0140',
            location: 'Great Falls, Maryland',
        },
        // Add more data as per your table
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{
                    pageSize: 5,
                    showTotal: (total, range) => `Showing ${range[0]}-${range[1]} out of ${total}`,
                    locale: {
                        items_per_page: '',
                        prev_page: 'Previous',
                        next_page: 'Next',
                    },
                }}
                className="custom-pagination"
            />
        </div>
    )
}

export default TransactionHistoryTable;