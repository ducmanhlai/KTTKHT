import React, { useEffect, useState } from "react";
import AHeader from "../AHeader/AHeader";
import toast, { Toaster } from 'react-hot-toast';
import { FaLock, FaUnlock } from "react-icons/fa";
import "./Account.scss";
import axiosApiInstance from "../../../config/interceptor";
import { Button } from "@material-tailwind/react";
export default function Account() {
  const [listUser, setListUser] = useState([]);
  const [user, setUser] = useState({})
  useEffect(() => {
    (async () => {
      const result = (await axiosApiInstance.get(axiosApiInstance.defaults.baseURL + '/api/v1/admin/getalluser')).data.data;
      setListUser([...result.map(item => {
        return {
          email: item.email,
          id: item.id,
          status: item.status,
          phone: item.phone,
          name: item.users[0]?.name_user
        }
      })]);
    })().catch(err => console.log(err))

  }, [])
  return (
    <>
      <AHeader />
      <Toaster
        toastOptions={{
          className: '',
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 2000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      ></Toaster>
      <div id="authentication-modal" tabindex="-1" aria-hidden="true" className="fixed top-0 hidden z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={() => controlModal('hidden')}>
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
              <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Gửi lý do khóa tài khoản</h3>
              <div class="space-y-6">
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lý do</label>
                  <input type="text" name="text" id="reason" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <button class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={BlockUser}>Đồng ý</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="account-main-container pt-20">
        <div className="d-flex justify-content-center title-account text-center">
          Danh sách tài khoản
        </div>
        <div className="table-user-account">
          <table id="customers-account">
            <tbody>
              <tr>
                <th>STT</th>
                <th>Tên tài khoản</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Thao tác</th>
              </tr>
              {
                listUser.length > 0 ? listUser.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>
                        {item.status == 0 ? <button className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          data-ripple-light="true" onClick={() => {
                            handleClickLock(item)
                          }}>Khóa</button> :
                          <button className="middle none center rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true" onClick={() => {
                              handleClickLock(item)
                            }}> Mở khóa</button>}
                      </td>
                    </tr>
                  )
                }) : <div>Đang tải</div>
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
  function handleClickLock(item) {
    setUser(item)
    if (item.status == 0) {
      controlModal('open')
    }
    else {
      (async () => {
        const result = (await axiosApiInstance.post(axiosApiInstance.defaults.baseURL + `/api/v1/admin/unlockuser?id_account=${user.id}`)).data;
        result.errCode==0 ? toast.success('Mở khóa thành công'): toast.error('Lỗi máy chủ')
        setListUser(listUser.map(element => {
          if (element.id == item.id)
            return { ...element, status: !element.status }
          else return { ...element }
        }))
      })().catch(err => { 
        toast.error('Có lỗi xảy ra')
        console.log(err) 
      })
    }
  }
  function controlModal(type) {
    const modal = document.getElementById('authentication-modal');
    if (type.localeCompare('open') == 0) {
      modal.classList.remove("hidden")
      modal.classList.add("open")
    }
    else {
      modal.classList.remove("open")
      modal.classList.add("hidden")
    }
  }
  function BlockUser() {
    (async () => {
      const content = document.getElementById('reason').value
      const body = { content }
      const result = (await axiosApiInstance.post(axiosApiInstance.defaults.baseURL + `/api/v1/admin/blockuser?id_account=${user.id}`, body)).data;
      result.errCode==0 ? toast.success('Khóa người dùng thành công'): toast.error('Lỗi máy chủ')
      setListUser(listUser.map(element => {
        if (element.id == user.id)
          return { ...element, status: !element.status }
        else return { ...element }
      }))
    })().catch(err => {
      toast.error('Có lỗi xảy ra')
      console.log(err)
    }).finally(()=> controlModal('hidden'))
  }
}
