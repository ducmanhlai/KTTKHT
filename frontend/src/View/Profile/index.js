import React, { useEffect, useState } from "react";
import axiosApiInstance from "../../config/interceptor";
export default () => {
    const [account, setAccount] = useState({});
    const [analysis, setAnalysis] = useState({})
    const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 9}
    useEffect(() => {
        (async () => {
            // const result = (await axiosApiInstance.get(axiosApiInstance.defaults.baseURL + '/api/v1/user/getinfo')).data.data;
            // setAccount(result)
            const result = await Promise.all([axiosApiInstance.get(axiosApiInstance.defaults.baseURL + '/api/v1/user/getinfo'),
            axiosApiInstance.get(axiosApiInstance.defaults.baseURL + '/api/v1/user/analysis')
            ])
            setAccount(result[0].data.data)
            setAnalysis(result[1].data.data)
        })().catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            {account?.id ?
                <div>
                    <img src={account.users[0].avatar}></img>
                    <div>{account.users[0].name_user}</div>
                    <div>{account.email}</div>
                    <div>{account.phone}</div>
                    <div>Tướng sở hữu {analysis.hero}</div>
                    <div>Trang phục sở hữu {analysis.skin}</div>
                    <div>Số tiền đã đốt vào game {new Intl.NumberFormat('vi-VN', config).format(analysis.amount).toLocaleString('vi', {style : 'currency', currency : 'VND'})}</div>
                </div> :
                (<div>
                </div>)
            }
        </div>
    )
}