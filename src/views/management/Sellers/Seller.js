import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import {
    CButton,
    CTable,
    CTableHead,
    CTableBody,
    CTableRow,
    CTableHeaderCell,
    CTableDataCell
} from '@coreui/react';

const Seller = () => {

    const [sellerData, setSellerData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getSellers = async () => {
            const response = await Axios({
                url: 'http://localhost:1338/api/listsellers'
            });
            const lstSellers = Object.keys(response.data).map(i => response.data[i]);
            setSellersData(lstSellers.flat());
        }

        getSellers();
    }, []);

    const handleCreateSeller = () => {
        navigate('sellers/seller');
    };

    function handleEdit() {
        navigate('');
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'personName',
        },
        {
            title: 'Last Name',
            dataIndex: 'personLastName',
        },
        {
            title: 'Age',
            dataIndex: 'personAge',
        },
        {
            title: 'Email',
            dataIndex: 'personEmail',
        },
        {
            title: 'Address',
            dataIndex: 'personAddress',
        },
        {
            title: 'City',
            dataIndex: 'cityId',
        },
        {
            title: 'Wallet',
            dataIndex: 'wallet',
        },
        {
            title: 'Options',
        },
    ];

    return (
        <div>
            <CButton onClick={handleCreateSeller} > New Seller </CButton>
            <CTable>
                <CTableHead>
                    <CTableRow>
                        {columns.map((column, index) => (
                            <CTableHeaderCell key={index}>{column.title}</CTableHeaderCell>
                        ))}
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {sellerData.map((seller, index) => (
                        <CTableRow key={index}>
                            {columns.map((column, columnIndex) => (
                                <CTableDataCell key={columnIndex}> {seller[column.dataIndex]} </CTableDataCell>
                            ))}
                        </CTableRow>
                    ))}
                </CTableBody>
            </CTable>
        </div>
    )
}

export default Seller