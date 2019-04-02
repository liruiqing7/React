import axios from 'axios';	
import * as constants from './constants';

const changeLogin = () => ({
	type:constants.CHANGE_LOGIN,
	value:true
	})
export  const logout =  () => ({
	type:constants.CHANGE_LOGOUT,
	value:false
})
export const login= (account , password) => {
	return (dispatch) => {
		axios.get('/api/login.json?account=' + account +'&password=' +password).then((res) => {
			const result = res.data.data
			console.log(res);
			if (result) {
				dispatch(changeLogin())
			}else {
				alert('登录失败')
			}
		})
	}
}