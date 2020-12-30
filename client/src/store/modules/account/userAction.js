import Axios from 'axios';

// GraphQL
import gql from 'graphql-tag'; // apollo-boost 쓰면 bind 오류나므로 graphql-tag를 사용 필수
import { useQuery } from '@apollo/react-hooks';

import {
    LOGIN_USER, REGISTER_USER, AUTH_USER
} from './userType';


// GraphQL
// 수정 필요
const LOGIN_QUERY = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      
    }
  }
`


// Action
// 작성 완료
export function loginUser(data) {
    const { loading, error, data } = useQuery(LOGIN_QUERY, {
        variables: { 
            email: data.email,
            password: data.password
        },
    });
    // request를 reducer로 넘기는 작업
    return {
        type: LOGIN_USER,
        payload: { loading, error, data }
    }
}

// 수정 필요
export function registerUser(dataToSubmit) {
    
    const request = Axios.post('/api/users/register', dataToSubmit)
        .then(response => response.data);

    // request를 reducer로 넘기는 작업
    return {
        type: REGISTER_USER,
        payload: request
    };
}

// [AUTH]
// 수정 필요
export function auth() {
    
    const request = Axios.get('/api/users/auth')
        .then(response => response.data);

    // request를 reducer로 넘기는 작업
    return {
        type: AUTH_USER,
        payload: request
    };
}