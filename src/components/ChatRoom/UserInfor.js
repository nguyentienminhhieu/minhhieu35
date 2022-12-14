import React from 'react'
import {Button, Avatar, Typography} from 'antd'
import styled from 'styled-components';
import { auth, db } from '../../firebase/config';

const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    boder-bottom: 1px solid rgba(82, 38, 83);

    .username {
        color: white;
        margin-left: 5px
    }
`;

function UserInfor() {
    React.useEffect(()=>{
        db.collection('users').onSnapshot((snapshot) => {
            const data = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
        })
    })

  return (
    <div>
    <WrapperStyled>
        <div>
            <Avatar>A</Avatar>
            <Typography.Text className='username'>ABC</Typography.Text>
        </div>
        <div>
            <Button ghost onClick={() => auth.signOut}>Dang xuat</Button>
        </div>
    </WrapperStyled>

    </div>
  )
}

export default UserInfor